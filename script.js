document.addEventListener('DOMContentLoaded', () => {
  const tabList = document.querySelector('[role="tablist"]');
  if (tabList) {
    const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
    const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));

    const activateTab = (newTab) => {
      tabs.forEach((tab, index) => {
        const selected = tab === newTab;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        const panel = panels[index];
        if (panel) {
          panel.toggleAttribute('hidden', !selected);
          if (selected) {
            const iframe = panel.querySelector('iframe');
            if (iframe && iframe.dataset.src && !iframe.src) {
              iframe.src = iframe.dataset.src;
            }
          }
        }
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => activateTab(tab));
      tab.addEventListener('keydown', (event) => {
        const currentIndex = tabs.indexOf(tab);
        let newIndex = currentIndex;
        switch (event.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            newIndex = (currentIndex + 1) % tabs.length;
            event.preventDefault();
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
            event.preventDefault();
            break;
          case 'Home':
            newIndex = 0;
            event.preventDefault();
            break;
          case 'End':
            newIndex = tabs.length - 1;
            event.preventDefault();
            break;
          default:
            return;
        }
        tabs[newIndex].focus();
        activateTab(tabs[newIndex]);
      });
    });

    activateTab(tabs[0]);
  }

  const skipLinks = document.querySelectorAll('a[href^="#"]');
  skipLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const removeTabIndex = () => {
          target.removeAttribute('tabindex');
          target.removeEventListener('blur', removeTabIndex);
        };
        target.addEventListener('blur', removeTabIndex);
      }
    });
  });
});
