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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this lorem consists of many of the things whixh you have not been heard of including ',
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



function displayPopup(projectIndex) {
  const project = projects[projectIndex];

  const mainDivOne = document.querySelector('.mainDiv');

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

  const mainDivFour = document.createElement('div');
  mainDivFour.setAttribute('class', 'gridTwo');
  mainDivThree.appendChild(mainDivFour);

  const description = project.description;
  const paragraph = document.createElement('p');
  paragraph.textContent = description;
  mainDivFour.appendChild(paragraph);

  const buttonDiv = document.createElement('div');
  buttonDiv.setAttribute('class', 'btnContainer');
  mainDivFour.appendChild(buttonDiv);

  const button1 = document.createElement('button');
  button1.setAttribute('class', 'btnLive');
  button1.textContent = 'See Live';
  const img1 = document.createElement('img');
  img1.setAttribute('src', 'seelive.png');
  button1.appendChild(img1);
  buttonDiv.appendChild(button1);

  const button2 = document.createElement('button');
  button2.setAttribute('class', 'btnSource');
  button2.textContent = 'See Source';
  const img2 = document.createElement('img');
  img2.setAttribute('src', 'pagesource.png');
  button2.appendChild(img2);
  buttonDiv.appendChild(button2);

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
  p.textContent =
    "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.";
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
multiPostContainer.addEventListener('click', function (event) {
  if (event.target.matches('.firstProjectButton')) {
  
    const projectIndex = 0; 
    displayPopup(projectIndex);
  }
});


const blurButton = document.querySelector('.firstProjectButton');
const sections = document.querySelectorAll('section');

blurButton.addEventListener('click', function () {
  sections.forEach((section) => {
    section.style.filter = 'blur(4px)';
  });
});