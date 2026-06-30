const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const demoAppointments = {
  'RIV-1024': {
    patient: 'Patient de démonstration',
    date: 'Mardi 14 juillet 2026',
    time: '14h30',
    practitioner: 'Dr Martin',
    room: 'Cabinet 2'
  },
  'RIV-2048': {
    patient: 'Patient de démonstration',
    date: 'Jeudi 23 juillet 2026',
    time: '09h15',
    practitioner: 'Dr Lebreton',
    room: 'Orthodontie'
  }
};

const form = document.querySelector('#demoForm');
const result = document.querySelector('#appointmentResult');

function renderAppointment(code) {
  const item = demoAppointments[code.trim().toUpperCase()];

  if (!item) {
    result.innerHTML = `
      <strong>Aucun rendez-vous trouvé.</strong><br>
      <span>Essayez le code fictif <b>RIV-1024</b> ou <b>RIV-2048</b>.</span>
    `;
    return;
  }

  result.innerHTML = `
    <strong>${item.date} · ${item.time}</strong><br>
    <span>${item.practitioner} · ${item.room}</span><br>
    <small>Donnée fictive pour présenter le futur espace patient.</small>
  `;
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  renderAppointment(document.querySelector('#patientCode').value);
});

renderAppointment('RIV-1024');


document.querySelectorAll('.main-nav a').forEach((link) => {
  const href = link.getAttribute('href');
  const current = location.pathname.split('/').pop() || 'index.html';
  if (href === current) link.classList.add('active');
});
