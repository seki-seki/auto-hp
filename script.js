const tablist = document.querySelector('[role="tablist"]');
const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const frame = document.getElementById('pattern-frame');
const panel = document.getElementById('pattern-panel');

const patternMap = {
  'pattern-1': {
    src: 'pattern-1.html',
    title: 'Gaia LLC モダンミニマルデザイン',
  },
  'pattern-2': {
    src: 'pattern-2.html',
    title: 'Gaia LLC ダークグラデーションデザイン',
  },
  'pattern-3': {
    src: 'pattern-3.html',
    title: 'Gaia LLC ビジュアルリッチデザイン',
  },
};

function activateTab(tab) {
  const id = tab.getAttribute('data-pattern');
  tabs.forEach((t) => {
    const selected = t === tab;
    t.setAttribute('aria-selected', selected ? 'true' : 'false');
    t.setAttribute('tabindex', selected ? '0' : '-1');
  });
  const pattern = patternMap[id];
  if (pattern) {
    frame.setAttribute('title', pattern.title);
    if (frame.getAttribute('src') !== pattern.src) {
      frame.setAttribute('src', pattern.src);
    }
  }
}

function moveFocus(current, direction) {
  const index = tabs.indexOf(current);
  let nextIndex = index + direction;
  if (nextIndex < 0) nextIndex = tabs.length - 1;
  if (nextIndex >= tabs.length) nextIndex = 0;
  tabs[nextIndex].focus();
  activateTab(tabs[nextIndex]);
}

if (tablist && tabs.length) {
  tablist.addEventListener('click', (event) => {
    const target = event.target.closest('[role="tab"]');
    if (target) {
      activateTab(target);
      target.focus();
    }
  });

  tablist.addEventListener('keydown', (event) => {
    const target = event.target.closest('[role="tab"]');
    if (!target) return;
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        moveFocus(target, -1);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        moveFocus(target, 1);
        break;
      case 'Home':
        event.preventDefault();
        tabs[0].focus();
        activateTab(tabs[0]);
        break;
      case 'End':
        event.preventDefault();
        tabs[tabs.length - 1].focus();
        activateTab(tabs[tabs.length - 1]);
        break;
      default:
        break;
    }
  });

  const defaultTab = tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0];
  if (defaultTab) {
    activateTab(defaultTab);
  }
}
