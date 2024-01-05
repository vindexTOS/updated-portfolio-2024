import { IoLogoJavascript } from 'react-icons/io'
import { imgdata } from './assets/imgdata'
import { skillsData } from './assets/skillicons/SkillsData'
import { FaAngular, FaReact } from 'react-icons/fa'
import {
  SiFirebase,
  SiTypescript,
  SiRedux,
  SiDotnet,
  SiCsharp,
  SiExpress,
} from 'react-icons/si'
import { SiNextdotjs } from 'react-icons/si'

import { TbBrandTailwind, TbBrandVite } from 'react-icons/tb'
import { IconBaseProps } from 'react-icons'
import { NavData } from './assets/calc/navData'
import { GrNode } from 'react-icons/gr'
import { DiMongodb } from 'react-icons/di'
export type SkillDataType = {
  title: string
  icon: string
  color: string
  bgo: string
}[]
export type ProjectItemType = {
  title: string
  dec: string
  link?: string
  git: string
  demovideo?: string
  imgs: string[]
  id: string
  icons?: IconBaseProps[]
  personal: string
}

export const portfolioData = {
  aboutMe: `I am a dedicated developer with a foundation in the MERN/TypeScript stack. What began as a focused exploration has evolved into a broader spectrum of expertise. I've since expanded my horizons, diving into Angular, mastering C#, and delving into NestJS.

  My journey in programming is not bound by specific technologies; it's driven by an insatiable curiosity and a relentless pursuit of knowledge. While I cherish the projects and experiences I've garnered, I am equally excited about the uncharted territories that lie ahead. For me, the essence of programming lies not in adhering to a single stack but in the art of problem-solving and creation.
  
  Embracing change and staying adaptable have been cornerstones of my professional ethos. I don't merely adapt to new technologies; I eagerly embrace them, fueled by a belief that every tool offers a unique perspective and capability. My agility in picking up new technologies stems from a genuine passion for innovation and a commitment to staying at the forefront of the ever-evolving tech landscape.
  
  One principle that resonates deeply with me is: "The more you put into anything, the more you get out." This philosophy echoes in every line of code I write, every challenge I tackle, and every project I embark upon. Obstacles are but stepping stones, challenges mere invitations to learn, and I approach each with enthusiasm and determination.
  
  In a world where the only constant is change, my motto remains steadfast: to evolve, develop, and grow continuously. I am not confined by labels or stacks; I am defined by my passion for programming, my dedication to excellence, and my unwavering desire to create impactful solutions.
  
  As I look to the future, I am excited about the endless possibilities that await. I remain committed to learning, innovating, and pushing boundaries, eager to see where this exhilarating journey in the world of technology will lead me next.
  
   `,
  InreleventInfo: [
    {
      point: `I have a Bachelor in Agricultural Science... I am interested in permaculture, one of my life gole is to have my own food forest and permaculture garden `,
    },
    {
      point: `I am welder as a trade, I like building stuff in real life as much as i like building web projects here,anywhere from squat racks to hand made knives, i am intrested in making everything `,
    },
    {
      point: `My Name Is Giorgi And I Believe In Fitness... Weight lifting is one of the most important passions in my life, and im also obsessed with nutrition and human diets,my favorite book about the subject is  nutrition and physical degeneration by dr Weston A. Price `,
    },

    {
      point: `I have some bit of knowledge in video editing And photoshop `,
    },
  ],
}
const bgOpacity = '.1'
const bghover = '.4'
export const skills: SkillDataType = [
  {
    title: `JavaScript`,
    icon: skillsData.js,
    color: `rgba(255, 255, 0, ${bghover})`,
    bgo: `rgba(255, 255, 0, ${bgOpacity})`,
  },
  {
    title: `Typescript`,
    icon: skillsData.typescript,
    color: `rgba(0, 122, 204,  ${bghover})`,
    bgo: `rgba(0, 122, 204,  ${bgOpacity})`,
  },
  {
    title: `C#`,
    icon: skillsData.C,
    color: `rgba(135, 0, 0,  ${bghover})`,
    bgo: `rgba(135, 0, 0,  ${bgOpacity})`,
  },
  {
    title: `React`,
    icon: skillsData.react,
    color: `rgba(97, 219, 251,  ${bghover})`,
    bgo: `rgba(97, 219, 251,  ${bgOpacity})`,
  },
  {
    title: `Next.js`,
    icon: skillsData.nextJs,
    color: `rgba(97, 219, 251,  ${bghover})`,
    bgo: `rgba(97, 219, 251,  ${bgOpacity})`,
  },
  {
    title: `React Native`,
    icon: skillsData.reactnative,
    color: `rgba(97, 219, 251,  ${bghover})`,
    bgo: `rgba(97, 219, 251,  ${bgOpacity})`,
  },
  {
    title: `Redux`,
    icon: skillsData.redux,
    color: `rgba(118, 74, 188,  ${bghover})`,
    bgo: `rgba(118, 74, 188,  ${bgOpacity})`,
  },
  {
    title: `Angular`,
    icon: skillsData.angular,
    color: `rgba(255, 0, 0,  ${bghover})`,
    bgo: `rgba(255, 0, 0,  ${bgOpacity})`,
  },
  {
    title: `Ngrx`,
    icon: skillsData.ngrx,
    color: `rgba(135, 0, 0,  ${bghover})`,
    bgo: `rgba(135, 0, 0,  ${bgOpacity})`,
  },

  {
    title: `Node/Express.js`,
    icon: skillsData.node,
    color: `rgba(104, 160, 99 , ${bghover})`,
    bgo: `rgba(104, 160, 99 , ${bgOpacity})`,
  },
  {
    title: `nestJs`,
    icon: skillsData.nestJs,
    color: `rgba(255, 0, 0  , ${bghover})`,
    bgo: `rgba(234, 160, 99 , ${bgOpacity})`,
  },
  {
    title: `MySql`,
    icon: skillsData.mySql,
    color: `rgba(106, 90, 205 , ${bghover})`,
    bgo: `rgba(106, 90, 205 , ${bgOpacity})`,
  },
  {
    title: `MongoDb`,
    icon: skillsData.mongo,
    color: `rgba(60, 135, 58,  ${bghover})`,
    bgo: `rgba(60, 135, 58,  ${bgOpacity})`,
  },
  {
    title: `Firebase`,
    icon: skillsData.firebase,
    color: `rgba(255, 166, 17,  ${bghover})`,
    bgo: `rgba(255, 166, 17,  ${bgOpacity})`,
  },
  {
    title: `Git`,
    icon: skillsData.git,
    color: `rgba(255, 165, 0,  ${bghover})`,
    bgo: `rgba(255, 165, 0,  ${bgOpacity})`,
  },
  {
    title: `React Query`,
    icon: skillsData.reactQuery,
    color: `rgba(255, 165, 0,  ${bghover})`,
    bgo: `rgba(118, 74, 188,  ${bgOpacity})`,
  },
  {
    title: `TailwindCss`,
    icon: skillsData.tailwind,
    color: `rgba(34, 133, 245,  ${bghover})`,
    bgo: `rgba(34, 133, 245,  ${bgOpacity})`,
  },
  {
    title: `HTML`,
    icon: skillsData.html,
    color: `rgba(255, 165, 0,  ${bghover})`,
    bgo: `rgba(255, 165, 0,  ${bgOpacity})`,
  },
  {
    title: `CSS`,
    icon: skillsData.css,
    color: `rgba(0, 152, 255,  ${bghover})`,
    bgo: `rgba(0, 152, 255,  ${bgOpacity})`,
  },
  {
    title: `Framer Motion`,
    icon: skillsData.framer,
    color: `rgba(138, 48, 255,  ${bghover})`,
    bgo: `rgba(138, 48, 255,  ${bgOpacity})`,
  },
]

