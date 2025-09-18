document.addEventListener('DOMContentLoaded', () => {
  const tablists = document.querySelectorAll('[role="tablist"]');

  tablists.forEach((tablist) => {
    const tabs = tablist.querySelectorAll('[role="tab"]');
    const panels = document.querySelectorAll('[role="tabpanel"]');

    function activateTab(tab) {
      const targetId = tab.getAttribute('aria-controls');

      tabs.forEach((t) => {
        const isSelected = t === tab;
        t.setAttribute('aria-selected', isSelected);
        t.setAttribute('tabindex', isSelected ? '0' : '-1');
      });

      panels.forEach((panel) => {
        const isMatch = panel.id === targetId;
        panel.hidden = !isMatch;
        panel.setAttribute('aria-hidden', String(!isMatch));
      });

      tab.focus();
    }

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        activateTab(tab);
      });

      tab.addEventListener('keydown', (event) => {
        const currentIndex = Array.from(tabs).indexOf(tab);
        let newIndex = currentIndex;

        if (event.key === 'ArrowRight') {
          newIndex = (currentIndex + 1) % tabs.length;
          event.preventDefault();
        } else if (event.key === 'ArrowLeft') {
          newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          event.preventDefault();
        } else if (event.key === 'Home') {
          newIndex = 0;
          event.preventDefault();
        } else if (event.key === 'End') {
          newIndex = tabs.length - 1;
          event.preventDefault();
        }

        if (newIndex !== currentIndex) {
          activateTab(tabs[newIndex]);
        }
      });
    });

    const initiallySelected = tablist.querySelector('[role="tab"][aria-selected="true"]');
    if (!initiallySelected && tabs.length) {
      activateTab(tabs[0]);
    }
  });
});
