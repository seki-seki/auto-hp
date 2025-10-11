(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var tablists = document.querySelectorAll('[role="tablist"]');

    tablists.forEach(function (tablist) {
      var tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));

      function activateTab(tab, setFocus) {
        if (!tab || tab.getAttribute('aria-selected') === 'true') {
          if (setFocus) {
            tab && tab.focus();
          }
          return;
        }

        tabs.forEach(function (t) {
          var controls = t.getAttribute('aria-controls');
          var panel = controls ? document.getElementById(controls) : null;
          t.setAttribute('aria-selected', String(t === tab));
          t.setAttribute('tabindex', t === tab ? '0' : '-1');
          if (panel) {
            if (t === tab) {
              panel.removeAttribute('hidden');
              var frame = panel.querySelector('iframe[data-src]');
              if (frame && !frame.hasAttribute('src')) {
                frame.setAttribute('src', frame.getAttribute('data-src'));
              }
            } else {
              panel.setAttribute('hidden', '');
            }
          }
        });

        if (setFocus) {
          tab.focus();
        }
      }

      tablist.addEventListener('click', function (event) {
        var target = event.target.closest('[role="tab"]');
        if (target) {
          activateTab(target, false);
        }
      });

      tablist.addEventListener('keydown', function (event) {
        var key = event.key;
        var currentIndex = tabs.indexOf(document.activeElement);

        if (key === 'ArrowRight' || key === 'ArrowLeft') {
          event.preventDefault();
          if (currentIndex === -1) {
            return;
          }
          var direction = key === 'ArrowRight' ? 1 : -1;
          var nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
          activateTab(tabs[nextIndex], true);
        } else if (key === 'Home') {
          event.preventDefault();
          activateTab(tabs[0], true);
        } else if (key === 'End') {
          event.preventDefault();
          activateTab(tabs[tabs.length - 1], true);
        } else if (key === 'Enter' || key === ' ') {
          var candidate = document.activeElement;
          if (candidate && candidate.getAttribute('role') === 'tab') {
            event.preventDefault();
            activateTab(candidate, false);
          }
        }
      });

      // ensure only the first tab is active on load
      var initial = tabs.find(function (tab) {
        return tab.getAttribute('aria-selected') === 'true';
      }) || tabs[0];
      activateTab(initial, false);
    });

    // smooth scroll for in-page anchors on pattern pages
    var internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        var hash = link.getAttribute('href');
        if (!hash || hash.length <= 1) {
          return;
        }
        var target = document.getElementById(hash.substring(1));
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.setAttribute('data-highlight', '');
          setTimeout(function () {
            target.removeAttribute('data-highlight');
          }, 1600);
        }
      });
    });
  });
})();
