import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    cpp,
    python,
    java,
    sql,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    LPU,
    Cognizant,
    enprac,
    attendance,
    tripguide,
    music,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "C++ Developer",
      icon: mobile,
    },
    {
      title: "Python Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JAVA",
      icon: java,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Student",
      company_name: "Lovely Professional University",
      location: "Phagwara, Punjab",
      icon: LPU,
      iconBg: "#383E56",
      date: "July 2019 - May 2023",
      points: [
        "Pursued my Bachelor's degree in B.Tech (CSE).",
        "Learnt a lot of different technologies and various subjects in the 4 years of graduation.",
        "Made various projects using technologies like, C++, HTML, CSS, JS, NodeJS, PHP and many more.",
      ],
    },
    {
      title: "Programmer Analyst Trainee",
      company_name: "Cognizant",
      location: "Kolkata, West Bengal",
      icon: Cognizant,
      iconBg: "#E6DEDD",
      date: "July 2023",
      points: [
        "The journey is yet to start. From July, 2023 onwards I'm going to start a new phase of my life.",
        "The job role could include working with technologies like JAVA, ASP.NET, Cloud and many more.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "EnPrac Web Application",
      description:
        "This project was designed using Python and Django. It was an English Practice web application that had questions related to different topics of English grammar. It also had an English dictionary attached to it.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: enprac,
      source_code_link: "https://github.com/Aakash265/EnPrac-Web-App",
    },
    {
      name: "Attendance Management System",
      description:
        "This is used to store the attendance of the students. The user could login to his/her account to mark the attendance.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: attendance,
      source_code_link: "https://github.com/Aakash265/PHP-project",
    },
    // {
    //   name: "Task Manager",
    //   description:
    //     "This project was aimed at designing a web application that could be used as a task manager. In this project, the CRUD operations were implemented using Nodejs and Expressjs",
    //   tags: [
    //     {
    //       name: "nodejs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "expressjs",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/Aakash265/Task-Manager-NodeJS",
    // },
    {
      name: "Music Player",
      description:
        "This music player website was based on the concepts of HTML, CSS and JavaScript where the user could listen to the music for free with a variety of songs in English, Hindi and Punjabi languages.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
      ],
      image: music,
      source_code_link: "https://github.com/Aakash265/Music-Player",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };