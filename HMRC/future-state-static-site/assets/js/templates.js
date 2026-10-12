(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["account-security/account-suspended.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "account-security/account-suspended.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "account-security/account-suspended.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "account-security/account-suspended.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/warning-text/macro.njk", false, "account-security/account-suspended.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukWarningText")) {
var t_15 = t_12.govukWarningText;
} else {
cb(new Error("cannot import 'govukWarningText'")); return;
}
context.setVariable("govukWarningText", t_15);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "account-security/account-suspended.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukButton")) {
var t_19 = t_16.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_19);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 7;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Your account has been suspended";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 10, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 15;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">Your account has been suspended</h1>\n\n      ";
output += runtime.suppressValue((lineno = 20, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukWarningText"), "govukWarningText", context, [{"text": "We could not verify that it was you, so we've suspended access to your account and signed you out.","iconFallbackText": "Warning"}])), env.opts.autoescape);
output += "\n\n      <p class=\"govuk-body\">\n        You will not be able to sign in again until you have completed an identity check.\n      </p>\n      <p class=\"govuk-body\">\n        No changes have been made to your bank details or payment methods.\n      </p>\n\n      <h2 class=\"govuk-heading-l\">How to restore access to your account</h2>\n\n      <p class=\"govuk-body\">There are 2 ways to verify your identity and restore access to your account.</p>\n\n      <h3 class=\"govuk-heading-m\">Verify your identity online</h3>\n      <p class=\"govuk-body\">You can complete an identity check using the GOV.UK Document Checking Service.</p>\n\n      <p class=\"govuk-body\">You'll need:</p>\n      <ul class=\"govuk-list govuk-list--bullet\">\n        <li>a smartphone with a camera</li>\n        <li>a form of photo ID, such as your passport or driving licence</li>\n      </ul>\n\n      <p class=\"govuk-body\">\n        You'll be asked to use your photo ID and scan your face so we can confirm your identity.\n      </p>\n\n      ";
output += runtime.suppressValue((lineno = 49, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Start identity check","href": "/account-security/identity-check/requirements"}])), env.opts.autoescape);
output += "\n\n      <h3 class=\"govuk-heading-m\">If you cannot verify your identity online</h3>\n      <p class=\"govuk-body\">\n        If you cannot use the online identity check, you may be able to verify your identity another way.\n      </p>\n      <p class=\"govuk-body\">\n        <a class=\"govuk-link\" href=\"#\">See other ways to verify your identity</a>\n      </p>\n\n      <p class=\"govuk-body\">\n        <a class=\"govuk-link\" href=\"#\">Return to GOV.UK</a>\n      </p>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 66;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 67, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["account-security/confirmation.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "account-security/confirmation.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "account-security/confirmation.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "account-security/confirmation.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "account-security/confirmation.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukButton")) {
var t_15 = t_12.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_15);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
output += t_16;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
output += t_18;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Your device is now trusted";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 9, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 15;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl govuk-!-margin-bottom-2\">Your device is now trusted</h1>\n\n      <p class=\"govuk-body\">\n        We'll use this device to quickly and securely confirm it's you if we notice unusual activity on your account.\n      </p>\n\n      ";
output += runtime.suppressValue((lineno = 24, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue to your account","href": "/dashboard"}])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 29;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 30, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["account-security/identity-check-in-progress.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "account-security/identity-check-in-progress.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "account-security/identity-check-in-progress.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "account-security/identity-check-in-progress.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "account-security/identity-check-in-progress.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukButton")) {
var t_15 = t_12.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_15);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
output += t_16;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
output += t_18;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Complete your identity check";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 9, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 14;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">Complete your identity check</h1>\n\n      <p class=\"govuk-body\">You'll complete your identity check using the GOV.UK Document Checking Service.</p>\n      <p class=\"govuk-body\">Follow the instructions to:</p>\n      <ol class=\"govuk-list govuk-list--number\">\n        <li>provide your identity document</li>\n        <li>scan your face</li>\n        <li>submit your details for checking</li>\n      </ol>\n\n      <p class=\"govuk-body\">Your document details will be checked against official government records.</p>\n      <p class=\"govuk-body\">Once the check is complete, you'll be returned to HMRC.</p>\n    </div>\n  </div>\n\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <hr class=\"govuk-section-break govuk-section-break--visible govuk-section-break--l\">\n\n      <p class=\"govuk-body govuk-!-font-weight-bold\">Demo controls</p>\n      <p class=\"govuk-body\">Choose which outcome to show for this identity check.</p>\n\n      <div class=\"govuk-button-group\">\n        <form method=\"post\" action=\"/account-security/identity-check/in-progress\">\n          <input type=\"hidden\" name=\"outcome\" value=\"success\">\n          ";
output += runtime.suppressValue((lineno = 42, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue (successful check)"}])), env.opts.autoescape);
output += "\n        </form>\n        <form method=\"post\" action=\"/account-security/identity-check/in-progress\">\n          <input type=\"hidden\" name=\"outcome\" value=\"failure\">\n          ";
output += runtime.suppressValue((lineno = 46, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue (failed check)","classes": "govuk-button--secondary"}])), env.opts.autoescape);
output += "\n        </form>\n      </div>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 53;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 54, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["account-security/identity-check-redirect.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "account-security/identity-check-redirect.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "account-security/identity-check-redirect.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "account-security/identity-check-redirect.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "account-security/identity-check-redirect.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "account-security/identity-check-redirect.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukButton")) {
var t_19 = t_16.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_19);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 7;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "You're being redirected to the GOV.UK Document Checking Service";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 10, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 15;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/account-security/identity-check/requirements"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">You're being redirected to the GOV.UK Document Checking Service</h1>\n\n      <p class=\"govuk-body\">You'll now complete an identity check using the GOV.UK Document Checking Service.</p>\n      <p class=\"govuk-body\">This service securely checks your identity on behalf of HMRC.</p>\n      <p class=\"govuk-body\">You'll use your photo ID and scan your face to confirm your identity.</p>\n      <p class=\"govuk-body\">Once you've completed the check, you'll return to HMRC to restore access to your account.</p>\n\n      <form method=\"post\" action=\"/account-security/identity-check/redirect\">\n        ";
output += runtime.suppressValue((lineno = 30, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue to identity check"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 36;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 37, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["account-security/identity-check-requirements.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "account-security/identity-check-requirements.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "account-security/identity-check-requirements.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "account-security/identity-check-requirements.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "account-security/identity-check-requirements.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "account-security/identity-check-requirements.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukButton")) {
var t_19 = t_16.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_19);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 7;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "We need to check your identity";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 10, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 15;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/account-security/account-suspended"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">We need to check your identity</h1>\n\n      <p class=\"govuk-body\">\n        To verify your identity using the GOV.UK Document Checking Service, you'll need:\n      </p>\n      <ul class=\"govuk-list govuk-list--bullet\">\n        <li>a smartphone with a working camera</li>\n        <li>a form of photo ID, such as your passport or driving licence</li>\n      </ul>\n\n      <p class=\"govuk-body\">You'll use your phone to:</p>\n      <ul class=\"govuk-list govuk-list--bullet\">\n        <li>scan or take a photo of your identity document</li>\n        <li>scan your face so we can confirm you're the person shown on the document</li>\n      </ul>\n\n      <p class=\"govuk-body\">Your identity document will be checked against official government records.</p>\n\n      ";
output += runtime.suppressValue((lineno = 40, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue","href": "/account-security/identity-check/redirect"}])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 45;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 46, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["account-security/identity-check-restored.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "account-security/identity-check-restored.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "account-security/identity-check-restored.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "account-security/identity-check-restored.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "account-security/identity-check-restored.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukButton")) {
var t_15 = t_12.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_15);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
output += t_16;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
output += t_18;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Your access has been restored";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 9, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 15;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">Your access has been restored</h1>\n\n      <p class=\"govuk-body govuk-!-font-weight-bold\">You can now use your HMRC account again.</p>\n\n      <p class=\"govuk-body\">We've restored access after successfully verifying your identity.</p>\n\n      <h2 class=\"govuk-heading-l\">Check your account security</h2>\n      <p class=\"govuk-body\">We recommend reviewing:</p>\n      <ul class=\"govuk-list govuk-list--bullet\">\n        <li>your contact details</li>\n        <li>your bank details and payment methods</li>\n        <li>devices you have previously trusted</li>\n        <li>recent activity on your account</li>\n      </ul>\n\n      <p class=\"govuk-body\">If you see anything you do not recognise, tell us.</p>\n\n      ";
output += runtime.suppressValue((lineno = 35, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue to your HMRC account","href": "/dashboard"}])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 40;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 41, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["account-security/identity-check-verified.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "account-security/identity-check-verified.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "account-security/identity-check-verified.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "account-security/identity-check-verified.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "account-security/identity-check-verified.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukButton")) {
var t_15 = t_12.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_15);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
output += t_16;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
output += t_18;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Your identity has been verified";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 9, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 14;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">Your identity has been verified</h1>\n\n      <p class=\"govuk-body govuk-!-font-weight-bold\">We've successfully verified your identity.</p>\n\n      <p class=\"govuk-body\">You can now restore access to your HMRC account.</p>\n      <p class=\"govuk-body\">\n        For your security, you may be asked to review your sign-in details and trusted devices before continuing.\n      </p>\n\n      <form method=\"post\" action=\"/account-security/identity-check/verified\">\n        ";
output += runtime.suppressValue((lineno = 27, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Restore access to my account"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 33;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 34, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["account-security/intro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "account-security/intro.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "account-security/intro.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "account-security/intro.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "account-security/intro.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "account-security/intro.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukButton")) {
var t_19 = t_16.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_19);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 7;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Set up a trusted device";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 10, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 16;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 17, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/dashboard"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 20;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">Set up a trusted device</h1>\n      <p class=\"govuk-body\">You'll need the HMRC app on your phone to do this.</p>\n      <p class=\"govuk-body\">\n        Once your device is trusted, we can use it to quickly and securely confirm it's you if we notice\n        unusual activity on your account.\n      </p>\n      ";
output += runtime.suppressValue((lineno = 29, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue","href": "/account-security/trusted-device/link"}])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 34;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 35, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["account-security/link.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "account-security/link.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "account-security/link.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "account-security/link.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "account-security/link.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "account-security/link.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukButton")) {
var t_19 = t_16.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_19);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 7;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Open the HMRC app to scan this code";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 10, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 16;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 17, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/account-security/trusted-device"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 20;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl govuk-!-margin-bottom-2\">Open the HMRC app to scan this code</h1>\n      <p class=\"govuk-body\">Use the \"Device &amp; security codes\" option in the app to scan the code below.</p>\n\n      <div class=\"app-qr-placeholder\" aria-hidden=\"true\">\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/qr-code-illustration.njk", false, "account-security/link.njk", false, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
callback(null,t_30);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
callback(null,t_32);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      </div>\n\n      ";
output += runtime.suppressValue((lineno = 30, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Next","href": "/account-security/trusted-device/mobile/settings"}])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 35;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 36, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["dashboard.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "dashboard.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "dashboard.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "dashboard.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("hmrc/components/service-navigation-language-select/macro.njk", false, "dashboard.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "hmrcServiceNavigationLanguageSelect")) {
var t_15 = t_12.hmrcServiceNavigationLanguageSelect;
} else {
cb(new Error("cannot import 'hmrcServiceNavigationLanguageSelect'")); return;
}
context.setVariable("hmrcServiceNavigationLanguageSelect", t_15);
output += "\n";
env.getTemplate("govuk/components/notification-banner/macro.njk", false, "dashboard.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukNotificationBanner")) {
var t_19 = t_16.govukNotificationBanner;
} else {
cb(new Error("cannot import 'govukNotificationBanner'")); return;
}
context.setVariable("govukNotificationBanner", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "dashboard.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
var t_26;
t_26 = (function() {
var output = "";
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 40, runtime.callWrap(t_15, "hmrcServiceNavigationLanguageSelect", context, [{"language": "en","cy": {"href": "?lang=cy"}}])), env.opts.autoescape);
output += "\n";
;
return output;
})()
;
frame.set("languageSelectHtml", t_26, true);
if(frame.topLevel) {
context.setVariable("languageSelectHtml", t_26);
}
if(frame.topLevel) {
context.addExport("languageSelectHtml", t_26);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
output += t_27;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
output += t_29;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
output += t_31;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Account home";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email","serviceNavigation": {"serviceName": "Personal tax account","serviceUrl": "/dashboard","classes": "hmrc-service-navigation--with-language-select","navigation": [{"text": "Account home","href": "/dashboard","current": true},{"text": "Messages","href": "#"},{"text": "Check progress","href": "#"},{"text": "Profile and settings","href": "/profile-settings"}],"slots": {"end": runtime.contextOrFrameLookup(context, frame, "languageSelectHtml")}}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 38;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
if(runtime.contextOrFrameLookup(context, frame, "showProtectModal")) {
output += "\n    <dialog class=\"app-modal\" id=\"protect-account-modal\">\n      <div class=\"app-protect-modal__hero\">\n        <img class=\"app-protect-modal__illustration\" src=\"/assets/images/trusted-device.png\" alt=\"\">\n      </div>\n      <div class=\"app-modal__body\">\n        <form method=\"get\" action=\"/account-security/trusted-device\">\n          <h2 class=\"govuk-heading-l\" tabindex=\"-1\" id=\"protect-account-modal-heading\">Protect your HMRC account</h2>\n          <p class=\"govuk-body\">\n            Set up your phone as a trusted device so we can securely check it's you if we notice unusual activity.\n          </p>\n          <div class=\"govuk-button-group\">\n            ";
output += runtime.suppressValue((lineno = 51, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Set up now"}])), env.opts.autoescape);
output += "\n            <button type=\"button\" class=\"app-modal__link-button\" data-modal-dismiss>Skip for now</button>\n          </div>\n        </form>\n      </div>\n    </dialog>\n    <script>\n      document.getElementById('protect-account-modal').showModal()\n      document.getElementById('protect-account-modal-heading').focus()\n      document.querySelector('[data-modal-dismiss]').addEventListener('click', () => {\n        document.getElementById('protect-account-modal').close()\n      })\n    </script>\n  ";
;
}
output += "\n\n  ";
if(runtime.contextOrFrameLookup(context, frame, "currentPersona") != "attacker") {
output += "\n    ";
output += runtime.suppressValue((lineno = 67, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukNotificationBanner"), "govukNotificationBanner", context, [{"html": "You need to complete your Self Assessment return for tax year 2024 to 2025. <a class=\"govuk-notification-banner__link\" href=\"/self-assessment\">Go to Self Assessment</a>"}])), env.opts.autoescape);
output += "\n  ";
;
}
output += "\n\n  <span class=\"govuk-caption-l\">Account home</span>\n  <h1 class=\"govuk-heading-xl\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "accountName"), env.opts.autoescape);
output += "</h1>\n\n  <div class=\"app-highlight-link\">\n    <a class=\"govuk-link\" href=\"#\">View and save your National Insurance number</a>\n  </div>\n\n  <div class=\"app-card-grid\">\n    <div class=\"app-card\">\n      <h2 class=\"govuk-heading-m app-card__heading\"><a class=\"govuk-link\" href=\"/self-assessment\">Self Assessment</a></h2>\n      <p class=\"govuk-body\">Complete your Self Assessment return, view your payment history and check what you owe or are owed</p>\n    </div>\n    <div class=\"app-card\">\n      <h2 class=\"govuk-heading-m app-card__heading\"><a class=\"govuk-link\" href=\"#\">Child Benefit</a></h2>\n      <p class=\"govuk-body\">Manage your Child Benefit claim, view your payments and update your family circumstances</p>\n    </div>\n    <div class=\"app-card\">\n      <h2 class=\"govuk-heading-m app-card__heading\"><a class=\"govuk-link\" href=\"#\">VAT</a></h2>\n      <p class=\"govuk-body\">Submit your VAT Returns, view your VAT payment history and check what you owe</p>\n    </div>\n    <div class=\"app-card\">\n      <h2 class=\"govuk-heading-m app-card__heading\"><a class=\"govuk-link\" href=\"#\">Pay As You Earn (PAYE)</a></h2>\n      <p class=\"govuk-body\">Check or update the employment pension or other income used to work out your PAYE income Tax and tax codes</p>\n    </div>\n    <div class=\"app-card\">\n      <h2 class=\"govuk-heading-m app-card__heading\"><a class=\"govuk-link\" href=\"#\">Marriage Allowance</a></h2>\n      <p class=\"govuk-body\">Transfer part of your personal allowance to your partner so they can pay less tax</p>\n    </div>\n    <div class=\"app-card\">\n      <h2 class=\"govuk-heading-m app-card__heading\"><a class=\"govuk-link\" href=\"#\">R&amp;D Tax Credits</a></h2>\n      <p class=\"govuk-body\">Claim Research and Development tax relief and view the status of your existing claims</p>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 107;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 108, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layout.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/template.njk", true, "layout.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("head"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("bodyEnd"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_head(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <link rel=\"stylesheet\" href=\"/assets/main.css?v=";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assetVersion"), env.opts.autoescape);
output += "\">\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_bodyEnd(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <script type=\"module\" src=\"/assets/js/govuk-frontend.min.js\"></script>\n  <script type=\"module\">\n    import { initAll } from '/assets/js/govuk-frontend.min.js'\n    initAll()\n  </script>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_head: b_head,
b_bodyEnd: b_bodyEnd,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["login/access-code.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "login/access-code.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "login/access-code.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "login/access-code.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/radios/macro.njk", false, "login/access-code.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukRadios")) {
var t_15 = t_12.govukRadios;
} else {
cb(new Error("cannot import 'govukRadios'")); return;
}
context.setVariable("govukRadios", t_15);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "login/access-code.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukButton")) {
var t_19 = t_16.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_19);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 7;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "How do you want to get an access code?";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 10, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","phaseBanner": {"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 23, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "access-code-method","name": "access-code-method","fieldset": {"legend": {"text": "How do you want to get an access code?","isPageHeading": true,"classes": "govuk-fieldset__legend--l"}},"items": [{"value": "app","text": "HMRC app","hint": {"text": "Notification to your device"}},{"value": "text-message","text": "Text message","hint": {"text": "To your phone number ending in 0000"}}]}])), env.opts.autoescape);
output += "\n\n        <p class=\"govuk-body\">\n          Cannot use any of these options? <a class=\"govuk-link\" href=\"#\">You can get help</a>\n        </p>\n\n        ";
output += runtime.suppressValue((lineno = 51, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 57;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 58, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["login/email.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "login/email.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "login/email.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "login/email.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "login/email.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/input/macro.njk", false, "login/email.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukInput")) {
var t_19 = t_16.govukInput;
} else {
cb(new Error("cannot import 'govukInput'")); return;
}
context.setVariable("govukInput", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "login/email.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Enter your email address to sign in to your GOV.UK One Login";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","phaseBanner": {"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 20;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-!-text-align-right govuk-!-margin-top-4 govuk-!-margin-bottom-4\">\n    <span class=\"govuk-body\">English</span> | <a class=\"govuk-link\" href=\"?lang=cy\">Cymraeg</a>\n  </div>\n  ";
output += runtime.suppressValue((lineno = 24, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "#"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 27;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 31, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "email-address","name": "email-address","type": "email","spellcheck": false,"autocomplete": "email","label": {"text": "Enter your email address to sign in to your GOV.UK One Login","classes": "govuk-label--l","isPageHeading": true}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 44, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 50;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 51, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Accessibility statement","href": "#"},{"text": "Cookies","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Privacy notice","href": "#"},{"text": "Support (opens in new tab)","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/mobile-step.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/components/button/macro.njk", false, "partials/mobile-step.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukButton")) {
var t_4 = t_1.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_4);
output += "\n<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n    <meta name=\"robots\" content=\"noindex\">\n    <link rel=\"stylesheet\" href=\"/assets/main.css?v=";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assetVersion"), env.opts.autoescape);
output += "\">\n  </head>\n  <body class=\"app-mobile-step\">\n    <div class=\"app-mobile-step__content\">\n      <div>\n        <a class=\"app-mobile-step__back\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "backHref"), env.opts.autoescape);
output += "\">&lsaquo; Back</a>\n        <h1 class=\"app-mobile-step__heading\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "heading") || "On the trusted device", env.opts.autoescape);
output += "</h1>\n      </div>\n\n      <div>\n        <p class=\"app-mobile-step__description\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "description"), env.opts.autoescape);
output += "</p>\n\n        ";
if(runtime.contextOrFrameLookup(context, frame, "nextMethod") == "post") {
output += "\n          <form method=\"post\" action=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nextHref"), env.opts.autoescape);
output += "\">\n            ";
output += runtime.suppressValue((lineno = 22, colno = 26, runtime.callWrap(t_4, "govukButton", context, [{"text": runtime.contextOrFrameLookup(context, frame, "nextLabel") || "Next step"}])), env.opts.autoescape);
output += "\n          </form>\n        ";
;
}
else {
output += "\n          ";
output += runtime.suppressValue((lineno = 25, colno = 24, runtime.callWrap(t_4, "govukButton", context, [{"text": runtime.contextOrFrameLookup(context, frame, "nextLabel") || "Next step","href": runtime.contextOrFrameLookup(context, frame, "nextHref")}])), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n\n        ";
if(runtime.contextOrFrameLookup(context, frame, "extraLinkHref")) {
output += "\n          <p class=\"app-mobile-step__extra-link\">\n            <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "extraLinkHref"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "extraLinkLabel"), env.opts.autoescape);
output += "</a>\n          </p>\n        ";
;
}
output += "\n      </div>\n    </div>\n\n    <div class=\"app-mobile-step__visual\">\n      <div class=\"app-mobile-step__phone-wrapper\">\n        <img class=\"app-phone-mockup\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "imageSrc"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "imageAlt"), env.opts.autoescape);
output += "\">\n\n        ";
if(runtime.contextOrFrameLookup(context, frame, "overlayImageSrc")) {
output += "\n          <img class=\"";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "overlayAnimation") == "pulse"?"app-notification-overlay":"app-scanner-overlay"), env.opts.autoescape);
output += "\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "overlayImageSrc"), env.opts.autoescape);
output += "\" alt=\"\">\n        ";
;
}
output += "\n\n        ";
if(runtime.contextOrFrameLookup(context, frame, "tapIndicator")) {
output += "\n          <span class=\"app-tap-indicator\" style=\"top: ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tapIndicator")),"top"), env.opts.autoescape);
output += "; left: ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tapIndicator")),"left"), env.opts.autoescape);
output += ";\">\n            <span class=\"app-tap-indicator__ring\"></span>\n            <span class=\"app-tap-indicator__ring app-tap-indicator__ring--delay\"></span>\n            <span class=\"app-tap-indicator__dot\"></span>\n          </span>\n        ";
;
}
output += "\n\n        ";
if(runtime.contextOrFrameLookup(context, frame, "showLogoBadge")) {
output += "\n          <img class=\"app-mobile-step__logo-badge\" src=\"/assets/images/hmrc-app-logo.png\" alt=\"\">\n        ";
;
}
output += "\n      </div>\n    </div>\n  </body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/payment-icons.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["brand"], 
[], 
function (l_brand, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("brand", l_brand);
var t_2 = "";if(l_brand == "mastercard") {
t_2 += "<svg class=\"app-payment-option__icon\" width=\"34\" height=\"22\" viewBox=\"0 0 34 22\" aria-hidden=\"true\" focusable=\"false\">\n      <circle cx=\"13\" cy=\"11\" r=\"11\" fill=\"#EB001B\"></circle>\n      <circle cx=\"21\" cy=\"11\" r=\"11\" fill=\"#F79E1B\" fill-opacity=\"0.8\"></circle>\n    </svg>";
;
}
else {
if(l_brand == "visa") {
t_2 += "<span class=\"app-payment-option__icon app-payment-option__icon--visa\" aria-hidden=\"true\">VISA</span>";
;
}
else {
if(l_brand == "hsbc") {
t_2 += "<svg class=\"app-payment-option__icon\" width=\"34\" height=\"22\" viewBox=\"0 0 34 22\" aria-hidden=\"true\" focusable=\"false\">\n      <rect width=\"34\" height=\"22\" fill=\"#DB0011\"></rect>\n      <polygon points=\"0,0 17,11 0,22\" fill=\"#ffffff\"></polygon>\n      <polygon points=\"34,0 17,11 34,22\" fill=\"#ffffff\"></polygon>\n    </svg>";
;
}
else {
if(l_brand == "bank") {
t_2 += "<svg class=\"app-payment-option__icon\" width=\"34\" height=\"22\" viewBox=\"0 0 34 22\" aria-hidden=\"true\" focusable=\"false\">\n      <rect width=\"34\" height=\"22\" fill=\"#505a5f\"></rect>\n      <polygon points=\"17,3 28,9 6,9\" fill=\"#ffffff\"></polygon>\n      <rect x=\"6\" y=\"10\" width=\"3\" height=\"8\" fill=\"#ffffff\"></rect>\n      <rect x=\"15.5\" y=\"10\" width=\"3\" height=\"8\" fill=\"#ffffff\"></rect>\n      <rect x=\"25\" y=\"10\" width=\"3\" height=\"8\" fill=\"#ffffff\"></rect>\n      <rect x=\"5\" y=\"19\" width=\"24\" height=\"2\" fill=\"#ffffff\"></rect>\n    </svg>";
;
}
else {
t_2 += "<svg class=\"app-payment-option__icon\" width=\"34\" height=\"22\" viewBox=\"0 0 34 22\" aria-hidden=\"true\" focusable=\"false\">\n      <rect width=\"34\" height=\"22\" fill=\"#b1b4b6\"></rect>\n    </svg>";
;
}
;
}
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("paymentIcon");
context.setVariable("paymentIcon", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/qr-code-illustration.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg viewBox=\"0 0 216 216\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" role=\"img\" aria-hidden=\"true\">\n  <rect x=\"0\" y=\"0\" width=\"216\" height=\"216\" fill=\"#ffffff\"></rect>\n  <rect x=\"72\" y=\"8\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"8\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"96\" y=\"8\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"112\" y=\"8\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"120\" y=\"8\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"8\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"8\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"16\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"16\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"16\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"96\" y=\"16\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"112\" y=\"16\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"120\" y=\"16\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"24\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"96\" y=\"24\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"112\" y=\"24\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"120\" y=\"24\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"24\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"24\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"32\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"104\" y=\"32\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"120\" y=\"32\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"32\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"32\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"40\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"40\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"104\" y=\"40\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"112\" y=\"40\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"40\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"104\" y=\"48\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"120\" y=\"48\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"48\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"56\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"56\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"56\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"56\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"64\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"112\" y=\"64\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"64\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"32\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"40\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"56\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"64\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"104\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"112\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"120\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"144\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"184\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"192\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"200\" y=\"72\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"24\" y=\"80\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"32\" y=\"80\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"40\" y=\"80\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"48\" y=\"80\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"56\" y=\"80\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"80\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"80\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"80\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"96\" y=\"80\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"80\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"152\" y=\"80\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"192\" y=\"80\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"200\" y=\"80\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"8\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"24\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"32\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"40\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"48\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"56\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"64\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"96\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"104\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"144\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"152\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"160\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"184\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"192\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"200\" y=\"88\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"8\" y=\"96\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"16\" y=\"96\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"24\" y=\"96\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"40\" y=\"96\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"48\" y=\"96\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"96\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"96\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"96\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"96\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"144\" y=\"96\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"176\" y=\"96\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"184\" y=\"96\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"40\" y=\"104\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"48\" y=\"104\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"56\" y=\"104\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"64\" y=\"104\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"104\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"104\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"104\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"112\" y=\"104\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"144\" y=\"104\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"152\" y=\"104\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"160\" y=\"104\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"168\" y=\"104\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"176\" y=\"104\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"8\" y=\"112\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"32\" y=\"112\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"112\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"112\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"96\" y=\"112\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"120\" y=\"112\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"112\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"152\" y=\"112\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"160\" y=\"112\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"168\" y=\"112\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"192\" y=\"112\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"24\" y=\"120\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"40\" y=\"120\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"48\" y=\"120\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"120\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"112\" y=\"120\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"120\" y=\"120\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"120\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"120\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"152\" y=\"120\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"160\" y=\"120\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"168\" y=\"120\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"184\" y=\"120\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"192\" y=\"120\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"16\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"32\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"56\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"64\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"96\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"104\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"160\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"176\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"184\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"200\" y=\"128\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"32\" y=\"136\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"48\" y=\"136\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"56\" y=\"136\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"136\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"136\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"136\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"160\" y=\"136\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"168\" y=\"136\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"176\" y=\"136\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"184\" y=\"136\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"192\" y=\"136\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"200\" y=\"136\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"96\" y=\"144\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"120\" y=\"144\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"144\" y=\"144\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"160\" y=\"144\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"168\" y=\"144\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"192\" y=\"144\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"200\" y=\"144\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"152\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"152\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"152\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"96\" y=\"152\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"112\" y=\"152\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"152\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"152\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"144\" y=\"152\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"160\" y=\"152\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"168\" y=\"152\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"200\" y=\"152\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"160\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"160\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"96\" y=\"160\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"104\" y=\"160\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"112\" y=\"160\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"160\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"144\" y=\"160\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"176\" y=\"160\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"184\" y=\"160\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"200\" y=\"160\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"168\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"104\" y=\"168\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"120\" y=\"168\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"168\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"144\" y=\"168\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"168\" y=\"168\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"176\" y=\"168\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"192\" y=\"168\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"200\" y=\"168\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"96\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"104\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"120\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"144\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"152\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"160\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"168\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"192\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"200\" y=\"176\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"184\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"96\" y=\"184\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"104\" y=\"184\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"120\" y=\"184\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"184\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"152\" y=\"184\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"184\" y=\"184\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"192\" y=\"184\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"200\" y=\"184\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"72\" y=\"192\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"80\" y=\"192\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"96\" y=\"192\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"104\" y=\"192\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"112\" y=\"192\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"144\" y=\"192\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"152\" y=\"192\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"160\" y=\"192\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"168\" y=\"192\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"176\" y=\"192\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"184\" y=\"192\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"192\" y=\"192\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"88\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"104\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"112\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"120\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"128\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"136\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"144\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"152\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"160\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"168\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"176\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"184\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"192\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"200\" y=\"200\" width=\"8\" height=\"8\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"8\" y=\"8\" width=\"56\" height=\"56\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"16\" y=\"16\" width=\"40\" height=\"40\" fill=\"#ffffff\"></rect>\n  <rect x=\"24\" y=\"24\" width=\"24\" height=\"24\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"152\" y=\"8\" width=\"56\" height=\"56\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"160\" y=\"16\" width=\"40\" height=\"40\" fill=\"#ffffff\"></rect>\n  <rect x=\"168\" y=\"24\" width=\"24\" height=\"24\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"8\" y=\"152\" width=\"56\" height=\"56\" fill=\"#0b0c0c\"></rect>\n  <rect x=\"16\" y=\"160\" width=\"40\" height=\"40\" fill=\"#ffffff\"></rect>\n  <rect x=\"24\" y=\"168\" width=\"24\" height=\"24\" fill=\"#0b0c0c\"></rect>\n</svg>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/return-menu.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["currentStep"], 
[], 
function (l_currentStep, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("currentStep", l_currentStep);
var t_2 = "";t_2 += "\n  <h2 class=\"govuk-heading-s\">File a return menu</h2>\n  <ul class=\"govuk-list app-return-menu\">\n    <li class=\"app-return-menu__item";
t_2 += runtime.suppressValue((l_currentStep == 1?" app-return-menu__item--current":""), env.opts.autoescape);
t_2 += "\"><a class=\"govuk-link\" href=\"/self-assessment/return/welcome\">1. Welcome</a></li>\n    <li class=\"app-return-menu__item";
t_2 += runtime.suppressValue((l_currentStep == 2?" app-return-menu__item--current":""), env.opts.autoescape);
t_2 += "\"><a class=\"govuk-link\" href=\"/self-assessment/return/about-you\">2. Tell us about you</a></li>\n    <li class=\"app-return-menu__item";
t_2 += runtime.suppressValue((l_currentStep == 3?" app-return-menu__item--current":""), env.opts.autoescape);
t_2 += "\"><a class=\"govuk-link\" href=\"/self-assessment/return/tailor-1\">3. Tailor your return</a></li>\n    <li class=\"app-return-menu__item";
t_2 += runtime.suppressValue((l_currentStep == 4?" app-return-menu__item--current":""), env.opts.autoescape);
t_2 += "\"><a class=\"govuk-link\" href=\"/self-assessment/return/fill-in\">4. Fill in your return</a></li>\n    <li class=\"app-return-menu__item";
t_2 += runtime.suppressValue((l_currentStep == 5?" app-return-menu__item--current":""), env.opts.autoescape);
t_2 += "\"><a class=\"govuk-link\" href=\"/self-assessment/return/check\">5. Check your return</a></li>\n    <li class=\"app-return-menu__item";
t_2 += runtime.suppressValue((l_currentStep == 6?" app-return-menu__item--current":""), env.opts.autoescape);
t_2 += "\"><a class=\"govuk-link\" href=\"/self-assessment/return/calculation\">6. View your calculation</a></li>\n    <li class=\"app-return-menu__item";
t_2 += runtime.suppressValue((l_currentStep == 7?" app-return-menu__item--current":""), env.opts.autoescape);
t_2 += "\"><a class=\"govuk-link\" href=\"/self-assessment/return/save\">7. Save your return</a></li>\n    <li class=\"app-return-menu__item";
t_2 += runtime.suppressValue((l_currentStep == 8?" app-return-menu__item--current":""), env.opts.autoescape);
t_2 += "\"><a class=\"govuk-link\" href=\"/self-assessment/return/submit\">8. Submit your return</a></li>\n    <li class=\"app-return-menu__item\"><a class=\"govuk-link\" href=\"#\">Provide feedback</a></li>\n    <li class=\"app-return-menu__item\"><a class=\"govuk-link\" href=\"#\">Tax return options</a></li>\n    <li class=\"app-return-menu__item\"><a class=\"govuk-link\" href=\"#\">How to pay</a></li>\n  </ul>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("returnMenu");
context.setVariable("returnMenu", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["payment-methods/add-bank-account.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "payment-methods/add-bank-account.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "payment-methods/add-bank-account.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "payment-methods/add-bank-account.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "payment-methods/add-bank-account.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/input/macro.njk", false, "payment-methods/add-bank-account.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukInput")) {
var t_19 = t_16.govukInput;
} else {
cb(new Error("cannot import 'govukInput'")); return;
}
context.setVariable("govukInput", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "payment-methods/add-bank-account.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Add a bank account – Personal tax account";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/profile-settings/payment-methods/add"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 21;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n\n      <form method=\"post\" novalidate>\n        <h1 class=\"govuk-heading-xl\">Add a bank account</h1>\n\n        ";
output += runtime.suppressValue((lineno = 28, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "name-on-account","name": "name-on-account","autocomplete": "name","label": {"text": "Name on the account"}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 35, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "bank-name","name": "bank-name","label": {"text": "Bank or building society name"}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 41, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "sort-code","name": "sort-code","classes": "govuk-input--width-5","inputmode": "numeric","label": {"text": "Sort code"},"hint": {"text": "Must be 6 digits long, like 30 80 12"}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 50, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "account-number","name": "account-number","classes": "govuk-input--width-10","inputmode": "numeric","label": {"text": "Account number"},"hint": {"text": "Must be between 6 and 8 digits long"}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 59, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Add bank account"}])), env.opts.autoescape);
output += "\n      </form>\n\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 66;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 67, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["payment-methods/add-card.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "payment-methods/add-card.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "payment-methods/add-card.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "payment-methods/add-card.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "payment-methods/add-card.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/input/macro.njk", false, "payment-methods/add-card.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukInput")) {
var t_19 = t_16.govukInput;
} else {
cb(new Error("cannot import 'govukInput'")); return;
}
context.setVariable("govukInput", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "payment-methods/add-card.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Add a debit card – Personal tax account";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/profile-settings/payment-methods/add"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 21;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n\n      <form method=\"post\" novalidate>\n        <h1 class=\"govuk-heading-xl\">Add a debit card</h1>\n\n        ";
output += runtime.suppressValue((lineno = 28, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "name-on-card","name": "name-on-card","autocomplete": "cc-name","label": {"text": "Name on card"}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 35, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "card-number","name": "card-number","inputmode": "numeric","autocomplete": "cc-number","label": {"text": "Card number"},"hint": {"text": "The long number on the front of your card"}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 44, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "card-expiry","name": "card-expiry","classes": "govuk-input--width-5","autocomplete": "cc-exp","label": {"text": "Expiry date"},"hint": {"text": "For example, 04/28"}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 53, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Add card"}])), env.opts.autoescape);
output += "\n      </form>\n\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 60;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 61, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["payment-methods/add.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "payment-methods/add.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "payment-methods/add.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "payment-methods/add.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "payment-methods/add.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/radios/macro.njk", false, "payment-methods/add.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukRadios")) {
var t_19 = t_16.govukRadios;
} else {
cb(new Error("cannot import 'govukRadios'")); return;
}
context.setVariable("govukRadios", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "payment-methods/add.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Add a payment method – Personal tax account";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/profile-settings/payment-methods"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 21;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 26, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "method-type","name": "method-type","fieldset": {"legend": {"text": "Add a payment method","isPageHeading": true,"classes": "govuk-fieldset__legend--xl"}},"items": [{"value": "card","text": "Debit card","hint": {"text": "Add a new Mastercard or Visa debit card"},"checked": true},{"value": "bank-account","text": "Bank account","hint": {"text": "Add a UK bank account using sort code and account number"}}]}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 51, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 58;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 59, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["payment-methods/detail.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "payment-methods/detail.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "payment-methods/detail.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "payment-methods/detail.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "payment-methods/detail.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/tag/macro.njk", false, "payment-methods/detail.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukTag")) {
var t_19 = t_16.govukTag;
} else {
cb(new Error("cannot import 'govukTag'")); return;
}
context.setVariable("govukTag", t_19);
output += "\n";
env.getTemplate("govuk/components/summary-list/macro.njk", false, "payment-methods/detail.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukSummaryList")) {
var t_23 = t_20.govukSummaryList;
} else {
cb(new Error("cannot import 'govukSummaryList'")); return;
}
context.setVariable("govukSummaryList", t_23);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "payment-methods/detail.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
t_24.getExported(function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
if(Object.prototype.hasOwnProperty.call(t_24, "govukButton")) {
var t_27 = t_24.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_27);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
output += t_34;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
output += t_36;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"name"), env.opts.autoescape);
output += " – Payment methods";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 19, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/profile-settings/payment-methods"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 22;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n\n      <h1 class=\"govuk-heading-xl\">\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"name"), env.opts.autoescape);
output += "\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"isDefault")) {
output += runtime.suppressValue((lineno = 28, colno = 44, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "Default","classes": "govuk-tag--green"}])), env.opts.autoescape);
;
}
output += "\n      </h1>\n\n      ";
output += runtime.suppressValue((lineno = 31, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukSummaryList"), "govukSummaryList", context, [{"rows": [{"key": {"text": "Type"},"value": {"text": (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"kind") == "bank"?"Bank account":"Debit card")}},{"key": {"text": (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"kind") == "bank"?"Sort code":"Card number")},"value": {"text": (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"kind") == "bank"?runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"sortCodeDisplay"):"•••• •••• •••• " + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"last4"))}},{"key": {"text": "Added on"},"value": {"text": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"addedOn")}}]}])), env.opts.autoescape);
output += "\n\n      ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"isDefault")) {
output += "\n        <form method=\"post\" action=\"/profile-settings/payment-methods/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"id"), env.opts.autoescape);
output += "/set-default\" novalidate>\n          ";
output += runtime.suppressValue((lineno = 41, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Set as default","classes": "govuk-button--secondary"}])), env.opts.autoescape);
output += "\n        </form>\n      ";
;
}
output += "\n\n      <p class=\"govuk-body\">\n        <a class=\"govuk-link\" href=\"/profile-settings/payment-methods/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"id"), env.opts.autoescape);
output += "/remove\">Remove this payment method</a>\n      </p>\n\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 53;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 54, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["payment-methods/index.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "payment-methods/index.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "payment-methods/index.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "payment-methods/index.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "payment-methods/index.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/tag/macro.njk", false, "payment-methods/index.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukTag")) {
var t_19 = t_16.govukTag;
} else {
cb(new Error("cannot import 'govukTag'")); return;
}
context.setVariable("govukTag", t_19);
output += "\n";
env.getTemplate("govuk/components/notification-banner/macro.njk", false, "payment-methods/index.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukNotificationBanner")) {
var t_23 = t_20.govukNotificationBanner;
} else {
cb(new Error("cannot import 'govukNotificationBanner'")); return;
}
context.setVariable("govukNotificationBanner", t_23);
output += "\n";
env.getTemplate("partials/payment-icons.njk", false, "payment-methods/index.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
t_24.getExported(function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
if(Object.prototype.hasOwnProperty.call(t_24, "paymentIcon")) {
var t_27 = t_24.paymentIcon;
} else {
cb(new Error("cannot import 'paymentIcon'")); return;
}
context.setVariable("paymentIcon", t_27);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
output += t_34;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
output += t_36;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Payment methods – Personal tax account";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 19, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/profile-settings"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 22;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n\n      ";
if(runtime.contextOrFrameLookup(context, frame, "addedName")) {
output += "\n        ";
output += runtime.suppressValue((lineno = 27, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukNotificationBanner"), "govukNotificationBanner", context, [{"type": "success","html": "<strong>" + runtime.contextOrFrameLookup(context, frame, "addedName") + "</strong> has been added to your account."}])), env.opts.autoescape);
output += "\n      ";
;
}
output += "\n\n      ";
if(runtime.contextOrFrameLookup(context, frame, "removedName")) {
output += "\n        ";
output += runtime.suppressValue((lineno = 34, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukNotificationBanner"), "govukNotificationBanner", context, [{"type": "success","html": "<strong>" + runtime.contextOrFrameLookup(context, frame, "removedName") + "</strong> has been removed from your account."}])), env.opts.autoescape);
output += "\n      ";
;
}
output += "\n\n      ";
if(runtime.contextOrFrameLookup(context, frame, "defaultName")) {
output += "\n        ";
output += runtime.suppressValue((lineno = 41, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukNotificationBanner"), "govukNotificationBanner", context, [{"type": "success","html": "<strong>" + runtime.contextOrFrameLookup(context, frame, "defaultName") + "</strong> is now your default payment method."}])), env.opts.autoescape);
output += "\n      ";
;
}
output += "\n\n      <h1 class=\"govuk-heading-xl\">Payment methods</h1>\n      <p class=\"govuk-body\">These are the debit cards and bank accounts saved to your account. We use your default payment method when you request a repayment or set up a payment plan.</p>\n\n      ";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "methods"))) {
output += "\n        <ul class=\"app-manage-list govuk-list\">\n          ";
frame = frame.push();
var t_40 = runtime.contextOrFrameLookup(context, frame, "methods");
if(t_40) {t_40 = runtime.fromIterator(t_40);
var t_39 = t_40.length;
for(var t_38=0; t_38 < t_40.length; t_38++) {
var t_41 = t_40[t_38];
frame.set("method", t_41);
frame.set("loop.index", t_38 + 1);
frame.set("loop.index0", t_38);
frame.set("loop.revindex", t_39 - t_38);
frame.set("loop.revindex0", t_39 - t_38 - 1);
frame.set("loop.first", t_38 === 0);
frame.set("loop.last", t_38 === t_39 - 1);
frame.set("loop.length", t_39);
output += "\n            <li class=\"app-manage-list__item\">\n              <a class=\"app-manage-list__link\" href=\"/profile-settings/payment-methods/";
output += runtime.suppressValue(runtime.memberLookup((t_41),"id"), env.opts.autoescape);
output += "\">\n                ";
output += runtime.suppressValue((lineno = 55, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "paymentIcon"), "paymentIcon", context, [runtime.memberLookup((t_41),"brand")])), env.opts.autoescape);
output += "\n                <span class=\"app-manage-list__details\">\n                  <span class=\"app-manage-list__name\">\n                    ";
output += runtime.suppressValue(runtime.memberLookup((t_41),"name"), env.opts.autoescape);
output += "\n                    ";
if(runtime.memberLookup((t_41),"isDefault")) {
output += runtime.suppressValue((lineno = 59, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "Default","classes": "govuk-tag--green app-manage-list__tag"}])), env.opts.autoescape);
;
}
output += "\n                  </span>\n                  <span class=\"app-manage-list__meta\">\n                    ";
if(runtime.memberLookup((t_41),"kind") == "bank") {
output += "Sort code ";
output += runtime.suppressValue(runtime.memberLookup((t_41),"sortCodeDisplay"), env.opts.autoescape);
;
}
else {
output += "Ending in ";
output += runtime.suppressValue(runtime.memberLookup((t_41),"last4"), env.opts.autoescape);
;
}
output += "\n                  </span>\n                </span>\n                <span class=\"app-manage-list__chevron\" aria-hidden=\"true\">&rsaquo;</span>\n              </a>\n            </li>\n          ";
;
}
}
frame = frame.pop();
output += "\n        </ul>\n      ";
;
}
else {
output += "\n        <p class=\"govuk-body\">You have not saved any payment methods yet.</p>\n      ";
;
}
output += "\n\n      <p class=\"govuk-body\">\n        <a class=\"govuk-link\" href=\"/profile-settings/payment-methods/add\">+ Add a payment method</a>\n      </p>\n\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 82;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 83, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["payment-methods/remove.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "payment-methods/remove.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "payment-methods/remove.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "payment-methods/remove.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "payment-methods/remove.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/warning-text/macro.njk", false, "payment-methods/remove.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukWarningText")) {
var t_19 = t_16.govukWarningText;
} else {
cb(new Error("cannot import 'govukWarningText'")); return;
}
context.setVariable("govukWarningText", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "payment-methods/remove.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n";
env.getTemplate("partials/payment-icons.njk", false, "payment-methods/remove.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
t_24.getExported(function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
if(Object.prototype.hasOwnProperty.call(t_24, "paymentIcon")) {
var t_27 = t_24.paymentIcon;
} else {
cb(new Error("cannot import 'paymentIcon'")); return;
}
context.setVariable("paymentIcon", t_27);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
output += t_34;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
output += t_36;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Remove ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"name"), env.opts.autoescape);
output += " – Payment methods";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 19, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/profile-settings/payment-methods/" + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"id")}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 22;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n\n      <h1 class=\"govuk-heading-l\">Are you sure you want to remove this payment method?</h1>\n\n      <p class=\"app-payment-option govuk-body\">\n        ";
output += runtime.suppressValue((lineno = 29, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "paymentIcon"), "paymentIcon", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"brand")])), env.opts.autoescape);
output += "\n        <span>\n          <span class=\"app-payment-option__name\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"name"), env.opts.autoescape);
output += "</span>\n          <span class=\"app-payment-option__hint\">";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"kind") == "bank") {
output += "Sort code ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"sortCodeDisplay"), env.opts.autoescape);
;
}
else {
output += "Ending in ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"last4"), env.opts.autoescape);
;
}
output += "</span>\n        </span>\n      </p>\n\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"isDefault")) {
output += "\n        ";
output += runtime.suppressValue((lineno = 37, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukWarningText"), "govukWarningText", context, [{"text": "This is your default payment method. If you remove it, another saved payment method will become your default.","iconFallbackText": "Warning"}])), env.opts.autoescape);
output += "\n      ";
;
}
output += "\n\n      <p class=\"govuk-body\">If you have a repayment or payment plan set up using this payment method, you'll need to choose another one.</p>\n\n      <form method=\"post\" action=\"/profile-settings/payment-methods/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"id"), env.opts.autoescape);
output += "/remove\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 46, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Yes, remove this payment method","classes": "govuk-button--warning"}])), env.opts.autoescape);
output += "\n        <p class=\"govuk-body\">\n          <a class=\"govuk-link\" href=\"/profile-settings/payment-methods/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "method")),"id"), env.opts.autoescape);
output += "\">Cancel</a>\n        </p>\n      </form>\n\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 56;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 57, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["profile-settings.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "profile-settings.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "profile-settings.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "profile-settings.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("hmrc/components/service-navigation-language-select/macro.njk", false, "profile-settings.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "hmrcServiceNavigationLanguageSelect")) {
var t_15 = t_12.hmrcServiceNavigationLanguageSelect;
} else {
cb(new Error("cannot import 'hmrcServiceNavigationLanguageSelect'")); return;
}
context.setVariable("hmrcServiceNavigationLanguageSelect", t_15);
output += "\n";
env.getTemplate("govuk/components/summary-list/macro.njk", false, "profile-settings.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukSummaryList")) {
var t_19 = t_16.govukSummaryList;
} else {
cb(new Error("cannot import 'govukSummaryList'")); return;
}
context.setVariable("govukSummaryList", t_19);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "profile-settings.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukPhaseBanner")) {
var t_23 = t_20.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
var t_26;
t_26 = (function() {
var output = "";
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 40, runtime.callWrap(t_15, "hmrcServiceNavigationLanguageSelect", context, [{"language": "en","cy": {"href": "?lang=cy"}}])), env.opts.autoescape);
output += "\n";
;
return output;
})()
;
frame.set("languageSelectHtml", t_26, true);
if(frame.topLevel) {
context.setVariable("languageSelectHtml", t_26);
}
if(frame.topLevel) {
context.addExport("languageSelectHtml", t_26);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
output += t_27;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
output += t_29;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
output += t_31;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Profile and settings – Personal tax account";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email","serviceNavigation": {"serviceName": "Personal tax account","serviceUrl": "/dashboard","classes": "hmrc-service-navigation--with-language-select","navigation": [{"text": "Account home","href": "/dashboard"},{"text": "Messages","href": "#"},{"text": "Check progress","href": "#"},{"text": "Profile and settings","href": "/profile-settings","current": true}],"slots": {"end": runtime.contextOrFrameLookup(context, frame, "languageSelectHtml")}}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 38;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <h1 class=\"govuk-heading-xl\">Profile and settings</h1>\n\n  <h2 class=\"govuk-heading-l\">Profile</h2>\n\n  ";
output += runtime.suppressValue((lineno = 43, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukSummaryList"), "govukSummaryList", context, [{"rows": [{"key": {"text": "Name"},"value": {"text": runtime.contextOrFrameLookup(context, frame, "accountName")},"actions": {"items": [{"href": "#","text": "Change","visuallyHiddenText": "name"}]}},{"key": {"text": "National Insurance"},"value": {"text": "QQ 12 34 56 C"},"actions": {"items": [{"href": "#","text": "View National Insurance letter"}]}},{"key": {"text": "Main address"},"value": {"html": "12 Example Street<br>Anytown<br>Anyshire<br>AT1 2AB"},"actions": {"items": [{"href": "#","text": "Change","visuallyHiddenText": "main address"}]}},{"key": {"text": "Postal address"},"value": {"html": "34 Middle Road<br>Anytown<br>Anyshire<br>AT1 2AB<br><br>All letters will be sent to this address."},"actions": {"items": [{"href": "#","text": "Change","visuallyHiddenText": "postal address"}]}}]}])), env.opts.autoescape);
output += "\n\n  <h2 class=\"govuk-heading-l\">Settings</h2>\n\n  ";
output += runtime.suppressValue((lineno = 70, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukSummaryList"), "govukSummaryList", context, [{"rows": [{"key": {"text": "Contact preferences"},"value": {"text": "Online, we will email you"},"actions": {"items": [{"href": "#","text": "Change","visuallyHiddenText": "contact preferences"}]}},{"key": {"text": "Sign-in details"},"value": {"text": "Sign in to HMRC online services"},"actions": {"items": [{"href": "#","text": "Change","visuallyHiddenText": "sign-in details"}]}},{"key": {"text": "Trusted Helpers contacts"},"value": {"text": "Ask for help from family or friends and manage contacts."},"actions": {"items": [{"href": "#","text": "Manage","visuallyHiddenText": "trusted helpers contacts"}]}},{"key": {"text": "Payment methods"},"value": {"text": ""},"actions": {"items": [{"href": "/profile-settings/payment-methods","text": "Manage","visuallyHiddenText": "payment methods"}]}},{"key": {"text": "Trusted devices"},"value": {"text": ""},"actions": {"items": [{"href": "/profile-settings/trusted-devices","text": "Manage","visuallyHiddenText": "trusted devices"}]}}]}])), env.opts.autoescape);
output += "\n\n  ";
output += runtime.suppressValue((lineno = 100, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 106;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 107, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Privacy policy","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Help using GOV.UK","href": "#"},{"text": "Contact","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/amend/calculation.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/amend/calculation.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/amend/calculation.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/amend/calculation.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/amend/calculation.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/amend/calculation.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukPhaseBanner")) {
var t_19 = t_16.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_19);
output += "\n";
env.getTemplate("govuk/components/summary-list/macro.njk", false, "self-assessment/amend/calculation.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukSummaryList")) {
var t_23 = t_20.govukSummaryList;
} else {
cb(new Error("cannot import 'govukSummaryList'")); return;
}
context.setVariable("govukSummaryList", t_23);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/amend/calculation.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
t_24.getExported(function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
if(Object.prototype.hasOwnProperty.call(t_24, "govukButton")) {
var t_27 = t_24.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_27);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
output += t_34;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
output += t_36;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "View your recalculated bill – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 19, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/amend/check"}])), env.opts.autoescape);
output += "\n  ";
output += runtime.suppressValue((lineno = 20, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 26;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">View your recalculated bill</h1>\n\n      <p class=\"govuk-body\">\n        Your bill has been updated based on the corrections you made for the tax year 2024 to 2025.\n      </p>\n\n      ";
var t_38;
t_38 = [{"key": {"text": "Total income"},"value": {"text": "£18,200.00"}},{"key": {"text": "Income Tax due"},"value": {"text": "£1,850.00"}},{"key": {"text": "Class 4 National Insurance due"},"value": {"text": "£320.00"}},{"key": {"text": "Total tax and National Insurance due"},"value": {"text": "£2,170.00"}},{"key": {"text": "Payments on account already made"},"value": {"text": "£3,670.00"}}];
frame.set("rows", t_38, true);
if(frame.topLevel) {
context.setVariable("rows", t_38);
}
if(frame.topLevel) {
context.addExport("rows", t_38);
}
output += "\n\n      ";
if(runtime.contextOrFrameLookup(context, frame, "extraReliefFromExpenses") > 0) {
output += "\n        ";
var t_39;
t_39 = (lineno = 44, colno = 33, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "rows")),"concat"), "rows[\"concat\"]", context, [[{"key": {"text": "Additional relief from updated expenses"},"value": {"text": "+£" + runtime.contextOrFrameLookup(context, frame, "extraReliefFromExpenses")}}]]));
frame.set("rows", t_39, true);
if(frame.topLevel) {
context.setVariable("rows", t_39);
}
if(frame.topLevel) {
context.addExport("rows", t_39);
}
output += "\n      ";
;
}
output += "\n\n      ";
var t_40;
t_40 = (lineno = 47, colno = 31, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "rows")),"concat"), "rows[\"concat\"]", context, [[{"key": {"text": "Amount overpaid"},"value": {"text": runtime.contextOrFrameLookup(context, frame, "totalOverpaidFormatted")}}]]));
frame.set("rows", t_40, true);
if(frame.topLevel) {
context.setVariable("rows", t_40);
}
if(frame.topLevel) {
context.addExport("rows", t_40);
}
output += "\n\n      ";
output += runtime.suppressValue((lineno = 49, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukSummaryList"), "govukSummaryList", context, [{"rows": runtime.contextOrFrameLookup(context, frame, "rows")}])), env.opts.autoescape);
output += "\n\n      <p class=\"govuk-body\">\n        Based on your amendment, you have overpaid tax by <strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "totalOverpaidFormatted"), env.opts.autoescape);
output += "</strong> for the\n        tax year 2024 to 2025. This will be available to claim as a repayment once you submit your amendment.\n      </p>\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 57, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 63;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 64, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/amend/check.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/amend/check.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/amend/check.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/amend/check.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/amend/check.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/amend/check.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukPhaseBanner")) {
var t_19 = t_16.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/amend/check.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Check your amendment – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/amend/fill-in"}])), env.opts.autoescape);
output += "\n  ";
output += runtime.suppressValue((lineno = 19, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 25;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">Check your amendment</h1>\n\n      <p class=\"govuk-body\">This section lets you check the corrections you've made before submitting them.</p>\n\n      <p class=\"govuk-body\">In the year starting <strong>6 April 2024</strong> and ending <strong>5 April 2025</strong> you have updated:</p>\n\n      <ul class=\"govuk-list govuk-list--bullet\">\n        <li>your self-employment income and expenses</li>\n        <li>your capital allowances</li>\n        <li>your UK interest and dividends</li>\n        <li>your tax reliefs</li>\n      </ul>\n\n      <p class=\"govuk-body\">\n        If you feel you have missed anything, please update your details in\n        <a class=\"govuk-link\" href=\"/self-assessment/amend/fill-in\">Amend your return</a>.\n      </p>\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 47, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 53;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 54, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/amend/complete.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/amend/complete.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/amend/complete.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/amend/complete.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/panel/macro.njk", false, "self-assessment/amend/complete.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukPanel")) {
var t_15 = t_12.govukPanel;
} else {
cb(new Error("cannot import 'govukPanel'")); return;
}
context.setVariable("govukPanel", t_15);
output += "\n";
env.getTemplate("govuk/components/notification-banner/macro.njk", false, "self-assessment/amend/complete.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukNotificationBanner")) {
var t_19 = t_16.govukNotificationBanner;
} else {
cb(new Error("cannot import 'govukNotificationBanner'")); return;
}
context.setVariable("govukNotificationBanner", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/amend/complete.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Amendment submitted – Self Assessment";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      ";
output += runtime.suppressValue((lineno = 20, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPanel"), "govukPanel", context, [{"titleText": "Amendment submitted","text": "Your amended Self Assessment return for tax year 2024 to 2025 has been submitted"}])), env.opts.autoescape);
output += "\n\n      ";
output += runtime.suppressValue((lineno = 25, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukNotificationBanner"), "govukNotificationBanner", context, [{"titleText": "Important","html": "You are due a Self Assessment repayment of " + runtime.contextOrFrameLookup(context, frame, "totalOverpaidFormatted") + ". To claim your repayment or view your payment activity, please visit Request a repayment. <a class=\"govuk-notification-banner__link\" href=\"/self-assessment/repayment\">Begin repayment request</a>."}])), env.opts.autoescape);
output += "\n\n      <p class=\"govuk-body\">\n        You can request this to be paid into a debit card or bank account already on your account, or add a\n        new one. This should take about 2 minutes.\n      </p>\n\n      <div class=\"govuk-button-group\">\n        ";
output += runtime.suppressValue((lineno = 36, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Claim your repayment","href": "/self-assessment/repayment"}])), env.opts.autoescape);
output += "\n        ";
output += runtime.suppressValue((lineno = 37, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Go to Self Assessment","href": "/self-assessment","classes": "govuk-button--secondary"}])), env.opts.autoescape);
output += "\n      </div>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 43;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 44, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/amend/expenses.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/amend/expenses.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/amend/expenses.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/amend/expenses.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/amend/expenses.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/amend/expenses.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukPhaseBanner")) {
var t_19 = t_16.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_19);
output += "\n";
env.getTemplate("govuk/components/input/macro.njk", false, "self-assessment/amend/expenses.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukInput")) {
var t_23 = t_20.govukInput;
} else {
cb(new Error("cannot import 'govukInput'")); return;
}
context.setVariable("govukInput", t_23);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/amend/expenses.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
t_24.getExported(function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
if(Object.prototype.hasOwnProperty.call(t_24, "govukButton")) {
var t_27 = t_24.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_27);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
output += t_34;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
output += t_36;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Change expenses – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 19, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/amend/fill-in"}])), env.opts.autoescape);
output += "\n  ";
output += runtime.suppressValue((lineno = 20, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 26;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <span class=\"govuk-caption-l\">Self-employment</span>\n      <h1 class=\"govuk-heading-xl\">Change expenses</h1>\n\n      <p class=\"govuk-body\">\n        Enter your total allowable business expenses for the tax year 2024 to 2025. Increasing your expenses\n        reduces your taxable profit, which may increase any repayment you're owed.\n      </p>\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 38, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "expenses","name": "expenses","inputmode": "decimal","classes": "govuk-input--width-10","prefix": {"text": "£"},"label": {"text": "Total business expenses"},"value": runtime.contextOrFrameLookup(context, frame, "amendExpenses")}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 48, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Save and continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 54;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 55, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/amend/fill-in.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/amend/fill-in.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/amend/fill-in.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/amend/fill-in.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/amend/fill-in.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/amend/fill-in.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukPhaseBanner")) {
var t_19 = t_16.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_19);
output += "\n";
env.getTemplate("govuk/components/tag/macro.njk", false, "self-assessment/amend/fill-in.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukTag")) {
var t_23 = t_20.govukTag;
} else {
cb(new Error("cannot import 'govukTag'")); return;
}
context.setVariable("govukTag", t_23);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/amend/fill-in.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
t_24.getExported(function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
if(Object.prototype.hasOwnProperty.call(t_24, "govukButton")) {
var t_27 = t_24.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_27);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
output += t_34;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
output += t_36;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Amend your return – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 19, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/tax-return-options"}])), env.opts.autoescape);
output += "\n  ";
output += runtime.suppressValue((lineno = 20, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 26;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <span class=\"govuk-caption-l\">Individual's tax return: 2024-25</span>\n      <h1 class=\"govuk-heading-xl\">Amend your return</h1>\n\n      <p class=\"govuk-body\">\n        You're amending your Self Assessment return for tax year 2024 to 2025. Make your corrections below,\n        then submit the amendment again.\n      </p>\n\n      <h2 class=\"govuk-heading-m\">Self-employment</h2>\n      <h3 class=\"govuk-heading-s govuk-!-margin-bottom-1\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "accountName"), env.opts.autoescape);
output += "</h3>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change income</a>\n        ";
output += runtime.suppressValue((lineno = 41, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"/self-assessment/amend/expenses\">Change expenses</a>\n        ";
if(runtime.contextOrFrameLookup(context, frame, "extraReliefFromExpenses") > 0) {
output += "\n          ";
output += runtime.suppressValue((lineno = 46, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "UPDATED","classes": "govuk-tag--green"}])), env.opts.autoescape);
output += "\n        ";
;
}
else {
output += "\n          ";
output += runtime.suppressValue((lineno = 48, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change capital allowances</a>\n        ";
output += runtime.suppressValue((lineno = 53, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n\n      <h2 class=\"govuk-heading-m govuk-!-margin-top-6\">Other information</h2>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change UK interest and dividends</a>\n        ";
output += runtime.suppressValue((lineno = 59, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change tax reliefs</a>\n        ";
output += runtime.suppressValue((lineno = 63, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n\n      <form method=\"post\" class=\"govuk-!-margin-top-6\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 67, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 73;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 74, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/amend/submit.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/amend/submit.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/amend/submit.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/amend/submit.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/amend/submit.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/amend/submit.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukPhaseBanner")) {
var t_19 = t_16.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_19);
output += "\n";
env.getTemplate("govuk/components/checkboxes/macro.njk", false, "self-assessment/amend/submit.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukCheckboxes")) {
var t_23 = t_20.govukCheckboxes;
} else {
cb(new Error("cannot import 'govukCheckboxes'")); return;
}
context.setVariable("govukCheckboxes", t_23);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/amend/submit.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
t_24.getExported(function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
if(Object.prototype.hasOwnProperty.call(t_24, "govukButton")) {
var t_27 = t_24.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_27);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
output += t_34;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
output += t_36;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Submit your amendment – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 19, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/amend/calculation"}])), env.opts.autoescape);
output += "\n  ";
output += runtime.suppressValue((lineno = 20, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 26;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <span class=\"govuk-caption-l\">Individual's tax return: 2024-25</span>\n      <h1 class=\"govuk-heading-xl\">Submit your amendment</h1>\n\n      <h2 class=\"govuk-heading-l\">Declaration</h2>\n\n      <p class=\"govuk-body govuk-!-font-weight-bold\">You have not yet submitted this amendment.</p>\n\n      <p class=\"govuk-body\">\n        Before you can submit your amendment to HM Revenue and Customs, you must read and agree the following\n        statement by ticking the checkbox below.\n      </p>\n\n      <p class=\"govuk-body\">If you give false information you may have to pay financial penalties and face prosecution.</p>\n\n      <form method=\"post\" novalidate>\n        <h2 class=\"govuk-heading-m\">Final Declaration</h2>\n\n        ";
output += runtime.suppressValue((lineno = 46, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukCheckboxes"), "govukCheckboxes", context, [{"idPrefix": "final-declaration","name": "final-declaration","items": [{"value": "agree","text": "The information I have given on this amended Tax Return is correct and complete to the best of my knowledge and belief"}]}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 57, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Submit"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 63;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 64, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/check-details.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/check-details.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/check-details.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/check-details.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/check-details.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/summary-list/macro.njk", false, "self-assessment/check-details.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukSummaryList")) {
var t_19 = t_16.govukSummaryList;
} else {
cb(new Error("cannot import 'govukSummaryList'")); return;
}
context.setVariable("govukSummaryList", t_19);
output += "\n";
env.getTemplate("govuk/components/tag/macro.njk", false, "self-assessment/check-details.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukTag")) {
var t_23 = t_20.govukTag;
} else {
cb(new Error("cannot import 'govukTag'")); return;
}
context.setVariable("govukTag", t_23);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/check-details.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
t_24.getExported(function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
if(Object.prototype.hasOwnProperty.call(t_24, "govukButton")) {
var t_27 = t_24.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_27);
output += "\n";
env.getTemplate("partials/payment-icons.njk", false, "self-assessment/check-details.njk", false, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
t_28.getExported(function(t_30,t_28) {
if(t_30) { cb(t_30); return; }
if(Object.prototype.hasOwnProperty.call(t_28, "paymentIcon")) {
var t_31 = t_28.paymentIcon;
} else {
cb(new Error("cannot import 'paymentIcon'")); return;
}
context.setVariable("paymentIcon", t_31);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
output += t_34;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
output += t_36;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_39,t_38) {
if(t_39) { cb(t_39); return; }
output += t_38;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_41,t_40) {
if(t_41) { cb(t_41); return; }
output += t_40;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Check your details – Self Assessment";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 12;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 13, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 20, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": (runtime.contextOrFrameLookup(context, frame, "repaymentUsingExistingMethod")?"/self-assessment/repayment/payment-method":"/self-assessment/repayment/bank-details")}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 23;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n\n      <h1 class=\"govuk-heading-xl\">Check your details</h1>\n\n      ";
output += runtime.suppressValue((lineno = 29, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukSummaryList"), "govukSummaryList", context, [{"rows": [{"key": {"text": "Refund amount"},"value": {"text": runtime.contextOrFrameLookup(context, frame, "repaymentAmount")},"actions": {"items": [{"href": "/self-assessment/repayment/amount","text": "Change","visuallyHiddenText": "refund amount"}]}}]}])), env.opts.autoescape);
output += "\n\n      ";
if(runtime.contextOrFrameLookup(context, frame, "repaymentUsingExistingMethod")) {
output += "\n        <div class=\"app-bank-details-box\">\n          <div class=\"app-bank-details-box__header\">\n            <h2 class=\"govuk-heading-m govuk-!-margin-bottom-0\">Payment method</h2>\n            <a class=\"govuk-link\" href=\"/self-assessment/repayment/payment-method\">Change</a>\n          </div>\n          ";
if(runtime.contextOrFrameLookup(context, frame, "defaultPaymentMethod")) {
output += "\n            <div class=\"app-payment-method-summary\">\n              ";
output += runtime.suppressValue((lineno = 47, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "paymentIcon"), "paymentIcon", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "defaultPaymentMethod")),"brand")])), env.opts.autoescape);
output += "\n              <span class=\"app-manage-list__details\">\n                <span class=\"app-manage-list__name\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "defaultPaymentMethod")),"name"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 51, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "Default","classes": "govuk-tag--green app-manage-list__tag"}])), env.opts.autoescape);
output += "\n                </span>\n                <span class=\"app-manage-list__meta\">\n                  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "defaultPaymentMethod")),"kind") == "bank") {
output += "Sort code ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "defaultPaymentMethod")),"sortCodeDisplay"), env.opts.autoescape);
;
}
else {
output += "Ending in ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "defaultPaymentMethod")),"last4"), env.opts.autoescape);
;
}
output += "\n                </span>\n              </span>\n            </div>\n          ";
;
}
output += "\n        </div>\n      ";
;
}
else {
output += "\n        <div class=\"app-bank-details-box\">\n          <div class=\"app-bank-details-box__header\">\n            <h2 class=\"govuk-heading-m govuk-!-margin-bottom-0\">Bank account details</h2>\n            <a class=\"govuk-link\" href=\"/self-assessment/repayment/bank-details\">Change bank details</a>\n          </div>\n          ";
output += runtime.suppressValue((lineno = 66, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukSummaryList"), "govukSummaryList", context, [{"rows": [{"key": {"text": "Account type"},"value": {"text": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "repaymentBankDetails")),"accountType")}},{"key": {"text": "Name on the account"},"value": {"text": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "repaymentBankDetails")),"name")}},{"key": {"text": "Sort code"},"value": {"text": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "repaymentBankDetails")),"sortCodeDisplay")}},{"key": {"text": "Account number"},"value": {"text": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "repaymentBankDetails")),"accountNumber")}}]}])), env.opts.autoescape);
output += "\n        </div>\n      ";
;
}
output += "\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 78, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Confirm and continue"}])), env.opts.autoescape);
output += "\n      </form>\n\n      <p class=\"govuk-body\">\n        <a class=\"govuk-link\" href=\"#\" target=\"_blank\" rel=\"noreferrer noopener\">Is this page not working properly? (opens in new tab)</a>\n      </p>\n\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 89;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 90, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/confirmation.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/confirmation.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/confirmation.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/confirmation.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/panel/macro.njk", false, "self-assessment/confirmation.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukPanel")) {
var t_15 = t_12.govukPanel;
} else {
cb(new Error("cannot import 'govukPanel'")); return;
}
context.setVariable("govukPanel", t_15);
output += "\n";
env.getTemplate("govuk/components/summary-list/macro.njk", false, "self-assessment/confirmation.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukSummaryList")) {
var t_19 = t_16.govukSummaryList;
} else {
cb(new Error("cannot import 'govukSummaryList'")); return;
}
context.setVariable("govukSummaryList", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/confirmation.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Refund request received – Request a Self Assessment refund";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n\n      ";
output += runtime.suppressValue((lineno = 21, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPanel"), "govukPanel", context, [{"titleText": "Refund request received","html": "Your refund reference<br><strong>1234567890</strong>"}])), env.opts.autoescape);
output += "\n\n      ";
output += runtime.suppressValue((lineno = 26, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukSummaryList"), "govukSummaryList", context, [{"rows": [{"key": {"text": "Refund amount"},"value": {"text": runtime.contextOrFrameLookup(context, frame, "repaymentAmount")}},{"key": {"text": "Date requested"},"value": {"text": runtime.contextOrFrameLookup(context, frame, "dateRequested")}},{"key": {"text": "Tax"},"value": {"text": "Self Assessment"}}]}])), env.opts.autoescape);
output += "\n\n      <p class=\"govuk-body\">\n        <a class=\"govuk-link\" href=\"#\">Print this page</a>\n      </p>\n\n      <h2 class=\"govuk-heading-m\">What happens next</h2>\n\n      <p class=\"govuk-body\">\n        We will send the refund to the card used to pay your last Self Assessment tax bill. If we cannot do\n        this, we will send the refund to the bank account ending in ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "accountNumberEnding"), env.opts.autoescape);
output += ".\n      </p>\n\n      <p class=\"govuk-body\">\n        You or your agent should get the refund within 10 working days. To protect you against fraud, HMRC has\n        security measures in place which may cause a delay.\n      </p>\n\n      <p class=\"govuk-body\">\n        You can <a class=\"govuk-link\" href=\"#\">check the status of your refund</a> in your HMRC online account.\n      </p>\n\n      <p class=\"govuk-body\">\n        If you have not received your refund after 10 working days, you can <a class=\"govuk-link\" href=\"#\">contact us</a>.\n        Do not contact us before this date as we will not have an update for you.\n      </p>\n\n      <p class=\"govuk-body\">\n        <a class=\"govuk-link\" href=\"#\">What did you think of this service?</a> (takes 30 seconds)\n      </p>\n\n      <p class=\"govuk-body\">\n        <a class=\"govuk-link\" href=\"#\" target=\"_blank\" rel=\"noreferrer noopener\">Is this page not working properly? (opens in new tab)</a>\n      </p>\n\n      ";
output += runtime.suppressValue((lineno = 76, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Go to home","href": "/dashboard"}])), env.opts.autoescape);
output += "\n\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 82;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 83, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/repayment/account-type.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/repayment/account-type.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/repayment/account-type.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/repayment/account-type.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/repayment/account-type.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/radios/macro.njk", false, "self-assessment/repayment/account-type.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukRadios")) {
var t_19 = t_16.govukRadios;
} else {
cb(new Error("cannot import 'govukRadios'")); return;
}
context.setVariable("govukRadios", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/repayment/account-type.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Which type of bank account are you providing? – Request a Self Assessment refund";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/repayment/payment-method"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 21;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 25, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "account-type","name": "account-type","fieldset": {"legend": {"text": "Which type of bank account are you providing?","isPageHeading": true,"classes": "govuk-fieldset__legend--xl"}},"hint": {"text": "The bank details you provide must be for a UK bank account"},"items": [{"value": "business","text": "Business bank account","checked": true},{"value": "personal","text": "Personal bank account"}]}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 42, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n\n      <p class=\"govuk-body\">\n        <a class=\"govuk-link\" href=\"#\" target=\"_blank\" rel=\"noreferrer noopener\">Is this page not working properly? (opens in new tab)</a>\n      </p>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 52;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 53, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/repayment/amount-custom.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/repayment/amount-custom.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/repayment/amount-custom.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/repayment/amount-custom.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/repayment/amount-custom.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/input/macro.njk", false, "self-assessment/repayment/amount-custom.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukInput")) {
var t_19 = t_16.govukInput;
} else {
cb(new Error("cannot import 'govukInput'")); return;
}
context.setVariable("govukInput", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/repayment/amount-custom.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Enter the amount you want to be refunded – Request a Self Assessment refund";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/repayment/amount"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 21;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 25, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "custom-amount","name": "custom-amount","inputmode": "decimal","classes": "govuk-input--width-5","prefix": {"text": "£"},"label": {"text": "Enter the amount you want to be refunded","isPageHeading": true,"classes": "govuk-label--xl"},"hint": {"text": "You can claim up to " + runtime.contextOrFrameLookup(context, frame, "totalOverpaidFormatted")}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 39, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 45;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 46, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/repayment/amount.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/repayment/amount.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/repayment/amount.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/repayment/amount.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/repayment/amount.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/radios/macro.njk", false, "self-assessment/repayment/amount.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukRadios")) {
var t_19 = t_16.govukRadios;
} else {
cb(new Error("cannot import 'govukRadios'")); return;
}
context.setVariable("govukRadios", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/repayment/amount.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "How much do you want to be refunded? – Request a Self Assessment refund";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/repayment"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 21;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 25, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "refund-amount","name": "refund-amount","fieldset": {"legend": {"text": "How much do you want to be refunded?","isPageHeading": true,"classes": "govuk-fieldset__legend--xl"}},"items": [{"value": "safe","text": runtime.contextOrFrameLookup(context, frame, "safeToClaimFormatted"),"hint": {"text": "This will leave enough in your tax account to cover your next bill"},"checked": true},{"value": "full","text": runtime.contextOrFrameLookup(context, frame, "totalOverpaidFormatted")},{"value": "different","text": "A different amount"}]}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 53, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n\n      <p class=\"govuk-body\">\n        <a class=\"govuk-link\" href=\"#\" target=\"_blank\" rel=\"noreferrer noopener\">Is this page not working properly? (opens in new tab)</a>\n      </p>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 63;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 64, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/repayment/bank-details.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/repayment/bank-details.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/repayment/bank-details.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/repayment/bank-details.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/repayment/bank-details.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/input/macro.njk", false, "self-assessment/repayment/bank-details.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukInput")) {
var t_19 = t_16.govukInput;
} else {
cb(new Error("cannot import 'govukInput'")); return;
}
context.setVariable("govukInput", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/repayment/bank-details.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Enter your bank or building society account details – Request a Self Assessment refund";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/repayment/account-type"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 21;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">Enter your bank or building society account details</h1>\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 27, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "name-on-account","name": "name-on-account","autocomplete": "name","label": {"text": "Name on the account"},"hint": {"text": "For business accounts, enter the name of the business"}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 35, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "sort-code","name": "sort-code","classes": "govuk-input--width-5","inputmode": "numeric","label": {"text": "Sort code"},"hint": {"text": "Must be 6 digits long"}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 44, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "account-number","name": "account-number","classes": "govuk-input--width-10","inputmode": "numeric","label": {"text": "Account number"},"hint": {"text": "Must be between 6 and 8 digits long"}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 53, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "roll-number","name": "roll-number","classes": "govuk-input--width-10","label": {"text": "Building society roll number (if you have one)"},"hint": {"text": "You can find it on your card, statement or passbook"}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 61, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 67;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 68, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/repayment/how-you-will-get-the-refund.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/repayment/how-you-will-get-the-refund.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/repayment/how-you-will-get-the-refund.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/repayment/how-you-will-get-the-refund.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/repayment/how-you-will-get-the-refund.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/repayment/how-you-will-get-the-refund.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukButton")) {
var t_19 = t_16.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_19);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 7;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "How you will get the refund – Request a Self Assessment refund";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 10, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 16;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 17, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/repayment/amount"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 20;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">How you will get the refund</h1>\n\n      <ol class=\"govuk-list govuk-list--number\">\n        <li>We will send the refund to the card used to pay your last Self Assessment tax bill.</li>\n        <li>If we cannot do this, we need your bank details as a backup.</li>\n        <li>You can enter your own or your agent's bank details.</li>\n      </ol>\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 32, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n\n      <p class=\"govuk-body\">\n        <a class=\"govuk-link\" href=\"#\" target=\"_blank\" rel=\"noreferrer noopener\">Is this page not working properly? (opens in new tab)</a>\n      </p>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 42;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 43, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/repayment/payment-method.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/repayment/payment-method.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/repayment/payment-method.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/repayment/payment-method.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/repayment/payment-method.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/tag/macro.njk", false, "self-assessment/repayment/payment-method.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukTag")) {
var t_19 = t_16.govukTag;
} else {
cb(new Error("cannot import 'govukTag'")); return;
}
context.setVariable("govukTag", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/repayment/payment-method.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n";
env.getTemplate("partials/payment-icons.njk", false, "self-assessment/repayment/payment-method.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
t_24.getExported(function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
if(Object.prototype.hasOwnProperty.call(t_24, "paymentIcon")) {
var t_27 = t_24.paymentIcon;
} else {
cb(new Error("cannot import 'paymentIcon'")); return;
}
context.setVariable("paymentIcon", t_27);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
output += t_34;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
output += t_36;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "How you will receive this refund – Request a Self Assessment refund";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 19, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/repayment/how-you-will-get-the-refund"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 22;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">How you will receive this refund</h1>\n\n      <p class=\"govuk-body\">\n        We will send the refund to the card used to pay your last Self Assessment tax bill.\n      </p>\n\n      ";
if(runtime.contextOrFrameLookup(context, frame, "defaultPaymentMethod")) {
output += "\n        <div class=\"app-bank-details-box\">\n          <div class=\"app-bank-details-box__header\">\n            <h2 class=\"govuk-heading-m govuk-!-margin-bottom-0\">Payment method</h2>\n          </div>\n          <div class=\"app-payment-method-summary\">\n            ";
output += runtime.suppressValue((lineno = 37, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "paymentIcon"), "paymentIcon", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "defaultPaymentMethod")),"brand")])), env.opts.autoescape);
output += "\n            <span class=\"app-manage-list__details\">\n              <span class=\"app-manage-list__name\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "defaultPaymentMethod")),"name"), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 41, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "Default","classes": "govuk-tag--green app-manage-list__tag"}])), env.opts.autoescape);
output += "\n              </span>\n              <span class=\"app-manage-list__meta\">\n                ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "defaultPaymentMethod")),"kind") == "bank") {
output += "Sort code ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "defaultPaymentMethod")),"sortCodeDisplay"), env.opts.autoescape);
;
}
else {
output += "Ending in ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "defaultPaymentMethod")),"last4"), env.opts.autoescape);
;
}
output += "\n              </span>\n            </span>\n          </div>\n        </div>\n      ";
;
}
output += "\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 52, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n\n      <p class=\"govuk-body\">\n        <a class=\"govuk-link\" href=\"/self-assessment/repayment/account-type\">Update payment method</a>\n      </p>\n\n      <p class=\"govuk-body\">\n        <a class=\"govuk-link\" href=\"#\" target=\"_blank\" rel=\"noreferrer noopener\">Is this page not working properly? (opens in new tab)</a>\n      </p>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 66;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 67, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/repayment-start.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/repayment-start.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/repayment-start.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/repayment-start.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/repayment-start.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/details/macro.njk", false, "self-assessment/repayment-start.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukDetails")) {
var t_19 = t_16.govukDetails;
} else {
cb(new Error("cannot import 'govukDetails'")); return;
}
context.setVariable("govukDetails", t_19);
output += "\n";
env.getTemplate("govuk/components/inset-text/macro.njk", false, "self-assessment/repayment-start.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukInsetText")) {
var t_23 = t_20.govukInsetText;
} else {
cb(new Error("cannot import 'govukInsetText'")); return;
}
context.setVariable("govukInsetText", t_23);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/repayment-start.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
t_24.getExported(function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
if(Object.prototype.hasOwnProperty.call(t_24, "govukButton")) {
var t_27 = t_24.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_27);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
output += t_34;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
output += t_36;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Claim a refund – Self Assessment";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 19, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 22;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">Claim a refund</h1>\n\n      <h2 class=\"govuk-heading-m\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "totalOverpaidFormatted"), env.opts.autoescape);
output += " available to claim</h2>\n\n      ";
output += runtime.suppressValue((lineno = 29, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "Where has this money come from?","text": "This is made up of overpaid tax from your most recent Self Assessment return, along with any other credit already held on your account."}])), env.opts.autoescape);
output += "\n\n      <p class=\"govuk-body\">\n        HMRC has reserved ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "reservedForTaxBillFormatted"), env.opts.autoescape);
output += " of this to cover your upcoming tax bill.\n        <a class=\"govuk-link\" href=\"#\">Check what you owe</a> for further information.\n      </p>\n\n      <h2 class=\"govuk-heading-l\">How much can I claim back?</h2>\n\n      <p class=\"govuk-body\">\n        <strong>The most you can claim back is ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "totalOverpaidFormatted"), env.opts.autoescape);
output += ".</strong> This amount does not include\n        any refunds that may already be in progress.\n      </p>\n\n      ";
output += runtime.suppressValue((lineno = 46, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInsetText"), "govukInsetText", context, [{"text": "If you claim back more than " + runtime.contextOrFrameLookup(context, frame, "safeToClaimFormatted") + ", you will need to make another payment to HMRC to settle your upcoming tax bill."}])), env.opts.autoescape);
output += "\n\n      <p class=\"govuk-body\">\n        Money that you do not claim back can be used automatically by HMRC to cover your future tax bills when\n        they become due.\n      </p>\n\n      ";
output += runtime.suppressValue((lineno = 55, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Claim a refund","href": "/self-assessment/repayment/amount"}])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 60;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 61, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/return/about-you.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/return/about-you.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
env.getTemplate("partials/return-menu.njk", false, "self-assessment/return/about-you.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
context.setVariable("menu", t_4);
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/return/about-you.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
t_7.getExported(function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
if(Object.prototype.hasOwnProperty.call(t_7, "hmrcHeader")) {
var t_10 = t_7.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_10);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/return/about-you.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
t_11.getExported(function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
if(Object.prototype.hasOwnProperty.call(t_11, "hmrcFooter")) {
var t_14 = t_11.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_14);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/return/about-you.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
t_15.getExported(function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
if(Object.prototype.hasOwnProperty.call(t_15, "govukPhaseBanner")) {
var t_18 = t_15.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_18);
output += "\n";
env.getTemplate("govuk/components/input/macro.njk", false, "self-assessment/return/about-you.njk", false, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
t_19.getExported(function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
if(Object.prototype.hasOwnProperty.call(t_19, "govukInput")) {
var t_22 = t_19.govukInput;
} else {
cb(new Error("cannot import 'govukInput'")); return;
}
context.setVariable("govukInput", t_22);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/return/about-you.njk", false, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
t_23.getExported(function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
if(Object.prototype.hasOwnProperty.call(t_23, "govukButton")) {
var t_26 = t_23.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_26);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
output += t_27;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
output += t_29;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
output += t_31;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_34,t_33) {
if(t_34) { cb(t_34); return; }
output += t_33;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_36,t_35) {
if(t_36) { cb(t_36); return; }
output += t_35;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Tell us about you – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 19, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 25;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <span class=\"govuk-caption-l\">Individual's tax return: 2024-25</span>\n      <h1 class=\"govuk-heading-xl\">Tell us about you</h1>\n\n      <p class=\"govuk-body\">\n        <strong>&#9679;</strong> 'Optional' indicates that completion is voluntary\n      </p>\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 36, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "first-name","name": "first-name","label": {"text": "First name"},"value": runtime.contextOrFrameLookup(context, frame, "accountFirstName"),"classes": "govuk-input--width-20"}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 44, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "middle-name","name": "middle-name","label": {"text": "Middle name (optional)"},"classes": "govuk-input--width-20"}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 51, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "last-name","name": "last-name","label": {"text": "Last name"},"value": runtime.contextOrFrameLookup(context, frame, "accountLastName"),"classes": "govuk-input--width-20"}])), env.opts.autoescape);
output += "\n\n        <p class=\"govuk-body govuk-!-margin-bottom-1\">Unique Taxpayer Reference (UTR):</p>\n        <p class=\"govuk-body govuk-!-font-weight-bold\">4635122</p>\n\n        ";
output += runtime.suppressValue((lineno = 62, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "nino","name": "nino","label": {"text": "National Insurance Number (NINO): (optional)"},"value": "AB123456C","classes": "govuk-input--width-10"}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 70, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Save and continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n\n    <div class=\"govuk-grid-column-one-third\">\n      ";
output += runtime.suppressValue((lineno = 75, colno = 24, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "menu")),"returnMenu"), "menu[\"returnMenu\"]", context, [2])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 80;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 81, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/return/calculation.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/return/calculation.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
env.getTemplate("partials/return-menu.njk", false, "self-assessment/return/calculation.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
context.setVariable("menu", t_4);
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/return/calculation.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
t_7.getExported(function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
if(Object.prototype.hasOwnProperty.call(t_7, "hmrcHeader")) {
var t_10 = t_7.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_10);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/return/calculation.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
t_11.getExported(function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
if(Object.prototype.hasOwnProperty.call(t_11, "hmrcFooter")) {
var t_14 = t_11.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_14);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/return/calculation.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
t_15.getExported(function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
if(Object.prototype.hasOwnProperty.call(t_15, "govukPhaseBanner")) {
var t_18 = t_15.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_18);
output += "\n";
env.getTemplate("govuk/components/summary-list/macro.njk", false, "self-assessment/return/calculation.njk", false, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
t_19.getExported(function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
if(Object.prototype.hasOwnProperty.call(t_19, "govukSummaryList")) {
var t_22 = t_19.govukSummaryList;
} else {
cb(new Error("cannot import 'govukSummaryList'")); return;
}
context.setVariable("govukSummaryList", t_22);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/return/calculation.njk", false, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
t_23.getExported(function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
if(Object.prototype.hasOwnProperty.call(t_23, "govukButton")) {
var t_26 = t_23.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_26);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
output += t_27;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
output += t_29;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
output += t_31;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_34,t_33) {
if(t_34) { cb(t_34); return; }
output += t_33;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_36,t_35) {
if(t_36) { cb(t_36); return; }
output += t_35;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "View your calculation – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 19, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 25;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">View your calculation</h1>\n\n      <p class=\"govuk-body\">This is a summary of your Self Assessment calculation for the tax year 2024 to 2025.</p>\n\n      ";
output += runtime.suppressValue((lineno = 32, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukSummaryList"), "govukSummaryList", context, [{"rows": [{"key": {"text": "Total income"},"value": {"text": "£18,200.00"}},{"key": {"text": "Income Tax due"},"value": {"text": "£1,850.00"}},{"key": {"text": "Class 4 National Insurance due"},"value": {"text": "£320.00"}},{"key": {"text": "Total tax and National Insurance due"},"value": {"text": "£2,170.00"}},{"key": {"text": "Payments on account already made"},"value": {"text": "£3,670.00"}},{"key": {"text": "Amount overpaid"},"value": {"text": runtime.contextOrFrameLookup(context, frame, "totalOverpaidFormatted")}}]}])), env.opts.autoescape);
output += "\n\n      <p class=\"govuk-body\">\n        Based on the information you have given us, you have overpaid tax by <strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "totalOverpaidFormatted"), env.opts.autoescape);
output += "</strong>\n        for the tax year 2024 to 2025. This will be available to claim as a repayment once you submit your return.\n      </p>\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 49, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n\n    <div class=\"govuk-grid-column-one-third\">\n      ";
output += runtime.suppressValue((lineno = 54, colno = 24, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "menu")),"returnMenu"), "menu[\"returnMenu\"]", context, [6])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 59;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 60, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/return/check.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/return/check.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
env.getTemplate("partials/return-menu.njk", false, "self-assessment/return/check.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
context.setVariable("menu", t_4);
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/return/check.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
t_7.getExported(function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
if(Object.prototype.hasOwnProperty.call(t_7, "hmrcHeader")) {
var t_10 = t_7.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_10);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/return/check.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
t_11.getExported(function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
if(Object.prototype.hasOwnProperty.call(t_11, "hmrcFooter")) {
var t_14 = t_11.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_14);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/return/check.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
t_15.getExported(function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
if(Object.prototype.hasOwnProperty.call(t_15, "govukPhaseBanner")) {
var t_18 = t_15.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_18);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/return/check.njk", false, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
t_19.getExported(function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
if(Object.prototype.hasOwnProperty.call(t_19, "govukButton")) {
var t_22 = t_19.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_22);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
output += t_23;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_26,t_25) {
if(t_26) { cb(t_26); return; }
output += t_25;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
output += t_27;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
output += t_29;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
output += t_31;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Check your return – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 24;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">Check your return</h1>\n\n      <p class=\"govuk-body\">This section lets you check that you have answered all of the questions relevant to your circumstances.</p>\n\n      <p class=\"govuk-body\">In the year starting <strong>6 April 2024</strong> and ending <strong>5 April 2025</strong> you have told us you:</p>\n\n      <ul class=\"govuk-list govuk-list--bullet\">\n        <li>were <strong>not</strong> in a partnership</li>\n        <li>\n          did <strong>not</strong> receive income from:\n          <ul class=\"govuk-list govuk-list--bullet\">\n            <li>property</li>\n            <li>foreign earnings</li>\n          </ul>\n        </li>\n        <li>\n          did <strong>not</strong>:\n          <ul class=\"govuk-list govuk-list--bullet\">\n            <li>receive Child Benefit payments</li>\n            <li>dispose of any chargeable assets</li>\n            <li>have any chargeable gains</li>\n            <li>claim an allowable loss</li>\n            <li>make any other claim or election</li>\n          </ul>\n        </li>\n      </ul>\n\n      <p class=\"govuk-body\">\n        If you feel you have missed any information, please update your details in\n        <a class=\"govuk-link\" href=\"/self-assessment/return/tailor-1\">3. Tailor your return</a>.\n      </p>\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 60, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n\n    <div class=\"govuk-grid-column-one-third\">\n      ";
output += runtime.suppressValue((lineno = 65, colno = 24, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "menu")),"returnMenu"), "menu[\"returnMenu\"]", context, [5])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 70;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 71, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/return/fill-in.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/return/fill-in.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
env.getTemplate("partials/return-menu.njk", false, "self-assessment/return/fill-in.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
context.setVariable("menu", t_4);
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/return/fill-in.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
t_7.getExported(function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
if(Object.prototype.hasOwnProperty.call(t_7, "hmrcHeader")) {
var t_10 = t_7.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_10);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/return/fill-in.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
t_11.getExported(function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
if(Object.prototype.hasOwnProperty.call(t_11, "hmrcFooter")) {
var t_14 = t_11.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_14);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/return/fill-in.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
t_15.getExported(function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
if(Object.prototype.hasOwnProperty.call(t_15, "govukPhaseBanner")) {
var t_18 = t_15.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_18);
output += "\n";
env.getTemplate("govuk/components/details/macro.njk", false, "self-assessment/return/fill-in.njk", false, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
t_19.getExported(function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
if(Object.prototype.hasOwnProperty.call(t_19, "govukDetails")) {
var t_22 = t_19.govukDetails;
} else {
cb(new Error("cannot import 'govukDetails'")); return;
}
context.setVariable("govukDetails", t_22);
output += "\n";
env.getTemplate("govuk/components/tag/macro.njk", false, "self-assessment/return/fill-in.njk", false, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
t_23.getExported(function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
if(Object.prototype.hasOwnProperty.call(t_23, "govukTag")) {
var t_26 = t_23.govukTag;
} else {
cb(new Error("cannot import 'govukTag'")); return;
}
context.setVariable("govukTag", t_26);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/return/fill-in.njk", false, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
t_27.getExported(function(t_29,t_27) {
if(t_29) { cb(t_29); return; }
if(Object.prototype.hasOwnProperty.call(t_27, "govukButton")) {
var t_30 = t_27.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_30);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
output += t_31;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_34,t_33) {
if(t_34) { cb(t_34); return; }
output += t_33;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_36,t_35) {
if(t_36) { cb(t_36); return; }
output += t_35;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_38,t_37) {
if(t_38) { cb(t_38); return; }
output += t_37;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_40,t_39) {
if(t_40) { cb(t_40); return; }
output += t_39;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Check your progress – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 12;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 13, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 20, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 26;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">Check your progress</h1>\n\n      ";
output += runtime.suppressValue((lineno = 31, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "To complete your return you may need the following documents:","text": "P60, P45 or P11D from your employer, records of self-employment income and expenses, and details of any bank interest, dividends or pension income."}])), env.opts.autoescape);
output += "\n\n      <p class=\"govuk-body\">\n        This section provides you with an overview of what pages make up your tailored return.<br>\n        'ENTERED' means you have completed the information in this page. To change any information, select the\n        page from the list below.<br>\n        'NOT ENTERED' means you have yet to enter information into this page.<br>\n        'WARNING' means you have entries we want you to revisit. Please review the accuracy of these entries.\n      </p>\n\n      <h2 class=\"govuk-heading-m\">Tell us about you</h2>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"/self-assessment/return/about-you\">Change details about you</a>\n        ";
output += runtime.suppressValue((lineno = 47, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n\n      <h2 class=\"govuk-heading-m govuk-!-margin-top-6\">Tailor your return</h2>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"/self-assessment/return/tailor-1\">Change your tailored return (page 1)</a>\n        ";
output += runtime.suppressValue((lineno = 53, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"/self-assessment/return/tailor-2\">Change your tailored return (page 2)</a>\n        ";
output += runtime.suppressValue((lineno = 57, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"/self-assessment/return/tailor-3\">Change your tailored return (page 3)</a>\n        ";
output += runtime.suppressValue((lineno = 61, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n\n      <h2 class=\"govuk-heading-m govuk-!-margin-top-6\">Employment</h2>\n      <h3 class=\"govuk-heading-s govuk-!-margin-bottom-1\">Jones Ltd</h3>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Enter income</a>\n        ";
output += runtime.suppressValue((lineno = 68, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Enter additional information</a>\n        ";
output += runtime.suppressValue((lineno = 72, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n\n      <h2 class=\"govuk-heading-m govuk-!-margin-top-6\">Self-employment</h2>\n      <h3 class=\"govuk-heading-s govuk-!-margin-bottom-1\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "accountName"), env.opts.autoescape);
output += "</h3>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change self-employment details (page 1)</a>\n        ";
output += runtime.suppressValue((lineno = 79, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change self-employment details (page 2)</a>\n        ";
output += runtime.suppressValue((lineno = 83, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change accounting details</a>\n        ";
output += runtime.suppressValue((lineno = 87, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change income</a>\n        ";
output += runtime.suppressValue((lineno = 91, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change capital allowances</a>\n        ";
output += runtime.suppressValue((lineno = 95, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change adjustments</a>\n        ";
output += runtime.suppressValue((lineno = 99, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change losses</a>\n        ";
output += runtime.suppressValue((lineno = 103, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change tax deducted</a>\n        ";
output += runtime.suppressValue((lineno = 107, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change class 4 NIC</a>\n        ";
output += runtime.suppressValue((lineno = 111, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change additional information</a>\n        ";
output += runtime.suppressValue((lineno = 115, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n      <p class=\"govuk-body govuk-!-margin-top-2\"><a class=\"govuk-link\" href=\"#\">View summary</a></p>\n\n      <h2 class=\"govuk-heading-m govuk-!-margin-top-6\">Class 2 National Insurance Contributions</h2>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change Class 2 NICs</a>\n        ";
output += runtime.suppressValue((lineno = 122, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n\n      <h2 class=\"govuk-heading-m govuk-!-margin-top-6\">UK pensions, annuities and other state benefits</h2>\n      <div class=\"app-progress-row\">\n        <a class=\"govuk-link\" href=\"#\">Change UK pensions, annuities and other state benefits</a>\n        ";
output += runtime.suppressValue((lineno = 128, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "ENTERED","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n\n      <form method=\"post\" class=\"govuk-!-margin-top-6\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 132, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n\n    <div class=\"govuk-grid-column-one-third\">\n      ";
output += runtime.suppressValue((lineno = 137, colno = 24, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "menu")),"returnMenu"), "menu[\"returnMenu\"]", context, [4])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 142;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 143, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/return/save.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/return/save.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
env.getTemplate("partials/return-menu.njk", false, "self-assessment/return/save.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
context.setVariable("menu", t_4);
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/return/save.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
t_7.getExported(function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
if(Object.prototype.hasOwnProperty.call(t_7, "hmrcHeader")) {
var t_10 = t_7.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_10);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/return/save.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
t_11.getExported(function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
if(Object.prototype.hasOwnProperty.call(t_11, "hmrcFooter")) {
var t_14 = t_11.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_14);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/return/save.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
t_15.getExported(function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
if(Object.prototype.hasOwnProperty.call(t_15, "govukPhaseBanner")) {
var t_18 = t_15.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_18);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/return/save.njk", false, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
t_19.getExported(function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
if(Object.prototype.hasOwnProperty.call(t_19, "govukButton")) {
var t_22 = t_19.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_22);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
output += t_23;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_26,t_25) {
if(t_26) { cb(t_26); return; }
output += t_25;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
output += t_27;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
output += t_29;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
output += t_31;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Save your return – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 24;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">Save your return</h1>\n\n      <p class=\"govuk-body\">Your return has been saved.</p>\n\n      <p class=\"govuk-body\">\n        You can come back and finish it later using the \"Tax return options\" link in the menu, or continue now\n        to submit your return to HM Revenue and Customs.\n      </p>\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 37, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue to submit your return"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n\n    <div class=\"govuk-grid-column-one-third\">\n      ";
output += runtime.suppressValue((lineno = 42, colno = 24, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "menu")),"returnMenu"), "menu[\"returnMenu\"]", context, [7])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 47;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 48, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/return/submit.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/return/submit.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
env.getTemplate("partials/return-menu.njk", false, "self-assessment/return/submit.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
context.setVariable("menu", t_4);
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/return/submit.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
t_7.getExported(function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
if(Object.prototype.hasOwnProperty.call(t_7, "hmrcHeader")) {
var t_10 = t_7.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_10);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/return/submit.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
t_11.getExported(function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
if(Object.prototype.hasOwnProperty.call(t_11, "hmrcFooter")) {
var t_14 = t_11.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_14);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/return/submit.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
t_15.getExported(function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
if(Object.prototype.hasOwnProperty.call(t_15, "govukPhaseBanner")) {
var t_18 = t_15.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_18);
output += "\n";
env.getTemplate("govuk/components/checkboxes/macro.njk", false, "self-assessment/return/submit.njk", false, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
t_19.getExported(function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
if(Object.prototype.hasOwnProperty.call(t_19, "govukCheckboxes")) {
var t_22 = t_19.govukCheckboxes;
} else {
cb(new Error("cannot import 'govukCheckboxes'")); return;
}
context.setVariable("govukCheckboxes", t_22);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/return/submit.njk", false, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
t_23.getExported(function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
if(Object.prototype.hasOwnProperty.call(t_23, "govukButton")) {
var t_26 = t_23.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_26);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
output += t_27;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
output += t_29;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
output += t_31;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_34,t_33) {
if(t_34) { cb(t_34); return; }
output += t_33;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_36,t_35) {
if(t_36) { cb(t_36); return; }
output += t_35;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Submit your return – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 19, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 25;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <span class=\"govuk-caption-l\">Individual's tax return: 2024-25</span>\n      <h1 class=\"govuk-heading-xl\">Submit your return</h1>\n\n      <h2 class=\"govuk-heading-l\">Declaration</h2>\n\n      <p class=\"govuk-body govuk-!-font-weight-bold\">You have not yet submitted your return.</p>\n\n      <p class=\"govuk-body\">\n        Before you can submit your return to HM Revenue and Customs, you must read and agree the following\n        statement by ticking the checkbox below.\n      </p>\n\n      <p class=\"govuk-body\">If you give false information you may have to pay financial penalties and face prosecution.</p>\n\n      <p class=\"govuk-body govuk-!-font-weight-bold\">\n        Select 'Submit' to continue to the next page where you must re-authenticate before your return is submitted.\n      </p>\n\n      <form method=\"post\" novalidate>\n        <h2 class=\"govuk-heading-m\">Final Declaration</h2>\n\n        ";
output += runtime.suppressValue((lineno = 49, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukCheckboxes"), "govukCheckboxes", context, [{"idPrefix": "final-declaration","name": "final-declaration","items": [{"value": "agree","text": "The information I have given on this Tax Return is correct and complete to the best of my knowledge and belief"}]}])), env.opts.autoescape);
output += "\n\n        <div class=\"govuk-button-group\">\n          ";
output += runtime.suppressValue((lineno = 61, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Submit"}])), env.opts.autoescape);
output += "\n          ";
output += runtime.suppressValue((lineno = 62, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Back","href": "/self-assessment/return/save","classes": "govuk-button--secondary"}])), env.opts.autoescape);
output += "\n        </div>\n      </form>\n    </div>\n\n    <div class=\"govuk-grid-column-one-third\">\n      ";
output += runtime.suppressValue((lineno = 68, colno = 24, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "menu")),"returnMenu"), "menu[\"returnMenu\"]", context, [8])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 73;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 74, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/return/tailor-1.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/return/tailor-1.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
env.getTemplate("partials/return-menu.njk", false, "self-assessment/return/tailor-1.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
context.setVariable("menu", t_4);
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/return/tailor-1.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
t_7.getExported(function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
if(Object.prototype.hasOwnProperty.call(t_7, "hmrcHeader")) {
var t_10 = t_7.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_10);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/return/tailor-1.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
t_11.getExported(function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
if(Object.prototype.hasOwnProperty.call(t_11, "hmrcFooter")) {
var t_14 = t_11.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_14);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/return/tailor-1.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
t_15.getExported(function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
if(Object.prototype.hasOwnProperty.call(t_15, "govukPhaseBanner")) {
var t_18 = t_15.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_18);
output += "\n";
env.getTemplate("govuk/components/radios/macro.njk", false, "self-assessment/return/tailor-1.njk", false, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
t_19.getExported(function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
if(Object.prototype.hasOwnProperty.call(t_19, "govukRadios")) {
var t_22 = t_19.govukRadios;
} else {
cb(new Error("cannot import 'govukRadios'")); return;
}
context.setVariable("govukRadios", t_22);
output += "\n";
env.getTemplate("govuk/components/details/macro.njk", false, "self-assessment/return/tailor-1.njk", false, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
t_23.getExported(function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
if(Object.prototype.hasOwnProperty.call(t_23, "govukDetails")) {
var t_26 = t_23.govukDetails;
} else {
cb(new Error("cannot import 'govukDetails'")); return;
}
context.setVariable("govukDetails", t_26);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/return/tailor-1.njk", false, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
t_27.getExported(function(t_29,t_27) {
if(t_29) { cb(t_29); return; }
if(Object.prototype.hasOwnProperty.call(t_27, "govukButton")) {
var t_30 = t_27.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_30);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
output += t_31;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_34,t_33) {
if(t_34) { cb(t_34); return; }
output += t_33;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_36,t_35) {
if(t_36) { cb(t_36); return; }
output += t_35;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_38,t_37) {
if(t_38) { cb(t_38); return; }
output += t_37;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_40,t_39) {
if(t_40) { cb(t_40); return; }
output += t_39;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Tailor your return (page 1 of 3) – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 12;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 13, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 20, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 26;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <span class=\"govuk-caption-l\">Individual's tax return: 2024-25</span>\n      <h1 class=\"govuk-heading-xl\">Tailor your return</h1>\n      <p class=\"govuk-body\">Page 1 of 3</p>\n\n      <p class=\"govuk-body\">\n        This section aims to ensure you only answer questions relevant to you. Include <strong>all income</strong>\n        even if the income has been <strong>taxed at source</strong>.\n      </p>\n      <p class=\"govuk-body\">In the tax year 6 April 2024 to 5 April 2025:</p>\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 40, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "employee","name": "employee","classes": "govuk-radios--inline","fieldset": {"legend": {"text": "Were you an employee (or director or office holder) or agency worker in the year to 5 April 2025?","classes": "govuk-fieldset__legend--m"}},"items": [{"value": "yes","text": "Yes"},{"value": "no","text": "No"}]}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 56, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "Help about: Tailor your return 01 - Employee, director, office holder or agency worker","text": "This includes any income from an employer, even if you were only employed for part of the year."}])), env.opts.autoescape);
output += "\n\n        <p class=\"govuk-body\">\n          If you are self employed or in a partnership, you must register to pay Class 2 National Insurance.\n        </p>\n\n        ";
output += runtime.suppressValue((lineno = 65, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "Help about: Tailor your return 02 - If you are self-employed or in a partnership, you must register to pay Class 2 National Insurance","text": "You can register for Class 2 National Insurance separately if you have not already done so."}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 70, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "turnover","name": "turnover","classes": "govuk-radios--inline","fieldset": {"legend": {"text": "Was your turnover more than £1,000 in total from all self-employments?","classes": "govuk-fieldset__legend--m"}},"items": [{"value": "yes","text": "Yes"},{"value": "no","text": "No"}]}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 86, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Save and continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n\n    <div class=\"govuk-grid-column-one-third\">\n      ";
output += runtime.suppressValue((lineno = 91, colno = 24, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "menu")),"returnMenu"), "menu[\"returnMenu\"]", context, [3])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 96;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 97, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/return/tailor-2.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/return/tailor-2.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
env.getTemplate("partials/return-menu.njk", false, "self-assessment/return/tailor-2.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
context.setVariable("menu", t_4);
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/return/tailor-2.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
t_7.getExported(function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
if(Object.prototype.hasOwnProperty.call(t_7, "hmrcHeader")) {
var t_10 = t_7.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_10);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/return/tailor-2.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
t_11.getExported(function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
if(Object.prototype.hasOwnProperty.call(t_11, "hmrcFooter")) {
var t_14 = t_11.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_14);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/return/tailor-2.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
t_15.getExported(function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
if(Object.prototype.hasOwnProperty.call(t_15, "govukPhaseBanner")) {
var t_18 = t_15.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_18);
output += "\n";
env.getTemplate("govuk/components/radios/macro.njk", false, "self-assessment/return/tailor-2.njk", false, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
t_19.getExported(function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
if(Object.prototype.hasOwnProperty.call(t_19, "govukRadios")) {
var t_22 = t_19.govukRadios;
} else {
cb(new Error("cannot import 'govukRadios'")); return;
}
context.setVariable("govukRadios", t_22);
output += "\n";
env.getTemplate("govuk/components/details/macro.njk", false, "self-assessment/return/tailor-2.njk", false, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
t_23.getExported(function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
if(Object.prototype.hasOwnProperty.call(t_23, "govukDetails")) {
var t_26 = t_23.govukDetails;
} else {
cb(new Error("cannot import 'govukDetails'")); return;
}
context.setVariable("govukDetails", t_26);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/return/tailor-2.njk", false, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
t_27.getExported(function(t_29,t_27) {
if(t_29) { cb(t_29); return; }
if(Object.prototype.hasOwnProperty.call(t_27, "govukButton")) {
var t_30 = t_27.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_30);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
output += t_31;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_34,t_33) {
if(t_34) { cb(t_34); return; }
output += t_33;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_36,t_35) {
if(t_36) { cb(t_36); return; }
output += t_35;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_38,t_37) {
if(t_38) { cb(t_38); return; }
output += t_37;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_40,t_39) {
if(t_40) { cb(t_40); return; }
output += t_39;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Tailor your return (page 2 of 3) – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 12;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 13, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 20, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 26;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <span class=\"govuk-caption-l\">Individual's tax return: 2024-25</span>\n      <h1 class=\"govuk-heading-xl\">Tailor your return</h1>\n      <p class=\"govuk-body\">Page 2 of 3</p>\n\n      <p class=\"govuk-body\">In the tax year 6 April 2024 to 5 April 2025:</p>\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 36, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "interest","name": "interest","classes": "govuk-radios--inline","fieldset": {"legend": {"text": "Did you receive any interest, for example from UK banks, UK building societies, UK unit trusts (or untaxed foreign interest up to £2,000)?","classes": "govuk-fieldset__legend--m"}},"items": [{"value": "yes","text": "Yes"},{"value": "no","text": "No"}]}])), env.opts.autoescape);
output += "\n        ";
output += runtime.suppressValue((lineno = 51, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "Help about: Tailor your return 08 - Interest (UK)","text": "Include interest from all UK bank and building society accounts."}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 53, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "dividends","name": "dividends","classes": "govuk-radios--inline","fieldset": {"legend": {"text": "Did you receive any dividends, for example from UK companies, authorised unit trusts, open-ended investment companies (or dividends from foreign companies up to £500)?","classes": "govuk-fieldset__legend--m"}},"items": [{"value": "yes","text": "Yes"},{"value": "no","text": "No"}]}])), env.opts.autoescape);
output += "\n        ";
output += runtime.suppressValue((lineno = 68, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "Help about: Tailor your return 09 - Dividends (UK)","text": "Include dividends from shares you own in UK companies."}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 70, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "pensions","name": "pensions","classes": "govuk-radios--inline","fieldset": {"legend": {"text": "Did you receive any UK pensions, annuities or state benefits, for example state pension, occupational pension, retirement annuity, Incapacity Benefit?","classes": "govuk-fieldset__legend--m"}},"items": [{"value": "yes","text": "Yes"},{"value": "no","text": "No"}]}])), env.opts.autoescape);
output += "\n        ";
output += runtime.suppressValue((lineno = 85, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "Help about: Tailor your return 10 - UK pensions, annuities or state benefits","text": "Include the State Pension and any other pension or annuity income."}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 87, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "child-benefit","name": "child-benefit","classes": "govuk-radios--inline","fieldset": {"legend": {"text": "Did you or your partner (if you have one) get Child Benefit payments during the year 2024-25? (This also applies if the child living with you is not your child)","classes": "govuk-fieldset__legend--m"}},"items": [{"value": "yes","text": "Yes"},{"value": "no","text": "No"}]}])), env.opts.autoescape);
output += "\n        ";
output += runtime.suppressValue((lineno = 102, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "Help about: Tailor your return 11 - High Income Child Benefit Charge","text": "This may affect your tax if you or your partner have income over £50,000."}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 104, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "other-income","name": "other-income","classes": "govuk-radios--inline","fieldset": {"legend": {"text": "Did you receive any other UK income, for example, employment lump sums, share schemes, life insurance gains?","classes": "govuk-fieldset__legend--m"}},"items": [{"value": "yes","text": "Yes"},{"value": "no","text": "No"}]}])), env.opts.autoescape);
output += "\n        ";
output += runtime.suppressValue((lineno = 119, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "Help about: Tailor your return 16 - Any other UK income","text": "Include any UK income not already covered by the other questions."}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 121, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "losses","name": "losses","classes": "govuk-radios--inline","fieldset": {"legend": {"text": "Have you made any income tax losses in the year 2024-25?","classes": "govuk-fieldset__legend--m"}},"items": [{"value": "yes","text": "Yes"},{"value": "no","text": "No"}]}])), env.opts.autoescape);
output += "\n        ";
output += runtime.suppressValue((lineno = 136, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "Help about: Tailor your return 17 - Have you made any income tax losses","text": "Include losses from self-employment or property income."}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 138, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "pension-charges","name": "pension-charges","classes": "govuk-radios--inline","fieldset": {"legend": {"text": "Are you liable to pension savings tax charges or have you received payments from overseas pension schemes?","classes": "govuk-fieldset__legend--m"}},"items": [{"value": "yes","text": "Yes"},{"value": "no","text": "No"}]}])), env.opts.autoescape);
output += "\n        ";
output += runtime.suppressValue((lineno = 153, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "Help about: Tailor your return 18 - Pension savings tax charges","text": "This applies if you have exceeded your annual or lifetime pension allowance."}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 155, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Save and continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n\n    <div class=\"govuk-grid-column-one-third\">\n      ";
output += runtime.suppressValue((lineno = 160, colno = 24, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "menu")),"returnMenu"), "menu[\"returnMenu\"]", context, [3])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 165;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 166, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/return/tailor-3.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/return/tailor-3.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
env.getTemplate("partials/return-menu.njk", false, "self-assessment/return/tailor-3.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
context.setVariable("menu", t_4);
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/return/tailor-3.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
t_7.getExported(function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
if(Object.prototype.hasOwnProperty.call(t_7, "hmrcHeader")) {
var t_10 = t_7.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_10);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/return/tailor-3.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
t_11.getExported(function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
if(Object.prototype.hasOwnProperty.call(t_11, "hmrcFooter")) {
var t_14 = t_11.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_14);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/return/tailor-3.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
t_15.getExported(function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
if(Object.prototype.hasOwnProperty.call(t_15, "govukPhaseBanner")) {
var t_18 = t_15.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_18);
output += "\n";
env.getTemplate("govuk/components/radios/macro.njk", false, "self-assessment/return/tailor-3.njk", false, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
t_19.getExported(function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
if(Object.prototype.hasOwnProperty.call(t_19, "govukRadios")) {
var t_22 = t_19.govukRadios;
} else {
cb(new Error("cannot import 'govukRadios'")); return;
}
context.setVariable("govukRadios", t_22);
output += "\n";
env.getTemplate("govuk/components/details/macro.njk", false, "self-assessment/return/tailor-3.njk", false, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
t_23.getExported(function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
if(Object.prototype.hasOwnProperty.call(t_23, "govukDetails")) {
var t_26 = t_23.govukDetails;
} else {
cb(new Error("cannot import 'govukDetails'")); return;
}
context.setVariable("govukDetails", t_26);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/return/tailor-3.njk", false, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
t_27.getExported(function(t_29,t_27) {
if(t_29) { cb(t_29); return; }
if(Object.prototype.hasOwnProperty.call(t_27, "govukButton")) {
var t_30 = t_27.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_30);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
output += t_31;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_34,t_33) {
if(t_34) { cb(t_34); return; }
output += t_33;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_36,t_35) {
if(t_36) { cb(t_36); return; }
output += t_35;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_38,t_37) {
if(t_38) { cb(t_38); return; }
output += t_37;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_40,t_39) {
if(t_40) { cb(t_40); return; }
output += t_39;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Tailor your return (page 3 of 3) – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 12;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 13, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 20, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 26;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <span class=\"govuk-caption-l\">Individual's tax return: 2024-25</span>\n      <h1 class=\"govuk-heading-xl\">Tailor your return</h1>\n      <p class=\"govuk-body\">Page 3 of 3</p>\n\n      <p class=\"govuk-body\">In the tax year 6 April 2024 to 5 April 2025:</p>\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 36, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "marriage-allowance","name": "marriage-allowance","classes": "govuk-radios--inline","fieldset": {"legend": {"text": "Are you claiming Marriage Allowance?","classes": "govuk-fieldset__legend--m"}},"items": [{"value": "yes","text": "Yes"},{"value": "no","text": "No"}]}])), env.opts.autoescape);
output += "\n        ";
output += runtime.suppressValue((lineno = 51, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "Help about: Tailor your return 19 - Marriage Allowance","text": "You can transfer part of your Personal Allowance to your husband, wife or civil partner."}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 53, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "gift-aid","name": "gift-aid","classes": "govuk-radios--inline","fieldset": {"legend": {"text": "Did you make any charitable donations under Gift Aid?","classes": "govuk-fieldset__legend--m"}},"items": [{"value": "yes","text": "Yes"},{"value": "no","text": "No"}]}])), env.opts.autoescape);
output += "\n        ";
output += runtime.suppressValue((lineno = 68, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "Help about: Tailor your return 20 - Gift Aid","text": "Include one-off and regular Gift Aid donations made in the tax year."}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 70, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukRadios"), "govukRadios", context, [{"idPrefix": "residence","name": "residence","classes": "govuk-radios--inline","fieldset": {"legend": {"text": "Do you need to complete the residence, remittance basis etc. section?","classes": "govuk-fieldset__legend--m"}},"items": [{"value": "yes","text": "Yes"},{"value": "no","text": "No"}]}])), env.opts.autoescape);
output += "\n        ";
output += runtime.suppressValue((lineno = 85, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukDetails"), "govukDetails", context, [{"summaryText": "Help about: Tailor your return 21 - Residence, remittance basis etc.","text": "This applies if you were not resident in the UK for the whole tax year, or you're claiming the remittance basis."}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 87, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Save and continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n\n    <div class=\"govuk-grid-column-one-third\">\n      ";
output += runtime.suppressValue((lineno = 92, colno = 24, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "menu")),"returnMenu"), "menu[\"returnMenu\"]", context, [3])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 97;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 98, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/return/welcome.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/return/welcome.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
env.getTemplate("partials/return-menu.njk", false, "self-assessment/return/welcome.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
context.setVariable("menu", t_4);
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/return/welcome.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
t_7.getExported(function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
if(Object.prototype.hasOwnProperty.call(t_7, "hmrcHeader")) {
var t_10 = t_7.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_10);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/return/welcome.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
t_11.getExported(function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
if(Object.prototype.hasOwnProperty.call(t_11, "hmrcFooter")) {
var t_14 = t_11.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_14);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "self-assessment/return/welcome.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
t_15.getExported(function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
if(Object.prototype.hasOwnProperty.call(t_15, "govukPhaseBanner")) {
var t_18 = t_15.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_18);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/return/welcome.njk", false, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
t_19.getExported(function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
if(Object.prototype.hasOwnProperty.call(t_19, "govukButton")) {
var t_22 = t_19.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_22);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
output += t_23;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_26,t_25) {
if(t_26) { cb(t_26); return; }
output += t_25;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
output += t_27;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
output += t_29;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
output += t_31;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Welcome – Individual's tax return: 2024-25";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPhaseBanner"), "govukPhaseBanner", context, [{"tag": {"text": "Demo"},"text": "This is a GOV.UK sandbox for Adaptive Identity Protection. This is not an official GOV.UK website."}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 24;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <span class=\"govuk-caption-l\">Individual's tax return: 2024-25</span>\n      <h1 class=\"govuk-heading-xl\">Welcome to your Self Assessment tax return</h1>\n\n      <p class=\"govuk-body\">\n        Use this service to complete your Self Assessment tax return for the tax year 6 April 2024 to\n        5 April 2025.\n      </p>\n\n      <p class=\"govuk-body\">Before you start, you'll need:</p>\n      <ul class=\"govuk-list govuk-list--bullet\">\n        <li>your Unique Taxpayer Reference (UTR)</li>\n        <li>your National Insurance number</li>\n        <li>details of your income, including any from employment or self-employment</li>\n        <li>records of any expenses relating to your work</li>\n        <li>details of any other taxable income or gains</li>\n      </ul>\n\n      ";
output += runtime.suppressValue((lineno = 44, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Start now","href": "/self-assessment/return/about-you","isStartButton": true}])), env.opts.autoescape);
output += "\n    </div>\n\n    <div class=\"govuk-grid-column-one-third\">\n      ";
output += runtime.suppressValue((lineno = 48, colno = 24, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "menu")),"returnMenu"), "menu[\"returnMenu\"]", context, [1])), env.opts.autoescape);
output += "\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 53;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 54, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/return-complete.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/return-complete.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/return-complete.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/return-complete.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/panel/macro.njk", false, "self-assessment/return-complete.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukPanel")) {
var t_15 = t_12.govukPanel;
} else {
cb(new Error("cannot import 'govukPanel'")); return;
}
context.setVariable("govukPanel", t_15);
output += "\n";
env.getTemplate("govuk/components/notification-banner/macro.njk", false, "self-assessment/return-complete.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukNotificationBanner")) {
var t_19 = t_16.govukNotificationBanner;
} else {
cb(new Error("cannot import 'govukNotificationBanner'")); return;
}
context.setVariable("govukNotificationBanner", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/return-complete.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Return submitted – Self Assessment";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      ";
output += runtime.suppressValue((lineno = 20, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukPanel"), "govukPanel", context, [{"titleText": "Return submitted","text": "Your Self Assessment return for tax year 2024 to 2025 has been submitted"}])), env.opts.autoescape);
output += "\n\n      ";
output += runtime.suppressValue((lineno = 25, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukNotificationBanner"), "govukNotificationBanner", context, [{"titleText": "Important","html": "You are due a Self Assessment repayment of " + runtime.contextOrFrameLookup(context, frame, "totalOverpaidFormatted") + ". To claim your repayment or view your payment activity, please visit Request a repayment. <a class=\"govuk-notification-banner__link\" href=\"/self-assessment/repayment\">Begin repayment request</a>."}])), env.opts.autoescape);
output += "\n\n      <p class=\"govuk-body\">\n        You can request this to be paid into a debit card or bank account already on your account, or add a\n        new one. This should take about 2 minutes.\n      </p>\n\n      <div class=\"govuk-button-group\">\n        ";
output += runtime.suppressValue((lineno = 36, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Claim your repayment","href": "/self-assessment/repayment"}])), env.opts.autoescape);
output += "\n        ";
output += runtime.suppressValue((lineno = 37, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Go to Self Assessment","href": "/self-assessment","classes": "govuk-button--secondary"}])), env.opts.autoescape);
output += "\n      </div>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 43;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 44, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/step-up-code.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/step-up-code.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/step-up-code.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/step-up-code.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/step-up-code.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/input/macro.njk", false, "self-assessment/step-up-code.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukInput")) {
var t_19 = t_16.govukInput;
} else {
cb(new Error("cannot import 'govukInput'")); return;
}
context.setVariable("govukInput", t_19);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "self-assessment/step-up-code.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukButton")) {
var t_23 = t_20.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_23);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
output += t_30;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Enter your security code";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 11, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 18, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/repayment/step-up/code-screen"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 21;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-l\">Enter your security code</h1>\n      <p class=\"govuk-body\">\n        Open the HMRC app and go to \"Device &amp; security codes\" to find your 6-digit code.\n      </p>\n\n      <form method=\"post\" novalidate>\n        ";
output += runtime.suppressValue((lineno = 30, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInput"), "govukInput", context, [{"id": "security-code","name": "security-code","inputmode": "numeric","classes": "govuk-input--width-5","label": {"text": "6-digit security code"}}])), env.opts.autoescape);
output += "\n\n        ";
output += runtime.suppressValue((lineno = 38, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Continue"}])), env.opts.autoescape);
output += "\n      </form>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 44;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 45, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/step-up-loading.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/step-up-loading.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/step-up-loading.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/step-up-loading.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
output += t_12;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
output += t_14;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
output += t_16;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
output += t_18;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Confirming your identity";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 7;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 8, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 14;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds app-loading-panel\">\n      <span class=\"app-loading-spinner\" aria-hidden=\"true\"></span>\n      <h1 class=\"govuk-heading-l\">Confirming your identity</h1>\n      <p class=\"govuk-body\">We've received confirmation from your trusted device. Please wait&hellip;</p>\n    </div>\n  </div>\n\n  <script>\n    setTimeout(function () {\n      window.location.href = '/self-assessment/repayment/confirmation'\n    }, 2000)\n  </script>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 30;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 31, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/step-up-sms.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/step-up-sms.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/step-up-sms.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/step-up-sms.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/step-up-sms.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
output += t_16;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
output += t_18;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Check your phone";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 9, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 15;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/repayment/check-details"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-l\">Check your phone</h1>\n      <p class=\"govuk-body\">\n        You do not have a trusted device set up, so we've sent a text message to your phone number ending in 0000.\n      </p>\n\n      <div class=\"app-sms-bubble\">\n        <p class=\"govuk-body-s app-sms-bubble__from\">HMRC</p>\n        <p class=\"govuk-body\">Are you trying to complete a repayment request?</p>\n        <p class=\"govuk-body\">Reply Y or N</p>\n      </div>\n\n      <p class=\"govuk-body\">Waiting for your reply&hellip;</p>\n\n      <form method=\"post\" action=\"/self-assessment/repayment/step-up-sms\" id=\"step-up-sms-form\"></form>\n    </div>\n  </div>\n\n  <script>\n    setTimeout(function () {\n      document.getElementById('step-up-sms-form').submit()\n    }, 5000)\n  </script>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 46;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 47, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/step-up.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/step-up.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/step-up.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/step-up.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/step-up.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
output += t_16;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
output += t_18;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Check your trusted device";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 9, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 15;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment/repayment/check-details"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-l\">Check your trusted device</h1>\n      <p class=\"govuk-body\">\n        You're signing in from ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "device")?runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "device")),"name"):"a new device"), env.opts.autoescape);
output += ". For security, we need to confirm this is you.\n      </p>\n\n      <div class=\"app-device-waiting\">\n        <span class=\"app-device-waiting__name\">";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "device")?runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "device")),"name"):"Chrome on Windows"), env.opts.autoescape);
output += "</span>\n        <span class=\"app-device-waiting__status\">Waiting for confirmation&hellip;</span>\n      </div>\n\n      <p class=\"govuk-body\">\n        Open the HMRC app on your trusted device to confirm this activity.\n      </p>\n\n      <form method=\"post\" action=\"/self-assessment/repayment/step-up\" id=\"step-up-form\"></form>\n    </div>\n  </div>\n\n  <script>\n    setTimeout(function () {\n      document.getElementById('step-up-form').submit()\n    }, 4000)\n  </script>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 47;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 48, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment/tax-return-options.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment/tax-return-options.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment/tax-return-options.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment/tax-return-options.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment/tax-return-options.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/tag/macro.njk", false, "self-assessment/tax-return-options.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukTag")) {
var t_19 = t_16.govukTag;
} else {
cb(new Error("cannot import 'govukTag'")); return;
}
context.setVariable("govukTag", t_19);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
output += t_26;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
output += t_28;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 7;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Tax return options – Self Assessment";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 10, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 16;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 17, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/self-assessment"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 20;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <span class=\"govuk-caption-l\">Self Assessment</span>\n      <h1 class=\"govuk-heading-xl\">Tax return options</h1>\n\n      <p class=\"govuk-body\">\n        You can correct a tax return within 12 months of the Self Assessment deadline. Your bill will be\n        updated based on what you report — you may have to pay more tax, or be able to claim a refund.\n      </p>\n\n      <div class=\"app-progress-row\">\n        <div>\n          <span class=\"app-manage-list__name\">2024 to 2025</span>\n          <br>\n          <span class=\"app-manage-list__meta\">Filed on 12 October 2025</span>\n        </div>\n        ";
output += runtime.suppressValue((lineno = 37, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "Can be amended","classes": "govuk-tag--blue"}])), env.opts.autoescape);
output += "\n      </div>\n\n      <p class=\"govuk-body govuk-!-margin-top-4\">\n        <a class=\"govuk-link\" href=\"#\">View this return</a><br>\n        <a class=\"govuk-link\" href=\"/self-assessment/amend/fill-in\">Amend this return</a>\n      </p>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 48;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 49, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["self-assessment.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "self-assessment.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "self-assessment.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "self-assessment.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "self-assessment.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
output += t_16;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
output += t_18;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
output += t_20;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
output += t_22;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
output += t_24;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Self Assessment – Personal tax account";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 9, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 15;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/dashboard"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <span class=\"govuk-caption-l\">Personal tax account</span>\n  <h1 class=\"govuk-heading-xl\">Self Assessment</h1>\n\n  <div class=\"govuk-grid-row app-card-row\">\n    <div class=\"govuk-grid-column-one-half\">\n      <div class=\"app-card\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "currentPersona") == "attacker") {
output += "\n          <h2 class=\"govuk-heading-m app-card__heading\"><a class=\"govuk-link\" href=\"/self-assessment/tax-return-options\">Self Assessment return</a></h2>\n          <p class=\"govuk-body\">View or amend your Self Assessment return for tax year 2024 to 2025</p>\n        ";
;
}
else {
output += "\n          <h2 class=\"govuk-heading-m app-card__heading\"><a class=\"govuk-link\" href=\"/self-assessment/return/welcome\">Self Assessment return</a></h2>\n          <p class=\"govuk-body\">Start your Self Assessment return for tax year 2024 to 2025</p>\n        ";
;
}
output += "\n      </div>\n    </div>\n    <div class=\"govuk-grid-column-one-half\">\n      <div class=\"app-card\">\n        <h2 class=\"govuk-heading-m app-card__heading\">Next payment due</h2>\n        <p class=\"govuk-body\">31 January 2026</p>\n        <a class=\"govuk-link\" href=\"#\">Check what you owe</a>\n      </div>\n    </div>\n    <div class=\"govuk-grid-column-one-half\">\n      <div class=\"app-card\">\n        <h2 class=\"govuk-heading-m app-card__heading\">Payments, credits and refunds</h2>\n        <ul class=\"govuk-list govuk-!-margin-bottom-0\">\n          <li><a class=\"govuk-link\" href=\"#\">View your payment history</a></li>\n          <li><a class=\"govuk-link\" href=\"/self-assessment/repayment\">Claim a refund</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"govuk-grid-column-one-half\">\n      <div class=\"app-card\">\n        <h2 class=\"govuk-heading-m app-card__heading\"><a class=\"govuk-link\" href=\"/profile-settings/payment-methods/add/bank-account\">Update Bank Details</a></h2>\n        <p class=\"govuk-body\">Add or change the bank account we pay your repayments into</p>\n      </div>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 60;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 61, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["start.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "start.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "start.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "start.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
output += t_12;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
output += t_14;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
output += t_16;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
output += t_18;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Choose a prototype experience";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 7;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 8, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 13;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n      <h1 class=\"govuk-heading-xl\">Choose a prototype experience</h1>\n      <p class=\"govuk-body\">\n        Pick which journey to preview. Both currently lead through the same sign-in and Self Assessment flow,\n        with extra security steps shown only for the genuine taxpayer experience.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"govuk-grid-row app-persona-picker\">\n    <div class=\"govuk-grid-column-one-half\">\n      <form method=\"post\" action=\"/start\">\n        <input type=\"hidden\" name=\"persona\" value=\"genuine\">\n        <button type=\"submit\" class=\"app-persona-card\">\n          <span class=\"app-persona-card__title\">Genuine taxpayer experience</span>\n          <span class=\"app-persona-card__hint\">Sign in as the real account holder, using a trusted device</span>\n        </button>\n      </form>\n    </div>\n    <div class=\"govuk-grid-column-one-half\">\n      <form method=\"post\" action=\"/start\">\n        <input type=\"hidden\" name=\"persona\" value=\"attacker\">\n        <button type=\"submit\" class=\"app-persona-card\">\n          <span class=\"app-persona-card__title\">Attacker experience</span>\n          <span class=\"app-persona-card__hint\">Sign in as someone attempting unauthorised access</span>\n        </button>\n      </form>\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 46;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 47, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["trusted-devices/device.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "trusted-devices/device.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "trusted-devices/device.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "trusted-devices/device.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "trusted-devices/device.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/tag/macro.njk", false, "trusted-devices/device.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukTag")) {
var t_19 = t_16.govukTag;
} else {
cb(new Error("cannot import 'govukTag'")); return;
}
context.setVariable("govukTag", t_19);
output += "\n";
env.getTemplate("govuk/components/summary-list/macro.njk", false, "trusted-devices/device.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukSummaryList")) {
var t_23 = t_20.govukSummaryList;
} else {
cb(new Error("cannot import 'govukSummaryList'")); return;
}
context.setVariable("govukSummaryList", t_23);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "trusted-devices/device.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
t_24.getExported(function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
if(Object.prototype.hasOwnProperty.call(t_24, "govukButton")) {
var t_27 = t_24.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_27);
output += "\n";
env.getTemplate("govuk/components/inset-text/macro.njk", false, "trusted-devices/device.njk", false, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
t_28.getExported(function(t_30,t_28) {
if(t_30) { cb(t_30); return; }
if(Object.prototype.hasOwnProperty.call(t_28, "govukInsetText")) {
var t_31 = t_28.govukInsetText;
} else {
cb(new Error("cannot import 'govukInsetText'")); return;
}
context.setVariable("govukInsetText", t_31);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
output += t_34;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
output += t_36;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_39,t_38) {
if(t_39) { cb(t_39); return; }
output += t_38;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_41,t_40) {
if(t_41) { cb(t_41); return; }
output += t_40;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "device")),"name"), env.opts.autoescape);
output += " – Trusted devices";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 12;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 13, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 20, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/profile-settings/trusted-devices"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 23;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n\n      <h1 class=\"govuk-heading-xl\">\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "device")),"name"), env.opts.autoescape);
output += "\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "device")),"isCurrent")) {
output += runtime.suppressValue((lineno = 29, colno = 44, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "This device","classes": "govuk-tag--grey"}])), env.opts.autoescape);
;
}
output += "\n      </h1>\n\n      ";
output += runtime.suppressValue((lineno = 32, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukSummaryList"), "govukSummaryList", context, [{"rows": [{"key": {"text": "Location"},"value": {"text": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "device")),"location")}},{"key": {"text": "Status"},"value": {"text": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "device")),"lastActive")}},{"key": {"text": "First signed in"},"value": {"text": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "device")),"firstSignedIn")}}]}])), env.opts.autoescape);
output += "\n\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "device")),"isCurrent")) {
output += "\n        ";
output += runtime.suppressValue((lineno = 41, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukInsetText"), "govukInsetText", context, [{"text": "This is the device you're currently using, so it cannot be signed out from here. To end this session, sign out of your account."}])), env.opts.autoescape);
output += "\n      ";
;
}
else {
output += "\n        <p class=\"govuk-body\">If you do not recognise this device, sign it out and change your sign-in details.</p>\n        <form method=\"post\" action=\"/profile-settings/trusted-devices/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "device")),"id"), env.opts.autoescape);
output += "/sign-out\" novalidate>\n          ";
output += runtime.suppressValue((lineno = 47, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Sign out this device","classes": "govuk-button--warning"}])), env.opts.autoescape);
output += "\n        </form>\n      ";
;
}
output += "\n\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 55;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 56, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["trusted-devices/index.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.njk", true, "trusted-devices/index.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
env.getTemplate("hmrc/components/header/macro.njk", false, "trusted-devices/index.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "hmrcHeader")) {
var t_7 = t_4.hmrcHeader;
} else {
cb(new Error("cannot import 'hmrcHeader'")); return;
}
context.setVariable("hmrcHeader", t_7);
output += "\n";
env.getTemplate("hmrc/components/footer/macro.njk", false, "trusted-devices/index.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hmrcFooter")) {
var t_11 = t_8.hmrcFooter;
} else {
cb(new Error("cannot import 'hmrcFooter'")); return;
}
context.setVariable("hmrcFooter", t_11);
output += "\n";
env.getTemplate("govuk/components/back-link/macro.njk", false, "trusted-devices/index.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "govukBackLink")) {
var t_15 = t_12.govukBackLink;
} else {
cb(new Error("cannot import 'govukBackLink'")); return;
}
context.setVariable("govukBackLink", t_15);
output += "\n";
env.getTemplate("govuk/components/warning-text/macro.njk", false, "trusted-devices/index.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "govukWarningText")) {
var t_19 = t_16.govukWarningText;
} else {
cb(new Error("cannot import 'govukWarningText'")); return;
}
context.setVariable("govukWarningText", t_19);
output += "\n";
env.getTemplate("govuk/components/tag/macro.njk", false, "trusted-devices/index.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "govukTag")) {
var t_23 = t_20.govukTag;
} else {
cb(new Error("cannot import 'govukTag'")); return;
}
context.setVariable("govukTag", t_23);
output += "\n";
env.getTemplate("govuk/components/button/macro.njk", false, "trusted-devices/index.njk", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
t_24.getExported(function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
if(Object.prototype.hasOwnProperty.call(t_24, "govukButton")) {
var t_27 = t_24.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_27);
output += "\n";
env.getTemplate("govuk/components/notification-banner/macro.njk", false, "trusted-devices/index.njk", false, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
t_28.getExported(function(t_30,t_28) {
if(t_30) { cb(t_30); return; }
if(Object.prototype.hasOwnProperty.call(t_28, "govukNotificationBanner")) {
var t_31 = t_28.govukNotificationBanner;
} else {
cb(new Error("cannot import 'govukNotificationBanner'")); return;
}
context.setVariable("govukNotificationBanner", t_31);
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
output += t_32;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
output += t_34;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("containerStart"))(env, context, frame, runtime, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
output += t_36;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_39,t_38) {
if(t_39) { cb(t_39); return; }
output += t_38;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_41,t_40) {
if(t_41) { cb(t_41); return; }
output += t_40;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Trusted devices – Personal tax account";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 12;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 13, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcHeader"), "hmrcHeader", context, [{"homepageUrl": "/","signOutHref": "/login/email"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 19;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 20, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukBackLink"), "govukBackLink", context, [{"text": "Back","href": "/profile-settings"}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 23;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <div class=\"govuk-grid-row\">\n    <div class=\"govuk-grid-column-two-thirds\">\n\n      ";
if(runtime.contextOrFrameLookup(context, frame, "signedOutName")) {
output += "\n        ";
output += runtime.suppressValue((lineno = 28, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukNotificationBanner"), "govukNotificationBanner", context, [{"type": "success","html": "<strong>" + runtime.contextOrFrameLookup(context, frame, "signedOutName") + "</strong> has been signed out of your account."}])), env.opts.autoescape);
output += "\n      ";
;
}
output += "\n\n      ";
if(runtime.contextOrFrameLookup(context, frame, "signedOutAll")) {
output += "\n        ";
output += runtime.suppressValue((lineno = 35, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukNotificationBanner"), "govukNotificationBanner", context, [{"type": "success","text": "All other devices have been signed out of your account."}])), env.opts.autoescape);
output += "\n      ";
;
}
output += "\n\n      <h1 class=\"govuk-heading-xl\">Trusted devices</h1>\n      <p class=\"govuk-body\">These are the devices currently signed in to your Personal tax account.</p>\n\n      ";
output += runtime.suppressValue((lineno = 44, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukWarningText"), "govukWarningText", context, [{"text": "If you see a device you do not recognise, sign it out and change your sign-in details straight away.","iconFallbackText": "Warning"}])), env.opts.autoescape);
output += "\n\n      <ul class=\"app-manage-list govuk-list\">\n        ";
frame = frame.push();
var t_44 = runtime.contextOrFrameLookup(context, frame, "devices");
if(t_44) {t_44 = runtime.fromIterator(t_44);
var t_43 = t_44.length;
for(var t_42=0; t_42 < t_44.length; t_42++) {
var t_45 = t_44[t_42];
frame.set("device", t_45);
frame.set("loop.index", t_42 + 1);
frame.set("loop.index0", t_42);
frame.set("loop.revindex", t_43 - t_42);
frame.set("loop.revindex0", t_43 - t_42 - 1);
frame.set("loop.first", t_42 === 0);
frame.set("loop.last", t_42 === t_43 - 1);
frame.set("loop.length", t_43);
output += "\n          <li class=\"app-manage-list__item\">\n            <a class=\"app-manage-list__link\" href=\"/profile-settings/trusted-devices/";
output += runtime.suppressValue(runtime.memberLookup((t_45),"id"), env.opts.autoescape);
output += "\">\n              <span class=\"app-manage-list__icon\" aria-hidden=\"true\">\n                ";
if(runtime.memberLookup((t_45),"type") == "mobile") {
output += "\n                  <svg width=\"20\" height=\"28\" viewBox=\"0 0 20 28\" focusable=\"false\">\n                    <rect x=\"1\" y=\"1\" width=\"18\" height=\"26\" rx=\"2\" fill=\"none\" stroke=\"currentcolor\" stroke-width=\"2\"></rect>\n                    <line x1=\"1\" y1=\"21\" x2=\"19\" y2=\"21\" stroke=\"currentcolor\" stroke-width=\"2\"></line>\n                  </svg>\n                ";
;
}
else {
output += "\n                  <svg width=\"30\" height=\"24\" viewBox=\"0 0 30 24\" focusable=\"false\">\n                    <rect x=\"1\" y=\"1\" width=\"28\" height=\"18\" rx=\"1\" fill=\"none\" stroke=\"currentcolor\" stroke-width=\"2\"></rect>\n                    <line x1=\"10\" y1=\"23\" x2=\"20\" y2=\"23\" stroke=\"currentcolor\" stroke-width=\"2\"></line>\n                    <line x1=\"15\" y1=\"19\" x2=\"15\" y2=\"23\" stroke=\"currentcolor\" stroke-width=\"2\"></line>\n                  </svg>\n                ";
;
}
output += "\n              </span>\n              <span class=\"app-manage-list__details\">\n                <span class=\"app-manage-list__name\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_45),"name"), env.opts.autoescape);
output += "\n                  ";
if(runtime.memberLookup((t_45),"isCurrent")) {
output += runtime.suppressValue((lineno = 70, colno = 54, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [{"text": "This device","classes": "govuk-tag--grey app-manage-list__tag"}])), env.opts.autoescape);
;
}
output += "\n                </span>\n                <span class=\"app-manage-list__meta\">";
output += runtime.suppressValue(runtime.memberLookup((t_45),"location"), env.opts.autoescape);
output += " · ";
output += runtime.suppressValue(runtime.memberLookup((t_45),"lastActive"), env.opts.autoescape);
output += "</span>\n              </span>\n              <span class=\"app-manage-list__chevron\" aria-hidden=\"true\">&rsaquo;</span>\n            </a>\n          </li>\n        ";
;
}
}
frame = frame.pop();
output += "\n      </ul>\n\n      ";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "devices")) > 1) {
output += "\n        <form method=\"post\" action=\"/profile-settings/trusted-devices/sign-out-all\" novalidate>\n          ";
output += runtime.suppressValue((lineno = 82, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": "Sign out of all other devices","classes": "govuk-button--warning"}])), env.opts.autoescape);
output += "\n        </form>\n      ";
;
}
output += "\n\n    </div>\n  </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 90;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
output += runtime.suppressValue((lineno = 91, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "hmrcFooter"), "hmrcFooter", context, [{"meta": {"items": [{"text": "Help","href": "#"},{"text": "Privacy","href": "#"},{"text": "Cookies","href": "#"},{"text": "Accessibility statement","href": "#"},{"text": "Contact","href": "#"},{"text": "Terms and conditions","href": "#"},{"text": "Rhestr o Wasanaethau Cymraeg","href": "#"},{"text": "Government Digital Service","href": "#"}]}}])), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_header: b_header,
b_containerStart: b_containerStart,
b_content: b_content,
b_footer: b_footer,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["hmrc/components/header/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("hmrc/components/header/template.njk", false, "hmrc/components/header/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("hmrcHeader");
context.setVariable("hmrcHeader", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["hmrc/components/footer/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("hmrc/components/footer/template.njk", false, "hmrc/components/footer/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("hmrcFooter");
context.setVariable("hmrcFooter", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/warning-text/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/warning-text/template.njk", false, "govuk/components/warning-text/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukWarningText");
context.setVariable("govukWarningText", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/button/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/button/template.njk", false, "govuk/components/button/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukButton");
context.setVariable("govukButton", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/back-link/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/back-link/template.njk", false, "govuk/components/back-link/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukBackLink");
context.setVariable("govukBackLink", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["hmrc/components/service-navigation-language-select/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("hmrc/components/service-navigation-language-select/template.njk", false, "hmrc/components/service-navigation-language-select/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("hmrcServiceNavigationLanguageSelect");
context.setVariable("hmrcServiceNavigationLanguageSelect", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/notification-banner/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/notification-banner/template.njk", false, "govuk/components/notification-banner/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukNotificationBanner");
context.setVariable("govukNotificationBanner", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
env.getTemplate("govuk/components/skip-link/macro.njk", false, "govuk/template.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
t_5.getExported(function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
if(Object.prototype.hasOwnProperty.call(t_5, "govukSkipLink")) {
var t_8 = t_5.govukSkipLink;
} else {
cb(new Error("cannot import 'govukSkipLink'")); return;
}
context.setVariable("govukSkipLink", t_8);
env.getTemplate("govuk/components/header/macro.njk", false, "govuk/template.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
if(Object.prototype.hasOwnProperty.call(t_9, "govukHeader")) {
var t_12 = t_9.govukHeader;
} else {
cb(new Error("cannot import 'govukHeader'")); return;
}
context.setVariable("govukHeader", t_12);
env.getTemplate("govuk/components/service-navigation/macro.njk", false, "govuk/template.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
t_13.getExported(function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
if(Object.prototype.hasOwnProperty.call(t_13, "govukServiceNavigation")) {
var t_16 = t_13.govukServiceNavigation;
} else {
cb(new Error("cannot import 'govukServiceNavigation'")); return;
}
context.setVariable("govukServiceNavigation", t_16);
env.getTemplate("govuk/components/footer/macro.njk", false, "govuk/template.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
t_17.getExported(function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
if(Object.prototype.hasOwnProperty.call(t_17, "govukFooter")) {
var t_20 = t_17.govukFooter;
} else {
cb(new Error("cannot import 'govukFooter'")); return;
}
context.setVariable("govukFooter", t_20);
var t_21;
t_21 = env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "themeColor"),"#1d70b8",true);
frame.set("themeColor", t_21, true);
if(frame.topLevel) {
context.setVariable("themeColor", t_21);
}
if(frame.topLevel) {
context.addExport("themeColor", t_21);
}
var t_22;
t_22 = env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "assetPath"),"/assets",true);
frame.set("assetPath", t_22, true);
if(frame.topLevel) {
context.setVariable("assetPath", t_22);
}
if(frame.topLevel) {
context.addExport("assetPath", t_22);
}
output += "<!DOCTYPE html>\n<html lang=\"";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "htmlLang"),"en",true), env.opts.autoescape);
output += "\" class=\"govuk-template";
if(runtime.contextOrFrameLookup(context, frame, "htmlClasses")) {
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "htmlClasses"), env.opts.autoescape);
;
}
output += "\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title";
if(runtime.contextOrFrameLookup(context, frame, "pageTitleLang")) {
output += " lang=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitleLang"), env.opts.autoescape);
output += "\"";
;
}
output += ">";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
output += t_23;
output += "</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n    <meta name=\"theme-color\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "themeColor"), env.opts.autoescape);
output += "\">\n\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("head"))(env, context, frame, runtime, function(t_26,t_25) {
if(t_26) { cb(t_26); return; }
output += t_25;
output += "\n\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("headIcons"))(env, context, frame, runtime, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
output += t_27;
output += "\n    ";
if(runtime.contextOrFrameLookup(context, frame, "opengraphImageUrl") || runtime.contextOrFrameLookup(context, frame, "assetUrl")) {
output += "\n    <meta property=\"og:image\" content=\"";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "opengraphImageUrl"),runtime.contextOrFrameLookup(context, frame, "assetUrl") + "/images/govuk-opengraph-image.png",true), env.opts.autoescape);
output += "\">\n    ";
;
}
output += "\n  </head>\n  <body class=\"govuk-template__body";
if(runtime.contextOrFrameLookup(context, frame, "bodyClasses")) {
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "bodyClasses"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 33, colno = 107, runtime.callWrap(t_4, "govukAttributes", context, [runtime.contextOrFrameLookup(context, frame, "bodyAttributes")])), env.opts.autoescape);
output += ">\n    <script";
if(runtime.contextOrFrameLookup(context, frame, "cspNonce")) {
output += " nonce=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cspNonce"), env.opts.autoescape);
output += "\"";
;
}
output += ">document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');</script>\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("bodyStart"))(env, context, frame, runtime, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
output += t_29;
output += "\n\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("govukSkipLink"))(env, context, frame, runtime, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
output += t_31;
output += "\n\n    ";
output += "\n    ";
var macro_t_33 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_34 = "";if(env.getFilter("length").call(context, env.getFilter("trim").call(context, (lineno = 48, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])))) > 0) {
t_34 += "\n        <header class=\"govuk-template__header";
if(runtime.contextOrFrameLookup(context, frame, "headerClasses")) {
t_34 += " ";
t_34 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "headerClasses"), env.opts.autoescape);
;
}
t_34 += "\"";
t_34 += runtime.suppressValue((lineno = 49, colno = 121, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.contextOrFrameLookup(context, frame, "headerAttributes")])), env.opts.autoescape);
t_34 += ">\n          ";
t_34 += runtime.suppressValue((lineno = 50, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
t_34 += "\n        </header>";
;
}
t_34 += "\n    ";
;
frame = callerFrame;
return new runtime.SafeString(t_34);
});
context.setVariable("_govukTemplateHeader", macro_t_33);
output += "\n\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("header"))(env, context, frame, runtime, function(t_36,t_35) {
if(t_36) { cb(t_36); return; }
output += t_35;
output += "\n\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("container"))(env, context, frame, runtime, function(t_38,t_37) {
if(t_38) { cb(t_38); return; }
output += t_37;
output += "\n\n    ";
output += "\n    ";
var macro_t_39 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_40 = "";if(env.getFilter("length").call(context, env.getFilter("trim").call(context, (lineno = 87, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])))) > 0) {
t_40 += "\n        <footer class=\"govuk-template__footer";
if(runtime.contextOrFrameLookup(context, frame, "footerClasses")) {
t_40 += " ";
t_40 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "footerClasses"), env.opts.autoescape);
;
}
t_40 += "\"";
t_40 += runtime.suppressValue((lineno = 88, colno = 121, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.contextOrFrameLookup(context, frame, "footerAttributes")])), env.opts.autoescape);
t_40 += ">\n          ";
t_40 += runtime.suppressValue((lineno = 89, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
t_40 += "\n        </footer>";
;
}
t_40 += "\n    ";
;
frame = callerFrame;
return new runtime.SafeString(t_40);
});
context.setVariable("_govukTemplateFooter", macro_t_39);
output += "\n\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("footer"))(env, context, frame, runtime, function(t_42,t_41) {
if(t_42) { cb(t_42); return; }
output += t_41;
output += "\n\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("bodyEnd"))(env, context, frame, runtime, function(t_44,t_43) {
if(t_44) { cb(t_44); return; }
output += t_43;
output += "\n  </body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_pageTitle(env, context, frame, runtime, cb) {
var lineno = 14;
var colno = 76;
var output = "";
try {
var frame = frame.push(true);
output += "GOV.UK - The best place to find government services and information";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_head(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_headIcons(env, context, frame, runtime, cb) {
var lineno = 20;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
output += "\n      <link rel=\"icon\" sizes=\"48x48\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assetPath"), env.opts.autoescape);
output += "/images/favicon.ico\">\n      <link rel=\"icon\" sizes=\"any\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assetPath"), env.opts.autoescape);
output += "/images/favicon.svg\" type=\"image/svg+xml\">\n      <link rel=\"mask-icon\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assetPath"), env.opts.autoescape);
output += "/images/govuk-icon-mask.svg\" color=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "themeColor"), env.opts.autoescape);
output += "\">\n      <link rel=\"apple-touch-icon\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assetPath"), env.opts.autoescape);
output += "/images/govuk-icon-180.png\">\n      <link rel=\"manifest\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assetPath"), env.opts.autoescape);
output += "/manifest.json\">\n    ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_bodyStart(env, context, frame, runtime, cb) {
var lineno = 35;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_govukSkipLink(env, context, frame, runtime, cb) {
var lineno = 37;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
context.getBlock("skipLink")(env, context, frame, runtime, function(t_46,t_45) {
if(t_46) { cb(t_46); return; }
output += t_45;
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_skipLink(env, context, frame, runtime, cb) {
var lineno = 38;
var colno = 10;
var output = "";
try {
var frame = frame.push(true);
output += "\n        ";
output += runtime.suppressValue((lineno = 39, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukSkipLink"), "govukSkipLink", context, [{"href": "#main-content","text": "Skip to main content"}])), env.opts.autoescape);
output += "\n      ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 55;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
output += "\n      ";
output += runtime.suppressValue((lineno = 56, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_govukTemplateHeader"), "_govukTemplateHeader", context, [runtime.makeKeywordArgs({"caller": (function (){var macro_t_47 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_48 = "";t_48 += "\n        ";
context.getBlock("headerStart")(env, context, frame, runtime, function(t_50,t_49) {
if(t_50) { cb(t_50); return; }
t_48 += t_49;
t_48 += "\n        ";
context.getBlock("govukHeader")(env, context, frame, runtime, function(t_52,t_51) {
if(t_52) { cb(t_52); return; }
t_48 += t_51;
t_48 += "\n        ";
context.getBlock("govukServiceNavigation")(env, context, frame, runtime, function(t_54,t_53) {
if(t_54) { cb(t_54); return; }
t_48 += t_53;
t_48 += "\n        ";
context.getBlock("headerEnd")(env, context, frame, runtime, function(t_56,t_55) {
if(t_56) { cb(t_56); return; }
t_48 += t_55;
t_48 += "\n      ";
})})})});
frame = frame.pop();
return new runtime.SafeString(t_48);
});
return macro_t_47;})()})])), env.opts.autoescape);
output += "\n    ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_headerStart(env, context, frame, runtime, cb) {
var lineno = 57;
var colno = 11;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_govukHeader(env, context, frame, runtime, cb) {
var lineno = 58;
var colno = 11;
var output = "";
try {
var frame = frame.push(true);
output += "\n          ";
output += runtime.suppressValue((lineno = 59, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukHeader"), "govukHeader", context, [])), env.opts.autoescape);
output += "\n        ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_govukServiceNavigation(env, context, frame, runtime, cb) {
var lineno = 61;
var colno = 11;
var output = "";
try {
var frame = frame.push(true);
if(runtime.contextOrFrameLookup(context, frame, "serviceName")) {
output += "\n            ";
output += runtime.suppressValue((lineno = 63, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukServiceNavigation"), "govukServiceNavigation", context, [{"serviceName": runtime.contextOrFrameLookup(context, frame, "serviceName"),"serviceUrl": runtime.contextOrFrameLookup(context, frame, "serviceUrl")}])), env.opts.autoescape);
;
}
output += "\n        ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_headerEnd(env, context, frame, runtime, cb) {
var lineno = 69;
var colno = 11;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_container(env, context, frame, runtime, cb) {
var lineno = 73;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
output += "\n      <div class=\"govuk-width-container";
if(runtime.contextOrFrameLookup(context, frame, "containerClasses")) {
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "containerClasses"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 74, colno = 121, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.contextOrFrameLookup(context, frame, "containerAttributes")])), env.opts.autoescape);
output += ">\n        ";
context.getBlock("containerStart")(env, context, frame, runtime, function(t_58,t_57) {
if(t_58) { cb(t_58); return; }
output += t_57;
output += "\n        ";
context.getBlock("main")(env, context, frame, runtime, function(t_60,t_59) {
if(t_60) { cb(t_60); return; }
output += t_59;
output += "\n        ";
context.getBlock("containerEnd")(env, context, frame, runtime, function(t_62,t_61) {
if(t_62) { cb(t_62); return; }
output += t_61;
output += "\n      </div>\n    ";
cb(null, output);
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerStart(env, context, frame, runtime, cb) {
var lineno = 75;
var colno = 11;
var output = "";
try {
var frame = frame.push(true);
context.getBlock("beforeContent")(env, context, frame, runtime, function(t_64,t_63) {
if(t_64) { cb(t_64); return; }
output += t_63;
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_beforeContent(env, context, frame, runtime, cb) {
var lineno = 75;
var colno = 37;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = 76;
var colno = 11;
var output = "";
try {
var frame = frame.push(true);
output += "\n        <main class=\"govuk-main-wrapper";
if(runtime.contextOrFrameLookup(context, frame, "mainClasses")) {
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mainClasses"), env.opts.autoescape);
;
}
output += "\" id=\"main-content\"";
if(runtime.contextOrFrameLookup(context, frame, "mainLang")) {
output += " lang=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mainLang"), env.opts.autoescape);
output += "\"";
;
}
output += runtime.suppressValue((lineno = 77, colno = 181, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.contextOrFrameLookup(context, frame, "mainAttributes")])), env.opts.autoescape);
output += ">\n          ";
context.getBlock("content")(env, context, frame, runtime, function(t_66,t_65) {
if(t_66) { cb(t_66); return; }
output += t_65;
output += "\n        </main>\n        ";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 78;
var colno = 13;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_containerEnd(env, context, frame, runtime, cb) {
var lineno = 81;
var colno = 11;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footer(env, context, frame, runtime, cb) {
var lineno = 94;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
output += "\n      ";
output += runtime.suppressValue((lineno = 95, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_govukTemplateFooter"), "_govukTemplateFooter", context, [runtime.makeKeywordArgs({"caller": (function (){var macro_t_67 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_68 = "";t_68 += "\n        ";
context.getBlock("footerStart")(env, context, frame, runtime, function(t_70,t_69) {
if(t_70) { cb(t_70); return; }
t_68 += t_69;
t_68 += "\n        ";
context.getBlock("govukFooter")(env, context, frame, runtime, function(t_72,t_71) {
if(t_72) { cb(t_72); return; }
t_68 += t_71;
t_68 += "\n        ";
context.getBlock("footerEnd")(env, context, frame, runtime, function(t_74,t_73) {
if(t_74) { cb(t_74); return; }
t_68 += t_73;
t_68 += "\n      ";
})})});
frame = frame.pop();
return new runtime.SafeString(t_68);
});
return macro_t_67;})()})])), env.opts.autoescape);
output += "\n    ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footerStart(env, context, frame, runtime, cb) {
var lineno = 96;
var colno = 11;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_govukFooter(env, context, frame, runtime, cb) {
var lineno = 97;
var colno = 11;
var output = "";
try {
var frame = frame.push(true);
output += "\n          ";
output += runtime.suppressValue((lineno = 98, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukFooter"), "govukFooter", context, [])), env.opts.autoescape);
output += "\n        ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_footerEnd(env, context, frame, runtime, cb) {
var lineno = 100;
var colno = 11;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_bodyEnd(env, context, frame, runtime, cb) {
var lineno = 104;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_pageTitle: b_pageTitle,
b_head: b_head,
b_headIcons: b_headIcons,
b_bodyStart: b_bodyStart,
b_govukSkipLink: b_govukSkipLink,
b_skipLink: b_skipLink,
b_header: b_header,
b_headerStart: b_headerStart,
b_govukHeader: b_govukHeader,
b_govukServiceNavigation: b_govukServiceNavigation,
b_headerEnd: b_headerEnd,
b_container: b_container,
b_containerStart: b_containerStart,
b_beforeContent: b_beforeContent,
b_main: b_main,
b_content: b_content,
b_containerEnd: b_containerEnd,
b_footer: b_footer,
b_footerStart: b_footerStart,
b_govukFooter: b_govukFooter,
b_footerEnd: b_footerEnd,
b_bodyEnd: b_bodyEnd,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/radios/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/radios/template.njk", false, "govuk/components/radios/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukRadios");
context.setVariable("govukRadios", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/input/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/input/template.njk", false, "govuk/components/input/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukInput");
context.setVariable("govukInput", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/tag/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/tag/template.njk", false, "govuk/components/tag/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukTag");
context.setVariable("govukTag", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/summary-list/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/summary-list/template.njk", false, "govuk/components/summary-list/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukSummaryList");
context.setVariable("govukSummaryList", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/phase-banner/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/phase-banner/template.njk", false, "govuk/components/phase-banner/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukPhaseBanner");
context.setVariable("govukPhaseBanner", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/panel/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/panel/template.njk", false, "govuk/components/panel/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukPanel");
context.setVariable("govukPanel", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/checkboxes/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/checkboxes/template.njk", false, "govuk/components/checkboxes/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukCheckboxes");
context.setVariable("govukCheckboxes", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/details/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/details/template.njk", false, "govuk/components/details/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukDetails");
context.setVariable("govukDetails", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/inset-text/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/inset-text/template.njk", false, "govuk/components/inset-text/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukInsetText");
context.setVariable("govukInsetText", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["hmrc/components/header/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language"),"en");
frame.set("language", t_1, true);
if(frame.topLevel) {
context.setVariable("language", t_1);
}
if(frame.topLevel) {
context.addExport("language", t_1);
}
output += "\n";
env.getTemplate("hmrc/components/banner/macro.njk", false, "hmrc/components/header/template.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
t_2.getExported(function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
if(Object.prototype.hasOwnProperty.call(t_2, "hmrcBanner")) {
var t_5 = t_2.hmrcBanner;
} else {
cb(new Error("cannot import 'hmrcBanner'")); return;
}
context.setVariable("hmrcBanner", t_5);
output += "\n";
env.getTemplate("hmrc/components/user-research-banner/macro.njk", false, "hmrc/components/header/template.njk", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
t_6.getExported(function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
if(Object.prototype.hasOwnProperty.call(t_6, "hmrcUserResearchBanner")) {
var t_9 = t_6.hmrcUserResearchBanner;
} else {
cb(new Error("cannot import 'hmrcUserResearchBanner'")); return;
}
context.setVariable("hmrcUserResearchBanner", t_9);
output += "\n";
env.getTemplate("govuk/components/phase-banner/macro.njk", false, "hmrc/components/header/template.njk", false, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
t_10.getExported(function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
if(Object.prototype.hasOwnProperty.call(t_10, "govukPhaseBanner")) {
var t_13 = t_10.govukPhaseBanner;
} else {
cb(new Error("cannot import 'govukPhaseBanner'")); return;
}
context.setVariable("govukPhaseBanner", t_13);
output += "\n";
env.getTemplate("govuk/components/service-navigation/macro.njk", false, "hmrc/components/header/template.njk", false, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
t_14.getExported(function(t_16,t_14) {
if(t_16) { cb(t_16); return; }
if(Object.prototype.hasOwnProperty.call(t_14, "govukServiceNavigation")) {
var t_17 = t_14.govukServiceNavigation;
} else {
cb(new Error("cannot import 'govukServiceNavigation'")); return;
}
context.setVariable("govukServiceNavigation", t_17);
output += "\n\n";
env.getTemplate("govuk/macros/attributes.njk", false, "hmrc/components/header/template.njk", false, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
t_18.getExported(function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
if(Object.prototype.hasOwnProperty.call(t_18, "govukAttributes")) {
var t_21 = t_18.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_21);
output += "\n";
env.getTemplate("govuk/macros/logo.njk", false, "hmrc/components/header/template.njk", false, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
t_22.getExported(function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
if(Object.prototype.hasOwnProperty.call(t_22, "govukLogo")) {
var t_25 = t_22.govukLogo;
} else {
cb(new Error("cannot import 'govukLogo'")); return;
}
context.setVariable("govukLogo", t_25);
output += "<header class=\"govuk-template__header";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"headerClasses")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"headerClasses"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 9, colno = 127, runtime.callWrap(t_21, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"headerAttributes")])), env.opts.autoescape);
output += ">\n<div class=\"govuk-header hmrc-header";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"signOutHref")?" hmrc-header--with-additional-navigation":""), env.opts.autoescape);
output += "\" data-module=\"govuk-header\"";
output += runtime.suppressValue((lineno = 11, colno = 21, runtime.callWrap(t_21, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">\n  <div class=\"govuk-header__container ";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"containerClasses"),"govuk-width-container",true), env.opts.autoescape);
output += "\">\n    <div class=\"govuk-header__logo\">\n      <a href=\"";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"homepageUrl"),"//gov.uk",true), env.opts.autoescape);
output += "\" class=\"govuk-header__homepage-link\">\n          ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 15, colno = 22, runtime.callWrap(t_25, "govukLogo", context, [{"classes": "govuk-header__logotype","ariaLabelText": "GOV.UK"}]))),8), env.opts.autoescape);
output += "\n        ";
if((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"productName"))) {
output += "\n        <span class=\"govuk-header__product-name\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"productName"), env.opts.autoescape);
output += "</span>\n      ";
;
}
output += "\n      </a>\n    </div>\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"signOutHref")) {
output += "\n      <nav class=\"hmrc-sign-out-nav\">\n        <a class=\"govuk-link hmrc-sign-out-nav__link\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"signOutHref"), env.opts.autoescape);
output += "\">\n          ";
if(runtime.contextOrFrameLookup(context, frame, "language") == "cy") {
output += "Allgofnodi";
;
}
else {
output += "Sign out";
;
}
output += "\n        </a>\n      </nav>\n    ";
;
}
output += "\n  </div>\n</div>\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"displayHmrcBanner")) {
output += "\n  ";
output += runtime.suppressValue((lineno = 36, colno = 15, runtime.callWrap(t_5, "hmrcBanner", context, [{"language": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language")}])), env.opts.autoescape);
output += "\n";
;
}
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"serviceNavigation")) {
output += "\n    ";
output += runtime.suppressValue((lineno = 39, colno = 29, runtime.callWrap(t_17, "govukServiceNavigation", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"serviceNavigation")])), env.opts.autoescape);
output += "\n";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"phaseBanner")) {
output += "\n    ";
output += runtime.suppressValue((lineno = 42, colno = 23, runtime.callWrap(t_13, "govukPhaseBanner", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"phaseBanner")])), env.opts.autoescape);
output += "\n";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"userResearchBanner")) {
output += "\n    ";
output += runtime.suppressValue((lineno = 45, colno = 29, runtime.callWrap(t_9, "hmrcUserResearchBanner", context, [{"language": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language"),"url": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"userResearchBanner")),"url"),"hideCloseButton": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"userResearchBanner")),"hideCloseButton")}])), env.opts.autoescape);
output += "\n";
;
}
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"additionalBannersBlock")), env.opts.autoescape);
output += "\n</header>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["hmrc/components/footer/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/components/footer/macro.njk", false, "hmrc/components/footer/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukFooter")) {
var t_4 = t_1.govukFooter;
} else {
cb(new Error("cannot import 'govukFooter'")); return;
}
context.setVariable("govukFooter", t_4);
output += "\n";
env.getTemplate("govuk/macros/attributes.njk", false, "hmrc/components/footer/template.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
t_5.getExported(function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
if(Object.prototype.hasOwnProperty.call(t_5, "govukAttributes")) {
var t_8 = t_5.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_8);
output += "\n\n";
var t_9;
t_9 = (function() {
var output = "";
output += "\n  ";
if((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language") == "cy")) {
output += "Mae‘r holl gynnwys ar gael o dan ";
;
}
else {
output += "All content is available under the ";
;
}
output += "\n  <a\n    class=\"govuk-footer__link\"\n    href=\"https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/\"\n    rel=\"license\"\n  >";
if((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language") == "cy")) {
output += "y Drwydded Llywodraeth Agored";
;
}
else {
output += "Open Government Licence";
;
}
output += " v3.0</a>, ";
if((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language") == "cy")) {
output += "oni nodir yn wahanol";
;
}
else {
output += "except where otherwise stated";
;
}
;
return output;
})()
;
frame.set("contentLicenceHtml", t_9, true);
if(frame.topLevel) {
context.setVariable("contentLicenceHtml", t_9);
}
if(frame.topLevel) {
context.addExport("contentLicenceHtml", t_9);
}
output += "\n\n";
var t_10;
t_10 = (function() {
var output = "";
output += "\n© ";
if((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language") == "cy")) {
output += "Hawlfraint y Goron";
;
}
else {
output += "Crown copyright";
;
}
;
return output;
})()
;
frame.set("copyrightHtml", t_10, true);
if(frame.topLevel) {
context.setVariable("copyrightHtml", t_10);
}
if(frame.topLevel) {
context.addExport("copyrightHtml", t_10);
}
output += "\n\n";
var t_11;
t_11 = (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language") == "cy"?"Cysylltiadau cymorth":"Support links");
frame.set("defaultMetaVisuallyHiddenTitle", t_11, true);
if(frame.topLevel) {
context.setVariable("defaultMetaVisuallyHiddenTitle", t_11);
}
if(frame.topLevel) {
context.addExport("defaultMetaVisuallyHiddenTitle", t_11);
}
output += "\n\n<footer class=\"govuk-template__footer";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"footerClasses")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"footerClasses"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 18, colno = 127, runtime.callWrap(t_8, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"footerAttributes")])), env.opts.autoescape);
output += ">\n  ";
output += runtime.suppressValue((lineno = 19, colno = 16, runtime.callWrap(t_4, "govukFooter", context, [{"meta": (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")?{"visuallyHiddenTitle": env.getFilter("default").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")),"visuallyHiddenTitle"),runtime.contextOrFrameLookup(context, frame, "defaultMetaVisuallyHiddenTitle")),"html": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")),"html"),"text": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")),"text"),"items": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")),"items")}:""),"navigation": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"navigation"),"contentLicence": {"html": runtime.contextOrFrameLookup(context, frame, "contentLicenceHtml")},"copyright": {"html": runtime.contextOrFrameLookup(context, frame, "copyrightHtml")},"containerClasses": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"containerClasses"),"classes": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"),"attributes": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")}])), env.opts.autoescape);
output += "\n</footer>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/warning-text/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/warning-text/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "<div class=\"govuk-warning-text";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">\n  <span class=\"govuk-warning-text__icon\" aria-hidden=\"true\">!</span>\n  <strong class=\"govuk-warning-text__text\">\n    <span class=\"govuk-visually-hidden\">";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"iconFallbackText"),"Warning",true), env.opts.autoescape);
output += "</span>\n    ";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")?env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")), env.opts.autoescape);
output += "\n  </strong>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/button/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/button/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
var t_5;
t_5 = "govuk-button";
frame.set("classNames", t_5, true);
if(frame.topLevel) {
context.setVariable("classNames", t_5);
}
if(frame.topLevel) {
context.addExport("classNames", t_5);
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += "\n  ";
var t_6;
t_6 = runtime.contextOrFrameLookup(context, frame, "classNames") + " " + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes");
frame.set("classNames", t_6, true);
if(frame.topLevel) {
context.setVariable("classNames", t_6);
}
if(frame.topLevel) {
context.addExport("classNames", t_6);
}
output += "\n";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"isStartButton")) {
output += "\n  ";
var t_7;
t_7 = runtime.contextOrFrameLookup(context, frame, "classNames") + " govuk-button--start";
frame.set("classNames", t_7, true);
if(frame.topLevel) {
context.setVariable("classNames", t_7);
}
if(frame.topLevel) {
context.addExport("classNames", t_7);
}
output += "\n";
;
}
var macro_t_8 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_9 = "";t_9 += "\n  <svg class=\"govuk-button__start-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"17.5\" height=\"19\" viewBox=\"0 0 33 40\" aria-hidden=\"true\" focusable=\"false\">\n    <path fill=\"currentColor\" d=\"M0 0h13l20 20-20 20H0l20-20z\"/>\n  </svg>";
;
frame = callerFrame;
return new runtime.SafeString(t_9);
});
context.setVariable("_startIcon", macro_t_8);
var t_10;
t_10 = (function() {
var output = "";
output += " class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "classNames"), env.opts.autoescape);
output += "\" data-module=\"govuk-button\"";
output += runtime.suppressValue((lineno = 24, colno = 99, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"id"), env.opts.autoescape);
output += "\"";
;
}
;
return output;
})()
;
frame.set("commonAttributes", t_10, true);
if(frame.topLevel) {
context.setVariable("commonAttributes", t_10);
}
if(frame.topLevel) {
context.addExport("commonAttributes", t_10);
}
var t_11;
t_11 = (function() {
var output = "";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"isStartButton")) {
output += "<span>";
output += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html"))), env.opts.autoescape);
output += "</span>";
;
}
else {
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")?(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")))):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")), env.opts.autoescape);
;
}
;
return output;
})()
;
frame.set("buttonText", t_11, true);
if(frame.topLevel) {
context.setVariable("buttonText", t_11);
}
if(frame.topLevel) {
context.addExport("buttonText", t_11);
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"href")) {
output += "\n<a href=\"";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"href")?runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"href"):"#"), env.opts.autoescape);
output += "\" role=\"button\" draggable=\"false\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
output += ">\n  ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "buttonText")),2), env.opts.autoescape);
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"isStartButton")?env.getFilter("safe").call(context, (lineno = 43, colno = 16, runtime.callWrap(macro_t_8, "_startIcon", context, []))):""), env.opts.autoescape);
output += "\n</a>";
;
}
else {
output += "\n<button type=\"";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"type")?runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"type"):"submit"), env.opts.autoescape);
output += "\"";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"value")) {
output += " value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"value"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"name")) {
output += " name=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"name"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"disabled")) {
output += " disabled aria-disabled=\"true\"";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"preventDoubleClick") !== runtime.contextOrFrameLookup(context, frame, "undefined")) {
output += " data-prevent-double-click=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"preventDoubleClick"), env.opts.autoescape);
output += "\"";
;
}
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
output += ">\n  ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "buttonText")),2), env.opts.autoescape);
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"isStartButton")?env.getFilter("safe").call(context, (lineno = 54, colno = 16, runtime.callWrap(macro_t_8, "_startIcon", context, []))):""), env.opts.autoescape);
output += "\n</button>";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/back-link/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/back-link/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "<a href=\"";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"href"),"#",true), env.opts.autoescape);
output += "\" class=\"govuk-back-link";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")?env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")):(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text"),"Back",true))), env.opts.autoescape);
output += "</a>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["hmrc/components/service-navigation-language-select/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language") === "en") {
output += "\n  <nav class=\"hmrc-service-navigation-language-select\" aria-label=\"Language switcher\">\n    <ul class=\"hmrc-service-navigation-language-select__list\">\n      <li class=\"hmrc-service-navigation-language-select__list-item\">\n        <span aria-current=\"true\">ENG</span>\n      </li>\n      <li class=\"hmrc-service-navigation-language-select__list-item\">\n        <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"cy")),"href"), env.opts.autoescape);
output += "\"\n          hreflang=\"cy\"\n          lang=\"cy\"\n          rel=\"alternate\"\n          class=\"govuk-link govuk-service-navigation__link\">\n          CYM<span class=\"govuk-visually-hidden\"> – Newid yr iaith i’r Gymraeg</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n";
;
}
output += "\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language") === "cy") {
output += "\n  <nav class=\"hmrc-service-navigation-language-select\" aria-label=\"Switcher iaith\">\n    <ul class=\"hmrc-service-navigation-language-select__list\">\n      <li class=\"hmrc-service-navigation-language-select__list-item\">\n        <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"en")),"href"), env.opts.autoescape);
output += "\"\n          hreflang=\"en\"\n          lang=\"en\"\n          rel=\"alternate\"\n          class=\"govuk-link govuk-service-navigation__link\">\n          ENG<span class=\"govuk-visually-hidden\"> – Change the language to English</span>\n        </a>\n      </li>\n      <li class=\"hmrc-service-navigation-language-select__list-item\">\n        <span aria-current=\"true\">CYM</span>\n      </li>\n    </ul>\n  </nav>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/notification-banner/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/notification-banner/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"type") == "success") {
output += "\n  ";
var t_5;
t_5 = true;
frame.set("successBanner", t_5, true);
if(frame.topLevel) {
context.setVariable("successBanner", t_5);
}
if(frame.topLevel) {
context.addExport("successBanner", t_5);
}
output += "\n";
;
}
if(runtime.contextOrFrameLookup(context, frame, "successBanner")) {
output += "\n  ";
var t_6;
t_6 = "govuk-notification-banner--" + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"type");
frame.set("typeClass", t_6, true);
if(frame.topLevel) {
context.setVariable("typeClass", t_6);
}
if(frame.topLevel) {
context.addExport("typeClass", t_6);
}
output += "\n";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"role")) {
output += "\n  ";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"role");
frame.set("role", t_7, true);
if(frame.topLevel) {
context.setVariable("role", t_7);
}
if(frame.topLevel) {
context.addExport("role", t_7);
}
output += "\n";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "successBanner")) {
var t_8;
t_8 = "alert";
frame.set("role", t_8, true);
if(frame.topLevel) {
context.setVariable("role", t_8);
}
if(frame.topLevel) {
context.addExport("role", t_8);
}
output += "\n";
;
}
else {
var t_9;
t_9 = "region";
frame.set("role", t_9, true);
if(frame.topLevel) {
context.setVariable("role", t_9);
}
if(frame.topLevel) {
context.addExport("role", t_9);
}
output += "\n";
;
}
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"titleHtml")) {
output += "\n  ";
var t_10;
t_10 = env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"titleHtml"));
frame.set("title", t_10, true);
if(frame.topLevel) {
context.setVariable("title", t_10);
}
if(frame.topLevel) {
context.addExport("title", t_10);
}
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"titleText")) {
output += "\n  ";
var t_11;
t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"titleText");
frame.set("title", t_11, true);
if(frame.topLevel) {
context.setVariable("title", t_11);
}
if(frame.topLevel) {
context.addExport("title", t_11);
}
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "successBanner")) {
output += "\n  ";
var t_12;
t_12 = "Success";
frame.set("title", t_12, true);
if(frame.topLevel) {
context.setVariable("title", t_12);
}
if(frame.topLevel) {
context.addExport("title", t_12);
}
;
}
else {
output += "\n  ";
var t_13;
t_13 = "Important";
frame.set("title", t_13, true);
if(frame.topLevel) {
context.setVariable("title", t_13);
}
if(frame.topLevel) {
context.addExport("title", t_13);
}
;
}
;
}
;
}
output += "<div class=\"govuk-notification-banner";
if(runtime.contextOrFrameLookup(context, frame, "typeClass")) {
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "typeClass"), env.opts.autoescape);
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\" role=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "role"), env.opts.autoescape);
output += "\" aria-labelledby=\"";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"titleId"),"govuk-notification-banner-title",true), env.opts.autoescape);
output += "\" data-module=\"govuk-notification-banner\"";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"disableAutoFocus") !== runtime.contextOrFrameLookup(context, frame, "undefined")) {
output += " data-disable-auto-focus=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"disableAutoFocus"), env.opts.autoescape);
output += "\"";
;
}
output += runtime.suppressValue((lineno = 32, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">\n  <div class=\"govuk-notification-banner__header\">\n    <h";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"titleHeadingLevel"),2,true), env.opts.autoescape);
output += " class=\"govuk-notification-banner__title\" id=\"";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"titleId"),"govuk-notification-banner-title",true), env.opts.autoescape);
output += "\">\n      ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "\n    </h";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"titleHeadingLevel"),2,true), env.opts.autoescape);
output += ">\n  </div>\n  <div class=\"govuk-notification-banner__content\">\n  ";
if(runtime.contextOrFrameLookup(context, frame, "caller") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")) {
output += "\n    ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "caller")?(lineno = 40, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])):env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html"))),4)), env.opts.autoescape);
output += "\n  ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")) {
output += "\n    ";
output += "<p class=\"govuk-notification-banner__heading\">\n      ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")),6), env.opts.autoescape);
output += "\n    </p>\n  ";
;
}
;
}
output += "\n  </div>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/macros/attributes.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["attributes"], 
[], 
function (l_attributes, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("attributes", l_attributes);
var t_2 = "";var t_3;
t_3 = (env.getTest("string").call(context, l_attributes) === true?l_attributes:"");
frame.set("attributesHtml", t_3, true);
if(frame.topLevel) {
context.setVariable("attributesHtml", t_3);
}
if(frame.topLevel) {
context.addExport("attributesHtml", t_3);
}
if(env.getTest("escaped").call(context, l_attributes) === true && env.getTest("string").call(context, runtime.memberLookup((l_attributes),"val")) === true) {
t_2 += "\n    ";
var t_4;
t_4 = l_attributes;
frame.set("attributesHtml", t_4, true);
if(frame.topLevel) {
context.setVariable("attributesHtml", t_4);
}
if(frame.topLevel) {
context.addExport("attributesHtml", t_4);
}
;
}
else {
if(env.getTest("mapping").call(context, l_attributes) === true && !env.getTest("escaped").call(context, l_attributes) === true) {
t_2 += "\n    ";
frame = frame.push();
var t_7 = l_attributes;
if(t_7) {t_7 = runtime.fromIterator(t_7);
var t_5;
if(runtime.isArray(t_7)) {
var t_6 = t_7.length;
for(t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5][0];
frame.set("[object Object]", t_7[t_5][0]);
var t_9 = t_7[t_5][1];
frame.set("[object Object]", t_7[t_5][1]);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
var t_10;
t_10 = (env.getTest("mapping").call(context, t_9) === true && !env.getTest("escaped").call(context, t_9) === true?t_9:{"value": t_9,"optional": false});
frame.set("options", t_10, true);
if(frame.topLevel) {
context.setVariable("options", t_10);
}
if(frame.topLevel) {
context.addExport("options", t_10);
}
if(runtime.inOperator(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"value"),[runtime.contextOrFrameLookup(context, frame, "undefined"),null])) {
t_2 += "\n        ";
var t_11;
t_11 = null;
frame.set("value", t_11, true);
if(frame.topLevel) {
context.setVariable("value", t_11);
}
if(frame.topLevel) {
context.addExport("value", t_11);
}
t_2 += "\n        ";
var t_12;
t_12 = "";
frame.set("valueEscaped", t_12, true);
if(frame.topLevel) {
context.setVariable("valueEscaped", t_12);
}
if(frame.topLevel) {
context.addExport("valueEscaped", t_12);
}
;
}
else {
if(env.getTest("escaped").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"value")) === true) {
t_2 += "\n        ";
var t_13;
t_13 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"value")),"val");
frame.set("value", t_13, true);
if(frame.topLevel) {
context.setVariable("value", t_13);
}
if(frame.topLevel) {
context.addExport("value", t_13);
}
t_2 += "\n        ";
var t_14;
t_14 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"value");
frame.set("valueEscaped", t_14, true);
if(frame.topLevel) {
context.setVariable("valueEscaped", t_14);
}
if(frame.topLevel) {
context.addExport("valueEscaped", t_14);
}
;
}
else {
t_2 += "\n        ";
var t_15;
t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"value");
frame.set("value", t_15, true);
if(frame.topLevel) {
context.setVariable("value", t_15);
}
if(frame.topLevel) {
context.addExport("value", t_15);
}
t_2 += "\n        ";
var t_16;
t_16 = env.getFilter("escape").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"value"));
frame.set("valueEscaped", t_16, true);
if(frame.topLevel) {
context.setVariable("valueEscaped", t_16);
}
if(frame.topLevel) {
context.addExport("valueEscaped", t_16);
}
t_2 += "\n      ";
;
}
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"optional") === true && runtime.contextOrFrameLookup(context, frame, "value") === true) {
t_2 += "\n        ";
var t_17;
t_17 = runtime.contextOrFrameLookup(context, frame, "attributesHtml") + " " + env.getFilter("escape").call(context, t_8);
frame.set("attributesHtml", t_17, true);
if(frame.topLevel) {
context.setVariable("attributesHtml", t_17);
}
if(frame.topLevel) {
context.addExport("attributesHtml", t_17);
}
;
}
else {
if((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"optional") === true && !runtime.inOperator(runtime.contextOrFrameLookup(context, frame, "value"),[runtime.contextOrFrameLookup(context, frame, "undefined"),null,false])) || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"optional") !== true) {
t_2 += "\n        ";
var t_18;
t_18 = runtime.contextOrFrameLookup(context, frame, "attributesHtml") + " " + env.getFilter("escape").call(context, t_8) + "=\"" + runtime.contextOrFrameLookup(context, frame, "valueEscaped") + "\"";
frame.set("attributesHtml", t_18, true);
if(frame.topLevel) {
context.setVariable("attributesHtml", t_18);
}
if(frame.topLevel) {
context.addExport("attributesHtml", t_18);
}
t_2 += "\n      ";
;
}
;
}
t_2 += "\n    ";
;
}
} else {
t_5 = -1;
var t_6 = runtime.keys(t_7).length;
for(var t_19 in t_7) {
t_5++;
var t_20 = t_7[t_19];
frame.set("name", t_19);
frame.set("item", t_20);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
var t_21;
t_21 = (env.getTest("mapping").call(context, t_20) === true && !env.getTest("escaped").call(context, t_20) === true?t_20:{"value": t_20,"optional": false});
frame.set("options", t_21, true);
if(frame.topLevel) {
context.setVariable("options", t_21);
}
if(frame.topLevel) {
context.addExport("options", t_21);
}
if(runtime.inOperator(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"value"),[runtime.contextOrFrameLookup(context, frame, "undefined"),null])) {
t_2 += "\n        ";
var t_22;
t_22 = null;
frame.set("value", t_22, true);
if(frame.topLevel) {
context.setVariable("value", t_22);
}
if(frame.topLevel) {
context.addExport("value", t_22);
}
t_2 += "\n        ";
var t_23;
t_23 = "";
frame.set("valueEscaped", t_23, true);
if(frame.topLevel) {
context.setVariable("valueEscaped", t_23);
}
if(frame.topLevel) {
context.addExport("valueEscaped", t_23);
}
;
}
else {
if(env.getTest("escaped").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"value")) === true) {
t_2 += "\n        ";
var t_24;
t_24 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"value")),"val");
frame.set("value", t_24, true);
if(frame.topLevel) {
context.setVariable("value", t_24);
}
if(frame.topLevel) {
context.addExport("value", t_24);
}
t_2 += "\n        ";
var t_25;
t_25 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"value");
frame.set("valueEscaped", t_25, true);
if(frame.topLevel) {
context.setVariable("valueEscaped", t_25);
}
if(frame.topLevel) {
context.addExport("valueEscaped", t_25);
}
;
}
else {
t_2 += "\n        ";
var t_26;
t_26 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"value");
frame.set("value", t_26, true);
if(frame.topLevel) {
context.setVariable("value", t_26);
}
if(frame.topLevel) {
context.addExport("value", t_26);
}
t_2 += "\n        ";
var t_27;
t_27 = env.getFilter("escape").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"value"));
frame.set("valueEscaped", t_27, true);
if(frame.topLevel) {
context.setVariable("valueEscaped", t_27);
}
if(frame.topLevel) {
context.addExport("valueEscaped", t_27);
}
t_2 += "\n      ";
;
}
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"optional") === true && runtime.contextOrFrameLookup(context, frame, "value") === true) {
t_2 += "\n        ";
var t_28;
t_28 = runtime.contextOrFrameLookup(context, frame, "attributesHtml") + " " + env.getFilter("escape").call(context, t_19);
frame.set("attributesHtml", t_28, true);
if(frame.topLevel) {
context.setVariable("attributesHtml", t_28);
}
if(frame.topLevel) {
context.addExport("attributesHtml", t_28);
}
;
}
else {
if((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"optional") === true && !runtime.inOperator(runtime.contextOrFrameLookup(context, frame, "value"),[runtime.contextOrFrameLookup(context, frame, "undefined"),null,false])) || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "options")),"optional") !== true) {
t_2 += "\n        ";
var t_29;
t_29 = runtime.contextOrFrameLookup(context, frame, "attributesHtml") + " " + env.getFilter("escape").call(context, t_19) + "=\"" + runtime.contextOrFrameLookup(context, frame, "valueEscaped") + "\"";
frame.set("attributesHtml", t_29, true);
if(frame.topLevel) {
context.setVariable("attributesHtml", t_29);
}
if(frame.topLevel) {
context.addExport("attributesHtml", t_29);
}
t_2 += "\n      ";
;
}
;
}
t_2 += "\n    ";
;
}
}
}
frame = frame.pop();
t_2 += "\n  ";
;
}
;
}
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "attributesHtml")), env.opts.autoescape);
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukAttributes");
context.setVariable("govukAttributes", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/skip-link/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/skip-link/template.njk", false, "govuk/components/skip-link/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukSkipLink");
context.setVariable("govukSkipLink", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/header/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/header/template.njk", false, "govuk/components/header/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukHeader");
context.setVariable("govukHeader", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/service-navigation/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/service-navigation/template.njk", false, "govuk/components/service-navigation/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukServiceNavigation");
context.setVariable("govukServiceNavigation", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/footer/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/footer/template.njk", false, "govuk/components/footer/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukFooter");
context.setVariable("govukFooter", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/radios/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/radios/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "\n";
env.getTemplate("govuk/components/error-message/macro.njk", false, "govuk/components/radios/template.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
t_5.getExported(function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
if(Object.prototype.hasOwnProperty.call(t_5, "govukErrorMessage")) {
var t_8 = t_5.govukErrorMessage;
} else {
cb(new Error("cannot import 'govukErrorMessage'")); return;
}
context.setVariable("govukErrorMessage", t_8);
output += "\n";
env.getTemplate("govuk/components/fieldset/macro.njk", false, "govuk/components/radios/template.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
if(Object.prototype.hasOwnProperty.call(t_9, "govukFieldset")) {
var t_12 = t_9.govukFieldset;
} else {
cb(new Error("cannot import 'govukFieldset'")); return;
}
context.setVariable("govukFieldset", t_12);
output += "\n";
env.getTemplate("govuk/components/hint/macro.njk", false, "govuk/components/radios/template.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
t_13.getExported(function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
if(Object.prototype.hasOwnProperty.call(t_13, "govukHint")) {
var t_16 = t_13.govukHint;
} else {
cb(new Error("cannot import 'govukHint'")); return;
}
context.setVariable("govukHint", t_16);
output += "\n";
env.getTemplate("govuk/components/label/macro.njk", false, "govuk/components/radios/template.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
t_17.getExported(function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
if(Object.prototype.hasOwnProperty.call(t_17, "govukLabel")) {
var t_20 = t_17.govukLabel;
} else {
cb(new Error("cannot import 'govukLabel'")); return;
}
context.setVariable("govukLabel", t_20);
var t_21;
t_21 = (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"idPrefix")?runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"idPrefix"):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"name"));
frame.set("idPrefix", t_21, true);
if(frame.topLevel) {
context.setVariable("idPrefix", t_21);
}
if(frame.topLevel) {
context.addExport("idPrefix", t_21);
}
var t_22;
t_22 = (runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"fieldset")),"describedBy")?runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"fieldset")),"describedBy"):"");
frame.set("describedBy", t_22, true);
if(frame.topLevel) {
context.setVariable("describedBy", t_22);
}
if(frame.topLevel) {
context.addExport("describedBy", t_22);
}
var t_23;
t_23 = (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"fieldset")?true:false);
frame.set("hasFieldset", t_23, true);
if(frame.topLevel) {
context.setVariable("hasFieldset", t_23);
}
if(frame.topLevel) {
context.addExport("hasFieldset", t_23);
}
var macro_t_24 = runtime.makeMacro(
["params", "item", "index"], 
[], 
function (l_params, l_item, l_index, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
frame.set("item", l_item);
frame.set("index", l_index);
var t_25 = "";var t_26;
t_26 = (runtime.memberLookup((l_item),"id")?runtime.memberLookup((l_item),"id"):runtime.contextOrFrameLookup(context, frame, "idPrefix") + ((l_index > 1?"-" + l_index:"")));
frame.set("itemId", t_26, true);
if(frame.topLevel) {
context.setVariable("itemId", t_26);
}
if(frame.topLevel) {
context.addExport("itemId", t_26);
}
t_25 += "\n  ";
var t_27;
t_27 = "conditional-" + runtime.contextOrFrameLookup(context, frame, "itemId");
frame.set("conditionalId", t_27, true);
if(frame.topLevel) {
context.setVariable("conditionalId", t_27);
}
if(frame.topLevel) {
context.addExport("conditionalId", t_27);
}
if(runtime.memberLookup((l_item),"divider")) {
t_25 += "\n    <div class=\"govuk-radios__divider\">";
t_25 += runtime.suppressValue(runtime.memberLookup((l_item),"divider"), env.opts.autoescape);
t_25 += "</div>\n  ";
;
}
else {
t_25 += "\n    ";
var t_28;
t_28 = env.getFilter("default").call(context, runtime.memberLookup((l_item),"checked"),(runtime.memberLookup((l_params),"value")?(runtime.memberLookup((l_item),"value") == runtime.memberLookup((l_params),"value") && runtime.memberLookup((l_item),"checked") != false):false),true);
frame.set("isChecked", t_28, true);
if(frame.topLevel) {
context.setVariable("isChecked", t_28);
}
if(frame.topLevel) {
context.addExport("isChecked", t_28);
}
t_25 += "\n    ";
var t_29;
t_29 = (runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"text") || runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"html")?true:"");
frame.set("hasHint", t_29, true);
if(frame.topLevel) {
context.setVariable("hasHint", t_29);
}
if(frame.topLevel) {
context.addExport("hasHint", t_29);
}
t_25 += "\n    ";
var t_30;
t_30 = runtime.contextOrFrameLookup(context, frame, "itemId") + "-item-hint";
frame.set("itemHintId", t_30, true);
if(frame.topLevel) {
context.setVariable("itemHintId", t_30);
}
if(frame.topLevel) {
context.addExport("itemHintId", t_30);
}
t_25 += "\n    <div class=\"govuk-radios__item\">\n      <input class=\"govuk-radios__input\" id=\"";
t_25 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "itemId"), env.opts.autoescape);
t_25 += "\" name=\"";
t_25 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_25 += "\" type=\"radio\" value=\"";
t_25 += runtime.suppressValue(runtime.memberLookup((l_item),"value"), env.opts.autoescape);
t_25 += "\"";
t_25 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "isChecked")?" checked":""), env.opts.autoescape);
t_25 += runtime.suppressValue((runtime.memberLookup((l_item),"disabled")?" disabled":""), env.opts.autoescape);
if(runtime.memberLookup((runtime.memberLookup((l_item),"conditional")),"html")) {
t_25 += " data-aria-controls=\"";
t_25 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "conditionalId"), env.opts.autoescape);
t_25 += "\"";
;
}
if(runtime.contextOrFrameLookup(context, frame, "hasHint")) {
t_25 += " aria-describedby=\"";
t_25 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "itemHintId"), env.opts.autoescape);
t_25 += "\"";
;
}
t_25 += runtime.suppressValue((lineno = 34, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup((l_item),"attributes")])), env.opts.autoescape);
t_25 += ">\n      ";
t_25 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 35, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukLabel"), "govukLabel", context, [{"html": runtime.memberLookup((l_item),"html"),"text": runtime.memberLookup((l_item),"text"),"classes": "govuk-radios__label" + ((runtime.memberLookup((runtime.memberLookup((l_item),"label")),"classes")?" " + runtime.memberLookup((runtime.memberLookup((l_item),"label")),"classes"):"")),"attributes": runtime.memberLookup((runtime.memberLookup((l_item),"label")),"attributes"),"for": runtime.contextOrFrameLookup(context, frame, "itemId")}]))),6), env.opts.autoescape);
t_25 += "\n      ";
if(runtime.contextOrFrameLookup(context, frame, "hasHint")) {
t_25 += "\n      ";
t_25 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 43, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukHint"), "govukHint", context, [{"id": runtime.contextOrFrameLookup(context, frame, "itemHintId"),"classes": "govuk-radios__hint" + ((runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"classes")?" " + runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"classes"):"")),"attributes": runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"attributes"),"html": runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"html"),"text": runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"text")}]))),6), env.opts.autoescape);
t_25 += "\n      ";
;
}
t_25 += "\n    </div>\n    ";
if(runtime.memberLookup((runtime.memberLookup((l_item),"conditional")),"html")) {
t_25 += "\n    <div class=\"govuk-radios__conditional";
if(!runtime.contextOrFrameLookup(context, frame, "isChecked")) {
t_25 += " govuk-radios__conditional--hidden";
;
}
t_25 += "\" id=\"";
t_25 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "conditionalId"), env.opts.autoescape);
t_25 += "\">\n      ";
t_25 += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((l_item),"conditional")),"html"))), env.opts.autoescape);
t_25 += "\n    </div>\n    ";
;
}
t_25 += "\n  ";
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_25);
});
context.setVariable("_radioItem", macro_t_24);
var t_31;
t_31 = (function() {
var output = "";
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")) {
output += "\n  ";
var t_32;
t_32 = runtime.contextOrFrameLookup(context, frame, "idPrefix") + "-hint";
frame.set("hintId", t_32, true);
if(frame.topLevel) {
context.setVariable("hintId", t_32);
}
if(frame.topLevel) {
context.addExport("hintId", t_32);
}
output += "\n  ";
var t_33;
t_33 = (runtime.contextOrFrameLookup(context, frame, "describedBy")?runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "hintId"):runtime.contextOrFrameLookup(context, frame, "hintId"));
frame.set("describedBy", t_33, true);
if(frame.topLevel) {
context.setVariable("describedBy", t_33);
}
if(frame.topLevel) {
context.addExport("describedBy", t_33);
}
output += "\n  ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 65, colno = 14, runtime.callWrap(t_16, "govukHint", context, [{"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"classes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")),"classes"),"attributes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")),"attributes"),"html": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")),"html"),"text": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")),"text")}]))),2), env.opts.autoescape);
output += "\n";
;
}
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")) {
output += "\n  ";
var t_34;
t_34 = runtime.contextOrFrameLookup(context, frame, "idPrefix") + "-error";
frame.set("errorId", t_34, true);
if(frame.topLevel) {
context.setVariable("errorId", t_34);
}
if(frame.topLevel) {
context.addExport("errorId", t_34);
}
output += "\n  ";
var t_35;
t_35 = (runtime.contextOrFrameLookup(context, frame, "describedBy")?runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "errorId"):runtime.contextOrFrameLookup(context, frame, "errorId"));
frame.set("describedBy", t_35, true);
if(frame.topLevel) {
context.setVariable("describedBy", t_35);
}
if(frame.topLevel) {
context.addExport("describedBy", t_35);
}
output += "\n  ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 76, colno = 22, runtime.callWrap(t_8, "govukErrorMessage", context, [{"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"classes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"classes"),"attributes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"attributes"),"html": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"html"),"text": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"text"),"visuallyHiddenText": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"visuallyHiddenText")}]))),2), env.opts.autoescape);
output += "\n";
;
}
output += "\n  <div class=\"govuk-radios";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 86, colno = 23, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += " data-module=\"govuk-radios\">\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInputs")) {
output += "\n    ";
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInputs")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInputs")),"html"))),4):runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInputs")),"text")), env.opts.autoescape);
output += "\n    ";
;
}
output += "\n    ";
frame = frame.push();
var t_38 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"items");
if(t_38) {t_38 = runtime.fromIterator(t_38);
var t_37 = t_38.length;
for(var t_36=0; t_36 < t_38.length; t_36++) {
var t_39 = t_38[t_36];
frame.set("item", t_39);
frame.set("loop.index", t_36 + 1);
frame.set("loop.index0", t_36);
frame.set("loop.revindex", t_37 - t_36);
frame.set("loop.revindex0", t_37 - t_36 - 1);
frame.set("loop.first", t_36 === 0);
frame.set("loop.last", t_36 === t_37 - 1);
frame.set("loop.length", t_37);
output += "\n      ";
if(t_39) {
output += runtime.suppressValue((lineno = 92, colno = 22, runtime.callWrap(macro_t_24, "_radioItem", context, [runtime.contextOrFrameLookup(context, frame, "params"),t_39,runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index")])), env.opts.autoescape);
;
}
output += "\n    ";
;
}
}
frame = frame.pop();
output += "\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInputs")) {
output += "\n    ";
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInputs")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInputs")),"html"))),4):runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInputs")),"text")), env.opts.autoescape);
output += "\n    ";
;
}
output += "\n  </div>\n";
;
return output;
})()
;
frame.set("innerHtml", t_31, true);
if(frame.topLevel) {
context.setVariable("innerHtml", t_31);
}
if(frame.topLevel) {
context.addExport("innerHtml", t_31);
}
output += "<div class=\"govuk-form-group";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")) {
output += " govuk-form-group--error";
;
}
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 102, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"attributes")])), env.opts.autoescape);
output += ">\n";
if(runtime.contextOrFrameLookup(context, frame, "hasFieldset")) {
output += "\n  ";
output += runtime.suppressValue(env.getFilter("trim").call(context, (lineno = 104, colno = 18, runtime.callWrap(t_12, "govukFieldset", context, [{"describedBy": runtime.contextOrFrameLookup(context, frame, "describedBy"),"classes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"fieldset")),"classes"),"attributes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"fieldset")),"attributes"),"legend": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"fieldset")),"legend"),"html": env.getFilter("trim").call(context, runtime.contextOrFrameLookup(context, frame, "innerHtml"))}]))), env.opts.autoescape);
output += "\n";
;
}
else {
output += "\n  ";
output += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "innerHtml"))), env.opts.autoescape);
output += "\n";
;
}
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/input/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/input/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "\n";
env.getTemplate("govuk/components/error-message/macro.njk", false, "govuk/components/input/template.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
t_5.getExported(function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
if(Object.prototype.hasOwnProperty.call(t_5, "govukErrorMessage")) {
var t_8 = t_5.govukErrorMessage;
} else {
cb(new Error("cannot import 'govukErrorMessage'")); return;
}
context.setVariable("govukErrorMessage", t_8);
output += "\n";
env.getTemplate("govuk/components/hint/macro.njk", false, "govuk/components/input/template.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
if(Object.prototype.hasOwnProperty.call(t_9, "govukHint")) {
var t_12 = t_9.govukHint;
} else {
cb(new Error("cannot import 'govukHint'")); return;
}
context.setVariable("govukHint", t_12);
output += "\n";
env.getTemplate("govuk/components/label/macro.njk", false, "govuk/components/input/template.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
t_13.getExported(function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
if(Object.prototype.hasOwnProperty.call(t_13, "govukLabel")) {
var t_16 = t_13.govukLabel;
} else {
cb(new Error("cannot import 'govukLabel'")); return;
}
context.setVariable("govukLabel", t_16);
var t_17;
t_17 = "govuk-input";
frame.set("classNames", t_17, true);
if(frame.topLevel) {
context.setVariable("classNames", t_17);
}
if(frame.topLevel) {
context.addExport("classNames", t_17);
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += "\n  ";
var t_18;
t_18 = runtime.contextOrFrameLookup(context, frame, "classNames") + " " + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes");
frame.set("classNames", t_18, true);
if(frame.topLevel) {
context.setVariable("classNames", t_18);
}
if(frame.topLevel) {
context.addExport("classNames", t_18);
}
output += "\n";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")) {
output += "\n  ";
var t_19;
t_19 = runtime.contextOrFrameLookup(context, frame, "classNames") + " govuk-input--error";
frame.set("classNames", t_19, true);
if(frame.topLevel) {
context.setVariable("classNames", t_19);
}
if(frame.topLevel) {
context.addExport("classNames", t_19);
}
output += "\n";
;
}
var t_20;
t_20 = (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"describedBy")?runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"describedBy"):runtime.contextOrFrameLookup(context, frame, "undefined"));
frame.set("describedBy", t_20, true);
if(frame.topLevel) {
context.setVariable("describedBy", t_20);
}
if(frame.topLevel) {
context.addExport("describedBy", t_20);
}
var t_21;
t_21 = (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"id")?runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"id"):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"name"));
frame.set("id", t_21, true);
if(frame.topLevel) {
context.setVariable("id", t_21);
}
if(frame.topLevel) {
context.addExport("id", t_21);
}
var t_22;
t_22 = (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"prefix") && (runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"prefix")),"text") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"prefix")),"html"))?true:false);
frame.set("hasPrefix", t_22, true);
if(frame.topLevel) {
context.setVariable("hasPrefix", t_22);
}
if(frame.topLevel) {
context.addExport("hasPrefix", t_22);
}
var t_23;
t_23 = (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"suffix") && (runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"suffix")),"text") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"suffix")),"html"))?true:false);
frame.set("hasSuffix", t_23, true);
if(frame.topLevel) {
context.setVariable("hasSuffix", t_23);
}
if(frame.topLevel) {
context.addExport("hasSuffix", t_23);
}
var t_24;
t_24 = (runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInput") && (runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInput")),"text") || runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInput")),"html"))?true:false);
frame.set("hasBeforeInput", t_24, true);
if(frame.topLevel) {
context.setVariable("hasBeforeInput", t_24);
}
if(frame.topLevel) {
context.addExport("hasBeforeInput", t_24);
}
var t_25;
t_25 = (runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInput") && (runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInput")),"text") || runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInput")),"html"))?true:false);
frame.set("hasAfterInput", t_25, true);
if(frame.topLevel) {
context.setVariable("hasAfterInput", t_25);
}
if(frame.topLevel) {
context.addExport("hasAfterInput", t_25);
}
var macro_t_26 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_27 = "";t_27 += "<input";
t_27 += runtime.suppressValue((lineno = 28, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [{"class": runtime.contextOrFrameLookup(context, frame, "classNames"),"id": runtime.contextOrFrameLookup(context, frame, "id"),"name": runtime.memberLookup((l_params),"name"),"type": env.getFilter("default").call(context, runtime.memberLookup((l_params),"type"),"text",true),"spellcheck": {"value": ((lineno = 35, colno = 35, runtime.callWrap(runtime.memberLookup(([true,false]),"includes"), "--expression--[\"includes\"]", context, [runtime.memberLookup((l_params),"spellcheck")]))?env.getFilter("string").call(context, runtime.memberLookup((l_params),"spellcheck")):false),"optional": true},"value": {"value": runtime.memberLookup((l_params),"value"),"optional": true},"disabled": {"value": runtime.memberLookup((l_params),"disabled"),"optional": true},"aria-describedby": {"value": runtime.contextOrFrameLookup(context, frame, "describedBy"),"optional": true},"autocomplete": {"value": runtime.memberLookup((l_params),"autocomplete"),"optional": true},"autocapitalize": {"value": runtime.memberLookup((l_params),"autocapitalize"),"optional": true},"pattern": {"value": runtime.memberLookup((l_params),"pattern"),"optional": true},"inputmode": {"value": runtime.memberLookup((l_params),"inputmode"),"optional": true}}])), env.opts.autoescape);
t_27 += runtime.suppressValue((lineno = 69, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup((l_params),"attributes")])), env.opts.autoescape);
t_27 += ">";
;
frame = callerFrame;
return new runtime.SafeString(t_27);
});
context.setVariable("_inputElement", macro_t_26);
var macro_t_28 = runtime.makeMacro(
["affix", "type"], 
[], 
function (l_affix, l_type, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("affix", l_affix);
frame.set("type", l_type);
var t_29 = "";t_29 += "\n  <div class=\"govuk-input__";
t_29 += runtime.suppressValue(l_type, env.opts.autoescape);
if(runtime.memberLookup((l_affix),"classes")) {
t_29 += " ";
t_29 += runtime.suppressValue(runtime.memberLookup((l_affix),"classes"), env.opts.autoescape);
;
}
t_29 += "\" aria-hidden=\"true\"";
t_29 += runtime.suppressValue((lineno = 73, colno = 132, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup((l_affix),"attributes")])), env.opts.autoescape);
t_29 += ">";
t_29 += runtime.suppressValue((runtime.memberLookup((l_affix),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((l_affix),"html"))),4):runtime.memberLookup((l_affix),"text")), env.opts.autoescape);
t_29 += "</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_29);
});
context.setVariable("_affixItem", macro_t_28);
output += "<div class=\"govuk-form-group";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")) {
output += " govuk-form-group--error";
;
}
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 79, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"attributes")])), env.opts.autoescape);
output += ">\n  ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 80, colno = 15, runtime.callWrap(t_16, "govukLabel", context, [{"html": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"label")),"html"),"text": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"label")),"text"),"classes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"label")),"classes"),"isPageHeading": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"label")),"isPageHeading"),"attributes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"label")),"attributes"),"for": runtime.contextOrFrameLookup(context, frame, "id")}]))),2), env.opts.autoescape);
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")) {
output += "\n  ";
var t_30;
t_30 = runtime.contextOrFrameLookup(context, frame, "id") + "-hint";
frame.set("hintId", t_30, true);
if(frame.topLevel) {
context.setVariable("hintId", t_30);
}
if(frame.topLevel) {
context.addExport("hintId", t_30);
}
output += "\n  ";
var t_31;
t_31 = (runtime.contextOrFrameLookup(context, frame, "describedBy")?runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "hintId"):runtime.contextOrFrameLookup(context, frame, "hintId"));
frame.set("describedBy", t_31, true);
if(frame.topLevel) {
context.setVariable("describedBy", t_31);
}
if(frame.topLevel) {
context.addExport("describedBy", t_31);
}
output += "\n  ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 91, colno = 14, runtime.callWrap(t_12, "govukHint", context, [{"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"classes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")),"classes"),"attributes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")),"attributes"),"html": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")),"html"),"text": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")),"text")}]))),2), env.opts.autoescape);
output += "\n";
;
}
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")) {
output += "\n  ";
var t_32;
t_32 = runtime.contextOrFrameLookup(context, frame, "id") + "-error";
frame.set("errorId", t_32, true);
if(frame.topLevel) {
context.setVariable("errorId", t_32);
}
if(frame.topLevel) {
context.addExport("errorId", t_32);
}
output += "\n  ";
var t_33;
t_33 = (runtime.contextOrFrameLookup(context, frame, "describedBy")?runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "errorId"):runtime.contextOrFrameLookup(context, frame, "errorId"));
frame.set("describedBy", t_33, true);
if(frame.topLevel) {
context.setVariable("describedBy", t_33);
}
if(frame.topLevel) {
context.addExport("describedBy", t_33);
}
output += "\n  ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 102, colno = 22, runtime.callWrap(t_8, "govukErrorMessage", context, [{"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"classes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"classes"),"attributes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"attributes"),"html": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"html"),"text": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"text"),"visuallyHiddenText": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"visuallyHiddenText")}]))),2), env.opts.autoescape);
output += "\n";
;
}
if(runtime.contextOrFrameLookup(context, frame, "hasPrefix") || runtime.contextOrFrameLookup(context, frame, "hasSuffix") || runtime.contextOrFrameLookup(context, frame, "hasBeforeInput") || runtime.contextOrFrameLookup(context, frame, "hasAfterInput")) {
output += "\n  <div class=\"govuk-input__wrapper";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"inputWrapper")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"inputWrapper")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 114, colno = 23, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"inputWrapper")),"attributes")])), env.opts.autoescape);
output += ">\n    ";
if(runtime.contextOrFrameLookup(context, frame, "hasBeforeInput")) {
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInput")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInput")),"html"))),4,true):runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInput")),"text")), env.opts.autoescape);
output += "\n    ";
;
}
output += "\n    ";
if(runtime.contextOrFrameLookup(context, frame, "hasPrefix")) {
output += runtime.suppressValue(env.getFilter("indent").call(context, (lineno = 119, colno = 20, runtime.callWrap(macro_t_28, "_affixItem", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"prefix"),"prefix"])),2,true), env.opts.autoescape);
output += "\n    ";
;
}
output += "\n    ";
output += runtime.suppressValue((lineno = 121, colno = 20, runtime.callWrap(macro_t_26, "_inputElement", context, [runtime.contextOrFrameLookup(context, frame, "params")])), env.opts.autoescape);
output += "\n    ";
if(runtime.contextOrFrameLookup(context, frame, "hasSuffix")) {
output += runtime.suppressValue(env.getFilter("indent").call(context, (lineno = 123, colno = 20, runtime.callWrap(macro_t_28, "_affixItem", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"suffix"),"suffix"])),2,true), env.opts.autoescape);
output += "\n    ";
;
}
output += "\n    ";
if(runtime.contextOrFrameLookup(context, frame, "hasAfterInput")) {
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInput")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInput")),"html"))),4,true):runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInput")),"text")), env.opts.autoescape);
output += "\n    ";
;
}
output += "\n  </div>\n";
;
}
else {
output += "\n  ";
output += runtime.suppressValue((lineno = 130, colno = 18, runtime.callWrap(macro_t_26, "_inputElement", context, [runtime.contextOrFrameLookup(context, frame, "params")])), env.opts.autoescape);
output += "\n";
;
}
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/tag/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/tag/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "<strong class=\"govuk-tag";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">\n  ";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html"))),2):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")), env.opts.autoescape);
output += "\n</strong>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/summary-list/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/summary-list/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
var macro_t_5 = runtime.makeMacro(
["action", "cardTitle"], 
[], 
function (l_action, l_cardTitle, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("action", l_action);
frame.set("cardTitle", l_cardTitle);
var t_6 = "";t_6 += "\n  <a class=\"govuk-link";
if(runtime.memberLookup((l_action),"classes")) {
t_6 += " ";
t_6 += runtime.suppressValue(runtime.memberLookup((l_action),"classes"), env.opts.autoescape);
;
}
t_6 += "\" href=\"";
t_6 += runtime.suppressValue(runtime.memberLookup((l_action),"href"), env.opts.autoescape);
t_6 += "\"";
t_6 += runtime.suppressValue((lineno = 4, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup((l_action),"attributes")])), env.opts.autoescape);
t_6 += ">";
t_6 += runtime.suppressValue((runtime.memberLookup((l_action),"html")?env.getFilter("indent").call(context, env.getFilter("safe").call(context, runtime.memberLookup((l_action),"html")),4):runtime.memberLookup((l_action),"text")), env.opts.autoescape);
if(runtime.memberLookup((l_action),"visuallyHiddenText") || l_cardTitle) {
t_6 += "<span class=\"govuk-visually-hidden\">";
if(runtime.memberLookup((l_action),"visuallyHiddenText")) {
t_6 += " ";
t_6 += runtime.suppressValue(runtime.memberLookup((l_action),"visuallyHiddenText"), env.opts.autoescape);
;
}
if(l_cardTitle) {
t_6 += " (";
t_6 += runtime.suppressValue((runtime.memberLookup((l_cardTitle),"html")?env.getFilter("safe").call(context, env.getFilter("indent").call(context, runtime.memberLookup((l_cardTitle),"html"),6)):runtime.memberLookup((l_cardTitle),"text")), env.opts.autoescape);
t_6 += ")";
;
}
t_6 += "</span>";
;
}
t_6 += "</a>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_6);
});
context.setVariable("_actionLink", macro_t_5);
var macro_t_7 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_8 = "";var t_9;
t_9 = (runtime.memberLookup((runtime.memberLookup((l_params),"title")),"headingLevel")?runtime.memberLookup((runtime.memberLookup((l_params),"title")),"headingLevel"):2);
frame.set("headingLevel", t_9, true);
if(frame.topLevel) {
context.setVariable("headingLevel", t_9);
}
if(frame.topLevel) {
context.addExport("headingLevel", t_9);
}
t_8 += "<div class=\"govuk-summary-card";
if(runtime.memberLookup((l_params),"classes")) {
t_8 += " ";
t_8 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_8 += "\"";
t_8 += runtime.suppressValue((lineno = 19, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup((l_params),"attributes")])), env.opts.autoescape);
t_8 += ">\n  <div class=\"govuk-summary-card__title-wrapper\">\n  ";
if(runtime.memberLookup((l_params),"title")) {
t_8 += "\n    <h";
t_8 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "headingLevel"), env.opts.autoescape);
t_8 += " class=\"govuk-summary-card__title";
if(runtime.memberLookup((runtime.memberLookup((l_params),"title")),"classes")) {
t_8 += " ";
t_8 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_params),"title")),"classes"), env.opts.autoescape);
;
}
t_8 += "\">\n      ";
t_8 += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((l_params),"title")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((l_params),"title")),"html"))),6):runtime.memberLookup((runtime.memberLookup((l_params),"title")),"text")), env.opts.autoescape);
t_8 += "\n    </h";
t_8 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "headingLevel"), env.opts.autoescape);
t_8 += ">\n  ";
;
}
t_8 += "\n  ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((l_params),"actions")),"items")),"length")) {
t_8 += "\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((l_params),"actions")),"items")),"length") == 1) {
t_8 += "\n    <div class=\"govuk-summary-card__actions";
if(runtime.memberLookup((runtime.memberLookup((l_params),"actions")),"classes")) {
t_8 += " ";
t_8 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_params),"actions")),"classes"), env.opts.autoescape);
;
}
t_8 += "\">\n      ";
t_8 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 29, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_actionLink"), "_actionLink", context, [runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((l_params),"actions")),"items")),0),runtime.memberLookup((l_params),"title")]))),4), env.opts.autoescape);
t_8 += "\n    </div>\n    ";
;
}
else {
t_8 += "\n    <ul class=\"govuk-summary-card__actions";
if(runtime.memberLookup((runtime.memberLookup((l_params),"actions")),"classes")) {
t_8 += " ";
t_8 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_params),"actions")),"classes"), env.opts.autoescape);
;
}
t_8 += "\">\n      ";
frame = frame.push();
var t_12 = runtime.memberLookup((runtime.memberLookup((l_params),"actions")),"items");
if(t_12) {t_12 = runtime.fromIterator(t_12);
var t_11 = t_12.length;
for(var t_10=0; t_10 < t_12.length; t_10++) {
var t_13 = t_12[t_10];
frame.set("action", t_13);
frame.set("loop.index", t_10 + 1);
frame.set("loop.index0", t_10);
frame.set("loop.revindex", t_11 - t_10);
frame.set("loop.revindex0", t_11 - t_10 - 1);
frame.set("loop.first", t_10 === 0);
frame.set("loop.last", t_10 === t_11 - 1);
frame.set("loop.length", t_11);
t_8 += "\n      <li class=\"govuk-summary-card__action\">\n        ";
t_8 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 35, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_actionLink"), "_actionLink", context, [t_13,runtime.memberLookup((l_params),"title")]))),8), env.opts.autoescape);
t_8 += "\n      </li>\n      ";
;
}
}
frame = frame.pop();
t_8 += "\n    </ul>\n    ";
;
}
t_8 += "\n  ";
;
}
t_8 += "\n  </div>\n\n  <div class=\"govuk-summary-card__content\">\n    ";
t_8 += runtime.suppressValue(env.getFilter("trim").call(context, (lineno = 44, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, []))), env.opts.autoescape);
t_8 += "\n  </div>\n</div>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_8);
});
context.setVariable("_summaryCard", macro_t_7);
var t_14;
t_14 = false;
frame.set("anyRowHasActions", t_14, true);
if(frame.topLevel) {
context.setVariable("anyRowHasActions", t_14);
}
if(frame.topLevel) {
context.addExport("anyRowHasActions", t_14);
}
output += "\n";
frame = frame.push();
var t_17 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"rows");
if(t_17) {t_17 = runtime.fromIterator(t_17);
var t_16 = t_17.length;
for(var t_15=0; t_15 < t_17.length; t_15++) {
var t_18 = t_17[t_15];
frame.set("row", t_18);
frame.set("loop.index", t_15 + 1);
frame.set("loop.index0", t_15);
frame.set("loop.revindex", t_16 - t_15);
frame.set("loop.revindex0", t_16 - t_15 - 1);
frame.set("loop.first", t_15 === 0);
frame.set("loop.last", t_15 === t_16 - 1);
frame.set("loop.length", t_16);
output += "\n  ";
var t_19;
t_19 = (env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((t_18),"actions")),"items"))?true:runtime.contextOrFrameLookup(context, frame, "anyRowHasActions"));
frame.set("anyRowHasActions", t_19, true);
if(frame.topLevel) {
context.setVariable("anyRowHasActions", t_19);
}
if(frame.topLevel) {
context.addExport("anyRowHasActions", t_19);
}
output += "\n";
;
}
}
frame = frame.pop();
var t_20;
t_20 = (function() {
var output = "";
output += "\n<dl class=\"govuk-summary-list";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 56, colno = 107, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">\n";
frame = frame.push();
var t_23 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"rows");
if(t_23) {t_23 = runtime.fromIterator(t_23);
var t_22 = t_23.length;
for(var t_21=0; t_21 < t_23.length; t_21++) {
var t_24 = t_23[t_21];
frame.set("row", t_24);
frame.set("loop.index", t_21 + 1);
frame.set("loop.index0", t_21);
frame.set("loop.revindex", t_22 - t_21);
frame.set("loop.revindex0", t_22 - t_21 - 1);
frame.set("loop.first", t_21 === 0);
frame.set("loop.last", t_21 === t_22 - 1);
frame.set("loop.length", t_22);
output += "\n  ";
if(t_24) {
output += "\n  <div class=\"govuk-summary-list__row";
if(runtime.contextOrFrameLookup(context, frame, "anyRowHasActions") && !runtime.memberLookup((runtime.memberLookup((t_24),"actions")),"items")) {
output += " govuk-summary-list__row--no-actions";
;
}
if(runtime.memberLookup((t_24),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((t_24),"classes"), env.opts.autoescape);
;
}
output += "\">\n    <dt class=\"govuk-summary-list__key";
if(runtime.memberLookup((runtime.memberLookup((t_24),"key")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_24),"key")),"classes"), env.opts.autoescape);
;
}
output += "\">\n      ";
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((t_24),"key")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((t_24),"key")),"html"))),6):runtime.memberLookup((runtime.memberLookup((t_24),"key")),"text")), env.opts.autoescape);
output += "\n    </dt>\n    <dd class=\"govuk-summary-list__value";
if(runtime.memberLookup((runtime.memberLookup((t_24),"value")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_24),"value")),"classes"), env.opts.autoescape);
;
}
output += "\">\n      ";
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((t_24),"value")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((t_24),"value")),"html"))),6):runtime.memberLookup((runtime.memberLookup((t_24),"value")),"text")), env.opts.autoescape);
output += "\n    </dd>\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_24),"actions")),"items")),"length")) {
output += "\n    <dd class=\"govuk-summary-list__actions";
if(runtime.memberLookup((runtime.memberLookup((t_24),"actions")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_24),"actions")),"classes"), env.opts.autoescape);
;
}
output += "\">\n      ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_24),"actions")),"items")),"length") == 1) {
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 69, colno = 23, runtime.callWrap(macro_t_5, "_actionLink", context, [runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_24),"actions")),"items")),0),runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"card")),"title")]))),6,true), env.opts.autoescape);
output += "\n      ";
;
}
else {
output += "\n      <ul class=\"govuk-summary-list__actions-list\">\n        ";
frame = frame.push();
var t_27 = runtime.memberLookup((runtime.memberLookup((t_24),"actions")),"items");
if(t_27) {t_27 = runtime.fromIterator(t_27);
var t_26 = t_27.length;
for(var t_25=0; t_25 < t_27.length; t_25++) {
var t_28 = t_27[t_25];
frame.set("action", t_28);
frame.set("loop.index", t_25 + 1);
frame.set("loop.index0", t_25);
frame.set("loop.revindex", t_26 - t_25);
frame.set("loop.revindex0", t_26 - t_25 - 1);
frame.set("loop.first", t_25 === 0);
frame.set("loop.last", t_25 === t_26 - 1);
frame.set("loop.length", t_26);
output += "\n        <li class=\"govuk-summary-list__actions-list-item\">\n          ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 74, colno = 24, runtime.callWrap(macro_t_5, "_actionLink", context, [t_28,runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"card")),"title")]))),8), env.opts.autoescape);
output += "\n        </li>\n        ";
;
}
}
frame = frame.pop();
output += "\n      </ul>\n      ";
;
}
output += "\n    </dd>\n    ";
;
}
output += "\n  </div>\n  ";
;
}
output += "\n";
;
}
}
frame = frame.pop();
output += "\n</dl>";
;
return output;
})()
;
frame.set("summaryList", t_20, true);
if(frame.topLevel) {
context.setVariable("summaryList", t_20);
}
if(frame.topLevel) {
context.addExport("summaryList", t_20);
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"card")) {
output += runtime.suppressValue((lineno = 88, colno = 22, runtime.callWrap(macro_t_7, "_summaryCard", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"card"),runtime.makeKeywordArgs({"caller": (function (){var macro_t_29 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_30 = "";t_30 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "summaryList"))),4), env.opts.autoescape);
;
frame = frame.pop();
return new runtime.SafeString(t_30);
});
return macro_t_29;})()})])), env.opts.autoescape);
;
}
else {
output += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "summaryList"))), env.opts.autoescape);
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/phase-banner/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/phase-banner/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "\n";
env.getTemplate("govuk/components/tag/macro.njk", false, "govuk/components/phase-banner/template.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
t_5.getExported(function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
if(Object.prototype.hasOwnProperty.call(t_5, "govukTag")) {
var t_8 = t_5.govukTag;
} else {
cb(new Error("cannot import 'govukTag'")); return;
}
context.setVariable("govukTag", t_8);
output += "<div class=\"govuk-phase-banner govuk-width-container";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 5, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">\n  <p class=\"govuk-phase-banner__content\">\n    ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 7, colno = 15, runtime.callWrap(t_8, "govukTag", context, [{"text": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"tag")),"text"),"html": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"tag")),"html"),"classes": "govuk-phase-banner__content__tag" + ((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"tag")),"classes")?" " + runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"tag")),"classes"):""))}]))),4), env.opts.autoescape);
output += "\n    <span class=\"govuk-phase-banner__text\">\n      ";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html"))),6):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")), env.opts.autoescape);
output += "\n    </span>\n  </p>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/panel/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/panel/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
env.getTemplate("govuk/components/button/macro.njk", false, "govuk/components/panel/template.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
t_5.getExported(function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
if(Object.prototype.hasOwnProperty.call(t_5, "govukButton")) {
var t_8 = t_5.govukButton;
} else {
cb(new Error("cannot import 'govukButton'")); return;
}
context.setVariable("govukButton", t_8);
var t_9;
t_9 = (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"headingLevel")?runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"headingLevel"):1);
frame.set("headingLevel", t_9, true);
if(frame.topLevel) {
context.setVariable("headingLevel", t_9);
}
if(frame.topLevel) {
context.addExport("headingLevel", t_9);
}
var t_10;
t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes") && (runtime.inOperator("govuk-panel--interruption",runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")));
frame.set("isInterruption", t_10, true);
if(frame.topLevel) {
context.setVariable("isInterruption", t_10);
}
if(frame.topLevel) {
context.addExport("isInterruption", t_10);
}
var t_11;
t_11 = (!runtime.contextOrFrameLookup(context, frame, "isInterruption")?"govuk-panel--confirmation":"");
frame.set("defaultModifierClassName", t_11, true);
if(frame.topLevel) {
context.setVariable("defaultModifierClassName", t_11);
}
if(frame.topLevel) {
context.addExport("defaultModifierClassName", t_11);
}
var macro_t_12 = runtime.makeMacro(
["action"], 
[], 
function (l_action, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("action", l_action);
var t_13 = "";if(!runtime.memberLookup((l_action),"href") || runtime.memberLookup((l_action),"type") == "button") {
t_13 += runtime.suppressValue((lineno = 12, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukButton"), "govukButton", context, [{"text": runtime.memberLookup((l_action),"text"),"type": (runtime.memberLookup((l_action),"type")?runtime.memberLookup((l_action),"type"):"button"),"classes": "govuk-button--inverse" + ((runtime.memberLookup((l_action),"classes")?" " + runtime.memberLookup((l_action),"classes"):"")),"href": runtime.memberLookup((l_action),"href"),"attributes": runtime.memberLookup((l_action),"attributes")}])), env.opts.autoescape);
;
}
else {
t_13 += "<a class=\"govuk-link govuk-link--inverse";
if(runtime.memberLookup((l_action),"classes")) {
t_13 += " ";
t_13 += runtime.suppressValue(runtime.memberLookup((l_action),"classes"), env.opts.autoescape);
;
}
t_13 += "\" href=\"";
t_13 += runtime.suppressValue(runtime.memberLookup((l_action),"href"), env.opts.autoescape);
t_13 += "\"";
t_13 += runtime.suppressValue((lineno = 21, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup((l_action),"attributes")])), env.opts.autoescape);
t_13 += ">";
t_13 += runtime.suppressValue(runtime.memberLookup((l_action),"text"), env.opts.autoescape);
t_13 += "</a>";
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_13);
});
context.setVariable("_panelAction", macro_t_12);
output += "<div class=\"govuk-panel";
if(runtime.contextOrFrameLookup(context, frame, "defaultModifierClassName")) {
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "defaultModifierClassName"), env.opts.autoescape);
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 30, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">\n  <h";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "headingLevel"), env.opts.autoescape);
output += " class=\"govuk-panel__title\">\n    ";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"titleHtml")?env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"titleHtml")):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"titleText")), env.opts.autoescape);
output += "\n  </h";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "headingLevel"), env.opts.autoescape);
output += ">\n  ";
if(runtime.contextOrFrameLookup(context, frame, "caller") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")) {
output += "\n  <div class=\"govuk-panel__body\">\n    ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "caller")?(lineno = 36, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])):((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html"))),4):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")))), env.opts.autoescape);
output += "\n  </div>\n  ";
;
}
output += "\n  ";
if(runtime.contextOrFrameLookup(context, frame, "isInterruption") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"actions")) {
output += "\n  ";
var t_14;
t_14 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"actions");
frame.set("actions", t_14, true);
if(frame.topLevel) {
context.setVariable("actions", t_14);
}
if(frame.topLevel) {
context.addExport("actions", t_14);
}
output += "\n  <div class=\"govuk-panel__actions";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "actions")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "actions")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 43, colno = 23, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "actions")),"attributes")])), env.opts.autoescape);
output += ">";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "actions")),"items")),"length")) {
output += "<div class=\"govuk-button-group\">\n    ";
frame = frame.push();
var t_17 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "actions")),"items");
if(t_17) {t_17 = runtime.fromIterator(t_17);
var t_16 = t_17.length;
for(var t_15=0; t_15 < t_17.length; t_15++) {
var t_18 = t_17[t_15];
frame.set("action", t_18);
frame.set("loop.index", t_15 + 1);
frame.set("loop.index0", t_15);
frame.set("loop.revindex", t_16 - t_15);
frame.set("loop.revindex0", t_16 - t_15 - 1);
frame.set("loop.first", t_15 === 0);
frame.set("loop.last", t_15 === t_16 - 1);
frame.set("loop.length", t_16);
output += "\n      ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, (lineno = 48, colno = 21, runtime.callWrap(macro_t_12, "_panelAction", context, [t_18])))),6), env.opts.autoescape);
output += "\n    ";
;
}
}
frame = frame.pop();
output += "\n    </div>";
;
}
output += "</div>\n  ";
;
}
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/checkboxes/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/checkboxes/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "\n";
env.getTemplate("govuk/components/error-message/macro.njk", false, "govuk/components/checkboxes/template.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
t_5.getExported(function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
if(Object.prototype.hasOwnProperty.call(t_5, "govukErrorMessage")) {
var t_8 = t_5.govukErrorMessage;
} else {
cb(new Error("cannot import 'govukErrorMessage'")); return;
}
context.setVariable("govukErrorMessage", t_8);
output += "\n";
env.getTemplate("govuk/components/fieldset/macro.njk", false, "govuk/components/checkboxes/template.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
if(Object.prototype.hasOwnProperty.call(t_9, "govukFieldset")) {
var t_12 = t_9.govukFieldset;
} else {
cb(new Error("cannot import 'govukFieldset'")); return;
}
context.setVariable("govukFieldset", t_12);
output += "\n";
env.getTemplate("govuk/components/hint/macro.njk", false, "govuk/components/checkboxes/template.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
t_13.getExported(function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
if(Object.prototype.hasOwnProperty.call(t_13, "govukHint")) {
var t_16 = t_13.govukHint;
} else {
cb(new Error("cannot import 'govukHint'")); return;
}
context.setVariable("govukHint", t_16);
output += "\n";
env.getTemplate("govuk/components/label/macro.njk", false, "govuk/components/checkboxes/template.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
t_17.getExported(function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
if(Object.prototype.hasOwnProperty.call(t_17, "govukLabel")) {
var t_20 = t_17.govukLabel;
} else {
cb(new Error("cannot import 'govukLabel'")); return;
}
context.setVariable("govukLabel", t_20);
var t_21;
t_21 = (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"idPrefix")?runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"idPrefix"):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"name"));
frame.set("idPrefix", t_21, true);
if(frame.topLevel) {
context.setVariable("idPrefix", t_21);
}
if(frame.topLevel) {
context.addExport("idPrefix", t_21);
}
var t_22;
t_22 = (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"describedBy")?runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"describedBy"):"");
frame.set("describedBy", t_22, true);
if(frame.topLevel) {
context.setVariable("describedBy", t_22);
}
if(frame.topLevel) {
context.addExport("describedBy", t_22);
}
output += "\n";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"fieldset")),"describedBy")) {
output += "\n  ";
var t_23;
t_23 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"fieldset")),"describedBy");
frame.set("describedBy", t_23, true);
if(frame.topLevel) {
context.setVariable("describedBy", t_23);
}
if(frame.topLevel) {
context.addExport("describedBy", t_23);
}
output += "\n";
;
}
var t_24;
t_24 = (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"fieldset")?true:false);
frame.set("hasFieldset", t_24, true);
if(frame.topLevel) {
context.setVariable("hasFieldset", t_24);
}
if(frame.topLevel) {
context.addExport("hasFieldset", t_24);
}
var macro_t_25 = runtime.makeMacro(
["params", "item", "index"], 
[], 
function (l_params, l_item, l_index, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
frame.set("item", l_item);
frame.set("index", l_index);
var t_26 = "";var t_27;
t_27 = (runtime.memberLookup((l_item),"id")?runtime.memberLookup((l_item),"id"):runtime.contextOrFrameLookup(context, frame, "idPrefix") + ((l_index > 1?"-" + l_index:"")));
frame.set("itemId", t_27, true);
if(frame.topLevel) {
context.setVariable("itemId", t_27);
}
if(frame.topLevel) {
context.addExport("itemId", t_27);
}
t_26 += "\n  ";
var t_28;
t_28 = (runtime.memberLookup((l_item),"name")?runtime.memberLookup((l_item),"name"):runtime.memberLookup((l_params),"name"));
frame.set("itemName", t_28, true);
if(frame.topLevel) {
context.setVariable("itemName", t_28);
}
if(frame.topLevel) {
context.addExport("itemName", t_28);
}
t_26 += "\n  ";
var t_29;
t_29 = "conditional-" + runtime.contextOrFrameLookup(context, frame, "itemId");
frame.set("conditionalId", t_29, true);
if(frame.topLevel) {
context.setVariable("conditionalId", t_29);
}
if(frame.topLevel) {
context.addExport("conditionalId", t_29);
}
if(runtime.memberLookup((l_item),"divider")) {
t_26 += "\n    <div class=\"govuk-checkboxes__divider\">";
t_26 += runtime.suppressValue(runtime.memberLookup((l_item),"divider"), env.opts.autoescape);
t_26 += "</div>\n  ";
;
}
else {
t_26 += "\n    ";
var t_30;
t_30 = env.getFilter("default").call(context, runtime.memberLookup((l_item),"checked"),(runtime.memberLookup((l_params),"values")?(runtime.inOperator(runtime.memberLookup((l_item),"value"),runtime.memberLookup((l_params),"values")) && runtime.memberLookup((l_item),"checked") != false):false),true);
frame.set("isChecked", t_30, true);
if(frame.topLevel) {
context.setVariable("isChecked", t_30);
}
if(frame.topLevel) {
context.addExport("isChecked", t_30);
}
t_26 += "\n    ";
var t_31;
t_31 = (runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"text") || runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"html")?true:"");
frame.set("hasHint", t_31, true);
if(frame.topLevel) {
context.setVariable("hasHint", t_31);
}
if(frame.topLevel) {
context.addExport("hasHint", t_31);
}
t_26 += "\n    ";
var t_32;
t_32 = (runtime.contextOrFrameLookup(context, frame, "hasHint")?runtime.contextOrFrameLookup(context, frame, "itemId") + "-item-hint":"");
frame.set("itemHintId", t_32, true);
if(frame.topLevel) {
context.setVariable("itemHintId", t_32);
}
if(frame.topLevel) {
context.addExport("itemHintId", t_32);
}
t_26 += "\n    ";
var t_33;
t_33 = (!runtime.contextOrFrameLookup(context, frame, "hasFieldset")?runtime.contextOrFrameLookup(context, frame, "describedBy"):"");
frame.set("itemDescribedBy", t_33, true);
if(frame.topLevel) {
context.setVariable("itemDescribedBy", t_33);
}
if(frame.topLevel) {
context.addExport("itemDescribedBy", t_33);
}
t_26 += "\n    ";
var t_34;
t_34 = env.getFilter("trim").call(context, (runtime.contextOrFrameLookup(context, frame, "itemDescribedBy") + " " + runtime.contextOrFrameLookup(context, frame, "itemHintId")));
frame.set("itemDescribedBy", t_34, true);
if(frame.topLevel) {
context.setVariable("itemDescribedBy", t_34);
}
if(frame.topLevel) {
context.addExport("itemDescribedBy", t_34);
}
t_26 += "\n    <div class=\"govuk-checkboxes__item\">\n      <input class=\"govuk-checkboxes__input\" id=\"";
t_26 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "itemId"), env.opts.autoescape);
t_26 += "\" name=\"";
t_26 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "itemName"), env.opts.autoescape);
t_26 += "\" type=\"checkbox\" value=\"";
t_26 += runtime.suppressValue(runtime.memberLookup((l_item),"value"), env.opts.autoescape);
t_26 += "\"";
t_26 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "isChecked")?" checked":""), env.opts.autoescape);
t_26 += runtime.suppressValue((runtime.memberLookup((l_item),"disabled")?" disabled":""), env.opts.autoescape);
if(runtime.memberLookup((runtime.memberLookup((l_item),"conditional")),"html")) {
t_26 += " data-aria-controls=\"";
t_26 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "conditionalId"), env.opts.autoescape);
t_26 += "\"";
;
}
if(runtime.memberLookup((l_item),"behaviour")) {
t_26 += " data-behaviour=\"";
t_26 += runtime.suppressValue(runtime.memberLookup((l_item),"behaviour"), env.opts.autoescape);
t_26 += "\"";
;
}
if(runtime.contextOrFrameLookup(context, frame, "itemDescribedBy")) {
t_26 += " aria-describedby=\"";
t_26 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "itemDescribedBy"), env.opts.autoescape);
t_26 += "\"";
;
}
t_26 += runtime.suppressValue((lineno = 41, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup((l_item),"attributes")])), env.opts.autoescape);
t_26 += ">\n      ";
t_26 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 42, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukLabel"), "govukLabel", context, [{"html": runtime.memberLookup((l_item),"html"),"text": runtime.memberLookup((l_item),"text"),"classes": "govuk-checkboxes__label" + ((runtime.memberLookup((runtime.memberLookup((l_item),"label")),"classes")?" " + runtime.memberLookup((runtime.memberLookup((l_item),"label")),"classes"):"")),"attributes": runtime.memberLookup((runtime.memberLookup((l_item),"label")),"attributes"),"for": runtime.contextOrFrameLookup(context, frame, "itemId")}]))),6), env.opts.autoescape);
t_26 += "\n      ";
if(runtime.contextOrFrameLookup(context, frame, "hasHint")) {
t_26 += "\n      ";
t_26 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 50, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukHint"), "govukHint", context, [{"id": runtime.contextOrFrameLookup(context, frame, "itemHintId"),"classes": "govuk-checkboxes__hint" + ((runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"classes")?" " + runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"classes"):"")),"attributes": runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"attributes"),"html": runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"html"),"text": runtime.memberLookup((runtime.memberLookup((l_item),"hint")),"text")}]))),6), env.opts.autoescape);
t_26 += "\n      ";
;
}
t_26 += "\n    </div>\n    ";
if(runtime.memberLookup((runtime.memberLookup((l_item),"conditional")),"html")) {
t_26 += "\n    <div class=\"govuk-checkboxes__conditional";
if(!runtime.contextOrFrameLookup(context, frame, "isChecked")) {
t_26 += " govuk-checkboxes__conditional--hidden";
;
}
t_26 += "\" id=\"";
t_26 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "conditionalId"), env.opts.autoescape);
t_26 += "\">\n      ";
t_26 += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((l_item),"conditional")),"html"))), env.opts.autoescape);
t_26 += "\n    </div>\n    ";
;
}
t_26 += "\n  ";
;
}
t_26 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_26);
});
context.setVariable("_checkboxItem", macro_t_25);
var t_35;
t_35 = (function() {
var output = "";
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")) {
output += "\n  ";
var t_36;
t_36 = runtime.contextOrFrameLookup(context, frame, "idPrefix") + "-hint";
frame.set("hintId", t_36, true);
if(frame.topLevel) {
context.setVariable("hintId", t_36);
}
if(frame.topLevel) {
context.addExport("hintId", t_36);
}
output += "\n  ";
var t_37;
t_37 = (runtime.contextOrFrameLookup(context, frame, "describedBy")?runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "hintId"):runtime.contextOrFrameLookup(context, frame, "hintId"));
frame.set("describedBy", t_37, true);
if(frame.topLevel) {
context.setVariable("describedBy", t_37);
}
if(frame.topLevel) {
context.addExport("describedBy", t_37);
}
output += "\n  ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 72, colno = 14, runtime.callWrap(t_16, "govukHint", context, [{"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"classes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")),"classes"),"attributes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")),"attributes"),"html": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")),"html"),"text": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hint")),"text")}]))),2), env.opts.autoescape);
output += "\n";
;
}
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")) {
output += "\n  ";
var t_38;
t_38 = runtime.contextOrFrameLookup(context, frame, "idPrefix") + "-error";
frame.set("errorId", t_38, true);
if(frame.topLevel) {
context.setVariable("errorId", t_38);
}
if(frame.topLevel) {
context.addExport("errorId", t_38);
}
output += "\n  ";
var t_39;
t_39 = (runtime.contextOrFrameLookup(context, frame, "describedBy")?runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "errorId"):runtime.contextOrFrameLookup(context, frame, "errorId"));
frame.set("describedBy", t_39, true);
if(frame.topLevel) {
context.setVariable("describedBy", t_39);
}
if(frame.topLevel) {
context.addExport("describedBy", t_39);
}
output += "\n  ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 83, colno = 22, runtime.callWrap(t_8, "govukErrorMessage", context, [{"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"classes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"classes"),"attributes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"attributes"),"html": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"html"),"text": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"text"),"visuallyHiddenText": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")),"visuallyHiddenText")}]))),2), env.opts.autoescape);
output += "\n";
;
}
output += "\n  <div class=\"govuk-checkboxes";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 93, colno = 23, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += " data-module=\"govuk-checkboxes\">\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInputs")) {
output += "\n    ";
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInputs")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInputs")),"html"))),4):runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"beforeInputs")),"text")), env.opts.autoescape);
output += "\n    ";
;
}
output += "\n    ";
frame = frame.push();
var t_42 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"items");
if(t_42) {t_42 = runtime.fromIterator(t_42);
var t_41 = t_42.length;
for(var t_40=0; t_40 < t_42.length; t_40++) {
var t_43 = t_42[t_40];
frame.set("item", t_43);
frame.set("loop.index", t_40 + 1);
frame.set("loop.index0", t_40);
frame.set("loop.revindex", t_41 - t_40);
frame.set("loop.revindex0", t_41 - t_40 - 1);
frame.set("loop.first", t_40 === 0);
frame.set("loop.last", t_40 === t_41 - 1);
frame.set("loop.length", t_41);
output += "\n      ";
if(t_43) {
output += runtime.suppressValue((lineno = 99, colno = 25, runtime.callWrap(macro_t_25, "_checkboxItem", context, [runtime.contextOrFrameLookup(context, frame, "params"),t_43,runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index")])), env.opts.autoescape);
;
}
output += "\n    ";
;
}
}
frame = frame.pop();
output += "\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInputs")) {
output += "\n    ";
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInputs")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInputs")),"html"))),4):runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"afterInputs")),"text")), env.opts.autoescape);
output += "\n    ";
;
}
output += "\n  </div>\n";
;
return output;
})()
;
frame.set("innerHtml", t_35, true);
if(frame.topLevel) {
context.setVariable("innerHtml", t_35);
}
if(frame.topLevel) {
context.addExport("innerHtml", t_35);
}
output += "<div class=\"govuk-form-group";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"errorMessage")) {
output += " govuk-form-group--error";
;
}
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 109, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"formGroup")),"attributes")])), env.opts.autoescape);
output += ">\n";
if(runtime.contextOrFrameLookup(context, frame, "hasFieldset")) {
output += "\n  ";
output += runtime.suppressValue(env.getFilter("trim").call(context, (lineno = 111, colno = 18, runtime.callWrap(t_12, "govukFieldset", context, [{"describedBy": runtime.contextOrFrameLookup(context, frame, "describedBy"),"classes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"fieldset")),"classes"),"attributes": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"fieldset")),"attributes"),"legend": runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"fieldset")),"legend"),"html": env.getFilter("trim").call(context, runtime.contextOrFrameLookup(context, frame, "innerHtml"))}]))), env.opts.autoescape);
output += "\n";
;
}
else {
output += "\n  ";
output += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "innerHtml"))), env.opts.autoescape);
output += "\n";
;
}
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/details/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/details/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "<details";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"id"), env.opts.autoescape);
output += "\"";
;
}
output += " class=\"govuk-details";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"open")?" open":""), env.opts.autoescape);
output += ">\n  <summary class=\"govuk-details__summary\">\n    <span class=\"govuk-details__summary-text\">\n      ";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"summaryHtml")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"summaryHtml"))),6):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"summaryText")), env.opts.autoescape);
output += "\n    </span>\n  </summary>\n  <div class=\"govuk-details__text\">\n    ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "caller")?(lineno = 11, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])):((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")?env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")))), env.opts.autoescape);
output += "\n  </div>\n</details>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/inset-text/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/inset-text/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "<div";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"id"), env.opts.autoescape);
output += "\"";
;
}
output += " class=\"govuk-inset-text";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">\n  ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "caller")?(lineno = 4, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])):((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html"))),2):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")))), env.opts.autoescape);
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["hmrc/components/banner/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("hmrc/components/banner/template.njk", false, "hmrc/components/banner/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("hmrcBanner");
context.setVariable("hmrcBanner", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["hmrc/components/user-research-banner/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("hmrc/components/user-research-banner/template.njk", false, "hmrc/components/user-research-banner/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("hmrcUserResearchBanner");
context.setVariable("hmrcUserResearchBanner", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/macros/logo.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/macros/logo.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "\n\n";
var macro_t_5 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_6 = "";var t_7;
t_7 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"useLogotype"),true);
frame.set("useLogotype", t_7, true);
if(frame.topLevel) {
context.setVariable("useLogotype", t_7);
}
if(frame.topLevel) {
context.addExport("useLogotype", t_7);
}
var t_8;
t_8 = 32;
frame.set("svgWidth", t_8, true);
if(frame.topLevel) {
context.setVariable("svgWidth", t_8);
}
if(frame.topLevel) {
context.addExport("svgWidth", t_8);
}
var t_9;
t_9 = (runtime.contextOrFrameLookup(context, frame, "useLogotype")?runtime.contextOrFrameLookup(context, frame, "svgWidth") + 130:runtime.contextOrFrameLookup(context, frame, "svgWidth"));
frame.set("svgWidth", t_9, true);
if(frame.topLevel) {
context.setVariable("svgWidth", t_9);
}
if(frame.topLevel) {
context.addExport("svgWidth", t_9);
}
var t_10;
t_10 = (function() {
var output = "";
output += "\n    <g>\n      <circle cx=\"20\" cy=\"17.6\" r=\"3.7\"/>\n      <circle cx=\"10.2\" cy=\"23.5\" r=\"3.7\"/>\n      <circle cx=\"3.7\" cy=\"33.2\" r=\"3.7\"/>\n      <circle cx=\"31.7\" cy=\"30.6\" r=\"3.7\"/>\n      <circle cx=\"43.3\" cy=\"17.6\" r=\"3.7\"/>\n      <circle cx=\"53.2\" cy=\"23.5\" r=\"3.7\"/>\n      <circle cx=\"59.7\" cy=\"33.2\" r=\"3.7\"/>\n      <circle cx=\"31.7\" cy=\"30.6\" r=\"3.7\"/>\n      <path d=\"M33.1,9.8c.2-.1.3-.3.5-.5l4.6,2.4v-6.8l-4.6,1.5c-.1-.2-.3-.3-.5-.5l1.9-5.9h-6.7l1.9,5.9c-.2.1-.3.3-.5.5l-4.6-1.5v6.8l4.6-2.4c.1.2.3.3.5.5l-2.6,8c-.9,2.8,1.2,5.7,4.1,5.7h0c3,0,5.1-2.9,4.1-5.7l-2.6-8ZM37,37.9s-3.4,3.8-4.1,6.1c2.2,0,4.2-.5,6.4-2.8l-.7,8.5c-2-2.8-4.4-4.1-5.7-3.8.1,3.1.5,6.7,5.8,7.2,3.7.3,6.7-1.5,7-3.8.4-2.6-2-4.3-3.7-1.6-1.4-4.5,2.4-6.1,4.9-3.2-1.9-4.5-1.8-7.7,2.4-10.9,3,4,2.6,7.3-1.2,11.1,2.4-1.3,6.2,0,4,4.6-1.2-2.8-3.7-2.2-4.2.2-.3,1.7.7,3.7,3,4.2,1.9.3,4.7-.9,7-5.9-1.3,0-2.4.7-3.9,1.7l2.4-8c.6,2.3,1.4,3.7,2.2,4.5.6-1.6.5-2.8,0-5.3l5,1.8c-2.6,3.6-5.2,8.7-7.3,17.5-7.4-1.1-15.7-1.7-24.5-1.7h0c-8.8,0-17.1.6-24.5,1.7-2.1-8.9-4.7-13.9-7.3-17.5l5-1.8c-.5,2.5-.6,3.7,0,5.3.8-.8,1.6-2.3,2.2-4.5l2.4,8c-1.5-1-2.6-1.7-3.9-1.7,2.3,5,5.2,6.2,7,5.9,2.3-.4,3.3-2.4,3-4.2-.5-2.4-3-3.1-4.2-.2-2.2-4.6,1.6-6,4-4.6-3.7-3.7-4.2-7.1-1.2-11.1,4.2,3.2,4.3,6.4,2.4,10.9,2.5-2.8,6.3-1.3,4.9,3.2-1.8-2.7-4.1-1-3.7,1.6.3,2.3,3.3,4.1,7,3.8,5.4-.5,5.7-4.2,5.8-7.2-1.3-.2-3.7,1-5.7,3.8l-.7-8.5c2.2,2.3,4.2,2.7,6.4,2.8-.7-2.3-4.1-6.1-4.1-6.1h10.6,0Z\"/>\n    </g>";
;
return output;
})()
;
frame.set("_tudorCrown", t_10, true);
if(frame.topLevel) {
context.setVariable("_tudorCrown", t_10);
}
var t_11;
t_11 = (function() {
var output = "";
output += "\n    <circle class=\"govuk-logo-dot\" cx=\"226\" cy=\"36\" r=\"7.3\"/>\n    <path d=\"M93.94 41.25c.4 1.81 1.2 3.21 2.21 4.62 1 1.4 2.21 2.41 3.61 3.21s3.21 1.2 5.22 1.2 3.61-.4 4.82-1c1.4-.6 2.41-1.4 3.21-2.41.8-1 1.4-2.01 1.61-3.01s.4-2.01.4-3.01v.14h-10.86v-7.02h20.07v24.08h-8.03v-5.56c-.6.8-1.38 1.61-2.19 2.41-.8.8-1.81 1.2-2.81 1.81-1 .4-2.21.8-3.41 1.2s-2.41.4-3.81.4a18.56 18.56 0 0 1-14.65-6.63c-1.6-2.01-3.01-4.41-3.81-7.02s-1.4-5.62-1.4-8.83.4-6.02 1.4-8.83a20.45 20.45 0 0 1 19.46-13.65c3.21 0 4.01.2 5.82.8 1.81.4 3.61 1.2 5.02 2.01 1.61.8 2.81 2.01 4.01 3.21s2.21 2.61 2.81 4.21l-7.63 4.41c-.4-1-1-1.81-1.61-2.61-.6-.8-1.4-1.4-2.21-2.01-.8-.6-1.81-1-2.81-1.4-1-.4-2.21-.4-3.61-.4-2.01 0-3.81.4-5.22 1.2-1.4.8-2.61 1.81-3.61 3.21s-1.61 2.81-2.21 4.62c-.4 1.81-.6 3.71-.6 5.42s.8 5.22.8 5.22Zm57.8-27.9c3.21 0 6.22.6 8.63 1.81 2.41 1.2 4.82 2.81 6.62 4.82S170.2 24.39 171 27s1.4 5.62 1.4 8.83-.4 6.02-1.4 8.83-2.41 5.02-4.01 7.02-4.01 3.61-6.62 4.82-5.42 1.81-8.63 1.81-6.22-.6-8.63-1.81-4.82-2.81-6.42-4.82-3.21-4.41-4.01-7.02-1.4-5.62-1.4-8.83.4-6.02 1.4-8.83 2.41-5.02 4.01-7.02 4.01-3.61 6.42-4.82 5.42-1.81 8.63-1.81Zm0 36.73c1.81 0 3.61-.4 5.02-1s2.61-1.81 3.61-3.01 1.81-2.81 2.21-4.41c.4-1.81.8-3.61.8-5.62 0-2.21-.2-4.21-.8-6.02s-1.2-3.21-2.21-4.62c-1-1.2-2.21-2.21-3.61-3.01s-3.21-1-5.02-1-3.61.4-5.02 1c-1.4.8-2.61 1.81-3.61 3.01s-1.81 2.81-2.21 4.62c-.4 1.81-.8 3.61-.8 5.62 0 2.41.2 4.21.8 6.02.4 1.81 1.2 3.21 2.21 4.41s2.21 2.21 3.61 3.01c1.4.8 3.21 1 5.02 1Zm36.32 7.96-12.24-44.15h9.83l8.43 32.77h.4l8.23-32.77h9.83L200.3 58.04h-12.24Zm74.14-7.96c2.18 0 3.51-.6 3.51-.6 1.2-.6 2.01-1 2.81-1.81s1.4-1.81 1.81-2.81a13 13 0 0 0 .8-4.01V13.9h8.63v28.15c0 2.41-.4 4.62-1.4 6.62-.8 2.01-2.21 3.61-3.61 5.02s-3.41 2.41-5.62 3.21-4.62 1.2-7.02 1.2-5.02-.4-7.02-1.2c-2.21-.8-4.01-1.81-5.62-3.21s-2.81-3.01-3.61-5.02-1.4-4.21-1.4-6.62V13.9h8.63v26.95c0 1.61.2 3.01.8 4.01.4 1.2 1.2 2.21 2.01 2.81.8.8 1.81 1.4 2.81 1.81 0 0 1.34.6 3.51.6Zm34.22-36.18v18.92l15.65-18.92h10.82l-15.03 17.32 16.03 26.83h-10.21l-11.44-20.21-5.62 6.22v13.99h-8.83V13.9\"/>";
;
return output;
})()
;
frame.set("_logotype", t_11, true);
if(frame.topLevel) {
context.setVariable("_logotype", t_11);
}
t_6 += "\n  <svg\n    focusable=\"false\"\n    role=\"";
t_6 += runtime.suppressValue((runtime.memberLookup((l_params),"ariaLabelText")?"img":"presentation"), env.opts.autoescape);
t_6 += "\"\n    xmlns=\"http://www.w3.org/2000/svg\"";
t_6 += "\n    viewBox=\"0 0 ";
t_6 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "svgWidth") * 2, env.opts.autoescape);
t_6 += " 60\"\n    height=\"30\"\n    width=\"";
t_6 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "svgWidth"), env.opts.autoescape);
t_6 += "\"\n    fill=\"currentcolor\"";
if(runtime.memberLookup((l_params),"classes")) {
t_6 += " class=\"";
t_6 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
t_6 += "\"";
;
}
if(runtime.memberLookup((l_params),"ariaLabelText")) {
t_6 += " aria-label=\"";
t_6 += runtime.suppressValue(runtime.memberLookup((l_params),"ariaLabelText"), env.opts.autoescape);
t_6 += "\"";
;
}
t_6 += runtime.suppressValue((lineno = 47, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup((l_params),"attributes")])), env.opts.autoescape);
t_6 += "\n  >";
if(runtime.memberLookup((l_params),"ariaLabelText")) {
t_6 += "<title>";
t_6 += runtime.suppressValue(runtime.memberLookup((l_params),"ariaLabelText"), env.opts.autoescape);
t_6 += "</title>";
;
}
t_6 += "\n    ";
t_6 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "_tudorCrown"))),2), env.opts.autoescape);
t_6 += "\n    ";
if(runtime.contextOrFrameLookup(context, frame, "useLogotype")) {
t_6 += "\n      ";
t_6 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "_logotype"))),2), env.opts.autoescape);
t_6 += "\n    ";
;
}
t_6 += "\n  </svg>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_6);
});
context.addExport("govukLogo");
context.setVariable("govukLogo", macro_t_5);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/skip-link/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/skip-link/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "<a href=\"";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"href"),"#content",true), env.opts.autoescape);
output += "\" class=\"govuk-skip-link";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += " data-module=\"govuk-skip-link\">";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")?env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")), env.opts.autoescape);
output += "</a>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/header/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/components/generic-header/macro.njk", false, "govuk/components/header/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukGenericHeader")) {
var t_4 = t_1.govukGenericHeader;
} else {
cb(new Error("cannot import 'govukGenericHeader'")); return;
}
context.setVariable("govukGenericHeader", t_4);
env.getTemplate("govuk/macros/logo.njk", false, "govuk/components/header/template.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
t_5.getExported(function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
if(Object.prototype.hasOwnProperty.call(t_5, "govukLogo")) {
var t_8 = t_5.govukLogo;
} else {
cb(new Error("cannot import 'govukLogo'")); return;
}
context.setVariable("govukLogo", t_8);
var t_9;
t_9 = (function() {
var output = "";
output += "\n  ";
output += runtime.suppressValue(env.getFilter("trim").call(context, (lineno = 4, colno = 14, runtime.callWrap(t_8, "govukLogo", context, [{"classes": "govuk-header__logotype","ariaLabelText": "GOV.UK"}]))), env.opts.autoescape);
output += "\n  ";
if((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"productName"))) {
output += "<span class=\"govuk-header__product-name\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"productName"), env.opts.autoescape);
output += "</span>";
;
}
output += "\n";
;
return output;
})()
;
frame.set("logoContent", t_9, true);
if(frame.topLevel) {
context.setVariable("logoContent", t_9);
}
if(frame.topLevel) {
context.addExport("logoContent", t_9);
}
output += "\n\n";
output += runtime.suppressValue((lineno = 15, colno = 21, runtime.callWrap(t_4, "govukGenericHeader", context, [{"_namespace": "govuk","logoHtml": env.getFilter("indent").call(context, runtime.contextOrFrameLookup(context, frame, "logoContent"),8),"url": env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"homepageUrl"),"//gov.uk",true),"containerClasses": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"containerClasses"),"classes": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"),"attributes": runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")}])), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/service-navigation/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/service-navigation/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
var t_5;
t_5 = env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"menuButtonText"),"Menu",true);
frame.set("menuButtonText", t_5, true);
if(frame.topLevel) {
context.setVariable("menuButtonText", t_5);
}
if(frame.topLevel) {
context.addExport("menuButtonText", t_5);
}
var t_6;
t_6 = env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"navigationId"),"navigation",true);
frame.set("navigationId", t_6, true);
if(frame.topLevel) {
context.setVariable("navigationId", t_6);
}
if(frame.topLevel) {
context.addExport("navigationId", t_6);
}
var t_7;
t_7 = (function() {
var output = "";
output += "\nclass=\"govuk-service-navigation";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"\ndata-module=\"govuk-service-navigation\"";
output += runtime.suppressValue((lineno = 8, colno = 19, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += "\n";
;
return output;
})()
;
frame.set("commonAttributes", t_7, true);
if(frame.topLevel) {
context.setVariable("commonAttributes", t_7);
}
if(frame.topLevel) {
context.addExport("commonAttributes", t_7);
}
var t_8;
t_8 = (function() {
var output = "";
output += "\n  <div class=\"govuk-width-container\">\n\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"slots")),"start")) {
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"slots")),"start")), env.opts.autoescape);
;
}
output += "<div class=\"govuk-service-navigation__container\">\n      ";
output += "\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"serviceName")) {
output += "\n        <span class=\"govuk-service-navigation__service-name\">\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"serviceUrl")) {
output += "\n            <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"serviceUrl"), env.opts.autoescape);
output += "\" class=\"govuk-service-navigation__link\">\n              ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"serviceName"), env.opts.autoescape);
output += "\n            </a>\n          ";
;
}
else {
output += "\n            <span class=\"govuk-service-navigation__text\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"serviceName"), env.opts.autoescape);
output += "</span>\n          ";
;
}
output += "\n        </span>\n      ";
;
}
output += "\n\n      ";
output += "\n      ";
var t_9;
t_9 = env.getFilter("select").call(context, env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"navigation"),[]),"truthy");
frame.set("navigationItems", t_9, true);
if(frame.topLevel) {
context.setVariable("navigationItems", t_9);
}
if(frame.topLevel) {
context.addExport("navigationItems", t_9);
}
output += "\n      ";
var t_10;
t_10 = env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"collapseNavigationOnMobile"),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigationItems")),"length") > 1);
frame.set("collapseNavigationOnMobile", t_10, true);
if(frame.topLevel) {
context.setVariable("collapseNavigationOnMobile", t_10);
}
if(frame.topLevel) {
context.addExport("collapseNavigationOnMobile", t_10);
}
output += "\n      ";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "navigationItems")) || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"slots")),"navigationStart") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"slots")),"navigationEnd")) {
output += "\n        <nav aria-label=\"";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"navigationLabel"),runtime.contextOrFrameLookup(context, frame, "menuButtonText"),true), env.opts.autoescape);
output += "\" class=\"govuk-service-navigation__wrapper";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"navigationClasses")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"navigationClasses"), env.opts.autoescape);
;
}
output += "\">\n          ";
if(runtime.contextOrFrameLookup(context, frame, "collapseNavigationOnMobile")) {
output += "\n          <button type=\"button\" class=\"govuk-service-navigation__toggle govuk-js-service-navigation-toggle\" aria-controls=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "navigationId"), env.opts.autoescape);
output += "\"";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"menuButtonLabel") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"menuButtonLabel") != runtime.contextOrFrameLookup(context, frame, "menuButtonText")) {
output += " aria-label=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"menuButtonLabel"), env.opts.autoescape);
output += "\"";
;
}
output += " hidden aria-hidden=\"true\">\n            ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "menuButtonText"), env.opts.autoescape);
output += "\n          </button>\n          ";
;
}
output += "\n\n          <ul class=\"govuk-service-navigation__list\" id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "navigationId"), env.opts.autoescape);
output += "\" >\n\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"slots")),"navigationStart")) {
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"slots")),"navigationStart")), env.opts.autoescape);
;
}
frame = frame.push();
var t_13 = runtime.contextOrFrameLookup(context, frame, "navigationItems");
if(t_13) {t_13 = runtime.fromIterator(t_13);
var t_12 = t_13.length;
for(var t_11=0; t_11 < t_13.length; t_11++) {
var t_14 = t_13[t_11];
frame.set("item", t_14);
frame.set("loop.index", t_11 + 1);
frame.set("loop.index0", t_11);
frame.set("loop.revindex", t_12 - t_11);
frame.set("loop.revindex0", t_12 - t_11 - 1);
frame.set("loop.first", t_11 === 0);
frame.set("loop.last", t_11 === t_12 - 1);
frame.set("loop.length", t_12);
output += "\n              ";
var t_15;
t_15 = (function() {
var output = "";
output += "\n                ";
output += "\n                ";
if(runtime.memberLookup((t_14),"active") || runtime.memberLookup((t_14),"current")) {
output += "\n                  <strong class=\"govuk-service-navigation__active-fallback\">";
output += runtime.suppressValue((runtime.memberLookup((t_14),"html")?env.getFilter("safe").call(context, runtime.memberLookup((t_14),"html")):runtime.memberLookup((t_14),"text")), env.opts.autoescape);
output += "</strong>\n                ";
;
}
else {
output += runtime.suppressValue((runtime.memberLookup((t_14),"html")?env.getFilter("safe").call(context, runtime.memberLookup((t_14),"html")):runtime.memberLookup((t_14),"text")), env.opts.autoescape);
;
}
output += "\n              ";
;
return output;
})()
;
frame.set("linkInnerContent", t_15, true);
if(frame.topLevel) {
context.setVariable("linkInnerContent", t_15);
}
if(frame.topLevel) {
context.addExport("linkInnerContent", t_15);
}
output += "\n\n              ";
output += "\n              <li class=\"govuk-service-navigation__item";
if(runtime.memberLookup((t_14),"active") || runtime.memberLookup((t_14),"current")) {
output += " govuk-service-navigation__item--active";
;
}
output += "\">\n                ";
if(runtime.memberLookup((t_14),"href")) {
output += "\n                  <a class=\"govuk-service-navigation__link\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_14),"href"), env.opts.autoescape);
output += "\"";
if(runtime.memberLookup((t_14),"active") || runtime.memberLookup((t_14),"current")) {
output += " aria-current=\"";
output += runtime.suppressValue((runtime.memberLookup((t_14),"current")?"page":"true"), env.opts.autoescape);
output += "\"";
;
}
output += runtime.suppressValue((lineno = 69, colno = 39, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((t_14),"attributes")])), env.opts.autoescape);
output += ">\n                    ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "linkInnerContent")), env.opts.autoescape);
output += "\n                  </a>\n                ";
;
}
else {
if(runtime.memberLookup((t_14),"html") || runtime.memberLookup((t_14),"text")) {
output += "\n                  <span class=\"govuk-service-navigation__text\"";
if(runtime.memberLookup((t_14),"active") || runtime.memberLookup((t_14),"current")) {
output += " aria-current=\"";
output += runtime.suppressValue((runtime.memberLookup((t_14),"current")?"page":"true"), env.opts.autoescape);
output += "\"";
;
}
output += ">\n                    ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "linkInnerContent")), env.opts.autoescape);
output += "\n                  </span>\n                ";
;
}
;
}
output += "\n              </li>\n            ";
;
}
}
frame = frame.pop();
output += "\n\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"slots")),"navigationEnd")) {
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"slots")),"navigationEnd")), env.opts.autoescape);
;
}
output += "</ul>\n        </nav>\n      ";
;
}
output += "\n    </div>\n\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"slots")),"end")) {
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"slots")),"end")), env.opts.autoescape);
;
}
output += "</div>\n";
;
return output;
})()
;
frame.set("innerContent", t_8, true);
if(frame.topLevel) {
context.setVariable("innerContent", t_8);
}
if(frame.topLevel) {
context.addExport("innerContent", t_8);
}
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"serviceName") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"slots")),"start") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"slots")),"end")) {
output += "\n  <section aria-label=\"";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"ariaLabel"),"Service information"), env.opts.autoescape);
output += "\" ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
output += ">\n    ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "innerContent")), env.opts.autoescape);
output += "\n  </section>\n";
;
}
else {
output += "\n  <div ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
output += ">\n    ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "innerContent")), env.opts.autoescape);
output += "\n  </div>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/footer/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/footer/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
env.getTemplate("govuk/macros/logo.njk", false, "govuk/components/footer/template.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
t_5.getExported(function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
if(Object.prototype.hasOwnProperty.call(t_5, "govukLogo")) {
var t_8 = t_5.govukLogo;
} else {
cb(new Error("cannot import 'govukLogo'")); return;
}
context.setVariable("govukLogo", t_8);
output += "<div class=\"govuk-footer";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 4, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">\n  <div class=\"govuk-width-container";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"containerClasses")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"containerClasses"), env.opts.autoescape);
;
}
output += "\">";
output += runtime.suppressValue((lineno = 6, colno = 17, runtime.callWrap(t_8, "govukLogo", context, [{"classes": "govuk-footer__crown","useLogotype": false}])), env.opts.autoescape);
output += "\n    ";
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"navigation"))) {
output += "\n      <div class=\"govuk-footer__navigation\">\n        ";
frame = frame.push();
var t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"navigation");
if(t_11) {t_11 = runtime.fromIterator(t_11);
var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("nav", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "\n          <div class=\"govuk-footer__section govuk-grid-column-";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((t_12),"width"),"full",true), env.opts.autoescape);
output += "\">\n            <h2 class=\"govuk-footer__heading govuk-heading-m\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"title"), env.opts.autoescape);
output += "</h2>\n            ";
if(env.getFilter("length").call(context, runtime.memberLookup((t_12),"items"))) {
output += "\n              ";
var t_13;
t_13 = (runtime.memberLookup((t_12),"columns")?"govuk-footer__list--columns-" + runtime.memberLookup((t_12),"columns"):"");
frame.set("listClasses", t_13, true);
if(frame.topLevel) {
context.setVariable("listClasses", t_13);
}
if(frame.topLevel) {
context.addExport("listClasses", t_13);
}
output += "\n              <ul class=\"govuk-footer__list";
if(runtime.contextOrFrameLookup(context, frame, "listClasses")) {
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "listClasses"), env.opts.autoescape);
;
}
output += "\">\n                ";
frame = frame.push();
var t_16 = runtime.memberLookup((t_12),"items");
if(t_16) {t_16 = runtime.fromIterator(t_16);
var t_15 = t_16.length;
for(var t_14=0; t_14 < t_16.length; t_14++) {
var t_17 = t_16[t_14];
frame.set("item", t_17);
frame.set("loop.index", t_14 + 1);
frame.set("loop.index0", t_14);
frame.set("loop.revindex", t_15 - t_14);
frame.set("loop.revindex0", t_15 - t_14 - 1);
frame.set("loop.first", t_14 === 0);
frame.set("loop.last", t_14 === t_15 - 1);
frame.set("loop.length", t_15);
output += "\n                  ";
if(runtime.memberLookup((t_17),"href") && runtime.memberLookup((t_17),"text")) {
output += "\n                    <li class=\"govuk-footer__list-item\">\n                      <a class=\"govuk-footer__link\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_17),"href"), env.opts.autoescape);
output += "\"";
output += runtime.suppressValue((lineno = 22, colno = 43, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((t_17),"attributes")])), env.opts.autoescape);
output += ">\n                        ";
output += runtime.suppressValue(runtime.memberLookup((t_17),"text"), env.opts.autoescape);
output += "\n                      </a>\n                    </li>\n                  ";
;
}
output += "\n                ";
;
}
}
frame = frame.pop();
output += "\n              </ul>\n            ";
;
}
output += "\n          </div>\n        ";
;
}
}
frame = frame.pop();
output += "\n      </div>\n      <hr class=\"govuk-footer__section-break\">\n    ";
;
}
output += "\n    <div class=\"govuk-footer__meta\">\n      <div class=\"govuk-footer__meta-item govuk-footer__meta-item--grow\">\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")) {
output += "\n        <h2 class=\"govuk-visually-hidden\">";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")),"visuallyHiddenTitle"),"Support links",true), env.opts.autoescape);
output += "</h2>\n        ";
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")),"items"))) {
output += "\n        <ul class=\"govuk-footer__inline-list\">\n        ";
frame = frame.push();
var t_20 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")),"items");
if(t_20) {t_20 = runtime.fromIterator(t_20);
var t_19 = t_20.length;
for(var t_18=0; t_18 < t_20.length; t_18++) {
var t_21 = t_20[t_18];
frame.set("item", t_21);
frame.set("loop.index", t_18 + 1);
frame.set("loop.index0", t_18);
frame.set("loop.revindex", t_19 - t_18);
frame.set("loop.revindex0", t_19 - t_18 - 1);
frame.set("loop.first", t_18 === 0);
frame.set("loop.last", t_18 === t_19 - 1);
frame.set("loop.length", t_19);
output += "\n          <li class=\"govuk-footer__inline-list-item\">\n            <a class=\"govuk-footer__link\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_21),"href"), env.opts.autoescape);
output += "\"";
output += runtime.suppressValue((lineno = 44, colno = 33, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((t_21),"attributes")])), env.opts.autoescape);
output += ">\n              ";
output += runtime.suppressValue(runtime.memberLookup((t_21),"text"), env.opts.autoescape);
output += "\n            </a>\n          </li>\n        ";
;
}
}
frame = frame.pop();
output += "\n        </ul>\n        ";
;
}
output += "\n        ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")),"text") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")),"html")) {
output += "\n        <div class=\"govuk-footer__meta-custom\">\n          ";
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")),"html"))),10):runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"meta")),"text")), env.opts.autoescape);
output += "\n        </div>\n        ";
;
}
output += "\n        ";
;
}
output += "\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"contentLicence") !== null) {
output += "\n          ";
output += "<svg\n            aria-hidden=\"true\"\n            focusable=\"false\"\n            class=\"govuk-footer__licence-logo\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            viewBox=\"0 0 483.2 195.7\"\n            height=\"17\"\n            width=\"41\"\n          >\n            <path\n              fill=\"currentColor\"\n              d=\"M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145\"\n            />\n          </svg>\n          <span class=\"govuk-footer__licence-description\">\n          ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"contentLicence")),"html") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"contentLicence")),"text")) {
output += "\n            ";
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"contentLicence")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"contentLicence")),"html"))),12):runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"contentLicence")),"text")), env.opts.autoescape);
output += "\n          ";
;
}
else {
output += "\n            All content is available under the\n            <a\n              class=\"govuk-footer__link\"\n              href=\"https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/\"\n              rel=\"license\"\n            >Open Government Licence v3.0</a>, except where otherwise stated\n          ";
;
}
output += "\n          </span>\n        ";
;
}
output += "\n      </div>\n      <div class=\"govuk-footer__meta-item\">\n        <a\n          class=\"govuk-footer__link govuk-footer__copyright-logo\"\n          href=\"https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/\"\n        >\n        ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"copyright")),"html") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"copyright")),"text")) {
output += "\n          ";
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"copyright")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"copyright")),"html"))),10):runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"copyright")),"text")), env.opts.autoescape);
output += "\n        ";
;
}
else {
output += "\n          © Crown copyright\n        ";
;
}
output += "\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/error-message/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/error-message/template.njk", false, "govuk/components/error-message/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukErrorMessage");
context.setVariable("govukErrorMessage", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/fieldset/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/fieldset/template.njk", false, "govuk/components/fieldset/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukFieldset");
context.setVariable("govukFieldset", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/hint/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/hint/template.njk", false, "govuk/components/hint/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukHint");
context.setVariable("govukHint", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/label/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/label/template.njk", false, "govuk/components/label/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukLabel");
context.setVariable("govukLabel", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["hmrc/components/banner/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"hmrc-banner\">\n  <div class=\"govuk-width-container\">\n    <div class=\"hmrc-organisation-logo\">\n      <svg data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"26px\" height=\"26px\" viewBox=\"0 0 45.35 45.35\" focusable=\"false\" aria-hidden=\"true\">\n        <path class=\"cls-1\" d=\"m28.5,16.6c.82-.34,1.22-1.29.88-2.12-.34-.83-1.3-1.24-2.12-.9-.84.34-1.23,1.31-.89,2.14.34.83,1.3,1.23,2.14.88Z\"/>\n        <path class=\"cls-1\" d=\"m22.06,19.36c-.84.34-1.23,1.31-.89,2.14.34.83,1.3,1.23,2.14.88.82-.34,1.22-1.29.88-2.12-.34-.83-1.3-1.24-2.12-.9Z\"/>\n        <path class=\"cls-1\" d=\"m32.86,19.2c.82-.34,1.22-1.29.88-2.12-.34-.83-1.3-1.24-2.12-.9-.84.34-1.23,1.31-.89,2.14.34.83,1.3,1.23,2.14.88Z\"/>\n        <path class=\"cls-1\" d=\"m33.62,22.63c.34.83,1.3,1.23,2.14.88.82-.34,1.22-1.29.88-2.12-.34-.83-1.3-1.24-2.12-.9-.84.34-1.23,1.31-.89,2.14Z\"/>\n        <path class=\"cls-1\" d=\"m21.81,11.4c.06.08.13.15.21.21l-1.19,3.58s0,0,0,.01h0s0,0,0,0c-.06.18-.09.37-.09.56,0,.97.71,1.77,1.64,1.9.01,0,.03,0,.04,0,.08.01.16.02.24.02h0c.08,0,.16,0,.24-.02.01,0,.03,0,.04,0,.93-.14,1.64-.94,1.64-1.9,0-.2-.03-.39-.08-.56h0s0,0,0,0c0,0,0,0,0-.01l-1.19-3.58c.08-.06.15-.13.21-.21h0s2.06,1.08,2.06,1.08v-3.04l-2.06.65h0c-.06-.08-.12-.15-.2-.21h0s.83-2.62.83-2.62h-1.49s-1.49,0-1.49,0l.83,2.61h0c-.08.06-.14.13-.2.21h0s-2.06-.65-2.06-.65v3.04l2.06-1.08h0Z\"/>\n        <path class=\"cls-1\" d=\"m16.83,16.6c.84.35,1.79-.05,2.14-.88.34-.83-.05-1.79-.89-2.14-.82-.34-1.78.07-2.12.9-.34.83.05,1.78.88,2.12Z\"/>\n        <path class=\"cls-1\" d=\"m12.46,19.2c.84.35,1.79-.05,2.14-.88.34-.83-.05-1.79-.89-2.14-.82-.34-1.78.07-2.12.9-.34.83.05,1.78.88,2.12Z\"/>\n        <path class=\"cls-1\" d=\"m9.57,23.51c.84.35,1.79-.05,2.14-.88.34-.83-.05-1.79-.89-2.14-.82-.34-1.78.07-2.12.9-.34.83.05,1.78.88,2.12Z\"/>\n        <path class=\"cls-1\" d=\"m34.61,25.35c.22,1.12.26,1.65,0,2.37-.37-.36-.71-1.01-.98-2.02l-1.07,3.57c.65-.45,1.16-.74,1.73-.75-1.02,2.2-2.3,2.77-3.12,2.61-1.01-.19-1.47-1.09-1.32-1.85.23-1.08,1.34-1.36,1.86-.11.99-2.02-.69-2.65-1.77-2.05,1.66-1.66,1.85-3.13.51-4.92-1.87,1.43-1.89,2.84-1.05,4.84-1.09-1.25-2.79-.58-2.18,1.44.79-1.22,1.83-.45,1.67.71-.14,1.01-1.47,1.82-3.13,1.68-2.38-.22-2.52-1.86-2.58-3.21.58-.11,1.64.43,2.53,1.69l.33-3.79c-.98,1.02-1.86,1.21-2.85,1.24.33-1.02,1.84-2.7,1.84-2.7h-4.73s1.51,1.68,1.84,2.7c-.99-.03-1.87-.22-2.85-1.24l.33,3.79c.9-1.26,1.95-1.8,2.53-1.69-.06,1.36-.2,3-2.58,3.21-1.66.14-2.99-.67-3.13-1.68-.16-1.16.88-1.92,1.67-.71.61-2.02-1.09-2.69-2.18-1.44.84-1.99.82-3.41-1.05-4.84-1.34,1.78-1.15,3.26.51,4.92-1.08-.6-2.76.03-1.77,2.05.52-1.26,1.63-.98,1.86.11.16.76-.31,1.66-1.32,1.85-.83.15-2.1-.41-3.12-2.61.58.01,1.08.3,1.73.75l-1.07-3.57c-.27,1-.62,1.66-.98,2.02-.25-.72-.21-1.25,0-2.37l-2.21.79c1.18,1.6,2.31,3.86,3.25,7.79,3.29-.47,6.99-.74,10.9-.74s7.61.26,10.9.74c.94-3.93,2.07-6.19,3.25-7.79l-2.21-.79Z\"/>\n        <path class=\"cls-1\" d=\"m22.68.57C10.47.57.57,10.47.57,22.68s9.9,22.11,22.11,22.11,22.11-9.9,22.11-22.11S34.89.57,22.68.57Zm0,41.69c-10.81,0-19.58-8.77-19.58-19.58S11.86,3.1,22.68,3.1s19.58,8.77,19.58,19.58-8.77,19.58-19.58,19.58Z\"/>\n      </svg>\n      <p class=\"govuk-body-s\">";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language") == "cy") {
output += "\n        Cyllid a Thollau EF\n      ";
;
}
else {
output += "\n        HM Revenue &amp; Customs\n      ";
;
}
output += "</p>\n    </div>\n  </div>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["hmrc/components/user-research-banner/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"hmrc-user-research-banner\" data-module=\"hmrc-user-research-banner\">\n  <div class=\"hmrc-user-research-banner__container govuk-width-container\">\n    <div class=\"hmrc-user-research-banner__text\">\n      <h2 class=\"govuk-heading-s hmrc-user-research-banner__title\">\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language") == "cy") {
output += "\n          Mae’n bosibl y byddwch yn cael taleb am roi adborth\n        ";
;
}
else {
output += "\n          You may receive a voucher for feedback\n        ";
;
}
output += "\n      </h2>\n      <a class=\"govuk-link hmrc-user-research-banner__link\" rel=\"noopener noreferrer\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language") == "cy") {
output += "\n           Ymunwch â’n panel ymchwil (yn agor tab newydd)\n        ";
;
}
else {
output += "\n          Join our research panel (opens in new tab)\n        ";
;
}
output += "\n      </a>\n    </div>\n    ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"hideCloseButton")) {
output += "\n      <button class=\"govuk-button govuk-button--secondary hmrc-user-research-banner__close\">\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"language") == "cy") {
output += "\n          <span aria-hidden=\"true\">Cuddio’r neges</span>\n          <span class=\"govuk-visually-hidden\">Cuddio’r neges. Dydw i ddim eisiau cymryd rhan mewn ymchwil</span>\n        ";
;
}
else {
output += "\n          <span aria-hidden=\"true\">Hide message</span>\n          <span class=\"govuk-visually-hidden\">Hide message. I do not want to take part in research</span>\n        ";
;
}
output += "\n      </button>\n    ";
;
}
output += "\n  </div>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/generic-header/macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("govuk/components/generic-header/template.njk", false, "govuk/components/generic-header/macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govukGenericHeader");
context.setVariable("govukGenericHeader", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/error-message/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/error-message/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
var t_5;
t_5 = env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"visuallyHiddenText"),"Error");
frame.set("visuallyHiddenText", t_5, true);
if(frame.topLevel) {
context.setVariable("visuallyHiddenText", t_5);
}
if(frame.topLevel) {
context.addExport("visuallyHiddenText", t_5);
}
var t_6;
t_6 = (runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html"))),2):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text"));
frame.set("errorMessageText", t_6, true);
if(frame.topLevel) {
context.setVariable("errorMessageText", t_6);
}
if(frame.topLevel) {
context.addExport("errorMessageText", t_6);
}
output += "<p";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"id"), env.opts.autoescape);
output += "\"";
;
}
output += " class=\"govuk-error-message";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 6, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">\n  ";
if(runtime.contextOrFrameLookup(context, frame, "visuallyHiddenText")) {
output += "\n  <span class=\"govuk-visually-hidden\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "visuallyHiddenText"), env.opts.autoescape);
output += ":</span> ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "errorMessageText"), env.opts.autoescape);
output += "\n  ";
;
}
else {
output += "\n  ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "errorMessageText"), env.opts.autoescape);
output += "\n  ";
;
}
output += "\n</p>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/fieldset/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/fieldset/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "<fieldset class=\"govuk-fieldset";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"role")) {
output += " role=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"role"), env.opts.autoescape);
output += "\"";
;
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"describedBy")) {
output += " aria-describedby=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"describedBy"), env.opts.autoescape);
output += "\"";
;
}
output += runtime.suppressValue((lineno = 6, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">\n  ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"legend")),"html") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"legend")),"text")) {
output += "\n  <legend class=\"govuk-fieldset__legend";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"legend")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"legend")),"classes"), env.opts.autoescape);
;
}
output += "\">\n  ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"legend")),"isPageHeading")) {
output += "\n    <h1 class=\"govuk-fieldset__heading\">\n      ";
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"legend")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"legend")),"html"))),6):runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"legend")),"text")), env.opts.autoescape);
output += "\n    </h1>\n  ";
;
}
else {
output += "\n    ";
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"legend")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"legend")),"html"))),4):runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"legend")),"text")), env.opts.autoescape);
output += "\n  ";
;
}
output += "\n  </legend>\n  ";
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "caller")) {
output += runtime.suppressValue((lineno = 19, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
output += "\n";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")) {
output += "\n  ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")), env.opts.autoescape);
output += "\n";
;
}
;
}
output += "\n</fieldset>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/hint/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/hint/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "<div";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"id")) {
output += " id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"id"), env.opts.autoescape);
output += "\"";
;
}
output += " class=\"govuk-hint";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">\n  ";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html"))),2):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")), env.opts.autoescape);
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/label/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/label/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")) {
output += "\n";
var t_5;
t_5 = (function() {
var output = "";
output += "\n<label class=\"govuk-label";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 5, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"for")) {
output += " for=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"for"), env.opts.autoescape);
output += "\"";
;
}
output += ">\n  ";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html")?env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"html"))),2):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"text")), env.opts.autoescape);
output += "\n</label>\n";
;
return output;
})()
;
frame.set("labelHtml", t_5, true);
if(frame.topLevel) {
context.setVariable("labelHtml", t_5);
}
if(frame.topLevel) {
context.addExport("labelHtml", t_5);
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"isPageHeading")) {
output += "\n<h1 class=\"govuk-label-wrapper\">\n  ";
output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "labelHtml"))),2), env.opts.autoescape);
output += "\n</h1>\n";
;
}
else {
output += "\n";
output += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "labelHtml"))), env.opts.autoescape);
output += "\n";
;
}
output += "\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govuk/components/generic-header/template.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("govuk/macros/attributes.njk", false, "govuk/components/generic-header/template.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "govukAttributes")) {
var t_4 = t_1.govukAttributes;
} else {
cb(new Error("cannot import 'govukAttributes'")); return;
}
context.setVariable("govukAttributes", t_4);
output += "\n";
var t_5;
t_5 = env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"_namespace"),"govuk-generic");
frame.set("namespace", t_5, true);
if(frame.topLevel) {
context.setVariable("namespace", t_5);
}
if(frame.topLevel) {
context.addExport("namespace", t_5);
}
output += "\n\n<div class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "namespace"), env.opts.autoescape);
output += "-header";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"classes"), env.opts.autoescape);
;
}
output += "\"";
output += runtime.suppressValue((lineno = 5, colno = 112, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"attributes")])), env.opts.autoescape);
output += ">\n  <div class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "namespace"), env.opts.autoescape);
output += "-header__container ";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"containerClasses"),"govuk-width-container",true), env.opts.autoescape);
output += "\">\n    <div class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "namespace"), env.opts.autoescape);
output += "-header__logo\">\n      <a href=\"";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"url"),"/",true), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "namespace"), env.opts.autoescape);
output += "-header__homepage-link\">\n        ";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"logoHtml")?env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"logoHtml")):runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "params")),"logoText")), env.opts.autoescape);
output += "\n      </a>\n    </div>\n  </div>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
