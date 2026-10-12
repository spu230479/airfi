/*
 * HMRC Adaptive Identity Protection — static prototype
 *
 * Client-side port of the original Express server (server.js). Every route,
 * redirect and piece of demo state from the server lives here, so the site
 * runs from plain static files (or straight from disk) with no Node/npm.
 *
 * - Pages are the original Nunjucks views, precompiled into assets/js/templates.js
 *   and rendered in the browser with the Nunjucks runtime.
 * - URLs use the hash, e.g. index.html#/dashboard, so links, back/forward and
 *   refresh all work on any static host.
 * - Demo state is kept in sessionStorage so a refresh doesn't lose your place.
 *   Going to the start page (#/) resets it, as before.
 */
(function () {
  'use strict'

  var ASSET_PATH = 'assets/govuk'
  var STORAGE_KEY = 'hmrc-prototype-state'

  // ---------------------------------------------------------------------------
  // Nunjucks environment
  // ---------------------------------------------------------------------------

  // Template references are already absolute (resolved when templates.js was built)
  var loader = new nunjucks.PrecompiledLoader(window.nunjucksPrecompiled)
  var env = new nunjucks.Environment(loader, { autoescape: true })
  env.addGlobal('assetPath', ASSET_PATH)
  env.addGlobal('assetVersion', '1')

  // ---------------------------------------------------------------------------
  // Demo data and state (from server.js)
  // ---------------------------------------------------------------------------

  var initialTrustedDevices = [
    { id: 'this-device', name: 'Chrome on Windows', type: 'desktop', location: 'London, United Kingdom', lastActive: 'Active now', firstSignedIn: '3 January 2026', isCurrent: true },
    { id: 'iphone-14', name: 'Safari on iPhone', type: 'mobile', location: 'Manchester, United Kingdom', lastActive: 'Last active 2 days ago', firstSignedIn: '12 November 2025', isCurrent: false },
    { id: 'android-tablet', name: 'Chrome on Android', type: 'mobile', location: 'Bristol, United Kingdom', lastActive: 'Last active 3 weeks ago', firstSignedIn: '28 July 2025', isCurrent: false }
  ]

  var initialPaymentMethods = [
    { id: 'mastercard-1', kind: 'card', brand: 'mastercard', name: 'Mastercard', last4: '0000', addedOn: '3 January 2026', isDefault: true },
    { id: 'visa-1', kind: 'card', brand: 'visa', name: 'Visa', last4: '0000', addedOn: '3 January 2026', isDefault: false },
    { id: 'hsbc-1', kind: 'bank', brand: 'hsbc', name: 'HSBC', sortCodeDisplay: 'XX-XX-36', addedOn: '3 January 2026', isDefault: false }
  ]

  var ORIGINAL_EXPENSES = 2400
  var ORIGINAL_OVERPAID = 1500
  var EXPENSE_RELIEF_RATE = 0.29 // approximate combined basic-rate Income Tax + Class 4 NIC relief

  function clone (x) { return JSON.parse(JSON.stringify(x)) }

  function freshState () {
    return {
      trustedDevices: clone(initialTrustedDevices),
      paymentMethods: clone(initialPaymentMethods),
      paymentMethodCounter: 1,
      currentPersona: null,
      deviceProtectionPromptSeen: false,
      hasTrustedDevice: false,
      accountSuspended: false,
      repaymentAmount: null,
      repaymentBankDetails: null,
      repaymentUsingExistingMethod: true,
      amendExpenses: ORIGINAL_EXPENSES
    }
  }

  var state = loadState()

  function loadState () {
    try {
      var saved = window.sessionStorage.getItem(STORAGE_KEY)
      if (saved) return Object.assign(freshState(), JSON.parse(saved))
    } catch (e) { /* storage unavailable — fall back to in-memory */ }
    return freshState()
  }

  function saveState () {
    try { window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)) } catch (e) { /* ignore */ }
  }

  // Equivalent of GET / and POST /start resetting the demo
  function resetJourney (persona) {
    state.currentPersona = persona
    state.deviceProtectionPromptSeen = false
    state.hasTrustedDevice = false
    state.accountSuspended = false
    state.repaymentAmount = null
    state.repaymentBankDetails = null
    state.repaymentUsingExistingMethod = true
    state.amendExpenses = ORIGINAL_EXPENSES
  }

  function extraReliefFromExpenses () {
    return Math.max(0, Math.round((state.amendExpenses - ORIGINAL_EXPENSES) * EXPENSE_RELIEF_RATE))
  }
  function totalOverpaid () { return ORIGINAL_OVERPAID + extraReliefFromExpenses() }
  function reservedForTaxBill () { return Math.round(totalOverpaid() * (1102.50 / ORIGINAL_OVERPAID) * 100) / 100 }
  function safeToClaim () { return Math.round((totalOverpaid() - reservedForTaxBill()) * 100) / 100 }
  function formatCurrency (amount) {
    return '£' + amount.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  function last4Of (value) { return String(value).replace(/\D/g, '').slice(-4) }
  function detectCardBrand (cardNumber) {
    var digits = String(cardNumber).replace(/\D/g, '')
    if (digits.indexOf('4') === 0) return 'visa'
    if (digits.indexOf('5') === 0) return 'mastercard'
    return 'card'
  }
  function maskSortCode (sortCode) { return 'XX-XX-' + String(sortCode).replace(/\D/g, '').slice(-2) }
  function todayDisplay () {
    return new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  }
  function findById (list, id) { return list.filter(function (x) { return x.id === id })[0] }

  var suspensionExemptPaths = [
    '/',
    '/start',
    '/account-security/account-suspended',
    '/account-security/identity-check/requirements',
    '/account-security/identity-check/redirect',
    '/account-security/identity-check/in-progress',
    '/account-security/identity-check/verified',
    '/account-security/identity-check/restored'
  ]

  // Template variables available on every page (res.locals in server.js)
  function locals () {
    var name = state.currentPersona === 'attacker' ? 'Sophie Sharma' : 'Adam Cook'
    var parts = name.split(' ')
    return {
      currentPersona: state.currentPersona,
      accountName: name,
      accountFirstName: parts[0],
      accountLastName: parts[1],
      repaymentAmount: state.repaymentAmount,
      repaymentBankDetails: state.repaymentBankDetails,
      repaymentUsingExistingMethod: state.repaymentUsingExistingMethod,
      defaultPaymentMethod: state.paymentMethods.filter(function (m) { return m.isDefault })[0] || null,
      amendExpenses: state.amendExpenses,
      extraReliefFromExpenses: extraReliefFromExpenses(),
      totalOverpaidFormatted: formatCurrency(totalOverpaid()),
      reservedForTaxBillFormatted: formatCurrency(reservedForTaxBill()),
      safeToClaimFormatted: formatCurrency(safeToClaim())
    }
  }

  // ---------------------------------------------------------------------------
  // Router
  // ---------------------------------------------------------------------------

  var routes = []

  function route (method, pattern, handler) {
    var keys = []
    var re = new RegExp('^' + pattern.replace(/\//g, '\\/').replace(/:(\w+)/g, function (_, k) {
      keys.push(k); return '([^\\/]+)'
    }) + '\\/?$')
    routes.push({ method: method, re: re, keys: keys, handler: handler })
  }
  function get (p, h) { route('GET', p, h) }
  function post (p, h) { route('POST', p, h) }

  // Static pages: GET path -> template
  function page (path, template) { get(path, function (req, res) { res.render(template) }) }

  // Simple "POST then redirect" steps
  function step (path, next) { post(path, function (req, res) { res.redirect(next) }) }

  // Phone mock-up screens rendered with partials/mobile-step.njk
  function mobileStep (path, ctx) { get(path, function (req, res) { res.render('partials/mobile-step.njk', ctx) }) }

  // --- Start and sign-in -----------------------------------------------------

  get('/', function (req, res) {
    resetJourney(null)
    res.render('start.njk')
  })

  post('/start', function (req, res) {
    resetJourney(req.body.persona === 'attacker' ? 'attacker' : 'genuine')
    res.redirect('/login/email')
  })

  page('/login/email', 'login/email.njk')
  step('/login/email', '/login/access-code')
  page('/login/access-code', 'login/access-code.njk')
  step('/login/access-code', '/dashboard')

  get('/dashboard', function (req, res) {
    var showProtectModal = state.currentPersona === 'genuine' && !state.deviceProtectionPromptSeen && !state.hasTrustedDevice
    if (showProtectModal) state.deviceProtectionPromptSeen = true
    res.render('dashboard.njk', { showProtectModal: showProtectModal })
  })

  // --- Trusted device set-up -------------------------------------------------

  page('/account-security/trusted-device', 'account-security/intro.njk')
  page('/account-security/trusted-device/link', 'account-security/link.njk')

  mobileStep('/account-security/trusted-device/mobile/settings', {
    pageTitle: 'On the trusted device',
    description: 'User signs into the HMRC app, navigates to settings and taps "Trusted devices".',
    backHref: '/account-security/trusted-device/link',
    imageSrc: '/assets/images/hmrc-settings.png',
    imageAlt: 'HMRC app settings screen, with Trusted devices highlighted',
    showLogoBadge: true,
    tapIndicator: { top: '33%', left: '89%' },
    nextHref: '/account-security/trusted-device/mobile/set-trusted-device'
  })

  mobileStep('/account-security/trusted-device/mobile/set-trusted-device', {
    pageTitle: 'On the trusted device',
    description: 'User taps "Set this device as trusted".',
    backHref: '/account-security/trusted-device/mobile/settings',
    imageSrc: '/assets/images/hmrc-set-trusted-device.png',
    imageAlt: 'HMRC app Set a trusted device screen, with the Set this device as trusted button highlighted',
    tapIndicator: { top: '94.5%', left: '50%' },
    nextHref: '/account-security/trusted-device/mobile/face-id'
  })

  mobileStep('/account-security/trusted-device/mobile/face-id', {
    pageTitle: 'On the trusted device',
    description: "User confirms it's them using their device authentication – Face ID, fingerprint or a passcode.",
    backHref: '/account-security/trusted-device/mobile/set-trusted-device',
    imageSrc: '/assets/images/apple-face-id.png',
    imageAlt: 'Face ID confirmation prompt',
    nextHref: '/account-security/trusted-device/mobile/scan'
  })

  mobileStep('/account-security/trusted-device/mobile/scan', {
    pageTitle: 'On the trusted device',
    description: 'User points their camera at the QR code shown on the web page.',
    backHref: '/account-security/trusted-device/mobile/face-id',
    imageSrc: '/assets/images/hmrc-app-scan-qr.png',
    imageAlt: 'HMRC app scanning the QR code shown on the web page',
    overlayImageSrc: '/assets/images/scanner.png',
    overlayAnimation: 'sweep',
    nextHref: '/account-security/trusted-device/mobile/success'
  })

  mobileStep('/account-security/trusted-device/mobile/success', {
    pageTitle: 'On the trusted device',
    description: 'The app confirms the device has been set as trusted.',
    backHref: '/account-security/trusted-device/mobile/scan',
    imageSrc: '/assets/images/hmrc-app-trusted-device-success.png',
    imageAlt: 'HMRC app confirming the device has been set as trusted',
    nextHref: '/account-security/trusted-device/mobile/success',
    nextMethod: 'post',
    nextLabel: 'Continue'
  })

  post('/account-security/trusted-device/mobile/success', function (req, res) {
    state.hasTrustedDevice = true
    res.redirect('/account-security/trusted-device/confirmation')
  })

  page('/account-security/trusted-device/confirmation', 'account-security/confirmation.njk')

  // --- Identity check / suspension -------------------------------------------

  page('/account-security/identity-check/requirements', 'account-security/identity-check-requirements.njk')
  page('/account-security/identity-check/redirect', 'account-security/identity-check-redirect.njk')
  step('/account-security/identity-check/redirect', '/account-security/identity-check/in-progress')
  page('/account-security/identity-check/in-progress', 'account-security/identity-check-in-progress.njk')

  post('/account-security/identity-check/in-progress', function (req, res) {
    if (req.body.outcome === 'success') return res.redirect('/account-security/identity-check/verified')
    state.accountSuspended = true
    state.currentPersona = null
    res.redirect('/account-security/account-suspended')
  })

  page('/account-security/identity-check/verified', 'account-security/identity-check-verified.njk')

  post('/account-security/identity-check/verified', function (req, res) {
    state.accountSuspended = false
    state.currentPersona = 'attacker'
    res.redirect('/account-security/identity-check/restored')
  })

  page('/account-security/identity-check/restored', 'account-security/identity-check-restored.njk')
  page('/account-security/account-suspended', 'account-security/account-suspended.njk')

  // --- Self Assessment: amend a return ---------------------------------------

  page('/self-assessment', 'self-assessment.njk')
  page('/self-assessment/tax-return-options', 'self-assessment/tax-return-options.njk')
  page('/self-assessment/amend/fill-in', 'self-assessment/amend/fill-in.njk')
  step('/self-assessment/amend/fill-in', '/self-assessment/amend/check')
  page('/self-assessment/amend/expenses', 'self-assessment/amend/expenses.njk')

  post('/self-assessment/amend/expenses', function (req, res) {
    var value = parseFloat(String(req.body.expenses || '').replace(/[^0-9.]/g, ''))
    state.amendExpenses = isNaN(value) ? ORIGINAL_EXPENSES : value
    res.redirect('/self-assessment/amend/fill-in')
  })

  page('/self-assessment/amend/check', 'self-assessment/amend/check.njk')
  step('/self-assessment/amend/check', '/self-assessment/amend/calculation')
  page('/self-assessment/amend/calculation', 'self-assessment/amend/calculation.njk')
  step('/self-assessment/amend/calculation', '/self-assessment/amend/submit')
  page('/self-assessment/amend/submit', 'self-assessment/amend/submit.njk')
  step('/self-assessment/amend/submit', '/self-assessment/amend/complete')
  page('/self-assessment/amend/complete', 'self-assessment/amend/complete.njk')

  // --- Self Assessment: file a return ----------------------------------------

  page('/self-assessment/return/welcome', 'self-assessment/return/welcome.njk')
  page('/self-assessment/return/about-you', 'self-assessment/return/about-you.njk')
  step('/self-assessment/return/about-you', '/self-assessment/return/tailor-1')
  page('/self-assessment/return/tailor-1', 'self-assessment/return/tailor-1.njk')
  step('/self-assessment/return/tailor-1', '/self-assessment/return/tailor-2')
  page('/self-assessment/return/tailor-2', 'self-assessment/return/tailor-2.njk')
  step('/self-assessment/return/tailor-2', '/self-assessment/return/tailor-3')
  page('/self-assessment/return/tailor-3', 'self-assessment/return/tailor-3.njk')
  step('/self-assessment/return/tailor-3', '/self-assessment/return/fill-in')
  page('/self-assessment/return/fill-in', 'self-assessment/return/fill-in.njk')
  step('/self-assessment/return/fill-in', '/self-assessment/return/check')
  page('/self-assessment/return/check', 'self-assessment/return/check.njk')
  step('/self-assessment/return/check', '/self-assessment/return/calculation')
  page('/self-assessment/return/calculation', 'self-assessment/return/calculation.njk')
  step('/self-assessment/return/calculation', '/self-assessment/return/save')
  page('/self-assessment/return/save', 'self-assessment/return/save.njk')
  step('/self-assessment/return/save', '/self-assessment/return/submit')
  page('/self-assessment/return/submit', 'self-assessment/return/submit.njk')
  step('/self-assessment/return/submit', '/self-assessment/return/complete')
  page('/self-assessment/return/complete', 'self-assessment/return-complete.njk')

  // --- Self Assessment: repayment --------------------------------------------

  page('/self-assessment/repayment', 'self-assessment/repayment-start.njk')
  page('/self-assessment/repayment/amount', 'self-assessment/repayment/amount.njk')

  post('/self-assessment/repayment/amount', function (req, res) {
    if (req.body['refund-amount'] === 'different') return res.redirect('/self-assessment/repayment/amount/custom')
    state.repaymentAmount = req.body['refund-amount'] === 'full' ? formatCurrency(totalOverpaid()) : formatCurrency(safeToClaim())
    res.redirect('/self-assessment/repayment/how-you-will-get-the-refund')
  })

  page('/self-assessment/repayment/amount/custom', 'self-assessment/repayment/amount-custom.njk')

  post('/self-assessment/repayment/amount/custom', function (req, res) {
    var value = parseFloat(String(req.body['custom-amount'] || '').replace(/[^0-9.]/g, ''))
    state.repaymentAmount = '£' + (isNaN(value) ? '0.00' : value.toFixed(2))
    res.redirect('/self-assessment/repayment/how-you-will-get-the-refund')
  })

  page('/self-assessment/repayment/how-you-will-get-the-refund', 'self-assessment/repayment/how-you-will-get-the-refund.njk')
  step('/self-assessment/repayment/how-you-will-get-the-refund', '/self-assessment/repayment/payment-method')
  page('/self-assessment/repayment/payment-method', 'self-assessment/repayment/payment-method.njk')

  post('/self-assessment/repayment/payment-method', function (req, res) {
    state.repaymentUsingExistingMethod = true
    res.redirect('/self-assessment/repayment/check-details')
  })

  get('/self-assessment/repayment/account-type', function (req, res) {
    if (state.currentPersona === 'attacker') return res.redirect('/account-security/identity-check/requirements')
    res.render('self-assessment/repayment/account-type.njk')
  })
  step('/self-assessment/repayment/account-type', '/self-assessment/repayment/bank-details')
  page('/self-assessment/repayment/bank-details', 'self-assessment/repayment/bank-details.njk')

  post('/self-assessment/repayment/bank-details', function (req, res) {
    state.repaymentUsingExistingMethod = false
    state.repaymentBankDetails = {
      accountType: req.body['account-type'] === 'personal' ? 'Personal' : 'Business',
      name: req.body['name-on-account'] || locals().accountName,
      sortCodeDisplay: maskSortCode(req.body['sort-code']),
      accountNumber: req.body['account-number'] || ''
    }
    res.redirect('/self-assessment/repayment/check-details')
  })

  page('/self-assessment/repayment/check-details', 'self-assessment/check-details.njk')

  post('/self-assessment/repayment/check-details', function (req, res) {
    if (state.currentPersona !== 'genuine') return res.redirect('/self-assessment/repayment/confirmation')
    if (state.hasTrustedDevice) return res.redirect('/self-assessment/repayment/step-up')
    res.redirect('/self-assessment/repayment/step-up-sms')
  })

  get('/self-assessment/repayment/step-up', function (req, res) {
    var device = state.trustedDevices.filter(function (d) { return d.isCurrent })[0]
    res.render('self-assessment/step-up.njk', { device: device })
  })
  step('/self-assessment/repayment/step-up', '/self-assessment/repayment/step-up/mobile')

  mobileStep('/self-assessment/repayment/step-up/mobile', {
    pageTitle: 'On the trusted device',
    description: "A push notification is triggered via the HMRC app on the user's trusted device. User taps it to open the app.",
    backHref: '/self-assessment/repayment/step-up',
    imageSrc: '/assets/images/iphone-lock-screen.png',
    imageAlt: "Phone lock screen with an HMRC notification asking you to confirm it's you",
    overlayImageSrc: '/assets/images/hmrc-reauth-notification.png',
    overlayAnimation: 'pulse',
    tapIndicator: { top: '88%', left: '89%' },
    nextHref: '/self-assessment/repayment/step-up/confirm-screen',
    extraLinkHref: '/self-assessment/repayment/step-up/code-mockup',
    extraLinkLabel: 'Not received the notification? Enter a code instead.'
  })

  mobileStep('/self-assessment/repayment/step-up/confirm-screen', {
    pageTitle: 'On the trusted device',
    description: "User unlocks their phone and confirms it's them.",
    backHref: '/self-assessment/repayment/step-up/mobile',
    imageSrc: '/assets/images/mobile-is-this-you.png',
    imageAlt: 'HMRC app asking Is this you, with Yes it was me and No it was not me options',
    tapIndicator: { top: '85%', left: '50%' },
    nextHref: '/self-assessment/repayment/step-up/confirm',
    nextMethod: 'post',
    nextLabel: 'Continue'
  })

  step('/self-assessment/repayment/step-up/confirm', '/self-assessment/repayment/step-up/loading')
  page('/self-assessment/repayment/step-up/loading', 'self-assessment/step-up-loading.njk')

  mobileStep('/self-assessment/repayment/step-up/code-mockup', {
    pageTitle: 'On the trusted device',
    description: "A push notification is triggered via the HMRC app on the user's trusted device. User taps it to open the app.",
    backHref: '/self-assessment/repayment/step-up/mobile',
    imageSrc: '/assets/images/iphone-lock-screen.png',
    imageAlt: "Phone lock screen with an HMRC notification asking you to confirm it's you",
    overlayImageSrc: '/assets/images/hmrc-reauth-notification.png',
    overlayAnimation: 'pulse',
    tapIndicator: { top: '88%', left: '89%' },
    nextHref: '/self-assessment/repayment/step-up/code-screen'
  })

  mobileStep('/self-assessment/repayment/step-up/code-screen', {
    pageTitle: 'On the trusted device',
    description: 'Their phone shows a re-authentication code to enter on the web.',
    backHref: '/self-assessment/repayment/step-up/code-mockup',
    imageSrc: '/assets/images/mobile-reauth-code.png',
    imageAlt: 'HMRC app showing a 6-digit re-authentication code',
    nextHref: '/self-assessment/repayment/step-up/code'
  })

  page('/self-assessment/repayment/step-up/code', 'self-assessment/step-up-code.njk')
  step('/self-assessment/repayment/step-up/code', '/self-assessment/repayment/confirmation')
  page('/self-assessment/repayment/step-up-sms', 'self-assessment/step-up-sms.njk')
  step('/self-assessment/repayment/step-up-sms', '/self-assessment/repayment/confirmation')

  get('/self-assessment/repayment/confirmation', function (req, res) {
    var defaultMethod = state.paymentMethods.filter(function (m) { return m.isDefault })[0]
    var endingDigits = state.repaymentUsingExistingMethod
      ? (defaultMethod ? defaultMethod.last4 : '')
      : (state.repaymentBankDetails ? last4Of(state.repaymentBankDetails.accountNumber) : '')
    res.render('self-assessment/confirmation.njk', { dateRequested: todayDisplay(), accountNumberEnding: endingDigits })
  })

  // --- Profile and settings: trusted devices ---------------------------------

  page('/profile-settings', 'profile-settings.njk')

  get('/profile-settings/trusted-devices', function (req, res) {
    res.render('trusted-devices/index.njk', {
      devices: state.trustedDevices,
      signedOutName: req.query.signedOut || null,
      signedOutAll: req.query.signedOutAll === '1'
    })
  })

  // Registered before /:id so "sign-out-all" isn't treated as an id
  post('/profile-settings/trusted-devices/sign-out-all', function (req, res) {
    state.trustedDevices = state.trustedDevices.filter(function (d) { return d.isCurrent })
    res.redirect('/profile-settings/trusted-devices?signedOutAll=1')
  })

  get('/profile-settings/trusted-devices/:id', function (req, res) {
    var device = findById(state.trustedDevices, req.params.id)
    if (!device) return res.redirect('/profile-settings/trusted-devices')
    res.render('trusted-devices/device.njk', { device: device })
  })

  post('/profile-settings/trusted-devices/:id/sign-out', function (req, res) {
    var device = findById(state.trustedDevices, req.params.id)
    if (device && !device.isCurrent) {
      state.trustedDevices = state.trustedDevices.filter(function (d) { return d.id !== req.params.id })
      return res.redirect('/profile-settings/trusted-devices?signedOut=' + encodeURIComponent(device.name))
    }
    res.redirect('/profile-settings/trusted-devices')
  })

  // --- Profile and settings: payment methods ---------------------------------

  get('/profile-settings/payment-methods', function (req, res) {
    res.render('payment-methods/index.njk', {
      methods: state.paymentMethods,
      addedName: req.query.added || null,
      removedName: req.query.removed || null,
      defaultName: req.query.defaultSet || null
    })
  })

  page('/profile-settings/payment-methods/add', 'payment-methods/add.njk')

  post('/profile-settings/payment-methods/add', function (req, res) {
    if (req.body['method-type'] === 'bank-account') return res.redirect('/profile-settings/payment-methods/add/bank-account')
    res.redirect('/profile-settings/payment-methods/add/card')
  })

  page('/profile-settings/payment-methods/add/card', 'payment-methods/add-card.njk')

  post('/profile-settings/payment-methods/add/card', function (req, res) {
    state.paymentMethodCounter += 1
    var brand = detectCardBrand(req.body['card-number'])
    var name = brand === 'mastercard' ? 'Mastercard' : brand === 'visa' ? 'Visa' : 'Debit card'
    state.paymentMethods.push({
      id: 'card-' + state.paymentMethodCounter,
      kind: 'card',
      brand: brand,
      name: name,
      last4: last4Of(req.body['card-number']),
      addedOn: todayDisplay(),
      isDefault: state.paymentMethods.length === 0
    })
    res.redirect('/profile-settings/payment-methods?added=' + encodeURIComponent(name))
  })

  get('/profile-settings/payment-methods/add/bank-account', function (req, res) {
    if (state.currentPersona === 'attacker') return res.redirect('/account-security/identity-check/requirements')
    res.render('payment-methods/add-bank-account.njk')
  })

  post('/profile-settings/payment-methods/add/bank-account', function (req, res) {
    state.paymentMethodCounter += 1
    var name = req.body['bank-name'] || 'Bank account'
    state.paymentMethods.push({
      id: 'bank-' + state.paymentMethodCounter,
      kind: 'bank',
      brand: 'bank',
      name: name,
      sortCodeDisplay: maskSortCode(req.body['sort-code']),
      addedOn: todayDisplay(),
      isDefault: state.paymentMethods.length === 0
    })
    res.redirect('/profile-settings/payment-methods?added=' + encodeURIComponent(name))
  })

  get('/profile-settings/payment-methods/:id', function (req, res) {
    var method = findById(state.paymentMethods, req.params.id)
    if (!method) return res.redirect('/profile-settings/payment-methods')
    res.render('payment-methods/detail.njk', { method: method })
  })

  post('/profile-settings/payment-methods/:id/set-default', function (req, res) {
    var method = findById(state.paymentMethods, req.params.id)
    if (method) {
      state.paymentMethods.forEach(function (m) { m.isDefault = false })
      method.isDefault = true
      return res.redirect('/profile-settings/payment-methods?defaultSet=' + encodeURIComponent(method.name))
    }
    res.redirect('/profile-settings/payment-methods')
  })

  get('/profile-settings/payment-methods/:id/remove', function (req, res) {
    var method = findById(state.paymentMethods, req.params.id)
    if (!method) return res.redirect('/profile-settings/payment-methods')
    res.render('payment-methods/remove.njk', { method: method })
  })

  post('/profile-settings/payment-methods/:id/remove', function (req, res) {
    var method = findById(state.paymentMethods, req.params.id)
    if (method) {
      state.paymentMethods = state.paymentMethods.filter(function (m) { return m.id !== req.params.id })
      if (method.isDefault && state.paymentMethods.length > 0) state.paymentMethods[0].isDefault = true
      return res.redirect('/profile-settings/payment-methods?removed=' + encodeURIComponent(method.name))
    }
    res.redirect('/profile-settings/payment-methods')
  })

  // ---------------------------------------------------------------------------
  // Request handling
  // ---------------------------------------------------------------------------

  function currentUrl () {
    var h = window.location.hash
    return h.indexOf('#/') === 0 ? h.slice(1) : '/'
  }

  function go (url) {
    if (currentUrl() === url) handle('GET', url, {})
    else window.location.hash = '#' + url // hashchange -> handle()
  }

  function handle (method, url, body) {
    var q = url.indexOf('?')
    var path = q === -1 ? url : url.slice(0, q)
    var query = {}
    new URLSearchParams(q === -1 ? '' : url.slice(q + 1)).forEach(function (v, k) { query[k] = v })

    var done = false
    var res = {
      render: function (template, ctx) { done = true; saveState(); render(template, Object.assign(locals(), ctx || {})) },
      redirect: function (to) { done = true; saveState(); go(to) }
    }

    // Suspension middleware
    if (state.accountSuspended && suspensionExemptPaths.indexOf(path) === -1) {
      return res.redirect('/account-security/account-suspended')
    }

    for (var i = 0; i < routes.length; i++) {
      var r = routes[i]
      var m = r.method === method && path.match(r.re)
      if (!m) continue
      var params = {}
      r.keys.forEach(function (k, j) { params[k] = decodeURIComponent(m[j + 1]) })
      r.handler({ path: path, query: query, body: body || {}, params: params }, res)
      if (!done) saveState()
      return
    }

    if (method === 'GET') renderNotFound(path)
    else go(path) // unknown POST — show the page again
  }

  // ---------------------------------------------------------------------------
  // Rendering
  // ---------------------------------------------------------------------------

  var pendingTimers = []
  var nativeSetTimeout = window.setTimeout.bind(window)

  // Inline page scripts (auto-advancing step-up screens) use setTimeout; track
  // them so leaving the page early cancels them, as a real page unload would.
  function pageSetTimeout (fn, ms) {
    var id = nativeSetTimeout(fn, ms)
    pendingTimers.push(id)
    return id
  }

  function toRelativeAssets (html) {
    // Server-absolute asset URLs -> relative, so the site works from any folder
    return html.replace(/(["'(])\/assets\//g, '$1assets/')
  }

  function render (template, ctx) {
    var html
    try {
      html = env.render(template, ctx)
    } catch (err) {
      console.error(err)
      html = '<!doctype html><html><body><pre style="padding:20px;white-space:pre-wrap">Template error in ' +
        template + ':\n' + String(err.message).replace(/</g, '&lt;') + '</pre></body></html>'
    }
    swapDocument(toRelativeAssets(html))
  }

  function renderNotFound (path) {
    swapDocument('<!doctype html><html class="govuk-template"><head><title>Page not found</title></head>' +
      '<body class="govuk-template__body"><div class="govuk-width-container"><main class="govuk-main-wrapper">' +
      '<h1 class="govuk-heading-l">Page not found</h1><p class="govuk-body">There is no page at ' +
      path.replace(/</g, '&lt;') + '.</p><p class="govuk-body"><a class="govuk-link" href="#/">Back to the start</a></p>' +
      '</main></div></body></html>')
  }

  function swapDocument (html) {
    pendingTimers.forEach(clearTimeout)
    pendingTimers = []

    var doc = new DOMParser().parseFromString(html, 'text/html')

    document.title = doc.title
    document.documentElement.className = doc.documentElement.className
    document.documentElement.lang = doc.documentElement.lang || 'en'
    document.body.className = doc.body.className

    // Rewrite in-app links to hash URLs so they behave like normal links
    Array.prototype.forEach.call(doc.querySelectorAll('a[href^="/"]'), function (a) {
      a.setAttribute('href', '#' + a.getAttribute('href'))
    })

    // Drop the server's external/module script tags; govuk-frontend is loaded once by index.html
    Array.prototype.forEach.call(doc.body.querySelectorAll('script[src], script[type="module"]'), function (s) { s.remove() })

    document.body.innerHTML = doc.body.innerHTML
    window.scrollTo(0, 0)

    // Run the page's inline scripts
    Array.prototype.forEach.call(document.body.querySelectorAll('script'), function (old) {
      var s = document.createElement('script')
      s.textContent = old.textContent
        .replace(/window\.location\.href\s*=\s*(['"])\//g, 'window.location.href = $1#/')
        .replace(/\bsetTimeout\(/g, 'window.__pageSetTimeout(')
      old.parentNode.replaceChild(s, old)
    })

    if (!/govuk-frontend-supported/.test(document.body.className)) {
      document.body.className += ' js-enabled govuk-frontend-supported'
    }
    if (window.GOVUKFrontend) {
      try { window.GOVUKFrontend.initAll() } catch (e) { console.error(e) }
    }
  }

  window.__pageSetTimeout = pageSetTimeout

  // ---------------------------------------------------------------------------
  // Event wiring
  // ---------------------------------------------------------------------------

  function submitForm (form, submitter) {
    var method = (form.getAttribute('method') || 'get').toUpperCase()
    var action = form.getAttribute('action') || currentUrl().split('?')[0]
    if (action.indexOf('#/') === 0) action = action.slice(1)
    if (action.charAt(0) !== '/') return false // not ours

    var data
    try { data = new FormData(form, submitter || undefined) } catch (e) { data = new FormData(form) }
    if (submitter && submitter.name && !data.has(submitter.name)) data.append(submitter.name, submitter.value)

    if (method === 'GET') {
      var qs = new URLSearchParams(data).toString()
      go(action + (qs ? '?' + qs : ''))
    } else {
      var body = {}
      data.forEach(function (v, k) { body[k] = v })
      handle('POST', action, body)
    }
    return true
  }

  document.addEventListener('submit', function (e) {
    if (submitForm(e.target, e.submitter)) e.preventDefault()
  })

  // form.submit() (used by the auto-advancing step-up pages) skips the submit event
  var nativeSubmit = HTMLFormElement.prototype.submit
  HTMLFormElement.prototype.submit = function () {
    if (!submitForm(this, null)) nativeSubmit.call(this)
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]')
    if (!a || e.defaultPrevented) return
    var href = a.getAttribute('href')
    if (href.charAt(0) !== '#' || href.indexOf('#/') === 0) return

    // Placeholder links (href="#") and in-page anchors (e.g. the skip link)
    // must not change the hash, or the router would treat it as navigation.
    e.preventDefault()
    if (href.length > 1) {
      var target = document.getElementById(href.slice(1))
      if (target) {
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
        target.focus()
        target.scrollIntoView()
      }
    }
  })

  window.addEventListener('hashchange', function () { handle('GET', currentUrl(), {}) })

  if (window.location.hash.indexOf('#/') !== 0) {
    window.history.replaceState(null, '', '#/')
  }
  handle('GET', currentUrl(), {})
})()
