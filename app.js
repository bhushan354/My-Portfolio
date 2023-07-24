const hamburgerOpenConst = document.querySelector('.hamburgerOpen');
const hamburgerCloseConst = document.querySelector('.hamburgerClose');
const menuPageConst = document.querySelector('.menuPage');
const pageLinkConst = document.querySelectorAll('.pageLink');

function openMenu() {
  menuPageConst.style.display = 'flex';
  menuPageConst.style.top = '0';
}

function closeMenu() {
  menuPageConst.style.top = '-100%';
}

function handlePageLinkClick() {
  closeMenu();

  const targetSectionId = this.getAttribute('href');
  const targetSection = document.querySelector(targetSectionId);

  targetSection.scrollIntoView({ behavior: 'smooth' });
}

hamburgerOpenConst.addEventListener('click', openMenu);
hamburgerCloseConst.addEventListener('click', closeMenu);

pageLinkConst.forEach((item) => {
  item.addEventListener('click', handlePageLinkClick);
});
