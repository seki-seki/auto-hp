document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

  function activateTab(tab) {
    tabs.forEach((btn) => {
      const selected = btn === tab;
      btn.setAttribute('aria-selected', String(selected));
      btn.tabIndex = selected ? 0 : -1;
    });

    panels.forEach((panel) => {
      if (panel.id === tab.getAttribute('aria-controls')) {
        panel.hidden = false;
      } else {
        panel.hidden = true;
      }
    });

    tab.focus();
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (event) => {
      const currentIndex = tabs.indexOf(tab);
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        const nextTab = tabs[(currentIndex + 1) % tabs.length];
        activateTab(nextTab);
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        const prevTab = tabs[(currentIndex - 1 + tabs.length) % tabs.length];
        activateTab(prevTab);
      } else if (event.key === 'Home') {
        event.preventDefault();
        activateTab(tabs[0]);
      } else if (event.key === 'End') {
        event.preventDefault();
        activateTab(tabs[tabs.length - 1]);
      }
    });
  });

  const initialTab = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
  activateTab(initialTab);
});
