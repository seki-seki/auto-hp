const page = document.querySelector('.page');
const buttons = document.querySelectorAll('.layout-switcher__button');
const variants = document.querySelectorAll('.variant');

function setActiveVariant(target) {
  if (!target) return;
  const variantName = target.getAttribute('data-variant');
  if (!variantName) return;

  page?.setAttribute('data-active-variant', variantName);

  buttons.forEach((button) => {
    const isActive = button.getAttribute('data-variant') === variantName;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  variants.forEach((section) => {
    const isMatch = section.getAttribute('data-variant') === variantName;
    if (isMatch) {
      section.removeAttribute('hidden');
    } else {
      section.setAttribute('hidden', '');
    }
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => setActiveVariant(button));
});

const urlParams = new URLSearchParams(window.location.search);
const initialVariant = urlParams.get('layout');
if (initialVariant) {
  const matchButton = Array.from(buttons).find(
    (button) => button.getAttribute('data-variant') === initialVariant
  );
  if (matchButton) {
    setActiveVariant(matchButton);
  }
}
