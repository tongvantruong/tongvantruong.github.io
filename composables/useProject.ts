import type { Project } from "~/types/project.type";

export function useProject() {
  const projects: Project[] = [
    {
      name: "USERGRAM",
      description:
        "a Japanese cloud service that captures user behaviors in web apps or mobile phones to help clients analyze and improve UI/UX. With almost 5 years, mainly working in front end code helped me gain a lot of knowledge about Vue3 and Composition API, VueX for state management, Vue Router, Storybook, TypeScript Advanced Utility Types as well as latest JavaScript build tools and Node Package Manager like Vite, pnpm. Beside that, I have also experienced with Redash, Terraform, Micro Services, Docker Compose, Kubernetes and some AWS services such as AWS CloudFront, API Gateway, Lambda function",
      liveLink: "https://www.bebit.co.jp/services/ux-ops/usergram/#MOVIEW",
      image: "usergram.jpg",
    },
    {
      name: "NuxtJS & TailwindCSS Portfolio",
      description:
        "A responsive web app which showcases my experience. By taking the advantages of well-organized structure in NuxtJS such as automatic routing using 'pages', auto import from 'components', 'compasables', etc. and the utility-first CSS framework, TailwindCSS, I could create the project faster and easier.",
      liveLink: "https://tvtroid.github.io",
      repoLink: "https://tvtroid.github.io",
      image: "portfolio.png",
    },
    {
      name: "TOEIC Practice App",
      description:
        "a mobile app for learning English which was available on both IOS and Android with over 200K downloads. Tech stacks: Swift for IOS, Kotlin for Android",
      iosLink:
        "https://apps.apple.com/vn/app/new-practice-for-toeic-test/id1462727474?platform=iphone",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.tvt.toeictest.newformat2019",
      image: "toeic-practice.jpg",
    },
    {
      name: "TOEIC Vocabulary App",
      description:
        "a mobile app for learning English which was available on both IOS and Android with over 20K downloads. In this app, I have created many kinds of game so users can learn by enjoying the games! Other than the mobile's tech stacks, I have used JavaScript to build Flappy Bird and Snack 2D games which will be embedded into mobile apps",
      iosLink:
        "https://apps.apple.com/vn/app/new-vocabulary-for-toeic-test/id1475873881?platform=iphone",
      androidLink: "--DEAD--",
      image: "toeic-voca.jpg",
    },
    {
      name: "Crack The Code App",
      description:
        "an Endless Puzzle game that challenges you to find 2 to 5 Correct Numbers from a limited numbers of Riddle to unlock the Key. The app was built by Flutter for both IOS and Android. The game included achievements and leaderboards so players can compete with all other players.",
      iosLink:
        "https://apps.apple.com/vn/app/crack-the-code-pro/id1510109064?platform=iphone",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.tvt.crackthecode",
      image: "crack-the-code.jpg",
    },
    {
      name: "Video Downloader and Editor",
      description:
        "a private web tool allows me to download videos from a chinese Youtube site, bilibili. It also supports cutting video files or joining the files into one. The SSR web app was built by NodeJS, Express and EJS view engine. The server will execute command lines asynchronously by using NodeJS child_process spawn function.",
      liveLink: "https://www.bebit.co.jp/services/ux-ops/usergram/",
      repoLink: "",
    },
    {
      name: "Isetan KL Rewards App",
      description:
        "a Malaysian mobile app and system helps customers collect points on their purchases and convert into e-coupon for a seamless shopping experience. I have had a great time to build and maintain the beautiful Android and IOS app from the draft requirements of the Founder and given Sketch using Kotlin, Swift; as well as building Rest API, CMS, Landing page",
      liveLink: "https://www.isetankl.com.my/isetan-app/",
      image: "isetan.png",
    },
    {
      name: "The Social Rewards App",
      description:
        "a mobile app and system allows customers Earn high value points and get access to exclusive member daily rewards, birthday rewards, stamp cards and promotions. I have worked as a Fullstack Technical Lead and Project Manager to build and maintain the Android and IOS app, CSM, Cron Job on Heroku",
      iosLink: "https://apps.apple.com/my/app/the-social-rewards/id1219993641",
      androidLink:
        "https://play.google.com/store/apps/details?id=asia.tsunago.thesocial",
      image: "social.png",
    },
    {
      name: "AI solution for retails startup",
      description:
        "an AI solution to capture customer's faces using cameras inside shopping mall areas to help analyze customer behaviors. I was playing Technical Lead role and onside in Malaysia for about 6 months to setup the product. Status: startup exit",
      image: "tsunago.png",
    },
    {
      name: "Axon Ivy Designer",
      description:
        "a state of the art process modelling tool that enables you to turn your business processes into real and fully functional web applications. It is an IDE built on top of Elise using Java EE and other Java related tech stacks. I have contributed to a part of this tool to develop HTML Editor and Rule Engine",
      image: "ivy-designer.png",
      liveLink: "https://developer.axonivy.com/",
    },
    {
      name: "Fintech Projects for Swiss Banks",
      description:
        "Built Self Onboarding Process of several Swiss banks such as PostFinance, ABS. Integrated KYC as a third party API into web and mobile app for verification process of banking.",
      image: "postfinance.png",
      liveLink:
        "https://www.postfinance.ch/en/private/paying-saving/e-banking-apps/e-finance.html",
    },
  ];

  return { projects };
}