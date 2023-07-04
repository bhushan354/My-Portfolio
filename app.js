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

// popup

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

// generatingg six cards dynamically usinh ayyay
function generateProjectSection() {
  const projectContainer = document.querySelector('.myProjects');

  projects.forEach((project) => {
    const projectMarkup = `
      <div class="project">
        <h2>${project.name}</h2>
        
        <p>${project.description}</p>
        <ul class="techStacks">
          ${project.technologies.map((tech) => `<li><button class="stackButton" type="button">${tech}</button></li>`).join('')}
        </ul>
        <button class="firstProjectButton" type="button" onClick="openPopup(${projects.indexOf(project) + 1})">See Project</button>
      </div>
    `;

    projectContainer.insertAdjacentHTML('beforeend', projectMarkup);
  });
}

// popup window generate
function openPopup(index) {
  const project = projects[index];

  const popup = document.getElementById('popup');
  const popupName = document.getElementById('popupName');
  const popupTechnologies = document.getElementById('popupTechnologies');
  const popupImage = document.getElementById('popupImage');
  const popupDescription = document.getElementById('popupDescription');
  const popupLiveLink = document.getElementById('popupLiveLink');
  const popupSourceLink = document.getElementById('popupSourceLink');

  popupName.textContent = project.name;
  popupTechnologies.innerHTML = project.technologies.map((tech) => `<li>${tech}</li>`).join('');
  popupImage.src = project.image;
  popupDescription.textContent = project.description;
  popupLiveLink.onclick = () => window.open(project.liveLink);
  popupSourceLink.onclick = () => window.open(project.sourceLink);

  popup.classList.add('open-popup');
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('open-popup');
}

window.addEventListener('load', generateProjectSection);
openPopup();
closePopup();