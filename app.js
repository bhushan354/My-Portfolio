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
    name: 'Professional Art Printing Data',
    description:
      ' A daily selection of privately personalized reads  Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
    image: 'screen.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    sourceLink: 'https://google.com',
  },
  {
    name: 'Data Dashboard Healthcare',
    description:
      ' A daily selection of privately personalized reads  Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
    image: 'screen.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    sourceLink: 'https://google.com',
  },
  {
    name: 'Website Portfolio',
    description:
      ' A daily selection of privately personalized reads  Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
    image: 'screen.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    sourceLink: 'https://google.com',
  },
  {
    name: 'Professional Art Printing Data',
    description:
      ' A daily selection of privately personalized reads  Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
    image: 'screen.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    sourceLink: 'https://google.com',
  },
  {
    name: 'Data Dashboard Healthcare',
    description:
      ' A daily selection of privately personalized reads  Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
    image: 'screen.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    sourceLink: 'https://google.com',
  },
  {
    name: 'Website Portfolio',
    description:
      ' A daily selection of privately personalized reads  Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
    image: 'screen.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    sourceLink: 'https://google.com',
  },
];

let mainDivOne;

function displayPopup(projectIndex) {
  const project = projects[projectIndex];

  if (!mainDivOne) {
    mainDivOne = document.createElement('div');
    mainDivOne.setAttribute('class', 'mainDiv');
    document.body.appendChild(mainDivOne);
  } else {
    mainDivOne.innerHTML = '';
  }

  const iconImg = document.createElement('img');
  iconImg.setAttribute('src', 'close.png');
  iconImg.setAttribute('class', 'iconOnTop');

  mainDivOne.appendChild(iconImg);

  const mainDivTwo = document.createElement('div');
  mainDivTwo.setAttribute('class', 'firstDiv');
  mainDivOne.appendChild(mainDivTwo);

  const mainText = document.createElement('h1');
  mainText.textContent = project.name;
  mainDivTwo.appendChild(mainText);

  const ul = document.createElement('ul');
  ul.setAttribute('class', 'tech');
  mainDivTwo.appendChild(ul);

  projects[0].technologies.forEach((tech) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.setAttribute('class', 'techButton');
    button.textContent = tech;
    li.appendChild(button);
    ul.appendChild(li);
  });

  const mainDivThree = document.createElement('Div');
  mainDivThree.setAttribute('class', 'grid');
  mainDivOne.appendChild(mainDivThree);

  const popupImg = document.createElement('img');
  popupImg.setAttribute('class', 'image');
  mainDivThree.appendChild(popupImg);

  function closePopup() {
    mainDivOne.style.display = 'none';

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.style.filter = 'none';
    });
  }

  const mainDivFour = document.createElement('div');
  mainDivFour.setAttribute('class', 'gridTwo');
  mainDivThree.appendChild(mainDivFour);

  const { description } = project;
  const paragraph = document.createElement('p');
  paragraph.textContent = description;
  mainDivFour.appendChild(paragraph);

  const buttonDiv = document.createElement('div');
  buttonDiv.setAttribute('class', 'btnContainer');
  mainDivFour.appendChild(buttonDiv);

  const btnLive = document.createElement('a');
  btnLive.setAttribute('class', 'btnLive');
  btnLive.textContent = 'See Live';
  btnLive.href = project.liveLink;
  const imgLive = document.createElement('img');
  imgLive.setAttribute('src', 'seelive.png');
  btnLive.appendChild(imgLive);
  buttonDiv.appendChild(btnLive);

  const btnSource = document.createElement('a');
  btnSource.setAttribute('class', 'btnSource');
  btnSource.textContent = 'See Source';
  btnSource.href = project.sourceLink;
  const imgSource = document.createElement('img');
  imgSource.setAttribute('src', 'pagesource.png');
  btnSource.appendChild(imgSource);
  buttonDiv.appendChild(btnSource);

  iconImg.addEventListener('click', closePopup);

  mainDivOne.style.display = 'block';
  document.body.appendChild(mainDivOne);
}

// multistories

