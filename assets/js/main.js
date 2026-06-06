/* ===================================================================
   SOC Splunk Reference Guide — Global JS
   =================================================================== */
'use strict';

// ── Copy SPL to clipboard ──────────────────────────────────────────────
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const block = btn.closest('.spl-block');
      if (!block) return;
      const code = block.querySelector('.spl-body');
      if (!code) return;
      const text = code.innerText || code.textContent;
      try {
        await navigator.clipboard.writeText(text.trim());
        btn.textContent = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = '⎘ Copy SPL';
          btn.classList.remove('copied');
        }, 2000);
      } catch {
        btn.textContent = 'Error';
      }
    });
  });
}

// ── Dark / Light theme toggle ──────────────────────────────────────────
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const stored = localStorage.getItem('soc-theme');
  if (stored === 'light') { document.body.classList.add('light'); btn.textContent = '☀'; }
  else btn.textContent = '◑';
  btn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    btn.textContent = isLight ? '☀' : '◑';
    localStorage.setItem('soc-theme', isLight ? 'light' : 'dark');
  });
}

// ── Sidebar mobile toggle ──────────────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu');
  const sidebar = document.querySelector('.sidebar');
  if (!btn || !sidebar) return;
  btn.addEventListener('click', () => sidebar.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) && e.target !== btn)
      sidebar.classList.remove('open');
  });
}

// ── Layer tabs ─────────────────────────────────────────────────────────
function initLayerTabs() {
  const tabs = document.querySelectorAll('.layer-tab');
  const panels = document.querySelectorAll('.layer-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.layer;
      tabs.forEach(t => t.classList.remove('active-u', 'active-d', 'active-a'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active-' + target);
      const panel = document.getElementById('panel-' + target);
      if (panel) panel.classList.add('active');
    });
  });
  // activate first tab
  if (tabs.length) tabs[0].click();
}

// ── Runbook checkboxes ─────────────────────────────────────────────────
function initCheckboxes() {
  document.querySelectorAll('.step-cb').forEach(cb => {
    cb.addEventListener('click', () => cb.classList.toggle('checked'));
  });
}

// ── Collapsible phase headers ──────────────────────────────────────────
function initCollapsible() {
  document.querySelectorAll('.phase-header').forEach(hdr => {
    hdr.addEventListener('click', () => {
      const steps = hdr.nextElementSibling;
      const isOpen = steps && steps.style.display !== 'none';
      if (steps) steps.style.display = isOpen ? 'none' : '';
      hdr.classList.toggle('collapsed', isOpen);
    });
  });
}

// ── MITRE item click → ATT&CK lookup ──────────────────────────────────
function initMitreLinks() {
  document.querySelectorAll('.mitre-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.querySelector('.mitre-id')?.textContent?.trim();
      if (id) window.open('https://attack.mitre.org/techniques/' + id.replace('.', '/'), '_blank');
    });
    item.title = 'Open in MITRE ATT&CK';
    item.style.cursor = 'pointer';
  });
}

// ── Reading progress bar ───────────────────────────────────────────────
function initProgressBar() {
  const fill = document.querySelector('.progress-fill');
  if (!fill) return;
  const update = () => {
    const st = window.scrollY;
    const dh = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = (dh > 0 ? Math.min(100, (st / dh) * 100) : 0) + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ── Search / filter (index page) ──────────────────────────────────────
function initSearch() {
  const input = document.querySelector('#search-input');
  if (!input) return;
  const cards = document.querySelectorAll('.scenario-card');
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.classList.toggle('search-hidden', q !== '' && !text.includes(q));
    });
  });
}

// ── Active nav link ────────────────────────────────────────────────────
function setActiveNav() {
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link[href]').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    link.classList.toggle('active', href === current || (current === '' && href === 'index.html'));
  });
}

// ── Keyboard shortcuts ─────────────────────────────────────────────────
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      document.getElementById('search-input')?.focus();
    }
    // ← → arrow keys for prev/next scenario
    if (e.key === 'ArrowRight') {
      document.querySelector('.sc-nav-btn.next')?.click();
    }
    if (e.key === 'ArrowLeft') {
      document.querySelector('.sc-nav-btn.prev')?.click();
    }
  });
}

// ── Print scenario ─────────────────────────────────────────────────────
function initPrint() {
  const btn = document.getElementById('print-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    // Make all panels visible for print
    document.querySelectorAll('.layer-panel').forEach(p => p.style.display = 'block');
    document.querySelectorAll('.phase-steps').forEach(s => s.style.display = '');
    window.print();
    // Restore
    setTimeout(initLayerTabs, 500);
  });
}

// ── Init all ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCopyButtons();
  initThemeToggle();
  initMobileMenu();
  initLayerTabs();
  initCheckboxes();
  initCollapsible();
  initMitreLinks();
  initProgressBar();
  initSearch();
  setActiveNav();
  initKeyboard();
  initPrint();
});
