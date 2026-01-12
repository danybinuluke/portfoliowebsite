import { link } from "fs";
import { title } from "process";
import ProjectOne from '@/images/ProjectOne.png';
import ProjectTwo from '@/images/ProjectTwo.png';
import ProjectThree from '@/images/ProjectThree.png';
import ProjectFour from '@/images/ProjectFour.png';
import ProjectFive from '@/images/ProjectFive.png'

export const NavbarData = [
    { title: "Home", href: "/"},
    { title: "Skills", href: "/skills"},
    { title: "Resume", href: "/resume"},
    { title: "Projects", href: "/projects"},
    { title: "Contact", href: "/contact"}
];

export const statsData = [
    {num:1,text:"Year(s) Of Experience"},
    {num:5,text:"Projects Completed"},
    {num:6,text:"Technologies Mastered"},
    {num:10,text:"Code Commits"}
];


export const skillsData = [
  {
    id: '01',
    title: 'Python',
    description: 'Proficient in Python for backend development, machine learning, and NLP projects.',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  },
  {
    id: '02',
    title: 'C/C++',
    description: 'Strong foundation in C and C++, with focus on data structures, algorithms, and efficient system-level programming.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg'
  },
  {
    id: '03',
    title: 'Java',
    description: 'Basic proficiency in Java with understanding of OOP principles, used in academic coursework and exercises.',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
  },
  {
    id: '04',
    title: 'MySQL',
    description: 'Familiar with relational databases and writing complex queries using MySQL. Applied in backend projects.',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
  },
  {
    id: '05',
    title: 'PyTorch',
    description: 'Used extensively for deep learning tasks, especially in audio and text processing using neural networks.',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
  },
  {
    id: '06',
    title: 'MongoDB',
    description: 'Experienced with MongoDB for designing flexible NoSQL databases used in full-stack applications.',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
  },
  {
    id: '07',
    title: 'Express.js',
    description: 'Used Express.js to build RESTful APIs and server-side logic in MERN stack projects.',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
  },
  {
    id: '08',
    title: 'React.js',
    description: 'Built dynamic user interfaces using React.js, focusing on component-based architecture and state management.',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  },
  {
    id: '09',
    title: 'Node.js',
    description: 'Used Node.js to create scalable backend services and handle asynchronous operations efficiently.',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  },
  {
    id: '10',
    title: 'NumPy',
    description: 'Used for efficient numerical computation and matrix operations in machine learning and signal processing tasks.',
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
  }
];

export const tabContent = {
  education: {
    title: "Educational Background",
    content: [
      {
        id: 1,
        title: "B.Tech in Computer Science and Engineering",
        institution: "National Institute of Technology, Surat",
        year: "2023 - Present",
        description: "Pursuing a degree in Computer Science with a focus on software development and data science.",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/NIT_Surat_Logo.svg",
        link: "https://www.svnit.ac.in/" // Replace with a valid college logo URL if needed
      },
      {
        id: 2,
        title: "High School Diploma",
        institution: "United Indian School, Kuwait",
        year: "2009 - 2023",
        description: "Completed my schooling with a focus on science and mathematics.",
        link: "https://www.uiskwt.com/",
        logo: "https://play-lh.googleusercontent.com/oa5Q-tHYBrTc6XGZHhY59nEcd7t8Nv8TlTGxB_LbNN2BsL7xtFq9HyJCapFnfUCb_Q" // Replace with a valid school logo URL if needed
      }
    ]
  },
  about: {
    title: "About Me",
    bio: "I'm a computer science student who enjoys building cool things and figuring out how stuff works. Outside of college and coding, I'm usually reading or writing scripts, geeking out over films (big movie buff!), or messing around with personal side projects. I like spending my free time learning at my own pace and diving into whatever catches my curiosity — whether it’s a new tech tool or a great screenplay. I’m always up for a challenge and love to learn new things. I’m passionate about using technology to solve real-world problems and am excited to see where my journey in computer science takes me next.",
    interests: [
      "Machine Learning",
      "Web Development",
      "Natural Language Processing",
      "Screenplay Writing",
      'Film Enthusiast',
      "Open Source Contribution",
    ],
    languages: ["Malayalam(Native)", "English(Fluent)", "Hindi(Conversational)","French(Basic)","Arabic(Basic)","Tamil(Basic)"],
  }
}

export const projects = [{
  id: '01',
  title:'SentiStock AI',
  category: 'Machine Learning',
  description: 'A stock market prediction tool mainly for US Market that uses sentiment analysis on news articles to forecast stock prices.',
  stack:['Python','ResNL','XGBoost','RandomForest','Pandas','NumPy','Matplotlib'],
  image: ProjectOne,
  liveUrl: 'https://sentistockai.streamlit.app/',
  githubUrl: 'https://github.com/mehul-77/stockanalyzer2',
  status: "completed"
},
{
  id:'02',
  title:'Vaani - A Speech-To-Text Summarizer',
  category: 'Machine Learning',
  description: 'A speech-to-text summarizer that transcribes regional language audio files and generates concise summaries in English or the given regional language using NLP techniques.',
  stack:['Python','PyTorch','HuggingFace Transformers','Gradio'],
  image: ProjectTwo,
  githubUrl: 'https://github.com/danybinuluke/Vaani---A-Speech_to_Text_Summarizer',
  status: "completed"
},
{
  id:'03',
  title:'Trip.com',
  category: 'Web Development',
  description: 'This project is a simple flight price comparison website designed to help users search for and compare flight ticket prices from various airlines, focusing on a responsive and user-friendly front-end design.',
  stack:['HTML','CSS','JavaScript'],
  image: ProjectThree,
  githubUrl: 'https://github.com/danybinuluke/Trip.com',
  status: 'completed'
},
{
  id:'04',
  title:'MobiPhysio - A Physiotherapy Clinic in Coimbatore',
  category: 'Web Development',
  description: "This is an ongoing project where I was assigned to create an overhaul and refreshing touch to the clinic's current website and add an appointment booking system to their clinic.",
  stack:['React','NextJs','Framer','ThreeJs'],
  image: ProjectFour,
  liveUrl: 'https://mobiphysio.vercel.app',
  githubUrl: 'https://github.com/danybinuluke/cbphysio',
  status: 'ongoing'
},
{
  id:'05',
  title:'MicroState - Real-Time Market Microstructure Analytics System',
  category: 'Web Development',
  description: "Developed full-stack dashboard with React and FastAPI featuring WebSocket streaming, Google OAuth authentication, and real-time visualization of predictions and market metrics.",
  stack:['Python', 'FastAPI', 'React', 'Vite', 'Supabase', 'Docker'],
  image: ProjectFive,
  liveUrl: 'https://microstate.vercel.app',
  githubUrl: 'https://github.com/KickShade/MicroState',
  status: 'completed'
}
]