function generateMultiPostPage() {
  const multiPostPage = document.createElement('div');
  multiPostPage.setAttribute('class', 'multiPostPage');

  const image2 = document.createElement('div');
  image2.setAttribute('class', 'image2');
  multiPostPage.appendChild(image2);

  const img1 = document.createElement('img');
  img1.setAttribute('src', 'mainImage.png');
  img1.setAttribute('alt', 'mainimage1');
  img1.setAttribute('class', 'mainimage1');
  image2.appendChild(img1);

  const img2 = document.createElement('img');
  img2.setAttribute('src', 'mainImage.png');
  img2.setAttribute('alt', 'mainimage2');
  img2.setAttribute('class', 'mainimage2');
  image2.appendChild(img2);

  const rightSection = document.createElement('div');
  rightSection.setAttribute('class', 'rightSection');
  multiPostPage.appendChild(rightSection);

  const h2 = document.createElement('h2');
  h2.setAttribute('class', 'multiPostStories');
  h2.textContent = 'Multi-Post Stories';
  rightSection.appendChild(h2);

  const p = document.createElement('p');
  p.setAttribute('class', 'pageInformation');
  p.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.";
  rightSection.appendChild(p);

  const ul = document.createElement('ul');
  ul.setAttribute('class', 'techStacks');
  rightSection.appendChild(ul);

  const techStacks = ['CSS', 'HTML', 'Bootstrap', 'Ruby'];

  techStacks.forEach((stack) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.setAttribute('class', 'stackButton');
    button.setAttribute('type', 'button');
    button.textContent = stack;
    li.appendChild(button);
    ul.appendChild(li);
  });

  const projectButton = document.createElement('div');
  projectButton.setAttribute('class', 'projectButton');
  rightSection.appendChild(projectButton);

  const firstProjectButton = document.createElement('button');
  firstProjectButton.setAttribute('class', 'firstProjectButton');
  firstProjectButton.setAttribute('type', 'button');
  firstProjectButton.textContent = 'See Project';
  projectButton.appendChild(firstProjectButton);

  return multiPostPage;
}

const generatedMultiPostPage = generateMultiPostPage();
const multiPostContainer = document.querySelector('.multiPostContainer');
multiPostContainer.appendChild(generatedMultiPostPage);

// eventlistner for popup click
multiPostContainer.addEventListener('click', (event) => {
  if (event.target.matches('.firstProjectButton')) {
    const projectIndex = 0;
    displayPopup(projectIndex);
  }
});

const blurButton = document.querySelector('.firstProjectButton');
const sections = document.querySelectorAll('section');

blurButton.addEventListener('click', () => {
  sections.forEach((section) => {
    section.style.filter = 'blur(8px)';
  });
});

// ThirdPage all screens dunamically

function generateProjectCard(project) {
  const screenDiv = document.createElement('div');
  screenDiv.setAttribute('class', 'Screen2 Screen2D');

  const hideCardDiv = document.createElement('div');
  hideCardDiv.setAttribute('class', 'hideCard');

  const titleH3 = document.createElement('h3');
  titleH3.setAttribute('class', 'PrintingData');
  titleH3.textContent = project.name;
  hideCardDiv.appendChild(titleH3);

  const paragraph1 = document.createElement('p');
  paragraph1.setAttribute('class', 'textSegment');
  paragraph1.textContent = project.description;
  hideCardDiv.appendChild(paragraph1);

  const ul = document.createElement('ul');
  ul.setAttribute('class', 'builtWith1');

  project.technologies.forEach((tech) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.setAttribute('class', 'buttonOfTechStack');
    button.setAttribute('type', 'button');
    button.textContent = tech;
    li.appendChild(button);
    ul.appendChild(li);
  });

  hideCardDiv.append(ul);

  const button = document.createElement('button');
  button.setAttribute('class', 'secondProjectButton');
  button.setAttribute('type', 'button');
  button.textContent = 'See Project';
  hideCardDiv.appendChild(button);

  screenDiv.appendChild(hideCardDiv);

  return screenDiv;
}

function generateThirdPage() {
  const thirdPage = document.querySelector('.ThirdPage');

  thirdPage.innerHTML = '';

  projects.forEach((project, index) => {
    const projectCard = generateProjectCard(project);
    thirdPage.appendChild(projectCard);

    // all of secondbuttons eventlistner
    const secondProjectButton = projectCard.querySelector(
      '.secondProjectButton',
    );
    secondProjectButton.addEventListener('click', () => {
      displayPopup(index);
    });
  });

   // for blur desktop background
  const blurButtons = document.querySelectorAll('.secondProjectButton');
  const sections = document.querySelectorAll('section');

  blurButtons.forEach((blurButton) => {
    blurButton.addEventListener('click', () => {
      sections.forEach((section) => {
        section.style.filter = 'blur(8px)';
      });
    });
  });
}

generateThirdPage();
 
