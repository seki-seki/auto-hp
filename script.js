(function () {
  const tablist = document.querySelector('[role="tablist"]');
  if (!tablist) return;

  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));

  const activateTab = (tab, shouldFocus = true) => {
    tabs.forEach((btn, index) => {
      const selected = btn === tab;
      btn.setAttribute('aria-selected', String(selected));
      btn.setAttribute('tabindex', selected ? '0' : '-1');
      if (panels[index]) {
        if (selected) {
          panels[index].removeAttribute('hidden');
        } else {
          panels[index].setAttribute('hidden', '');
        }
      }
    });
    if (shouldFocus) {
      tab.focus();
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (event) => {
      const { key } = event;
      let newIndex = index;
      if (key === 'ArrowRight' || key === 'ArrowDown') {
        event.preventDefault();
        newIndex = (index + 1) % tabs.length;
        activateTab(tabs[newIndex]);
      } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
        event.preventDefault();
        newIndex = (index - 1 + tabs.length) % tabs.length;
        activateTab(tabs[newIndex]);
      } else if (key === 'Home') {
        event.preventDefault();
        activateTab(tabs[0]);
      } else if (key === 'End') {
        event.preventDefault();
        activateTab(tabs[tabs.length - 1]);
      }
    });
  });

  const selectedTab = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
  if (selectedTab) {
    activateTab(selectedTab, false);
  }
})();