export const ChallangesProjects: ProjectItemType[] = [
  {
    title: 'Olimpus Real Estate',
    dec: ` Olimpus is a Georgian real estate agency. The website is designed for the distribution of movable properties, equipped with all essential tools and an admin panel for content management. Currently, it employs the latest technologies ensuring secure and efficient functionality. The hosting of the website is on Google Cloud. `,
    link: `https://olimpus.ge/`,
    git: ``,
    demovideo: ``,
    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/challanges-787f6.appspot.com/o/projects%2Folimpuis.png?alt=media&token=3796801c-b665-4bdf-aabf-b69ff72bd0b4`,
    ],
    icons: [
      <FaReact className="text-red-500" />,
      <SiTypescript className="text-blue-500" />,
      <SiRedux className="text-purple-500" />,

      <GrNode className="text-green-500" />,
      <DiMongodb className="text-green-500" />,
    ],
    personal: `Olimpus stands as a testament to modern web development, seamlessly integrating cutting-edge technologies to deliver a robust and efficient real estate platform tailored for the Georgian market.

    Technologies Used:
    Frontend powered by React.js, Backend built with NestJS, and MongoDB serving as the database – collectively forming a powerful tech stack for the platform.
    
    Features and Contributions:
    The custom-built Content Management System (CMS) admin panel is a standout feature, offering intuitive controls for managing property listings, user data, and content. Designed from scratch, this admin panel embodies user-centric design principles, providing the Olimpus team with unparalleled control over their platform.
    
    The platform is tailored for the distribution of movable properties, presenting a structured and user-friendly interface for property listing, browsing, and management.
    
    Ensuring optimal performance and scalability, the website is hosted on Google Cloud, leveraging its robust infrastructure and services.
    
    Freelance Project Experience:
    Embarking on the Olimpus project as a freelance developer was both challenging and rewarding. The journey involved close collaboration with stakeholders to define project goals, functionalities, and design aesthetics.
    
    Leveraging expertise in React, NestJS, and MongoDB, a scalable and efficient platform was architected, ensuring seamless communication between the frontend and backend.
    
    Crafting a bespoke CMS admin panel was a pivotal aspect of the project. A user-centric interface was developed, focusing on usability and functionality, to empower the Olimpus team with unparalleled control over their platform.
    
    Deployment on Google Cloud and implementing performance optimizations ensured a smooth and responsive user experience.
    
    Conclusion:
    The Olimpus real estate platform embodies the synergy of advanced technologies and meticulous craftsmanship. As a self-taught developer, this project not only honed technical skills but also enriched understanding of client requirements, project management, and the intricacies of delivering a scalable and user-centric solution in the real estate domain.
    
    `,
    id: 'olimpus',
  },
  {
    title: 'Ieworx',
    dec: ` Ieworx Start-up focuses on creating a user-friendly CV-making platform tailored for construction companies. Their goal is to provide an efficient solution for construction professionals to easily craft and manage their resumes online.`,
    link: `https://ieworx-upgrade-emky.vercel.app/`,
    git: ``,
    demovideo: ``,
    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/challanges-787f6.appspot.com/o/ieworx.JPG?alt=media&token=ef7be0c4-05c8-4e38-9c14-f449c848c655`,
    ],
    icons: [
      <SiNextdotjs className="text-black" />,
      <SiTypescript className="text-blue-500" />,

      <GrNode className="text-green-500" />,
      <DiMongodb className="text-green-500" />,
    ],
    personal: `I took on a freelance gig to help out construction entrepreneurs. They needed a better way to handle taxes and invoices, so I got to work on building a handy online tool.

    First up, I made a user-friendly navigation bar for their website using Next.js. It was all about making things easy for users to find their way around.
    
    Then, I added a contact form to the site. This made it super simple for people to get in touch with the start-up, ask questions, or share feedback.
    
    I was also in charge of setting up the backend using Express.js. Everything was going smoothly, but we hit a pause and decided to pick up again in February 2024.
    
    Working closely with the product owner was a great experience. We bounced ideas off each other, made tweaks, and really got the project moving in the right direction.
    
    All in all, the Chingu D project was a cool challenge. As a freelancer, it was rewarding to see my work make a difference and help entrepreneurs in the construction world.`,
    id: 'Ieworx',
  },
  {
    title: 'The Ruminate',
    dec: `The Ruminate Project was designed to bridge the gap between product producers and the farming community, specifically targeting the enhancement of organic produce assessment. Key features included a secure authentication system with both email and GoogleAuth integration, along with a tailored evaluator schema. Through active collaboration with clients and cross-functional teams, the project fostered meaningful connections and leveraged Agile methodologies to drive iterative development and user-focused solutions in the realm of organic farming.`,
    link: `https://www.letsruminate.org/`,
    git: ``,
    demovideo: ``,
    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/challanges-787f6.appspot.com/o/rumainte.JPG?alt=media&token=507322aa-5188-4207-be9e-b723fadf19a7`,
    ],
    icons: [
      <SiTypescript className="text-blue-500" />,
      <FaReact className="text-red-500" />,
      <SiFirebase className="text-[#FFA611]" />,

      <TbBrandTailwind className="text-blue-500" />,
    ],
    personal: `The Ruminate Project was a unique endeavor that brought together the worlds of product producers and the farming community, aiming to elevate the assessment of organic produce to new heights. At its core, this project was about fostering connections, enhancing collaboration, and driving meaningful insights in the realm of organic produce evaluation.

    One of the pivotal aspects of this project was the implementation of a robust authentication system. Leveraging my expertise, I integrated both email and GoogleAuth authentication mechanisms, ensuring a secure and seamless user experience. Additionally, I meticulously designed a tailored schema for evaluators, streamlining data management and facilitating structured assessments.
    
    Communication and collaboration were at the heart of the Ruminate Project. I actively engaged in frequent meetings with clients, product teams, and design teams, fostering a collaborative environment characterized by open dialogue, shared vision, and iterative refinement. These interactions were instrumental in honing my soft skills, enhancing my ability to articulate ideas, navigate challenges, and align development efforts with overarching project goals.
    
    A noteworthy aspect of my journey with the Ruminate Project was the invaluable experience gained in practicing Agile methodology. Embracing Agile principles and practices, I navigated the dynamic landscape of project development, fostering adaptability, collaboration, and continuous improvement. This Agile journey not only enriched the project's trajectory but also fortified my commitment to delivering solutions that resonate with user needs, foster innovation, and drive tangible outcomes.
    
    In essence, the Ruminate Project was more than just a development endeavor; it was a journey of exploration, collaboration, and growth. As a developer, this project provided a fertile ground to refine technical skills, embrace Agile methodologies, and cultivate a collaborative mindset, setting the stage for future endeavors and reinforcing the transformative power of technology in fostering connections and driving innovation in the farming community.`,
    id: 'ruminate',
  },

  {
    title: 'Chingu Voyag',
    dec: `• I was a participant in Chingu’s Voyage 46, where we started working on Upwork clone.
    • I developed the entire back end using TypeScript and Express, incorporating live chat using Socket.io, etc.
    • Additionally, I had to implement all the functionalities on the front end, such as API calls, etc.
    • Overall, I gained a lot of experience using GitHub and Git and feel confident using them in a working
    environment.
    • I had to take on a leadership role since I was the most experienced member in the group. This meant
    dealing with hosting and issues when it came to Git conflicts.`,
    link: `https://devconnectchingu.netlify.app/`,
    git: `https://github.com/vindexTOS/v45-tier3-team-34`,
    demovideo: ``,
    imgs: [
      `https://raw.githubusercontent.com/vindexTOS/v45-tier3-team-34/main/client/public/assets/img/homepage.png`,
    ],
    icons: [
      <FaReact className="text-blue-400" />,
      <SiTypescript className="text-blue-500" />,

      <SiFirebase className="text-[#FFA611]" />,
      <TbBrandTailwind className="text-blue-500" />,
      <SiExpress className="text-green-500" />,
      <DiMongodb className="text-green-500" />,
    ],
    personal: `Chingu is a platform for beginner developers to learn how to work in a real working environment.
    I was a participant in Chingu’s Voyage 46, where a few other developers and I chose to work on an
    Upwork clone project. Right away, half of our team flaked, so I was left alone on the back-end side. I
    developed the entire back end using TypeScript and Express, incorporating live chat using Socket.io,
    application and project posting, and many more features. Additionally, I had to implement all the
    functionalities on the front end, such as API calls, etc. Overall, I gained a lot of experience using
    GitHub and Git and feel confident using them in a working environment. Furthermore, I had to
    take on a leadership role since I was the most experienced member in the group. This meant dealing
    with hosting and issues when it came to Git conflicts`,
    id: 'chingu',
  },
  {
    title: 'Banner Management',
    dec: ` Angular: This project was implemented using Angular, marking my first venture into this front-end framework.
    Ngrx: For state management, I utilized Ngrx to effectively manage the application's state.
    Angular Material: I employed Angular Material for UI components, making the user interface visually appealing and user-friendly. `,
    link: ``,
    git: `https://github.com/vindexTOS/banner_manager_angular`,
    demovideo: `https://www.youtube.com/watch?v=_yWUd1k1Ef4`,
    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/banner%20gg.JPG?alt=media&token=4946f51b-2efa-4eaf-920e-7d320dc64726`,
    ],
    icons: [
      <FaAngular className="text-red-500" />,
      <SiTypescript className="text-blue-500" />,
      <SiRedux className="text-red-500" />,
    ],
    personal: `This project was my first experience with Angular, and it involved the development of a banner management system for the banking sector and related industries. The system was designed to streamline communication and marketing between banks and their clients through mobile and internet banking platforms.Learning the intricacies of Angular's coding patterns was a new and exciting journey for me. Fortunately, my prior knowledge of technologies like Nest.js and PHP's Blade template system provided me with a solid foundation, making it easier to grasp Angular's structure and concepts quickly.

    In particular, my familiarity with the Redux pattern, which Ngrx is based on, proved to be a valuable asset. It allowed me to navigate the state management in Angular with ease, further accelerating my learning curve.
    
    This amalgamation of past experiences and new learning opportunities not only expedited my adaptation to Angular but also allowed me to contribute effectively to the project, leveraging a well-rounded skill set.`,
    id: 'optio-banner-manager',
  },
]

export const MainProjects: ProjectItemType[] = [
  {
    title: 'Movie Rating',
    dec: ` This is a movie rating application where users can register as critics and rate movies using a 5-star review system. The application also provides information about actors and movies. The database is designed in such a way that when a movie is added, the corresponding actors are automatically retrieved from the database. - User Registration: Users can register to become critics and gain access to rate movies.
  - Movie Rating: Registered critics can rate movies using a 5-star review system.
  - Actors and Movies: The application provides information about actors and movies.
  - Automatic Actor Addition: When a movie is added, the corresponding actors are automatically retrieved from the database.
  - Backend: Built using C# and .NET for server-side functionality. `,
    link: `https://64a7f24605790660b1adec41--movie-clubge.netlify.app/`,
    git: `https://github.com/vindexTOS/movie-net-react`,
    demovideo: ``,
    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/sigma%20male%20movie.jpg?alt=media&token=c36c6a44-c8aa-489c-813d-83e1ded0123f`,
    ],
    icons: [
      <FaReact className="text-blue-400" />,
      <SiTypescript className="text-blue-500" />,
      <SiCsharp className="text-green-500" />,
      <SiDotnet className="text-green-600" />,
      <SiFirebase className="text-[#FFA611]" />,
      <TbBrandTailwind className="text-blue-500" />,
      <SiRedux className="text-purple-500" />,
    ],
    personal: `Me and Akaki Ujarashvili, combined our passion for movies and technology to create an immersive movie club experience. Our app utilizes C# .NET for the back end and TypeScript React for the front end, delivering a seamless and user-friendly platform.
  🌟 Key Features:
  ✅ User Registration: Become a member of our movie club by registering and unlocking exclusive features.
  ✅ Movie Ratings: Rate your favorite movies with our 5-star review system and share your opinions with fellow movie enthusiasts.
  ✅ Comprehensive Movie Database: Explore an extensive collection of movies, complete with detailed information and captivating visuals.
  ✅ Dynamic Actor Addition: Our smart database automatically adds actors when a movie is added, enriching the browsing experience.
  🤝 Collaboration Journey:
  Throughout this project, my friend and I embarked on an incredible teamwork experience. We faced challenges head-on and leveraged our skills in C# .NET and TypeScript React to bring this application to life. Collaborating on every aspect, from brainstorming ideas to coding and testing, has been a valuable learning experience for both of us.
  💡 Why We Built This App:
  Our primary motivation was to develop a project that combines our love for movies and our desire to enhance our teamwork and git skills.`,
    id: 'movie-app',
  },

  {
    title: 'FitHub Reddit Clone ',
    dec: `Fithub is a fitness-oriented Reddit clone with several distinguishing features. It boasts various threads that can only be created and customized by users with admin roles. Additionally, it incorporates an upvoting system to promote valuable content. Users receive notifications when someone comments on their posts or replies to them in the comment section. Furthermore, users have the ability to modify their own profiles and create posts. The app runs on the Express.js framework for the backend, utilizes MongoDB as the database, and employs React, TypeScript, Redux for state management, and Tailwind CSS for styling on the frontend.`,
    link: `https://fithub-forum.netlify.app`,
    git: `https://github.com/vindexTOS/fitness-forum`,
    demovideo: `https://www.youtube.com/watch?v=aIxgLIDCyAc`,
    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/Reddit%20Clone.jpg?alt=media&token=8783248c-25f1-45ed-9aff-9d33790dd4fa`,
    ],
    icons: [
      <FaReact className="text-blue-400" />,
      <SiTypescript className="text-blue-500" />,
      <GrNode className="text-green-500" />,
      <DiMongodb className="text-green-600" />,
      <SiFirebase className="text-[#FFA611]" />,
      <TbBrandTailwind className="text-blue-500" />,
      <SiRedux className="text-purple-500" />,
    ],
    personal: `I initially started building a simple API for learning purposes, but as I quickly grasped the concepts of Node.js and Express, I decided to expand the project into a full-stack Reddit clone. This endeavor also provided me with an opportunity to delve into Redux Toolkit, although I found it to introduce a significant amount of boilerplate code and additional typing. Personally, I still have a preference for using the Context API. Throughout the course of this project, which I completed in just two weeks while simultaneously working on another project, I noticed that it involved a lot of routine tasks and wasn't as challenging as some of my previous projects. Nonetheless, I believe it has contributed significantly to my growth as a developer since my last project.`,
    id: 'fit-hub',
  },
  {
    title: 'Fittness APP ',
    dec: `This app is packed with features, app helps users achieve their fitness goals in a personalized and fun way.' The app calculates users' BMI, age, and health status to create a personalized exercise plan. The app also offers progress tracking and statistical analysis, so users can see their progress over time. To keep users motivated, the app has a rewards system that rewards users for completing challenges. The app allows users to register and sign in to Firebase, and users can change their name and profile picture. With plans to include features such as user comparison statistics, this app is designed to change the way people get fit and stay motivated towards their goals.`,
    link: `https://ranger-app.netlify.app/`,
    git: `https://github.com/vindexTOS/ranger-app`,
    demovideo: `https://www.youtube.com/watch?v=vKx7S7jNV8w`,
    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/pcmarket-8f5e8.appspot.com/o/Fitness%20App%20Demo%20Photo%20.jpg?alt=media&token=d25b6c9f-d6c2-49af-ab71-182371cbbaab`,
    ],
    icons: [
      <FaReact className="text-blue-400" />,
      <IoLogoJavascript className="text-yellow-400" />,
      <SiFirebase className="text-[#FFA611]" />,
      <TbBrandTailwind className="text-blue-500" />,
    ],
    personal: `As a fitness enthusiast, I came up with an original idea for a fitness app that sets itself apart from the rest. What makes it unique is the award system and achievements that incentivize users to strive for excellence day after day. More information about this app can be found in the description section below.

      When I first tackled this project using React, it was one of the biggest challenges I had faced. It took me two months to complete, and looking back, there are many areas where I could have done things better. For instance, the code is hard to maintain due to my incomplete understanding of the underlying principles. I could have also made the app more dynamic instead of relying on hardcoding many elements. Nonetheless, despite its shortcomings, the app works as intended, and the experience was invaluable in helping me learn more about React.
      
      Since then, I have worked on several other projects, and I can attest that my coding has improved significantly. I attribute this improvement to the lessons learned while building this fitness app. For example, I started using TypeScript, which has made my code much cleaner. I have also gained a better understanding of what it takes to build successful big projects.
      
      My plan now is to remake the fitness app using React Native and deploy it on an app store. `,
    id: 'ranger-app',
  },
  {
    title: 'PC Market App',
    dec: `The website is built using React, Typescript, and styled with Tailwind. The backend is powered by Firebase. Users can easily post their products for sale, and manage their listings with features like photo uploads and pricing information. To enhance communication between buyers and sellers, the website includes a direct messaging feature. Additionally, users can leave five-star reviews to rate their experience with a particular seller.
  The website is designed with different categories and filters to make it easy for users to find exactly what they're looking for. Plus, there are two different layout options to choose from.`,
    link: `https://pcmarket.netlify.app/`,
    git: `https://github.com/vindexTOS/PCmarket`,
    demovideo: `https://www.youtube.com/watch?v=X0PlNZ0djRA&feature=youtu.be`,
    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/PC%20market%20background.jpg?alt=media&token=c8f20072-42f8-4cf1-959a-31e400ec1a79`,
    ],
    icons: [
      <FaReact className="text-blue-400" />,
      <SiTypescript className="text-blue-500" />,
      <SiFirebase className="text-[#FFA611]" />,
      <TbBrandTailwind className="text-blue-500" />,
    ],
    id: 'pc-market-app',
    personal: `My second significant project was developing a PC market app inspired by the Georgian website mymarket.ge ( Read more about it on down below). Despite being more complex and extensive than the Ranger Fitness App, I completed it in just three weeks. The code is much cleaner and more dynamic, and I learned a lot about Firebase. This was also my first project using TypeScript, making it a valuable learning experience.,Overall, building the PC market app was a significant milestone in my coding journey, and it has been instrumental in developing my skills as a developer.`,
  },
]

export const Project: ProjectItemType[] = [
  {
    title: 'Cs Go Case Simulator',
    dec: `Cs Go Case Opening simulator with built in invetnory and monetary system that is connected to local storage, if your money runs out you can fight gabe newell himself in game of rock papper and scissors to get prizes, i built most of this app in a day using Vite - React - TypeScript and tailwind for styling as always `,
    link: `https://csgocaseopening.netlify.app/`,
    git: `https://github.com/vindexTOS/csgo-case`,
    demovideo: `https://www.youtube.com/watch?v=YqtBbDZZ2mU`,
    imgs: [
      imgdata.chromaopen,
      imgdata.inventory,
      imgdata.knifecase,

      imgdata.gabelost,
    ],
    icons: [
      <FaReact className="text-blue-400" />,
      <SiTypescript className="text-blue-500" />,

      <TbBrandTailwind className="text-blue-500" />,
      <TbBrandVite className="text-purple-500" />,
    ],
    id: 'cs-go-simulator-app',
    personal: `I developed this app as a personal challenge and a tribute to one of my favorite games, CS:GO. Although it's nothing extraordinary, the process of creating it was relatively straightforward. It only took me a day to complete, with 90% of it involving copy-pasting photo links and gun descriptions from Steam.,It was a fun side project that allowed me to challenge myself and expand my coding skills in a low-pressure environment.`,
  },
  {
    title: 'Node/Img upload',
    dec: `Simple image url web app , I used firestore as image storage,after uploading the image to firestore we get back image url with than we post it on the mongo data base with express js server api, using post method with axios on the front end , then we get the data from api and display it on the gallary `,

    git: 'https://github.com/vindexTOS/img-upload',
    demovideo: 'https://www.youtube.com/watch?v=UfV5r_8il44',
    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/portfoliophotos%2Fimguplader%2FphotoProject.webp?alt=media&token=c6df6544-850c-4c42-912e-9ca2906a84a6`,
      `https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/portfoliophotos%2Fimguplader%2FphotoProject.webp?alt=media&token=c6df6544-850c-4c42-912e-9ca2906a84a6`,
    ],
    icons: [
      <FaReact className="text-blue-400" />,
      <SiTypescript className="text-blue-500" />,
      <GrNode className="text-green-500" />,
      <DiMongodb className="text-green-600" />,
      <SiFirebase className="text-[#FFA611]" />,
      <TbBrandTailwind className="text-blue-500" />,
    ],
    id: 'img-upload',
    personal: `my first Node Express project, which is a simple image uploader that provides you with a Firebase store link for the photo. Additionally, it has a gallery that fetches data from MongoDB. The technologies I used for this project are Firestore for storage, MongoDB for the database, Express.js for the API, React and Tailwind CSS for the front-end, and TypeScript for coding.
    `,
  },
  {
    title: 'Web-Dev Quizz',
    dec: `The quiz app is a web application that allows users to test their knowledge on front-end development topics, specifically React, JavaScript, HTML/CSS. The app features a variety of questions of varying difficulty levels, allowing users to customize their quiz-taking experience to suit their level of knowledge.,Users can choose from different categories of questions, including React-specific questions, JavaScript-specific questions, and HTML/CSS-specific questions. Additionally, the app features different difficulty settings that allow users to select the level of challenge they want to tackle. `,
    link: 'https://wonderful-narwhal-0b8ac3.netlify.app/',
    git: 'https://github.com/vindexTOS/react-question-quizz',

    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/portfoliophotos%2Fquizz%2Fquizz2.webp?alt=media&token=ab9c64fc-678c-446f-af5f-6c74247c8c9f`,
      `https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/portfoliophotos%2Fquizz%2Fquizz.webp?alt=media&token=62d0941a-9f32-45d8-a63a-8422ee2e1f31`,
    ],
    icons: [
      <FaReact className="text-blue-400" />,
      <SiTypescript className="text-blue-500" />,

      <TbBrandTailwind className="text-blue-500" />,
    ],
    id: 'quizz',
    personal: `I created this quiz app mainly to help myself learn more about trivial questions related to front-end development topics like React, JavaScript, HTML/CSS, and more. As someone who is passionate about learning and improving my skills, I found that building an interactive quiz app was a great way to make the learning process more engaging and enjoyable.

    I made sure to include a variety of customization options, such as different categories of questions and difficulty levels, to provide a tailored learning experience. I've found this app to be a valuable tool that I frequently use to gain a deeper understanding of complex topics, and the act of creating it has helped me solidify my own knowledge on the subject matter.
    
    Overall, this quiz app is a passion project that reflects my own desire to expand my knowledge and understanding of front-end development topics, and I hope it can be a valuable resource for others looking to do the same.`,
  },
  {
    title: 'DogGPT',
    dec: `ChatGPT has competitor and i build it... all jokes aside this project was inspired by other developer's project  CatGPT , i made it about dogs  instad of cats because im a dog person, it's a simple chat simultor that calls random facts from dog facts API every time user types anything , it took me less than a houre to make it  `,
    link: 'https://glistening-cucurucho-296957.netlify.app/',
    git: 'https://github.com/vindexTOS/dogGPT',
    demovideo: 'https://www.youtube.com/watch?v=VBcYNsM5qwA&feature=youtu.be',
    imgs: [imgdata.mainDog, imgdata.res],
    icons: [
      <FaReact className="text-blue-400" />,
      <IoLogoJavascript className="text-yellow-400" />,

      <TbBrandTailwind className="text-blue-500" />,
    ],
    id: 'dog-gpt',
    personal: `Not alot to say about this app you can just read general description down below  `,
  },
  {
    title: 'Gios Gym Market',
    dec: `This website is for a gym equipment store, allowing clients to search and purchase equipment. It includes features such as billing information and the ability to add items to a cart, as well as a section showing similar products. Additionally, a loading layout is present while data is retrieved from Firebase `,
    link: 'https://stirring-starburst-059007.netlify.app/',
    git: 'https://github.com/vindexTOS/gios-gym',

    imgs: [
      imgdata.maingym,
      // imgdata.cart,
      // imgdata.contacnt,
      // imgdata.billing,
      // imgdata.shippinggym,
      // imgdata.singleproductgym,
    ],
    icons: [
      <FaReact className="text-blue-400" />,
      <IoLogoJavascript className="text-yellow-400" />,
      <SiFirebase className="text-[#FFA611]" />,

      <TbBrandTailwind className="text-blue-500" />,
    ],
    id: 'gym-market',
    personal: `This was my first attempt at building a real app using React, and it took me a considerable amount of time to complete it. Although the code is not dynamic and heavily hardcoded, I was able to learn Tailwind CSS during the process.
      Despite some issues with the code, such as creating the context API in the app file instead of creating a costume hook for it, and a lot of responsive styling problems that I could have fixed right now, I chose to let it stay how it was as a reminder how much I progressed since I  created this app   , Over all it was a valuable learning experience for me.   `,
  },
  {
    title: 'challenges and games ',
    dec: `The collection currently includes a lottery simulator, where users can generate random numbers for a chance to win a simulated jackpot. There's also a tic tac toe game, where users can challenge their friends or the computer to a game of this classic strategy game. For Pokemon fans, there's a Pokemon API caller that allows users to search for their favorite characters and view detailed information about them. Finally, there's a simple to-do list app that helps users stay organized and on top of their tasks.`,
    link: 'https://brilliant-sherbet-fe8d55.netlify.app/',
    git: 'https://github.com/vindexTOS/challanges-games',

    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/challanges-787f6.appspot.com/o/projects%2Fchallanges-and-games%2Ftodolist.JPG?alt=media&token=7a799312-ec4f-4195-88b8-522f85e52f75`,
      `https://firebasestorage.googleapis.com/v0/b/challanges-787f6.appspot.com/o/projects%2Fchallanges-and-games%2Flotto.JPG?alt=media&token=8bab88c9-40a0-4782-a3a6-211baac045c9`,
    ],
    icons: [
      <FaReact className="text-blue-400" />,
      <SiTypescript className="text-blue-500" />,
      <TbBrandVite className="text-purple-500" />,

      <TbBrandTailwind className="text-blue-500" />,
    ],
    id: 'games',
    personal: `  The collection currently includes a lottery simulator, where users can generate random numbers for a chance to win a simulated jackpot. There's also a tic tac toe game, where users can challenge  the computer to a game of this classic strategy game. For Pokemon fans, there's a Pokemon API caller that allows users to search for their favorite characters and view  information about them. Finally, there's a simple to-do list app .`,
  },
  {
    title: 'Bunch Of Calculators',
    dec: `This project features a life expectancy calculator that determines your life expectancy based on your lifestyle and health condition. Additionally, there is a one rep max calculator for weightlifting that calculates your maximum weightlifting capacity between 100% and 55%. The compound interest calculator is self-explanatory. Lastly, the project includes some basic calculators such as a tip calculator and BMI calculator.`,
    link: 'https://taupe-dieffenbachia-f6bd97.netlify.app/',
    git: 'https://github.com/vindexTOS/calculators',

    imgs: [NavData.emi, NavData.life],
    icons: [
      <FaReact className="text-blue-400" />,
      <SiTypescript className="text-blue-500" />,
      <TbBrandVite className="text-purple-500" />,

      <TbBrandTailwind className="text-blue-500" />,
    ],
    id: 'calculators',
    personal: `I do little challenges like this all the time to test my skills and make sure I am proficient with React. It took me less than five minutes to make most of this , but Life Expectation Calculator was bit challanging, Nothing special tho i manage to make it in less then a day , So  I combine all of this calculators  into one project. These calculators are primarily fitness-related, and some are financially related.`,
  },
]
