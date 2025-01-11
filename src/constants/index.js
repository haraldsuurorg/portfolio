import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    wordpress,
    elementor,
    woocommerce,
    php,
    sass,
    saninudge,
    vdisain,
    estpanel,
    aquatehnika,
    reworks,
    triin,
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Responsive Web Design",
      icon: creator,
    },
    {
      title: "Front-End Development",
      icon: mobile,
    },
    {
      title: "Back-End Development",
      icon: backend,
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
      name: "Sass",
      icon: sass,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
    {
      name: "elementor",
      icon: elementor,
    },
    {
      name: "woocommerce",
      icon: woocommerce,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Web Developer",
      company_name: "vDisain",
      icon: vdisain,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Present",
      points: [
        "Developing fully responsive, fast and easily maintainable websites and e-shops",
        "Doing complex maintenace and improvements on existing websites",
        "Implementing responsive design and ensuring cross-browser compatibility",
        "Participating in code reviews and providing constructive feedback to other developers",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "vDisain",
      icon: vdisain,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Nov 2023",
      points: [
        "Completing numerous courses covering the most crucial topics of web development - HTML, CSS, SCSS, JavaScript, React, Testing",
        "Developing first websites to implement the knowledge gained from the extensive amount of courses",
        "Starting maintenance work on our exising websites to learn the structure of the websites",
        "Created 2 websites and one extensive online store by the end of the 3 month internship",
      ],
    },
    {
      title: "Project Manager",
      company_name: "EstPanel",
      icon: estpanel,
      iconBg: "#E6DEDD",
      date: "Mar 2022 - Aug 2023",
      points: [
        "Created detailed and competitive price offers for wooden element houses for incoming customers, ensuring clarity and comprehensiveness",
        "dentified, evaluated, and selected the most suitable subcontractors for each project to ensure the highest standards of work",
        "Managed all aspects of onsite construction to ensure timely, efficient, and high-quality project completion",
        "Continuously monitored and implemented strategies to improve efficiency and quality both onsite and in production processes",
      ],
    },
    {
      title: "Operational Assistant",
      company_name: "saninudge",
      icon: saninudge,
      iconBg: "#E6DEDD",
      date: "Mar 2020 - Apr 2021",
      points: [
        "My joining the company coincided with moving into a new office, and my first major task was to organize, systematize, and manage our warehouse",
        "Managing inventory also involved setting up an ERP system to streamline our inventory and operations processes",
        "I prepared and conductd installations of our equipment in hospitals and nursing homes",
        "Supported the operations team in various other ways, including troubleshooting issues, coordinating logistics, and improving workflow efficiency",
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
      name: "Triin Porfolio",
      description:
        "Proffessional portfolio website built with React and NextJS. Boasts a functional i18n system to allow for multilinguality. The chosen i18n library is next-intl.",
      tags: [
        {
          name: "React",
          color: "react-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "i18n",
          color: "pink-text-gradient",
        },
      ],
      image: triin,
      source_code_link: "https://triin-portfolio.vercel.app/",
    },
    {
      name: "REWorks",
      description:
        "Wordpress website built from scratch using PHP, JS, SCSS and some addons. It is fast, responosive across all devices and has excellent SEO.",
      tags: [
        {
          name: "PHP",
          color: "php-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
      ],
      image: reworks,
      source_code_link: "https://reworksest.vdisain.dev/",
    },
    {
      name: "Aquatehnika",
      description:
        "Explore my debut homepage, where I've embraced minimalism and simplicity while adding captivating design elements. It is built with Elementor and Wordpress.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
      ],
      image: aquatehnika,
      source_code_link: "https://aquatehnika.ee",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };