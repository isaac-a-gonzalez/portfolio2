import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Isaac Gonzalez',
  subtitle: 'Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://igonzalezresume.netlify.app/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'atphd.png',
    title: 'AlexanderTanPhD.com',
    info:
      "For this private practice, the challenge was to build a highly-responsive site on both desktop and mobile within a window of a couple of weeks. This was acheived using Wix website builder. I also leveraged Wix's SEO features to increase the site's online presence along with Google Search Console.",
    info2: 'Wix, Google Search Console',
    url: 'https://www.alexandertanphd.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pointb.png',
    title: 'PointB Careers',
    info:
      'In this project I was given the task of implementing design changes as a result of a brand refresh. The challenge was finding ways to make specific updates through CSS in conjunction with a content management system.',
    info2: 'CSS, SmashFly CMS',
    url: 'https://careers.pointb.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'guess_number.png',
    title: 'Guess My Number (Desktop)',
    info:
      'This simple guessing game was a way for me to practice DOM manipulation using JavaScript, HTML, and CSS. It incorporates the use of JavaScript event listeners along with query selector functions to select certain class types in the HTML and store values like the high score using local storage. I followed along with "The Complete JavaScript Course 2021: From Zero to Expert!" created by Jonas Schmedtmann.',
    info2: 'HTML, CSS, JavaScript',
    url: 'https://numberedguess.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'roastio.png',
    title: 'Roastio Coffee Shop',
    info:
      'I love coffee and I am discovering a love for business. I used this project as way to practice setting up an e-commerce shop with product inventory and cart functionally.',
    info2: 'Gatsby, REACT, Netlify, Contentful',
    url: 'https://project-gatsbycoffee.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'js_modal.png',
    title: 'JavaScript Modal/DOM Exercise',
    info: '',
    url: 'https://js-modal-exercise.netlify.app/',
    repo: 'https://github.com/isaac-a-gonzalez/js_modal_exercise', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bgsite.png',
    title: 'Business Website',
    info:
      "This is a sample site I made for a friend's business. I wanted their site to have a visual representation and connection to the business name. The template I used had some good bones and helped spark this draft.",
    info2: 'HTML, CSS, JavaScript',
    url: 'https://bizsite.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'isaacgonzalezdev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/isaac-a-gonzalez/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/isaac-a-gonzalez',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
