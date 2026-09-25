const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const track = (name, detail = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...detail });
};

const header = $('[data-header]');
const menuToggle = $('.menu-toggle');
const mobileMenu = $('#mobile-menu');
menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  mobileMenu.hidden = open;
  track('mobile_menu_toggle', { open: !open });
});
$$('.mobile-menu a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
}));
window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 24), { passive: true });

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 }) : null;
$$('.reveal').forEach((element) => revealObserver?.observe(element));

const form = $('#contact-form');
const setError = (name, message = '') => {
  const field = $('#' + name)?.closest('.form-field');
  const error = $('[data-error-for="' + name + '"]');
  field?.classList.toggle('has-error', Boolean(message));
  if (error) error.textContent = message;
};
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = $('#name').value.trim();
  const email = $('#email').value.trim();
  const message = $('#message').value.trim();
  const consent = $('#consent').checked;
  setError('name', name ? '' : 'Digite seu nome.');
  setError('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Digite um e-mail válido.');
  setError('message', message ? '' : 'Conte brevemente o que você gostaria de saber.');
  const status = $('.form-status', form);
  if (!consent) {
    status.textContent = 'É necessário aceitar a Política de Privacidade.';
    status.className = 'form-status error';
    return;
  }
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    status.textContent = 'Revise os campos marcados antes de continuar.';
    status.className = 'form-status error';
    return;
  }
  status.textContent = 'Demonstração local: nada foi enviado. A mensagem está pronta para ser conectada ao canal da clínica.';
  status.className = 'form-status';
  track('lead_form_submit', { mode: 'demo', has_message: true });
});

const dialog = $('[data-privacy-dialog]');
$('[data-privacy-open]')?.addEventListener('click', () => dialog?.showModal());
$('[data-privacy-close]')?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

$$('a[href^="#"]').forEach((link) => link.addEventListener('click', () => track('cta_click', { destination: link.getAttribute('href') })));

