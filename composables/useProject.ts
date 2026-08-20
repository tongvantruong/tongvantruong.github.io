import type { Project } from "~/types/project.type";

export function useProject() {
  const projects: Project[] = [
    {
      name: "USERGRAM",
      description:
        "A Japanese cloud service that captures user behavior across web and mobile applications to help clients analyze and improve UI/UX. Over nearly 5 years, I primarily focused on frontend development, gaining strong experience with Vue 3, Composition API, Vuex, Vue Router, Storybook, TypeScript, Vite, and pnpm. I also worked with Redash, Terraform, microservices, Docker Compose, Kubernetes, and AWS services including CloudFront, API Gateway, and Lambda.",
      liveLink: "https://www.bebit.co.jp/services/ux-ops/usergram/#MOVIEW",
      image: "usergram.jpg",
      skills: [
        "Vue3",
        "Composition API",
        "Vue2",
        "TypeScript",
        "CSS",
        "SCSS",
        "Git",
        "CI/CD",
        "Vite",
        "Storybook",
        "Cypress",
        "Jest",
        "TDD",
        "Figma",
      ],
    },
    {
      name: "OMNISEGMENT",
      description:
        "A Japanese Customer Data Platform that provides a 360° view of customer profiles, enabling brands to deliver personalized customer experiences at scale. I collaborated with a Taiwan-based team to implement new features for the Admin Dashboard using ReactJS, Ant Design, and JavaScript.",
      liveLink: "https://www.bebit-tech.com/en/omnisegment",
      image: "os.png",
      skills: ["ReactJS", "Ant Design", "JavaScript", "Jinja", "Figma"],
    },
    {
      name: "Bilibili Downloader",
      description:
        "A personal side project to showcase full-stack and DevOps engineering: paste a Bilibili video URL and watch real-time download progress in the browser. A FastAPI backend validates the URL, runs the Lux CLI as a background subprocess, and streams progress to a React frontend over a WebSocket, while PostgreSQL persists the job as the durable source of truth. Containerized with Docker Compose for local development, with GitHub Actions CI/CD auto-deploying the frontend, backend, and database to the free tiers of Netlify, Render, and Neon on every push to main.",
      liveLink: "https://bilibili-downloader.netlify.app/",
      image: "bilibili-downloader.png",
      skills: [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "React",
        "TypeScript",
        "Vite",
        "WebSocket",
        "Docker Compose",
        "GitHub Actions",
        "CI/CD",
        "pytest",
      ],
    },
    {
      name: "MoList - Movie Listing App",
      description:
        "A movie listing app that fetches movie data from a mock API and displays it in a responsive interface with pagination. Users can search movies by title and mark their favorite movies by clicking the star icon, with selected movies displayed in a dedicated Favorites section.",
      liveLink: "https://molist.netlify.app/",
      repoLink: "https://github.com/tongvantruong/movie-list",
      image: "molist.webp",
      skills: [
        "VueJS",
        "Vuetify",
        "TypeScript",
        "Vue Router",
        "axios",
        "VueUse",
        "vite",
        "cypress",
        "vitest",
        "searching",
        "pagination",
      ],
    },
    {
      name: "Responsive Landing Page - Figma to HTML, CSS & JavaScript",
      description:
        "A responsive landing page converted from a Figma design, optimized to deliver a consistent and pixel-perfect experience across desktop, tablet, and mobile devices.",
      liveLink: "https://responsive-web-truongtong.netlify.app",
      repoLink: "https://github.com/tongvantruong/responsive-landing-page",
      image: "responsive-web.webp",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Image Gallery - React & Ant Design",
      description:
        "A responsive image gallery app that fetches images from an API in batches and displays them in a dynamic grid. Users can search for images by keyword, while infinite scrolling automatically loads more images as they scroll down.",
      liveLink: "https://react-imgallery.netlify.app",
      repoLink: "https://github.com/tongvantruong/image-gallery",
      image: "image-gallery.webp",
      skills: [
        "ReactJS",
        "Ant Design",
        "TypeScript",
        "vitest",
        "vite",
        "searching",
        "Infinite Scroll",
      ],
    },
    {
      name: "NuxtJS & TailwindCSS Portfolio",
      description:
        "A responsive portfolio web app showcasing my experience and projects. Built with NuxtJS and TailwindCSS, it takes advantage of Nuxt's auto-routing and auto-import features for pages, components, and composables, enabling a clean project structure and faster development.",
      liveLink: "https://tongvantruong.github.io/",
      repoLink: "https://github.com/tongvantruong/tongvantruong.github.io",
      image: "portfolio.png",
      skills: ["Nuxt3", "TailwindCSS", "vite", "VueJS", "Github Pages"],
    },
    {
      name: "TOEIC Practice App",
      description:
        "<b>(200K+ Downloads)</b> A mobile English-learning app available on both iOS and Android, with over 200K downloads. Built using Swift for iOS and Kotlin for Android.",
      iosLink:
        "https://apps.apple.com/vn/app/new-practice-for-toeic-test/id1462727474?platform=iphone",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.tvt.toeictest.newformat2019",
      image: "toeic-practice.jpg",
      skills: ["Kotlin", "Swift"],
    },
    {
      name: "TOEIC Vocabulary App",
      description:
        "<b>(20K+ Downloads)</b> A mobile English-learning app available on both iOS and Android, with over 20K downloads. The app features a variety of interactive games that make learning English more engaging and enjoyable. In addition to the mobile technologies, I used JavaScript to build 2D games such as Flappy Bird and Snake, which were embedded into the mobile applications.",
      iosLink:
        "https://apps.apple.com/vn/app/new-vocabulary-for-toeic-test/id1475873881?platform=iphone",
      androidLink: "--DEAD--",
      image: "toeic-voca.jpg",
      skills: ["Kotlin", "Swift", "JavaScript", "Heroku"],
    },
    {
      name: "Crack The Code App",
      description:
        "<b>(20K+ Downloads)</b> An endless puzzle game that challenges players to find 2 to 5 correct numbers from a limited set of riddles to unlock the key. Built with Flutter for both iOS and Android, the game features achievements and leaderboards, allowing players to compete with others worldwide.",
      iosLink:
        "https://apps.apple.com/vn/app/crack-the-code-pro/id1510109064?platform=iphone",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.tvt.crackthecode",
      image: "crack-the-code.jpg",
      skills: ["Flutter", "Mobile Development"],
    },
    {
      name: "Video Downloader and Editor",
      description:
        "A private web tool for downloading videos from Chinese streaming platforms, cutting and joining video files, and batch-renaming or deleting files based on custom conditions. Built as a server-side rendered application using Node.js, Express, and EJS. The server executes asynchronous command-line processes with Node.js `child_process.spawn` and manages files using the `fs` and `path` modules. Real-time download progress is delivered to the client through WebSocket using Socket.IO.",
      liveLink: "",
      repoLink: "",
      image: "downloader.jpg",
      skills: [
        "NodeJS",
        "Express",
        "Websocket",
        "Socket.io",
        "EJS",
        "TailwindCSS",
        "JavaScript",
        "Jquery",
        "AJAX",
        "SSR",
        "ffmpeg",
      ],
    },
    {
      name: "Isetan KL Rewards App",
      description:
        "A Malaysian mobile and web platform that helps customers earn points from purchases and redeem them as e-coupons for a seamless shopping experience. I worked closely with the founder to transform draft requirements and Sketch designs into polished Android and iOS applications using Kotlin and Swift. I also developed the REST APIs, CMS, and landing page supporting the platform.",
      liveLink: "https://www.isetankl.com.my/isetan-app/",
      image: "isetan.png",
      skills: [
        "Kotlin",
        "Swift",
        "Sketch",
        "HTML",
        "CSS",
        "Rest API",
        "CMS",
        "Ruby on Rails",
      ],
    },
    {
      name: "The Social Rewards App",
      description:
        "A mobile app and loyalty platform that enables customers to earn high-value points and access exclusive daily rewards, birthday rewards, stamp cards, and promotions. I worked as a Full-Stack Technical Lead and Project Manager, leading the development and maintenance of the Android and iOS applications, CMS, and scheduled cron jobs running on Heroku.",
      iosLink: "https://apps.apple.com/my/app/the-social-rewards/id1219993641",
      androidLink:
        "https://play.google.com/store/apps/details?id=asia.tsunago.thesocial",
      image: "social.png",
      skills: ["Java", "Swift", "Sketch", "Rest API", "CMS", "Ruby on Rails"],
    },
    {
      name: "Flutter Web Responsive Layout",
      description:
        "A small project to build a responsive website template using Flutter, designed to provide a consistent and adaptable experience across desktop, tablet, and mobile devices.",
      liveLink:
        "https://tongvantruong.github.io/flutter-web-responsive-layout.github.io/",
      repoLink:
        "https://github.com/tongvantruong/flutter_web_responsive_layout",
      image: "flutterweb.jpg",
      skills: ["Flutter", "Dart"],
    },
    {
      name: "AI solution for retail startup",
      description:
        "An AI solution that uses cameras in shopping malls to capture customer faces and analyze customer behavior. I worked as a Technical Leader, spending approximately 6 months on-site in Malaysia to help set up and launch the product. Status: Startup exit.",
      image: "tsunago.png",
      skills: [
        "VueJS",
        "AI",
        "Face Recognition",
        "Image Classification",
        "Python",
        "C++",
        "Jetson Nano",
      ],
    },
    {
      name: "Axon Ivy Designer",
      description:
        "A state-of-the-art process modeling tool that enables businesses to transform their processes into fully functional web applications. Built as an IDE on top of Elise using Java EE and related Java technologies. I contributed to the development of the HTML Editor and Rule Engine.",
      image: "ivy-designer.png",
      liveLink: "https://developer.axonivy.com/",
      skills: ["Java Core", "JavaEE", "HTML"],
    },
    {
      name: "Fintech Projects for Swiss Banks",
      description:
        "Developed self-onboarding processes for several Swiss banks, including PostFinance and ABS. Integrated third-party KYC APIs into web and mobile applications to support secure customer identity verification during the banking onboarding process.",
      image: "postfinance.png",
      liveLink:
        "https://www.postfinance.ch/en/private/paying-saving/e-banking-apps/e-finance.html",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Rest API", "Fintech"],
    },
  ];

  return { projects };
}
