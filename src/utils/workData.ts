// src/utils/workData.js

const workData = [
  {
    title: "MyPerfMgr",
    image: ["/assets/works/perfmgr.png"],
    description:
      "A web app, written in Django, with Django Rest Framework, and uses PostgreSQL. It is a performance management tool, to manage employees, objectives, and more.",
    tags: ["Django", "DRF", "postgresql", "Next.js", "Tailwind", "Web"],
  },
  {
    title: "Freelance Admin",
    image: ["/assets/works/freelance-admin.png"],
    description:
      "A web app, written in Django, with Django Rest Framework, and uses PostgreSQL. It uses a custom API to retrieve data. It is a freelance admin tool, to manage clients, projects, invoices, estimates and more.",
    tags: ["Django", "DRF", "postgresql", "Next.js", "Tailwind", "Web"],
  },
  {
    title: "Sodexo Live !",
    image: ["/assets/works/sodexo.mp4"],
    description:
      "A web app, written in JavaScript, with Next.js, with a lot of animations with Framer Motion. It uses a custom API in Drupal to retrieve data.",
    tags: [
      "JavaScript",
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "Web",
      "Drupal",
    ],
  },
  {
    title: "Magasins Généraux !",
    image: ["/assets/works/MG2.mp4"],
    description:
      'A showcase website for the exposition space "Magasins Généraux", written in Nuxt with a lot of animations. ',
    tags: [
      "JavaScript",
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "Web",
      "Drupal",
    ],
  },
  {
    title: "Chopard: 1 Place Vandôme",
    image: ["/assets/works/chopard.gif"],
    description:
      "Creation of a website for the Chopard 1 Place Vendôme hotel, aiming to create an immersive experience with WebGL.",
    tags: ["JavaScript", "SASS", "Web GL", "Web", "Strapi"],
  },
  {
    title: "Youtube Clone with Torrent Streaming",
    image: ["/assets/works/ultratube.png"],
    description:
      "A Youtube clone, with a torrent streaming feature, written in Django, with a custom API to retrieve data.",
    tags: [
      "TypeScript",
      "React.js",
      "Tailwind",
      "Web",
      "Django",
      "Databases",
      "Torrents",
    ],
  },
  {
    title: "CRM Tool",
    image: ["/assets/works/focusflow.jpg"],
    description:
      "A CRM tool, written in TypeScript, with React.js, and uses a custom API to retrieve data.",
    tags: ["TypeScript", "React.js", "Web", "Django", "Databases"],
  },
  {
    title: "Data engineering for Exxact Robotics",
    image: ["/assets/works/exaact.jpg"],
    description:
      "Optimization of machine learning pipelines in Python using Azure.",
    tags: [
      "Python",
      "AI",
      "Docker",
      "Kubernetes",
      "MLOps",
      "Databases",
      "Cloud",
    ],
  },
  {
    title: "Software development for AGCO",
    image: ["/assets/works/agco.jpg"],
    description: "A software for a tractor, written in Qt / QSkinny.",
    tags: ["C++", "Qt", "Embedded"],
  },
  {
    title: "Cloud environment with Ansible and K8s",
    image: ["/assets/works/cloud.jpg"],
    description:
      "Deployment of a complex WordPress environment in the cloud using Ansible and Kubernetes.",
    tags: ["Docker", "Ansible", "Kubernetes", "Wordpress", "DevOps", "Cloud"],
  },
  {
    title: "PokedexCLI",
    image: ["/assets/works/pokedexcli.jpg"],
    description:
      "This is a Pokedex in a command-line REPL. It uses the PokeAPI to fetch Pokemon data",
    tags: ["Golang", "CLI", "API"],
  },
  {
    title: "Fully dockerized complex environment",
    image: ["/assets/works/iot.gif"],
    description:
      "A fully dockerized complex environment with a database, a web server, a reverse proxy, and a monitoring tool. This project was made in a team of 3.",
    tags: [
      "Docker",
      "Vagrant",
      "Kubernetes",
      "Wordpress",
      "DevOps",
      "Databases",
    ],
  },
  {
    title: "3D Ligands Viewer",
    image: ["/assets/works/proteins.gif"],
    description:
      "A 3D ligands viewer, written in Swift. It uses a custom API to retrieve data and display it in 3D.",
    tags: ["Swift", "Graphics", "Mobile", "Databases"],
  },
  {
    title: "42's Mobile App",
    image: ["/assets/works/companion.gif"],
    description:
      "A mobile app for 42 students, written in Swift. It uses a custom API to retrieve data. ",
    tags: ["Swift", "Mobile", "Databases"],
  },
  {
    title: "Online game",
    image: ["/assets/works/pong.jpeg"],
    description:
      "An online game platform with a game of pong, this project was made in a team of 5. It was written in Vue.js, Node.js and uses PostgreSQL.",
    tags: ["Vue.js", "Web", "Node.js", "Databases"],
  },
  {
    title: "Reddit Clone",
    image: ["/assets/works/nextspace.jpg"],
    description:
      "A Reddit clone, written in Next (front + back), with Next.js, and uses a custom API to retrieve data.",
    tags: ["TypeScript", "Next.js", "Web", "Databases"],
  },
  {
    title: "Landing Page",
    image: ["/assets/works/landing.jpg"],
    description:
      "Landing pages built with various JavaScript frameworks and libraries.",
    tags: ["JavaScript", "React.js", "Web"],
  },
  {
    title: "IRC Client/Server",
    image: ["/assets/works/irc.gif"],
    description:
      "An IRC client and server, written in C++, from scratch. This project is network-oriented.",
    tags: ["C++", "Networks", "Software"],
  },
  {
    title: "C++ STD Library Implementation",
    image: ["/assets/C++.svg"],
    description:
      "A reimplementation of the C++ Standard Library, written in C++ from scratch. This project is software-oriented.",
    tags: ["C++", "Software"],
  },
  {
    title: "3D Game in C++",
    image: ["/assets/works/cub3d.gif"],
    description:
      "A 3D game, written in C, from scratch. It uses the raycasting technique to render the 3D world. This project is graphics-oriented.",
    tags: ["C", "Graphics", "Software"],
  },
  {
    title: "Shell from Scratch",
    image: ["/assets/works/minishell.gif"],
    description:
      "A shell, written in C, from scratch. It uses the termcaps library to handle the terminal.",
    tags: ["C", "Software"],
  },
  {
    title: "Platform game",
    image: ["/assets/works/platform_game.gif"],
    description:
      "A platform game, written in Java, we made in a team of 4. It uses a custom game engine. This project is game-oriented.",
    tags: ["Java", "Graphics"],
  },
  {
    title: "Olymipcs planning",
    image: ["/assets/Java.svg"],
    description:
      "An Olympics planning software, written in Java. It uses a database to store and retrieve data. This project is database-oriented.",
    tags: ["Java", "Databases", "Software"],
  },
  {
    title: "Puzzle Solver",
    image: ["/assets/works/puzzle_solver.gif"],
    description:
      "A puzzle slider solver, written in Java. It uses the A* algorithm to solve the puzzle.",
    tags: ["Java", "AI", "Software"],
  },
];

export default workData;
