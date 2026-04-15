/* ═══════════════════════════════════════════════
   CAPAVISTA — Dashboard JavaScript
═══════════════════════════════════════════════ */

'use strict';

// ── User session ───────────────────────────────
const userName = sessionStorage.getItem('cv_user') || 'Admin';
document.getElementById('userName').textContent = userName.charAt(0).toUpperCase() + userName.slice(1);
document.getElementById('userAvatar').textContent = userName.charAt(0).toUpperCase();

// ── Date in topbar ─────────────────────────────
(function() {
  const el = document.getElementById('sectionDate');
  const now = new Date();
  el.textContent = now.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
})();

// ── Navigation ─────────────────────────────────
const sectionTitles = {
  overview:     'Dashboard',
  reservations: 'Reservations Calendar',
  bookings:     'All Bookings',
  revenue:      'Revenue & Finance',
  rooms:        'Room Management',
  gallery:      'Photo Gallery',
  offers:       'Offers & Promotions',
  messages:     'Guest Messages',
  analytics:    'Website Analytics',
  contacts:     'Contact Requests',
};

function navigate(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

  // Remove active from nav items
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  // Show target section
  const section = document.getElementById('sec-' + sectionId);
  if (section) section.classList.add('active');

  // Activate nav item
  const navItem = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
  if (navItem) navItem.classList.add('active');

  // Update topbar title
  document.getElementById('sectionTitle').textContent = sectionTitles[sectionId] || sectionId;

  // Init section-specific features
  if (sectionId === 'overview') initOverviewCharts();
  if (sectionId === 'revenue')  initRevenueCharts();
  if (sectionId === 'analytics') initAnalyticsCharts();
  if (sectionId === 'reservations') initCalendar();
  if (sectionId === 'bookings') populateBookingsTable();
  if (sectionId === 'gallery') populateGallery();

  // Close mobile sidebar
  closeSidebar();
}

// Bind nav items
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    const section = item.dataset.section;
    if (section) navigate(section);
  });
});

// ── Mobile sidebar ─────────────────────────────
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const hamburger = document.getElementById('hamburgerBtn');

hamburger.addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
});

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}
overlay.addEventListener('click', closeSidebar);

// ── Logout ─────────────────────────────────────
document.getElementById('logoutBtn').addEventListener('click', () => {
  sessionStorage.removeItem('cv_admin');
  sessionStorage.removeItem('cv_user');
  window.location.href = 'login.html';
});

// ── Modal helpers ──────────────────────────────
function openModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.remove('open');
    document.body.style.overflow = '';
  }
}
// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) closeModal(this.id);
  });
});

// ── Toast ──────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ── Stat counter animation ─────────────────────
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Easing
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * ease);
      el.textContent = prefix + value.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// ── Chart.js global defaults ───────────────────
if (typeof Chart !== 'undefined') {
  Chart.defaults.color = 'rgba(240,232,220,0.45)';
  Chart.defaults.borderColor = 'rgba(255,255,255,0.05)';
  Chart.defaults.font.family = "'Montserrat', sans-serif";
  Chart.defaults.font.size = 11;
}

// Chart instances tracker
const charts = {};

function destroyChart(id) {
  if (charts[id]) { charts[id].destroy(); delete charts[id]; }
}

