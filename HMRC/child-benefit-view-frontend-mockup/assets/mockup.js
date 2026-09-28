const ChildBenefitMock = {
  get data() {
    return JSON.parse(sessionStorage.getItem('childBenefitMock') || '{}');
  },
  save(values) {
    sessionStorage.setItem('childBenefitMock', JSON.stringify({ ...this.data, ...values }));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-journey-value]').forEach((element) => {
    const value = ChildBenefitMock.data[element.dataset.journeyValue];
    if (value) element.textContent = value;
  });

  const form = document.querySelector('[data-journey-form]');
  if (!form) return;

  const values = ChildBenefitMock.data;
  form.querySelectorAll('[name]').forEach((field) => {
    if (field.type === 'radio') field.checked = values[field.name] === field.value;
    else if (values[field.name]) field.value = values[field.name];
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    ChildBenefitMock.save(Object.fromEntries(new FormData(form).entries()));
    window.location.href = form.dataset.next;
  });
});