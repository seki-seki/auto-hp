document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  const panel = document.getElementById('pattern-panel');
  const iframe = panel ? panel.querySelector('iframe') : null;

  if (!tabs.length || !panel || !iframe) {
    return;
  }

  let activeTab = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];

  const focusTab = (tab) => {
    tab.setAttribute('tabindex', '0');
    tab.focus({ preventScroll: true });
  };

  const unfocusTab = (tab) => {
    tab.setAttribute('tabindex', '-1');
  };

  const loadPattern = (tab) => {
    const src = tab.dataset.src;
    const title = tab.dataset.title;
    if (src && iframe.getAttribute('src') !== src) {
      iframe.setAttribute('src', src);
    }
    if (title) {
      iframe.setAttribute('title', title);
    }
    panel.setAttribute('aria-labelledby', tab.id);
  };

  const activateTab = (tab, setFocus = true) => {
    if (activeTab === tab) {
      if (setFocus) {
        focusTab(tab);
      }
      loadPattern(tab);
      return;
    }

    activeTab.setAttribute('aria-selected', 'false');
    unfocusTab(activeTab);

    tab.setAttribute('aria-selected', 'true');
    focusTab(tab);
    activeTab = tab;
    loadPattern(tab);
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activateTab(tab, true);
    });

    tab.addEventListener('keydown', (event) => {
      const currentIndex = tabs.indexOf(tab);
      let targetIndex = currentIndex;

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          targetIndex = (currentIndex + 1) % tabs.length;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          targetIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          break;
        case 'Home':
          targetIndex = 0;
          break;
        case 'End':
          targetIndex = tabs.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      const targetTab = tabs[targetIndex];
      activateTab(targetTab, true);
    });
  });

  loadPattern(activeTab);
});