// ── Overview Charts ────────────────────────────
function initOverviewCharts() {
  animateCounters();

  // Revenue chart
  const revCtx = document.getElementById('revenueChart');
  if (!revCtx) return;
  destroyChart('revenue');

  charts.revenue = new Chart(revCtx, {
    type: 'line',
    data: {
      labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      datasets: [
        {
          label: 'Revenue',
          data: [5800, 9200, 6400, 7100, 7800, 8450],
          borderColor: '#C4965A',
          backgroundColor: 'rgba(196,150,90,0.08)',
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: '#C4965A',
          pointBorderColor: '#0A0704',
          pointBorderWidth: 2,
          fill: true,
          tension: 0.4,
        },
        {
          label: 'Target',
          data: [7000, 7000, 7000, 7500, 7500, 8000],
          borderColor: 'rgba(196,150,90,0.3)',
          borderWidth: 1.5,
          borderDash: [5, 5],
          pointRadius: 0,
          fill: false,
          tension: 0.4,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1A1109',
          borderColor: 'rgba(196,150,90,0.3)',
          borderWidth: 1,
          titleColor: '#F0E8DC',
          bodyColor: 'rgba(240,232,220,0.7)',
          padding: 12,
          callbacks: {
            label: ctx => ` €${ctx.parsed.y.toLocaleString()}`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: 'rgba(240,232,220,0.35)' }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: {
            color: 'rgba(240,232,220,0.35)',
            callback: v => '€' + (v >= 1000 ? (v/1000).toFixed(0)+'k' : v)
          }
        }
      }
    }
  });

  // Occupancy donut
  const occCtx = document.getElementById('occupancyChart');
  if (!occCtx) return;
  destroyChart('occupancy');

  charts.occupancy = new Chart(occCtx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [90, 80, 75, 65, 22],
        backgroundColor: ['#C4965A','#8B6332','#6CA0DC','#4CAF7D','rgba(255,255,255,0.05)'],
        borderColor: '#0A0704',
        borderWidth: 3,
        hoverOffset: 4,
      }]
    },
    options: {
      responsive: false,
      cutout: '72%',
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
    }
  });
}

// ── Revenue Charts ─────────────────────────────
function initRevenueCharts() {
  // Monthly bar
  const mCtx = document.getElementById('monthlyRevenueChart');
  if (mCtx) {
    destroyChart('monthlyRevenue');
    charts.monthlyRevenue = new Chart(mCtx, {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'Revenue (€)',
          data: [6400, 7100, 7800, 8450, 9200, 10100, 11400, 11800, 9600, 7200, 5800, 9200],
          backgroundColor: 'rgba(196,150,90,0.25)',
          borderColor: '#C4965A',
          borderWidth: 1.5,
          borderRadius: 6,
          hoverBackgroundColor: 'rgba(196,150,90,0.45)',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1A1109',
            borderColor: 'rgba(196,150,90,0.3)',
            borderWidth: 1,
            callbacks: { label: ctx => ` €${ctx.parsed.y.toLocaleString()}` }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: 'rgba(240,232,220,0.35)' } },
          y: {
            grid: { color: 'rgba(255,255,255,0.04)' },
            ticks: { color: 'rgba(240,232,220,0.35)', callback: v => '€'+(v>=1000?(v/1000).toFixed(0)+'k':v) }
          }
        }
      }
    });
  }

  // Room revenue donut
  const rCtx = document.getElementById('roomRevenueChart');
  if (rCtx) {
    destroyChart('roomRevenue');
    charts.roomRevenue = new Chart(rCtx, {
      type: 'doughnut',
      data: {
        labels: ['Cave Room','Stone Room','Superior Stone','Traditional Suite'],
        datasets: [{
          data: [14200, 16800, 9400, 7850],
          backgroundColor: ['#C4965A','#8B6332','#6CA0DC','#4CAF7D'],
          borderColor: '#0A0704',
          borderWidth: 3,
          hoverOffset: 6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: 'rgba(240,232,220,0.6)',
              padding: 16,
              usePointStyle: true,
              pointStyleWidth: 8,
            }
          },
          tooltip: {
            backgroundColor: '#1A1109',
            borderColor: 'rgba(196,150,90,0.3)',
            borderWidth: 1,
            callbacks: { label: ctx => ` €${ctx.parsed.toLocaleString()}` }
          }
        }
      }
    });
  }
}

