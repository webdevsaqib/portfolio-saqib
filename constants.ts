

export const METADATA = {
  title: "Portfolio | Muhammad Saqib",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture and minimal backend structure",
  siteUrl: "",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern web apps",
  "Implement web animations",
  "I build minimalist UI",
];

export const EMAIL = "webdevsaqib@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/webdevsaqib/",
  github: "https://github.com/webdevsaqib",
  medium: "https://medium.com/@webdevsaqib",
  instagram: "https://www.instagram.com/webdevsaqib/",
  facebook: "https://www.facebook.com/saqibijaz6/",
  behance: "https://www.behance.net/webdevsaqib",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  // {
  //   name: "FigGen - Figma to Code converter",
  //   image: "/projects/figgen.jpg",
  //   blurImage: "/projects/blur/figgen-blur.jpg",
  //   description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
  //   gradient: ["#1F6582", "#1ABCFE"],
  //   url: "https://www.figma.com/community/plugin/1065278044402066626",
  //   tech: ["typescript", "figma", "tailwind"],
  // },
  {
    name: "myOKR Website",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Marketing site for OKR Platform by huminos",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://www.huminos.com/",
    tech: ["react", "gsap", "tailwind"],
  },
  {
    name: "DLT Labs Website",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Marketing site with an Internal CMS from scratch",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dltlabs.com/",
    tech: ["figma", "react", "gsap", "tailwind"],
  },
  {
    name: "DL Unify",
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Built the application from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://dlunify.com/",
    tech: ["tailwind", "gsap", "figma"],
  },
  // {
  //   name: "ngx-quill-upload",
  //   image: "/projects/ngx-quill-upload.jpg",
  //   blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
  //   description: "NPM Package for Quill JS uploads from Angular",
  //   gradient: ["#3A0000", "#771E1E"],
  //   url: "https://www.npmjs.com/package/ngx-quill-upload",
  //   tech: ["figma", "react", "gsap", "tailwind"],
  // },
  {
    name: "Huminos website",
    image: "/projects/huminos.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "Marketing site for Huminos bots for workplace by facebook",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://bots.huminos.com/",
    tech: ["javascript", "html", "svg", "gsap"],
  },
  // {
  //   name: "AKGEC - College Website",
  //   image: "/projects/akgec.jpg",
  //   blurImage: "/projects/blur/akgec-blur.jpg",
  //   description: "Contributed in overall design and development",
  //   gradient: ["#5E4C06", "#746528"],
  //   url: "https://www.akgec.ac.in/",
  //   tech: ["javascript", "html", "css"],
  // },
  {
    name: "Alpha Aesthetics",
    image: "/projects/alpha.jpg",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description: "Designed and developed the platform",
    gradient: ["#172839", "#334659"],
    url: "https://alpha-aesthetics.ayushsingh.net/",
    tech: ["illustrator", "javascript", "html", "css"],
  },
  // {
  //   name: "Amantrya - Polling Web App",
  //   image: "/projects/farewell18.jpg",
  //   blurImage: "/projects/blur/farewell18-blur.jpg",
  //   description: "Dark mode dated from 2017 🔥",
  //   gradient: ["#142D46", "#2E4964"],
  //   url: "https://farewell18.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "BDC 2018 Web Portal",
  //   image: "/projects/bdc18.jpg",
  //   blurImage: "/projects/blur/bdc18-blur.jpg",
  //   description: "Built the portal from zero to production 🚀",
  //   gradient: ["#470700", "#712A23"],
  //   url: "https://bdc2018.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
  {
    name: "Scrolls - Website",
    image: "/projects/scrolls.jpg",
    blurImage: "/projects/blur/scrolls-blur.jpg",
    description: "Built the portal from zero to production 🚀",
    gradient: ["#685506", "#7B6921"],
    url: "https://scrolls-17.ayushsingh.net/",
    tech: ["expressjs", "html", "css"],
  },
  {
    name: "Cardize - Visiting Cards",
    image: "/projects/cardize.jpg",
    blurImage: "/projects/blur/cardize-blur.jpg",
    description: "First web project! Custom visiting card generator",
    gradient: ["#552A04", "#614023"],
    url: "https://cardize.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["expressjs", "mongodb"],
  other: ["git","figma", "illustrator"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Development",
    size: ItemSize.SMALL,
    subtitle:
      "Developed frontend with react | Optimal code | Reusable Components | High Performance ",
    image: "/timeline/rodiziogrill-logo.svg",
    slideImage: "/timeline/rodiziogrill-app.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "React Frontend Development",
    size: ItemSize.SMALL,
    subtitle:
      "Developed frontend with react | Optimal code | Reusable Components | High Performance",
    image: "/timeline/mazi-logo.svg",
    slideImage: "/timeline/mazi-app.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "GSAP Animation",
    size: ItemSize.SMALL,
    subtitle:
      "Design, build custom GSAP web animations @ Open Source Git Project 😎",
    image: "/timeline/saqib-logo.png",
    slideImage: "/timeline/Preloader.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Interface Development",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-freelance.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "E-Commerce Store",
    size: ItemSize.SMALL,
    subtitle: "My very first React based e-commerce store 🚀",
    image: "/timeline/react-store.png",
    slideImage: "/timeline/ReactStore.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Gitex Technology Expo @ Dubai",
    size: ItemSize.SMALL,
    subtitle:
      "Proud Moment to represent my company product on which I work as an front end developer.",
    image: "/timeline/lrb-lab.svg",
    slideImage: "/timeline/gitex-dubai.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UX Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
  //   image: "/timeline/huminos.svg",
  //   slideImage: "/timeline/huminos-website.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
    image: "/timeline/qau.svg",
    slideImage: "/timeline/Graduation.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Presenting Startup Pakistan ",
    size: ItemSize.SMALL,
    subtitle:
      "Represented startups ideas @ Serena Hotels. Served as an representator of a startup ideas, incubation, investors.",
    image: "/timeline/startup.svg",
    slideImage: "/timeline/startup-pakistan.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Leading Role in Ifwa Bazaar",
    size: ItemSize.SMALL,
    subtitle:
      "Guided local citizens, foreigners and ambassadors about Ifwa Bazaar Event @ Connecting People @ Serena Hotel",

    slideImage: "/timeline/Ifwa-Bazaar.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Admin @ Adventure Club",
    size: ItemSize.SMALL,
    subtitle:
      "Managed adventure club tours for the students",
    slideImage: "/timeline/adventure.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on Javascript",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
  //   slideImage: "/timeline/js-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Design, ABES ACM",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Competed in web and graphic design challenge with 100+ participants.",
  //   slideImage: "/timeline/abes-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on Web Technologies",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
  //   slideImage: "/timeline/web-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2016",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Designing, IMSU",
  //   size: ItemSize.SMALL,
  //   subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
  //   slideImage: "/timeline/ims-16.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI/UX, Frontend Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
  //   image: "/timeline/si.svg",
  //   slideImage: "/timeline/si-start.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2015",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "My Journey Starts here!",
    size: ItemSize.SMALL,
    subtitle:
      "I started my journey in 2015, thanks for visiting my portfolio.",
    slideImage: "/timeline/thanks.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
