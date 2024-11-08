import { SiInstagram } from 'react-icons/si'

import { AiFillGithub } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'

import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import { heartratePack,sbar, patrick, martin, parfaite, arsene, joel } from '../assets/images'


export const menus = [
  { name: "Home" },
  { name: "About" },
  { name: "Services" },
  { name: "Projects" },
  { name: "Contact" },
];


export const skills = [
  {
    category: "Tech Solutions for Global Challenges",
    data: [
      { skill: "We Provide customized tech solutions to clients facing unique challenges in healthcare, education, and sustainability" },
      

    ]
  },
  
  {
    category: "Software Development Trainings",
    data: [
      { skill: "Empowering the next generation of tech professionals with the skills to create impactful solutions."},
    ]
  },
  {
    category: "Research and Data Analsyis services",
    data: [
      { skill: "Comprehensive research services to support organizations with data-driven insights for informed decision-making."}

    ]
  },
  {
    category: "Research and Data Analsyis Training (RDAT) ",
    data: [
      {
        skill: "Offering healthcare professionals training in data analytics, enabling hospitals to make data-driven decisions."
      },
      
    ]
  },
  
  
]
export const ourTeamMembers = [
  {
   name:"MANIBAHO Patrick",
   position:"Founder and CEO, Software engineer with background in health, 9 years of experience in Referral Hospital",
   image:patrick
  },
  {
    name:"Dr. NSHIMYUMUKIZA Martin",
    position:"MD, MMED (Internist), KIBOGORA Level 2 Teaching Hospital, Rheumatology fellow to be, Enthusiast in research, and the use of AI in healthcare sector",
    image:martin
  },
  {
    name:"TWAGIRAMARIYA Parfaite",
    position:"Software Engineer and CTO at PACK Technology",
    image:parfaite
  },
  {
    name:"DR. ITUZE Arsene",
    position:"Medical Doctor",
    image:arsene
  },
  {
    name:"MINANI Joel",
    position:"Designer and Software Enginner",
    image:joel
  }
]

export const projects = [
  {
    name: 'SBAR Healthcare',
    description: `Digital SBAR for Health care system communication and patient's information exchange.s`,
    image: sbar,
    url: 'https://sbar-apollo-angular.vercel.app/',
  },

  {
    name: 'pHealth',
    description: `pHealth is a mobile app offering real-time fetal heart rate monitoring through the pBelt, personalized health information, pregnancy tracking, and more.pBelt is a wearable device that connects to the mobile app for monitoring fetal health.`,
    image: heartratePack,
    url: '',
  },
  
];

export const socialHandles = [
  
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/patsicko"
  },
  {
    name: "LinkedIn",
    icon: <CiLinkedin />,
    link: "https://www.linkedin.com/in/patrick-manibaho-a7851a124/",
  },
  {
    name: "Instagram",
    icon: <SiInstagram />,
    link: "https://www.instagram.com/patsicko/",
  },
];


export const contactInfo = [
  {
    name: "Email",
    icon: <MdOutlineAlternateEmail />,
    value: "packtech20@gmail.com",
  },
  {
    name: "Phone",
    icon: <IoCallOutline />,
    value: "+250784660905",
  },
  {
    name: "Address",
    icon: <IoLocationOutline />,
    value: "Musanze, Rwanda",
  },
]

export const footer = [
  {
    group: "Quick Links",
    routes: [
      { name: "Home" },
      { name: "About" },
      { name: "Skills" },
      { name: "Projects" },
      { name: "Contact" },
      
    ]
  },
  {
    group: "Contacts",
    routes: [
      {
        name: "packtech20@gmail.com",
        icon: <MdOutlineAlternateEmail />,
      },
      {
        name: "+25078460905",
        icon: <IoCallOutline />,
      },
      {
        name: "Musanze, Rwanda",
        icon: <IoLocationOutline />,
      },
    ]
  },
]