// ── Analytics Charts ───────────────────────────
function initAnalyticsCharts() {
  // Traffic line
  const tCtx = document.getElementById('trafficChart');
  if (tCtx) {
    destroyChart('traffic');
    const labels = Array.from({length: 30}, (_, i) => {
      const d = new Date(); d.setDate(d.getDate() - 29 + i);
      return d.toLocaleDateString('en-US',{month:'short',day:'numeric'});
    });
    const data = labels.map(() => Math.floor(Math.random() * 250 + 100));

    charts.traffic = new Chart(tCtx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Visitors',
          data,
          borderColor: '#C4965A',
          backgroundColor: 'rgba(196,150,90,0.06)',
          borderWidth: 2,
          pointRadius: 0,
          fill: true,
          tension: 0.4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { backgroundColor: '#1A1109', borderColor: 'rgba(196,150,90,0.3)', borderWidth: 1 }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: 'rgba(240,232,220,0.35)', maxTicksLimit: 6 }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.04)' },
            ticks: { color: 'rgba(240,232,220,0.35)' }
          }
        }
      }
    });
  }

  // Sources donut
  const sCtx = document.getElementById('sourcesChart');
  if (sCtx) {
    destroyChart('sources');
    charts.sources = new Chart(sCtx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [42, 28, 18, 12],
          backgroundColor: ['#C4965A','#8B6332','#6CA0DC','#4CAF7D'],
          borderColor: '#0A0704',
          borderWidth: 3,
        }]
      },
      options: {
        responsive: false,
        cutout: '68%',
        plugins: { legend: { display: false }, tooltip: { enabled: false } }
      }
    });
  }
}

// ── Calendar ───────────────────────────────────
let calYear = 2025, calMonth = 3; // April 2025 (0-indexed)

// Mock booked days
const bookedDays = {
  '2025-4': [3,4,5,10,11,12,13,17,18,19,20,21,22,24,25,26,28],
};

function initCalendar() {
  renderCalendar();
  document.getElementById('prevMonth').onclick = () => {
    calMonth--;
    if (calMonth < 0) { calMonth = 11; calYear--; }
    renderCalendar();
  };
  document.getElementById('nextMonth').onclick = () => {
    calMonth++;
    if (calMonth > 11) { calMonth = 0; calYear++; }
    renderCalendar();
  };
}

function renderCalendar() {
  const months = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];
  document.getElementById('calMonthLabel').textContent = `${months[calMonth]} ${calYear}`;

  const container = document.getElementById('calDays');
  container.innerHTML = '';

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === calYear && today.getMonth() === calMonth;

  const key = `${calYear}-${calMonth + 1}`;
  const booked = bookedDays[key] || [];

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    const cell = document.createElement('div');
    cell.className = 'cal-day other-month';
    container.appendChild(cell);
  }

  // Days
  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement('div');
    cell.className = 'cal-day';
    cell.textContent = d;

    if (isCurrentMonth && d === today.getDate()) cell.classList.add('today');
    if (booked.includes(d)) cell.classList.add('has-booking');

    cell.title = booked.includes(d) ? 'Has reservations' : 'Available';
    container.appendChild(cell);
  }
}

// ── Bookings table ─────────────────────────────
const bookingsData = [
  { id:'#BK-042', guest:'Sophie Laurent',    room:'Traditional Suite', checkin:'Apr 18', checkout:'Apr 22', nights:4, amount:'€560', source:'Direct', status:'confirmed' },
  { id:'#BK-041', guest:'Marco Bianchi',     room:'Cave Room',         checkin:'Apr 17', checkout:'Apr 20', nights:3, amount:'€225', source:'WhatsApp', status:'checkin' },
  { id:'#BK-040', guest:'Aisha Al-Rashid',   room:'Stone Room',        checkin:'Apr 20', checkout:'Apr 25', nights:5, amount:'€450', source:'Email', status:'pending' },
  { id:'#BK-039', guest:'James Clark',       room:'Superior Stone',    checkin:'Apr 15', checkout:'Apr 17', nights:2, amount:'€220', source:'Direct', status:'confirmed' },
  { id:'#BK-038', guest:'Hiroshi Tanaka',    room:'Cave Room',         checkin:'Apr 22', checkout:'Apr 26', nights:4, amount:'€300', source:'Booking.com', status:'cancelled' },
  { id:'#BK-037', guest:'Yuki Nakamura',     room:'Cave Room',         checkin:'Apr 24', checkout:'Apr 27', nights:3, amount:'€225', source:'Direct', status:'confirmed' },
  { id:'#BK-036', guest:'Carlos Rivera',     room:'Stone Room',        checkin:'Apr 12', checkout:'Apr 16', nights:4, amount:'€360', source:'WhatsApp', status:'checkin' },
  { id:'#BK-035', guest:'Elena Kowalski',    room:'Traditional Suite', checkin:'Apr 10', checkout:'Apr 14', nights:4, amount:'€560', source:'Direct', status:'confirmed' },
  { id:'#BK-034', guest:'David Thompson',    room:'Superior Stone',    checkin:'Apr 8',  checkout:'Apr 11', nights:3, amount:'€330', source:'Airbnb', status:'confirmed' },
  { id:'#BK-033', guest:'Valentina Rossi',   room:'Cave Room',         checkin:'Apr 5',  checkout:'Apr 8',  nights:3, amount:'€225', source:'Booking.com', status:'confirmed' },
];

