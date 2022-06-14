/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Andrew",
  logo_name: "Andrew Scott",
  nickname: "visitskyworld",
  full_name: "Andrew Scott",
  subTitle:
    "Full Stack Engineer, React expert⚛️, Blockchain enthusiast.🔥 And I ❤️ playing the guitar!",
  funFact: "I like spaghetti🍝, but hate spaghetti code",
  resumeLink:
    "https://drive.google.com/file/d/1RWLOgRoslnWXJtSCit0r_i9rII7D-zxX/view?usp=sharing",
  mail: "mailto:visitskyworld@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/visitskyworld",
  linkedin: "https://www.linkedin.com/in/andrew-scott-visitskyworld/",
  gmail: "visitskyworld@gmail.com",
  discord: "https://discord.com/users/929161993011748864",
  telegram: "https://t.me/visitskyworld",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "💻 Building performance-optimized and user-friendly front end application using ReactJS",
        "💻 Using all aspects of Facebook's design best practices and emerging UI development techniques",
        "💻 Writing high-quality code & implementing unit test and E2E tests for your applications",
        "💻 Creating application backend in Node, Express",
        "💻 Integration of third party services such as AWS(EC2, Amplify, S3, Cloudfront), GCP, Azure",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Vue",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#42b883",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178c6",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#117cad",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#f9322c",
          },
        },
      ],
    },
    {
      title: "Blockchain development",
      fileName: "BlockchainImg",
      skills: [
        "⚡ Experience working on NFT marketplace and minting page",
        "⚡ Experience working on Decenteralized Finance and Leverage Protocol",
        "⚡ Experience working on ethereum compatible chain",
        "⚡ Experience working on Cosmos SDK and chains",
        "⚡ Experience participating in DAO",
      ],
      softwareSkills: [],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⛅ Experience working on multiple cloud platforms",
        "⛅ Experience hosting and managing websites",
        "⛅ Experience with Continuous Integration & Continuous Delivery",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of British Columbia",
      subtitle: "Bachelor in Computer Science",
      logo_path: "ubc.png",
      alt_name: "UBC",
      duration: "2011 - 2014",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.ubc.ca/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Triplebyte Certificate",
      subtitle: "Triplebypte",
      logo_path: "triplebyte.png",
      certificate_link:
        "https://triplebyte.com/tb/andrew-scott-2d2jjdh/certificate",
      alt_name: "Triplebyte",
      // color_code: "#2AAFED",
      color_code: "#fff",
    },
    // {
    //   title: "M0001: MongoDB Basics",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#2AAFED",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "I love to collaborate.",
  description:
    "I've worked in both public and private sectors and have had the opportunity to work with a variety of team sizes over my career. It has given me insight into the pros and cons of both large and small engineering departments.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Fullstack Engineer",
          company: "Dework",
          company_url: "https://dework.xyz/",
          logo_path: "dework.png",
          duration: "2021.04 - PRESENT",
          location: "Remote",
          description: `
          -	Followed SDLC best practices within Agile environment to produce rapid iterations.
          -	Assessed and reviewed all pull requests created by other teammates to ensure the quality and accuracy of the code.
          -	I have been responsible for building both the frontend and backend for the web application, the Solidity smart contracts, as well as oversight onto technical decisions for the project.
          -	Integrated enhancements into web design to improve user stickiness, smooth functionality, and boost load times.
          -	Assisted backend developers with troubleshooting and problem solving.
          -	Contributed to the internal team by authoring two NPM packages to implement custom Google Analytics and Facebook tags within our applications.`,
          color: "#0071C5",
        },
        {
          title: "Senior Frontend Engineer",
          company: "Shapeshift",
          company_url: "https://shapeshift.com/",
          logo_path: "shapeshift.jpg",
          duration: "2020.11 - 2021.12",
          location: "Remote",
          description: `
          -	Collaborated with engineering team to review application requirements, plan implementation details and estimate delivery timelines.
          -	Brought in shipping confidence for the app and improved our deployment pipeline by implementing a testing harness in Jest and Enzyme covering over 75% of client code, configuring linting with ESLint and formatting with Prettier for overall code quality.
          -	Worked on Web3 integration using ethers.js and web3.js
          -	Created mobile applications based on React, integrating Facebook's best practices for interface design.
          -	Constructed integration libraries to interface with servers and APIs.
          `,
          color: "#0071C5",
        },
        {
          title: "Frontend Engineer",
          company: "Tidio",
          company_url: "https://tidio.com/",
          logo_path: "tidio.png",
          duration: "2019.05 - 2020.11",
          location: "Remote",
          description: `
          -	Optimized and improved the code quality by owning the rewriting of the application from an MVC view- based approach to a SPA and upgraded to React 16.8, rewriting all class-based components to functional components with hooks, implemented the Context API for global storage and authored over 330 individual tests across 110 test suites to react 80% code coverage. Since I wrote the client app 2 years prior, it gave me the opportunity to catch all my oversights and apply newfound knowledge. 
          -	Enforced Agile and Scrum development methodologies on interface projects to shorten development times.
          -	Coordinated with project management staff on database development timelines and project scope.
          -	Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.
          `,
          color: "#0071C5",
        },
        {
          title: "Software Engineer",
          company: "Matellio",
          company_url: "https://www.matellio.com/",
          logo_path: "matellio.png",
          duration: "2017.08 - 2019.05",
          location: "Onsite",
          description: `
          -	Designed REST calls using React to streamline user interface performance.
          -	Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.
          -	Developed and implemented performance improvement strategies and plans to promote continuous improvement.
          `,
          color: "#0071C5",
        },
        {
          title: "Software Engineer",
          company: "Trantor.Inc",
          company_url: "https://www.trantorinc.com/",
          logo_path: "trantor.jpg",
          duration: "2014.11 - 2017.08",
          location: "Onsite",
          description: `
          -	Maintained high-level expertise in React state management strategies.
          -	Participated in cross-functional projects while working in lean development environments.
          -	Participated in software field testing to verify in-situ performance of developed projects.
          `,
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships/Participation",
      experiences: [
        {
          title: "Cross Winter of Code Mentor",
          company: "CWOC",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "cwoc.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#D83B01",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#D83B01",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2018 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "GDG Student Volunteer",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description: "Google Developer Group Student Volunteer and Member.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create React Frontend applications. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "MarbleDAO",
      url: "https://app.marbledao.finance",
      description:
        "MarbleDAO is the first community-driven DAO on Juno. It supports staking&bonding tokens, NFT marketplace",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
    },
    {
      id: "1",
      name: "Shapeshift",
      url: "https://github.com/shapeshift/web",
      description:
        "Shapeshift is one of the world famous cryptocurrency exchange platforms",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "2",
      name: "Tidio Chatbot",
      url: "https://www.tidio.com/chatbots/",
      description: "Tidio is a conversational AI platform",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Vue",
          iconifyClass: "logos-vue",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "4",
      name: "Treasure chess",
      url: "https://treasure.chess.com/",
      description: "You can collect your NFT by playing chess game!",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
