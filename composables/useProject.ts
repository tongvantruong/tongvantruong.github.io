import type { Project } from "~/types/project.type";

export function useProject() {
  const projects: Project[] = [
    {
      name: "USERGRAM",
      description:
        "a Japanese cloud service that captures user behaviors in web apps or mobile phones to help clients analyze and improve UI/UX. With almost 5 years, mainly working in front end code helped me gain a lot of knowledge about Vue3 and Composition API, VueX for state management, Vue Router, Storybook, TypeScript Advanced Utility Types as well as latest JavaScript build tools and Node Package Manager like Vite, pnpm. Beside that, I have also experienced with Redash, Terraform, Micro Services, Docker Compose, Kubernetes and some AWS services such as AWS CloudFront, API Gateway, Lambda function",
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
        "A Japanese Customer Data Platform provides 360° customer profile view to empower brands in delivering personalized customer experiences at scale. I have been co-operated with a Taiwan team to implement new features for Admin dashboard by using ReactJS, Ant Design, JavaScript",
      liveLink: "https://www.bebit-tech.com/en/omnisegment",
      image: "os.png",
      skills: ["ReactJS", "Ant Design", "JavaScript", "Jinja", "Figma"],
    },
    {
      name: "MoList - Movie Listing App",
      description:
        "A movie listing app which will call to a mock API to fetch the list of movies and display them on a responsive web app with pagination. Users can search the movies by title and click to star movies then they will appear on the Favorites section.",
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
      name: "Responsive Landing Page - HTML, CSS & JavaScript",
      description:
        "A responsive landing page that works perfectly on all devices such as Desktop, Tablet, Mobile Phone",
      liveLink: "https://responsive-web-truongtong.netlify.app",
      repoLink: "https://github.com/tongvantruong/responsive-landing-page",
      image: "responsive-web.webp",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Image Gallery - React & Ant Design",
      description:
        "A responsive Image Gallery app which calls APIs to fetch images by chunks then allow users to search by typing on an input. When scrolling down, more images will be loaded",
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
        "A responsive web app that showcases my experience. By taking advantages of the well-organized structure in NuxtJS such as automatic routing using 'pages', auto import from 'components', 'composables', etc. and the utility-first CSS framework, TailwindCSS, I could create the project faster and easier.",
      liveLink: "https://tongvantruong.github.io/",
      repoLink: "https://github.com/tongvantruong/tongvantruong.github.io",
      image: "portfolio.png",
      skills: ["Nuxt3", "TailwindCSS", "vite", "VueJS", "Github Pages"],
    },
    {
      name: "TOEIC Practice App",
      description:
        "(200k+ Downloads) A mobile app for learning English which was available on both IOS and Android with over 200K downloads. Tech stacks: Swift for IOS, Kotlin for Android",
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
        "(20k+ Downloads) A mobile app for learning English which was available on both IOS and Android with over 20K downloads. In this app, I have created many kinds of games so users can learn by enjoying the games! Other than the mobile's tech stacks, I have used JavaScript to build Flappy Bird and Snack 2D games which will be embedded into mobile apps",
      iosLink:
        "https://apps.apple.com/vn/app/new-vocabulary-for-toeic-test/id1475873881?platform=iphone",
      androidLink: "--DEAD--",
      image: "toeic-voca.jpg",
      skills: ["Kotlin", "Swift", "JavaScript", "Heroku"],
    },
    {
      name: "Crack The Code App",
      description:
        "(20k+ Downloads) An Endless Puzzle game that challenges you to find 2 to 5 Correct Numbers from limited numbers of Riddle to unlock the Key. The app was built by Flutter for both IOS and Android. The game included achievements and leaderboards so players can compete with all other people.",
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
        "A private web tool allows me to download videos from Chinese streaming sites, cut or join video files and rename/delete multiple files based on conditions. The SSR web app was built by NodeJS, Express and EJS view engine. The server will execute command lines asynchronously by using NodeJS child_process spawn function as well as using 'fs', 'path' module to work with files. The server will update progress of downloading to client by using Websocket, Socket.io",
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
        "A Malaysian mobile app and system helps customers collect points on their purchases and convert into e-coupon for a seamless shopping experience. I have had a great time to build and maintain the beautiful Android and IOS app from the draft requirements of the founder and given Sketch using Kotlin, Swift; as well as building Rest API, CMS, Landing page",
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
        "A mobile app and system allows customers Earn high value points and get access to exclusive member daily rewards, birthday rewards, stamp cards and promotions. I have worked as a Fullstack Technical Lead and Project Manager to build and maintain the Android and IOS app, CSM, Cron Job on Heroku",
      iosLink: "https://apps.apple.com/my/app/the-social-rewards/id1219993641",
      androidLink:
        "https://play.google.com/store/apps/details?id=asia.tsunago.thesocial",
      image: "social.png",
      skills: ["Java", "Swift", "Sketch", "Rest API", "CMS", "Ruby on Rails"],
    },
    {
      name: "Flutter Web Responsive Layout",
      description:
        "A small project to build a responsive website template with Flutter",
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
        "An AI solution to capture customers faces using cameras inside shopping mall areas to help analyze customer behaviors. I was playing Technical Leader role and onside in Malaysia for about 6 months to setup the product. Status: startup exit",
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
        "A state of the art process modelling tool that enables you to turn your business processes into real and fully functional web applications. It is an IDE built on top of Elise using Java EE and other Java related tech stacks. I have contributed to a part of this tool to develop HTML Editor and Rule Engine",
      image: "ivy-designer.png",
      liveLink: "https://developer.axonivy.com/",
      skills: ["Java Core", "JavaEE", "HTML"],
    },
    {
      name: "Fintech Projects for Swiss Banks",
      description:
        "Built Self-Onboarding Process of several Swiss banks such as PostFinance, ABS. Integrated KYC as a third party API into the web and mobile app for the verification process of banking.",
      image: "postfinance.png",
      liveLink:
        "https://www.postfinance.ch/en/private/paying-saving/e-banking-apps/e-finance.html",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Rest API", "Fintech"],
    },
  ];

  return { projects };
}
