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

//popup mobile

const projects = [
  {
    name: 'Multi Post Stories',
    description: 'A daily selection of privately personalized reads...',
    image: 'popupImg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveLink: 'https://google.com',
    sourceLink: 'https://google.com',
  },
  {
    name: 'Professional Art Printing Data',
    description: ' A daily selection of privately personalized reads  Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
    image: 'screen.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    sourceLink: 'https://google.com',
  },
  {
    name: 'Professional Art Printing Data',
    description: ' A daily selection of privately personalized reads  Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
    image: 'screen.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    sourceLink: 'https://google.com',
  },
  {
    name: 'Professional Art Printing Data',
    description: ' A daily selection of privately personalized reads  Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
    image: 'screen.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    sourceLink: 'https://google.com',
  },
  {
    name: 'Professional Art Printing Data',
    description: ' A daily selection of privately personalized reads  Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
    image: 'screen.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    sourceLink: 'https://google.com',
  },
  {
    name: 'Professional Art Printing Data',
    description: ' A daily selection of privately personalized reads  Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
    image: 'screen.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    sourceLink: 'https://google.com',
  },
  {
    name: 'Professional Art Printing Data',
    description: ' A daily selection of privately personalized reads  Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
    image: 'screen.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    sourceLink: 'https://google.com',
  },
];

const mainDivOne = document.querySelector('.mainDiv');

const mainDivTwo = document.createElement('div') ;
mainDivTwo.setAttribute('class', 'firstDiv');
mainDivOne.appendChild(mainDivTwo);

const mainText = document.createElement('h1');
mainText.textContent = projects[0].name;
mainDivTwo.appendChild(mainText);

const ul = document.createElement('ul');
ul.setAttribute('class', 'tech');
mainDivTwo.appendChild(ul);

const li1 = document.createElement('li');
li1.textContent = 'HTML';

const li2 = document.createElement('li');
li2.textContent = 'Bootstrap'; 

const li3 = document.createElement('li');
li3.textContent = 'Ruby on Rails';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
