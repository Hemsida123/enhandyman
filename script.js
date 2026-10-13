document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function setMenu(open, restoreFocus = false) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('span').textContent = open ? 'Stäng' : 'Meny';
  nav.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
  if (restoreFocus) toggle.focus();
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', event => {
  if (toggle.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') setMenu(false, true);
  if (event.key === 'Tab') {
    const last = nav.querySelector('a:last-child');
    if (event.shiftKey && document.activeElement === toggle) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); toggle.focus(); }
  }
});
nav.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('click', event => {
  if (!event.target.closest('.header') && toggle.getAttribute('aria-expanded') === 'true') setMenu(false);
});
matchMedia('(min-width: 861px)').addEventListener('change', event => { if (event.matches) setMenu(false); });
const hours = document.querySelector('#hours');
if (hours) {
  const money = new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', minimumFractionDigits: 2 });
  const update = () => {
    document.querySelector('#hours-value').textContent = hours.value + ' timmar';
    document.querySelector('#estimate-value').textContent = money.format((Number(hours.value) + 1) * 618.75);
    hours.setAttribute('aria-valuetext', hours.value + ' timmar, exempel ' + money.format((Number(hours.value) + 1) * 618.75));
  };
  hours.addEventListener('input', update);
  update();
}