function populateBookingsTable() {
  const tbody = document.getElementById('bookingsTableBody');
  if (!tbody) return;
  tbody.innerHTML = bookingsData.map(b => `
    <tr>
      <td><span class="booking-id">${b.id}</span></td>
      <td><span class="guest-name">${b.guest}</span></td>
      <td>${b.room}</td>
      <td>${b.checkin}</td>
      <td>${b.checkout}</td>
      <td>${b.nights}</td>
      <td style="color:var(--gold)">${b.amount}</td>
      <td><span style="font-size:11px;color:var(--text-3)">${b.source}</span></td>
      <td><span class="badge badge--${b.status}">${b.status.charAt(0).toUpperCase()+b.status.slice(1)}</span></td>
      <td><button class="btn-sm" onclick="showToast('Booking ${b.id} opened')">View</button></td>
    </tr>
  `).join('');
}

// ── Gallery placeholder items ──────────────────
const galleryImages = [
  '../Capavista Cave House/42deda36.jpeg',
  '../Capavista Cave House/b932e973.jpeg',
  '../Capavista Cave House/0146b11c.jpeg',
  '../Capavista Cave House/63ab1ea6.jpeg',
];

function populateGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid || grid.children.length > 0) return;

  // Show 4 real images + 8 placeholder cards
  const items = [...galleryImages];
  for (let i = items.length; i < 12; i++) items.push(null);

  items.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-admin-item';
    div.innerHTML = src
      ? `
          <img src="${src}" alt="Hotel photo ${i+1}" loading="lazy" onerror="this.parentElement.style.background='var(--card-hover)'"/>
          <div class="item-overlay">
            <button class="btn-sm" onclick="showToast('Photo deleted')">Delete</button>
          </div>
        `
      : `
          <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--text-3);font-size:12px;flex-direction:column;gap:8px">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            Photo ${i+1}
          </div>
          <div class="item-overlay">
            <button class="btn-sm btn-sm--gold" onclick="document.getElementById('fileInput').click()">Upload</button>
          </div>
        `;
    grid.appendChild(div);
  });
}

// ── File upload ────────────────────────────────
const uploadZone = document.getElementById('uploadZone');
const fileInput  = document.getElementById('fileInput');

if (uploadZone) {
  uploadZone.addEventListener('click', () => fileInput && fileInput.click());
  uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.classList.add('drag-over'); });
  uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag-over'));
  uploadZone.addEventListener('drop', e => {
    e.preventDefault();
    uploadZone.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    if (files.length) showToast(`${files.length} photo(s) uploaded successfully`);
  });
}

if (fileInput) {
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length) {
      showToast(`${fileInput.files.length} photo(s) uploaded successfully`);
    }
  });
}

// ── Message item click ─────────────────────────
document.querySelectorAll('.msg-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.msg-item').forEach(m => m.classList.remove('active'));
    this.classList.add('active');
    this.classList.remove('unread');
    this.querySelector('::before'); // remove unread dot (handled by class)
  });
});

// ── Init on load ───────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Init charts only if Chart.js loaded
  if (typeof Chart !== 'undefined') {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      initOverviewCharts();
      initCalendar();
    }, 100);
  } else {
    animateCounters();
    initCalendar();
  }
  populateGallery();
});

// Also init immediately if DOMContentLoaded already fired
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(() => {
    if (typeof Chart !== 'undefined') initOverviewCharts();
    else animateCounters();
    initCalendar();
    populateGallery();
  }, 200);
}
