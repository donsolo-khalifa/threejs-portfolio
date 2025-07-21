export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Ahmad was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Ahmad’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Ahmad. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Ahmad was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  // {
  //   title: 'Podcastr - AI Podcast Platform',
  //   desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
  //   subdesc:
  //     'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
  //   href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
  //   texture: 'textures/project/project12.mp4',
  //   logo: 'assets/project-logo1.png',
  //   logoStyle: {
  //     backgroundColor: '#2A1816',
  //     border: '0.2px solid #36201D',
  //     boxShadow: '0px 0px 60px 0px #AA3C304D',
  //   },
  //   spotlight: 'assets/spotlight1.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: 'assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: 'assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: 'assets/framer.png',
  //     },
  //   ],
  // },
   {
    title: 'Single Camera Motion Capture System',
    desc: 'A motion capture system that uses a single camera to detect human pose and tracks ball movements. Unity is used to render the animations.',

    subdesc:
      'Built with OpenCV, cvzone, and YOLOv8, this project exports normalized joint and ball position data to a text file for Unity rendering. It includes advanced ball interpolation for smoother animation playback. This is done in real-time and offline.',
    href: 'https://github.com/donsolo-khalifa/FootballKeyPointsExtraction',
    texture: 'textures/project/project14.mp4',
    logo: 'assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: 'assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: 'assets/pythonlogo.png',
      },
      {
        id: 2,
        name: 'Unity',
        path: 'assets/unity.svg',
      },
      {
        id: 3,
        name: 'Csharp',
        path: 'assets/csharplogo.png',
      },
    ],
  },
  {
    title: 'Geography Quiz Game',
    desc: 'An interactive geography quiz using real time finger tracking and computer vision.',
    subdesc:
      'Built with OpenCV, cvzone, and MediaPipe, this interactive system turns a static world map into a gesture-controlled quiz experience. The game supports polygon-based region mapping, real-time perspective correction, and smooth gesture-based input. It also features live score tracking and easily customizable questions and map images.',
    href: 'https://github.com/donsolo-khalifa/GeoGame',
    texture: 'textures/project/project13.mp4',
    logo: 'assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: 'assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Python',
        path: 'assets/pythonlogo.png',
      },
    ],
  },
  {
    title: 'Augmented Reality Chess Assistant',
    desc: 'A real time chess assistant that detects board states from a webcam feed using computer vision and suggests top moves using Stockfish.',

    subdesc:
      'This system uses YOLO for chess piece detection and automatically warps the board view for stable FEN generation. It integrates Stockfish for move suggestions and displays them with visual feedback using arrows. Optional manual calibration and dynamic re-detection ensure robust board alignment.',
    href: 'https://github.com/donsolo-khalifa/chessAI',
    texture: 'textures/project/project12.mp4',
    logo: 'assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: 'assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Python',
        path: 'assets/pythonlogo.png',
      },
    ],
  },
  {
    title: 'License Plate Recognition System',
    desc: 'A computer vision system for automated license plate recognition in real time.',

    subdesc:
      'The processes video streams, reads plate numbers, and logs results intelligently. Combining YOLOv8, EasyOCR, OpenCV, and SQLite, this system performs object detection, adaptive OCR, and multi-object tracking with confidence optimization. Optional Telegram integration enables real-time notifications for detected vehicles.',
    href: 'https://github.com/donsolo-khalifa/autoLicensePlateReader',
    texture: 'textures/project/project16.mp4',
    logo: 'assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: 'assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Python',
        path: 'assets/pythonlogo.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 3, 0] : isMobile ? [5, 3, 0] : isTablet ? [5, 3, 0] : [12, 2, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-7, -5, -10] : isMobile ? [-9, -5, -10] : isTablet ? [-11, -5, -10] : [-13, -10, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'MAHD Imam Hassan Cisse',
    pos: 'Community Developer',
    duration: '2025 - Present',
    title:
      'Created applications to help understaffed schools and to facilitate teaching and learning.',
    icon: 'assets/m.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Cayor Enterprise',
    pos: 'Application Developer',
    duration: '2022 - 2023',
    title:
      'Created wide range of applications in IOT, Embedded Systems and full stack web applications. ',
    icon: 'assets/cayor.jpg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Freelance',
    pos: 'Web Developer',
    duration: '2019 - 2022',
    title:
      'Built full stack web applications using Laravel and React js.',
    icon: 'assets/f.svg',
    animation: 'salute',
  },
];
