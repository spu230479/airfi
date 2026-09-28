const RefundMock = {
  get data() {
    return JSON.parse(sessionStorage.getItem('saRefundMock') || '{}');
  },
  save(values) {
    sessionStorage.setItem('saRefundMock', JSON.stringify({ ...this.data, ...values }));
  }
};

const fromCheckAnswers = new URLSearchParams(window.location.search).get('from') === 'cya';

document.addEventListener('DOMContentLoaded', () => {
  const values = RefundMock.data;

  document.querySelectorAll('[data-journey-value]').forEach((element) => {
    const value = values[element.dataset.journeyValue];
    if (value) element.textContent = value;
  });

  document.querySelectorAll('[data-journey-ending]').forEach((element) => {
    const value = values[element.dataset.journeyEnding];
    if (value) element.textContent = value.slice(-3);
  });

  document.querySelectorAll('[data-journey-hide-empty]').forEach((element) => {
    if (!values[element.dataset.journeyHideEmpty]) element.remove();
  });

  if (fromCheckAnswers) {
    document.querySelectorAll('[data-back-link]').forEach((link) => { link.href = link.dataset.backLink || 'check-answers.html'; });
  }

  const form = document.querySelector('[data-journey-form]');
  if (!form) return;

  form.querySelectorAll('[name]').forEach((field) => {
    if (!values[field.name] || field.type === 'password' || field.type === 'hidden') return;
    if (field.type === 'radio') field.checked = values[field.name] === field.value;
    else field.value = values[field.name];
  });

  const syncReveals = () => {
    form.querySelectorAll('input[type="radio"][data-reveal]').forEach((radio) => {
      document.getElementById(radio.dataset.reveal).hidden = !radio.checked;
    });
  };
  form.addEventListener('change', syncReveals);
  syncReveals();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const answers = Object.fromEntries(new FormData(form).entries());
    delete answers.ggPassword;

    if (answers.amountChoice) {
      answers.refundAmount = answers.amountChoice === 'other'
        ? `£${Number(answers.otherAmount || 0).toFixed(2)}`
        : answers.amountChoice;
    }
    RefundMock.save(answers);

    const chosen = form.querySelector('input[type="radio"]:checked[data-next]');
    const next = chosen ? chosen.dataset.next : form.dataset.next;
    if (!fromCheckAnswers) window.location.href = next;
    else if (form.dataset.cyaReturn === 'false') window.location.href = `${next}?from=cya`;
    else window.location.href = 'check-answers.html';
  });
});
