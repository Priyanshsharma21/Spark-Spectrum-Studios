import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import {orxp1,
  orxp2,
  orxp3,
  orxp4,
  orxp5,
  orxp6,
  orxp7,

  process1,
process2,
process3,
process4,
process5,
process6,
process7,
process8,
process9,
process10,


} from '../assets'


export const navItems = [
    {
        key : "d2d2d87u6u",
        name : "Work",
        path : "/work",
        message : "Click here for some serious eye-candy!"
    },
    {
      key : "d2d2d87u6u",
      name : "Stories",
      path : "/content",
      message : "See the magic of our content creation!"
  },
    {
        key : "d2d2d232",
        name : "About",
        path : "/about",
        message : "Not the about page you'd expect."
    },
    {
      key : "d2d2d5656",
      name : "Contact",
      path : "/contact",
      message : "Click here to send us love letters."
    },
  ]

export const formOptions = {
    service : [
        {
            name : "Website development",
            budget : "websiteBudget"
        },
        {
            name : "Video or Podcast editing",
            budget : "videoBudget"
        },
        {
            name : "Reels or Shorts",
            budget : "reelBudget"
        },
    ],

    budget : {
        "Website development" : ["5-10k RS/IND (small projects only)", "10-20k RS/IND", "20-30k RS/IND", "30-40k RS/IND", "40-50k RS/IND", "50k+ RS/IND"],

        "Video or Podcast editing" : ["1-3k RS/IND (small projects only)", "3-8k RS/IND", "8-12k RS/IND", "12-15k RS/IND", "15-20k RS/IND", "20k+ RS/IND"],

        "Reels or Shorts" : ["500-1k RS/IND (small projects only)", "1-3k RS/IND", "3-5k RS/IND", "5-10k RS/IND", "10k+ RS/IND"],
    },

    timeframe : ["I need it in 7 days", "I need it in 15 days", "I need it in 1 month", "I need it in 2 months", "2+ months timeframe for this."]
}

export const aboutSection = [
    {
      para: "Most websites suck?",
      yesorno: true,
    },
    {
      paraYes: `Correct. Most agencies over-complicate simple tasks by showering clients with marketing buzzwords and data-based strategies?`,
      paraNo: "Wrong they do. Most agencies over-complicate simple tasks by showering clients with marketing buzzwords and data-based strategies?",
      yesorno: true,
    },
    {
        "paras": [
            "Also correct! But don’t worry – we got this. Our research shows: customers are people, not robots. And people like stories, emotions, and meaningful communication. Sounds simple, right? Well, we’re the creative agency that brings this groundbreaking philosophy to life. That's why you should totally hire us.",
    
            "What will you get, you ask? Easy: stunning websites and branding with a real idea at its core. Yes, you heard right; not just fancy effects to decorate a big pile of nothing, but a product with character and soul, made for real human beings.",
    
            "We are Spark Spectrum Studios. Our team is reliable and professional, with a global network of experts ready to handle projects of any size. We ensure that not everything we create sounds like a robotic script – it has heart, humor, and a touch of brilliance.",
    
            "Data-driven strategies? We prefer to trust our instincts. And why should you trust them? Simple: they have guided us to create some of the most engaging content out there. Our work has won us numerous awards, including FunctionUp 9X milestones, Javascript Mastery Awards, as well as features on ProductHunt and many more.",
    
            `Interested in our full skillset? Here we go: We do Web Design, Web Development, Creative Direction, Branding, User Experience Design, Interaction Design, E-Commerce, Video editing, podcast editing, reels editing, Graphic Design and Art Direction.`,
            
            "You like that? We thought you might. Let's create something extraordinary together."
          ],
      yesorno: false,
    }
  ];

  export const workDetails = [
    {
      id: "1",
      sr: "1",
      title: "Foto Saket",
      teaser: "https://cdn.sanity.io/images/s9olv7lh/production/521d89f07e8bf3472bbb965349a570a7209eaa1f-1280x785.png",
      path: "saket",
      introDescription: "Official Photography website of Saket Gokhale, one of the top and most loved fitness influencers and content creators of India.",
      webTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/0d8bea52544f0ddce3029930752400c51d4e3a1b.mp4",
      clientName: "Saket Gokhale",
      launchDate: "2024 Aug",
      serviceProvided: ["UI/UX design", "Development", "Content Writing", "CMS", "Animations"],
      websiteLink: "https://fotosaket.vercel.app",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/1843b52ac3a9ec9b1b922af1ceec5110609abfcf-1280x5384.png"],
      techUsed: ["React19 - Frontend development", "Context API - State management", "GSAP - Complex animations", "Framer Motion - Animations",  "Three.js - 3D model of person", "Locomotive Scroll - Smooth Scrolling", "Figma - Designing", "Photoshop - Photo editing"],
      message: "Saket Gokhale official photography website"
    },
    {
      id: "2",
      sr: "2",
      title: "Ukenko",
      teaser: "https://image.lexica.art/full_webp/d345bb7a-523c-4318-97b0-2ec72c947501",
      path: "ukenko",
      introDescription: "AI-powered fitness app with workout guides.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/ad31ffda9bd7b85cb6dcd904be7b3979c43e5ba8.mp4",
      clientName: "Fitness Umpire (Bangalore)",
      launchDate: "2024 July",
      serviceProvided: ["UI/UX design", "Development", "Content Writing", "Content Creation"],
      websiteLink: "https://ukenko.netlify.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/19199d6e171f8f35d579b28efe4fb92295c83677-1280x1918.png",
      "https://cdn.sanity.io/images/s9olv7lh/production/7419fec1fb3d95d35aedd2a113294ba568da5281-1280x2243.png",
      "https://cdn.sanity.io/images/s9olv7lh/production/e3e88b9ed2dd0d278173ce6da371e6e75c4f5a8c-1280x2243.png",
      "https://cdn.sanity.io/images/s9olv7lh/production/89fb15b1cd4bb8b187989db93c7d5e0197cecd1a-1280x590.png"
      ],
      techUsed: ["React18 - Frontend", "Material UI - UI components", "Rapid API - Workout data", "Open AI - Personalized workout plan"],
      message: "Free AI workout plan waiting for you..."
    },
    {
      id: "3",
      sr: "3",
      title: "Orxa Energies",
      teaser: "https://cdn.sanity.io/images/s9olv7lh/production/142694440b050fd4bc237312d1a485be40a78d32-1080x1350.jpg",
      path: "orxa-energies",
      introDescription: "Design & development of Orxa Energies' website, Application and ERP.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/c4d348a0a97ab2049f3ede67110c33345284e187.mp4",
      clientName: "Orxa Energies.",
      launchDate: "2023 Sept",
      serviceProvided: ["Web design", "Content creation", "ERP development", "Development"],
      websiteLink: "https://www.figma.com/file/5ja5XrukNHqPR9jdMiI37j/M-Hard?type=design&node-id=103-3&mode=design&t=f3yltH2ZiG79Ac4Y-0",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/6e4976c406361b2e87a47e2fb95b455dfc4b7f15-7680x4320.png","https://cdn.sanity.io/images/s9olv7lh/production/e0db82e251ec327924a8473ed514d06291520f82-7680x4320.jpg","https://cdn.sanity.io/images/s9olv7lh/production/04716a31a43e91e9f356669cb3dcce5876a5a801-7680x4320.jpg", "https://cdn.sanity.io/images/s9olv7lh/production/8598b0f0b666ef0535f6686eca6e8904275606cf-5298x2663.png", "https://cdn.sanity.io/images/s9olv7lh/production/e31a25842496679c8227ec31d8beeb91f16180e9-5306x3109.png", "https://cdn.sanity.io/images/s9olv7lh/production/bfcd0773cb0cd4bf90af05b8098d17adf53c99c8-1921x1082.png"],
      techUsed: ["React(VITE) - Frontend Develoment", "Nextjs - Frontend", "Node - Backend", "Mongodb - Database", "Express - Backend", "AntDesign - UI Components", "Redux - State Management", "Figma - UI/UX Designing", "Premier Pro - Video Editing"],
      message: "Revolutionizing electric mobility."
    },
    
    {
      id: "4",
      sr: "4",
      title: "PinZeal",
      teaser: "https://image.lexica.art/full_webp/2025e86c-6ac8-4111-b1ee-32ae0836f0c8",
      path: "pinzeal",
      introDescription: "Social media app for sharing images.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "Pinzeal",
      launchDate: "2023 March",
      serviceProvided: ["Webdesign","UI/UX", "Development", "Concepts", "Content Management System", "SEO"],
      websiteLink: "https://pinzeal.netlify.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/e5af0c40d8fd44a8eb68dbc4ebbe9c78b5ee9f3c-1349x624.png", 
        "https://cdn.sanity.io/images/s9olv7lh/production/b44ae9659fb4c44ff45f0c6dfbbc4925a4764c6e-1338x617.png",
        "https://cdn.sanity.io/images/s9olv7lh/production/65378243590b606dd49630fa4a8cc8792df43254-1127x619.png",
        "https://cdn.sanity.io/images/s9olv7lh/production/87270853262015b81683d367ab08be13a412a9ac-1129x620.png",
        "https://cdn.sanity.io/images/s9olv7lh/production/0d3f4c44a7c39032894077972060715f7b763e81-1098x578.png"
      ],
      techUsed: ["React18 - Frontend", "Sanity.io - CMS", "Framer Motion - Animations", "Tailwind CSS - Styling"],
      message: "Pin your passions with PinZeal."
    },
  
    {
      id: "5",
      sr: "5",
      title: "DoTok",
      teaser: "https://image.lexica.art/full_webp/20833a14-ca1b-41d7-879e-2c9d78a7aa8b",
      path: "dotok",
      introDescription: "Video sharing social media platform.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Sept",
      serviceProvided: ["Video uploads", "Likes and comments", "Video search"],
      websiteLink: "https://do-tok-app.vercel.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/c18c7be1f07c0df6aca643573758b93c95441f28-1336x4710.png"],
      techUsed: ["React18 - Frontend", "Typescript", "Sanity.io - CMS", "Zustand - State Management"],
        message: "Everyone's favorite."
    },
    {
      id: "6",
      sr: "6",
      title: "Pexel.AI",
      teaser: "https://image.lexica.art/full_webp/5408db0a-5238-41ea-9622-9adaf50b7cf1",
      path: "pexel-ai",
      introDescription: "Social media for AI-generated art.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Sept",
      serviceProvided: ["AI art generation", "Art sharing", "Art downloads"],
      websiteLink: "https://pxlai.netlify.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/816b95a2b04f29b55451c8b6989cc3946600b7f4-1280x1025.png","https://cdn.sanity.io/images/s9olv7lh/production/5c73289e99569db19e610279a102502a3ec509a2-360x202.gif"],
      techUsed: ["React18 - Frontend", "Redux Toolkit - State Management and API's", "Tailwind CSS - Styling", "Lexia AI - AI Image Model", "OpenAI - DALLE API", "Nodejs - Backend", "ExpressJs - Web app Framework for Node", "MongoDB - Database"],
       message: "AI-driven image perfection."
    },
    {
      id: "7",
      sr: "7",
      title: "Libra Analytics",
      teaser: "https://image.lexica.art/full_webp/dc432fb1-4705-42b2-a604-564f43fd0761",
      path: "libra-analytics",
      introDescription: "Official website for Libra Analytics startup.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Sept",
      serviceProvided: ["Data-driven solutions", "AI/ML analytics"],
      websiteLink: "https://www.libraanalytics.ai/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/9e66818661f4bf7cbc680bb542fa9a52fdf1f84b-1283x6424.png"],
      techUsed: ["React1 - Frontend", "Tailwind CSS - Styling", "Framer Motion - Animations"],
       message: "Transforming data into insights."
    },
    {
      id: "8",
      sr: "8",
      title: "lofi.dev",
      teaser: "https://image.lexica.art/full_webp/549c08c2-ea3b-4164-9a8e-fb24e24e6f89",
      path: "lofi-dev",
      introDescription: "Productivity app with ambient sounds.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Aug",
      serviceProvided: ["Pomodoro timer", "Note-taking"],
      websiteLink: "https://lofis.vercel.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/be33753592f01e3b4867d88dd9d908501c9253ed-1283x2839.png"],
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/be33753592f01e3b4867d88dd9d908501c9253ed-1283x2839.png"],
      techUsed: ["Next13 - Frontend and SSR", "Node - Backend", "Tailwind - Styling", "AntDesign - UI Components", "Cloudinary - Storing Images and Audios"],
      message: "Relax . Chill . Code"
    },
    {
      id: "9",
      sr: "9",
      title: "Trioinovations",
      teaser: "https://image.lexica.art/full_webp/0182d5d8-3a67-496f-a78b-182211fe2141",
      path: "trioinovations",
      introDescription: "Digital solutions for businesses.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2024 Jan",
      serviceProvided: ["Digital marketing", "Talent acquisition", "Cloud integration"],
      websiteLink: "https://www.trioinovations.com/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/a258b770292081073d143ab3c1b4546a176991fb-1284x3409.png", "https://cdn.sanity.io/images/s9olv7lh/production/c58bc361130c39c11166d07eebb0a4e3dafa085c-1290x1890.png"],
      techUsed: ["React(VITE) - Frontend", "Tailwind - Styling", "Aceternity UI - UI Component", "Framer Motion & GSAP - Animations"],
      message: "Innovative solutions for a better future."
    },
    {
      id: "10",
      sr: "10",
      title: "Javascript Academy",
      teaser: "https://image.lexica.art/full_webp/1cda0a91-1aca-4c17-ae53-a8357f943859",
      path: "javascript-academy",
      introDescription: "Online platform for JavaScript tutorials.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Dec",
      serviceProvided: ["Video tutorials", "Quizzes", "Certification"],
      websiteLink: "https://jsaclass.netlify.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/4220fbaf493fca59d2e4a4a9aa84c63acac4c059-1280x6476.png"],
      techUsed: ["React(VITE) - Frontend", "Node - Backend", "Express - Backend", "MongoDB - Database", "ChakraUI - UI components", "OpenAI - AI Notes Generation"],
      message: "Make detailed notes using our free AI.(FREE)"
    },
    {
      id: "11",
      sr: "11",
      title: "Sunshine Recreation",
      teaser: "https://image.lexica.art/full_webp/606bce3c-ae86-4612-96f2-faf5f7e98091",
      path: "sunshine-recreation",
      introDescription: "Nurturing children with life skills and fun.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2024 Jan",
      serviceProvided: ["Games", "Stories", "Moral education"],
      websiteLink: "https://sunshine-recreation-center.netlify.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/7d573457c0f1159ad7ce5f9f235ca892089061fc-1280x6801.png"],
      techUsed: ["Next13 - Frontend", "Node - Backend", "Tailwind CSS - Styling","GSAP & Framer motion - Animations"],
      message: "Bringing joy and learning to kids."
    },
    {
      id: "12",
      sr: "12",
      title: "Sociomate",
      teaser: "https://image.lexica.art/full_webp/25ef1c15-af29-4aac-b4de-ecb3cb85f1be",
      path: "sociomate",
      introDescription: "Social networking for professionals.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Nov",
      serviceProvided: ["Networking", "Job search", "Content sharing"],
      websiteLink: "https://sociomate.netlify.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/30727886131b947b58aff466b8d141e848a58dae-1280x4322.png"],
      techUsed: ["React18 - Frontend", "Redux - State Management", "Tailwind CSS - Styling","Node - Backend", "Express - Backend", "MongoDB - Database", "AntD - UI COmponents" ],
       message: "Your social media companion."
    },
    {
      id: "13",
      sr: "13",
      title: "REVU 3.0",
      teaser: "https://cdn.sanity.io/images/s9olv7lh/production/6f1c3ae74fee8cc82e7f6be47cb16bf896639a33-2880x1566.png",
      path: "revu-3-0",
      introDescription: "Advanced review and rating platform.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Dec",
      serviceProvided: ["Review aggregation", "Rating system"],
      websiteLink: "https://muvue.netlify.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/e7574c64a66c62fceb636e1f47b82ddc1bb576da-1280x6717.png"],
      techUsed: ["React18 - Frontend", "Redux Toolkit - API management", "Tailwind CSS - Styling", "Google AUTH - Authentication"],
      message: "All in one movies application."
    },
    {
      id: "14",
      sr: "14",
      title: "Priyansh Blogs",
      teaser: "https://image.lexica.art/full_webp/1be0ddd5-3260-444f-91e0-24f2e701d0e6",
      path: "priyansh-blogs",
      introDescription: "Personal blog for tech and lifestyle articles.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Aug",
      serviceProvided: ["Blogging", "Content creation"],
      websiteLink: "https://priyansh-blog.vercel.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/0fff183be8c7f868e020cf41ed8a0d4bb175f492-1280x2241.png"],
      techUsed: ["Next13 - Frontend", "Tailwind CSS - Styling", "GraphQL - Database and CMS"],
      message: "Insights and stories from Priyansh.(ME)"
    },
    {
      id: "15",
      sr: "15",
      title: "KachiCom",
      teaser: "https://image.lexica.art/full_webp/160e6374-ceee-4338-875b-40245aff3518",
      path: "kachicom",
      introDescription: "E-commerce platform for local goods.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Nov",
      serviceProvided: ["Online shopping", "Local vendors"],
      websiteLink: "https://kachi-com.vercel.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/23cc3512bf0ab08a758c2232591aa956eb0e778e-1280x4418.png"],
      techUsed: ["Next13 - Frontend and SSR", "Tailwind CSS - Styling", "Stripe - Payment Gateway"],
       message: "Ultimate Ecommerce Services."
    },
    {
      id: "16",
      sr: "16",
      title: "UAE Rilms",
      teaser: "https://image.lexica.art/full_webp/38303ff8-088f-4608-92c3-eeea17013948",
      path: "uae-rilms",
      introDescription: "Real estate information and listing management.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Dec",
      serviceProvided: ["Property listings", "Virtual tours"],
      websiteLink: "https://uae-r-state.vercel.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/caf82655cefc41440e301bf9be88ce032366d425-1280x3880.png"],
      techUsed: ["React18 - Frontend", "Framer Motion - Animations", "Ant Design - UI Components", "Rapid API - Real Estate API's"],
      message: "Innovative real estate solutions in UAE."
    },
    {
      id: "17",
      sr: "17",
      title: "ICrypto",
      teaser: "https://image.lexica.art/full_webp/5f2f4533-cd51-40f5-8a51-11bc8affecd7",
      path: "icrypto",
      introDescription: "Cryptocurrency portfolio management tool.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Nov",
      serviceProvided: ["Portfolio tracking", "Market analysis"],
      websiteLink: "https://icrypto47.netlify.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/3f426caa682b30daa2398db86d1d3c271aa0d3c9-1280x3265.png"],
      techUsed: ["React18 - Frontend", "Redux - State Management", "Tailwind CSS - Styling"],
       message: "Cryptocurrency and News."
    },
    {
      id: "18",
      sr: "18",
      title: "YT Transcriber",
      teaser: "https://image.lexica.art/full_webp/0c224b06-09ef-425a-baa2-6c41fba892ea",
      path: "yt-transcriber",
      introDescription: "Tool to transcribe YouTube videos.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Dec",
      serviceProvided: ["Video transcription", "Subtitle generation"],
      websiteLink: "https://yt-transcript-five.vercel.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/926c58622caf092948cd18dbcd99e319bbf49206-1280x2762.png"],
      techUsed: ["Next13 - Frontend and SSR", "Tailwind CSS - Styling", "Rapid API - YT Transcriber API's"],
      message: "Effortless YouTube video transcriptions."
    },
    {
      id: "19",
      sr: "19",
      title: "Covid Tracker",
      teaser: "https://image.lexica.art/full_webp/056754d1-315b-4606-8a80-7a8e86f09520",
      path: "covid-tracker",
      introDescription: "Live updates on COVID-19 statistics.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Sep",
      serviceProvided: ["Live statistics", "Country-wise data"],
      websiteLink: "https://trackurcovid19.netlify.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/2808e9c3a38c5e03e3e2249a492291321df2ac1e-1285x1920.png"],
      techUsed: ["React18 - Frontend", "Chart.js - Chart Library", "Tailwind CSS - Styling"],
      message: "Stay updated on COVID-19 cases."
    },
    {
      id: "20",
      sr: "20",
      title: "ATG World",
      teaser: "https://image.lexica.art/full_webp/2193e5fb-a994-4825-8bce-fa50af8a43f9",
      path: "atg-world",
      introDescription: "Global platform for professional networking.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Oct",
      serviceProvided: ["Networking", "Job search"],
      websiteLink: "https://atg.world/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/26cf9a94b2000168f3ece767547b5db06349358f-1281x5140.png"],
      techUsed: ["React18 - Dashboard Frontend", "Tailwind CSS - Styling", "PHP - Website Frontend", "HTML, CSS, JS - Website", "Mongodb - Database", "Node and Express - Backend"],
      message: "Connecting the global tech community."
    },
    {
      id: "21",
      sr: "21",
      title: "ACOM",
      teaser: "https://image.lexica.art/full_webp/13cdd184-d4eb-464e-a56f-27ac9eea4d64",
      path: "acom",
      introDescription: "Automated content management system.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "",
      launchDate: "2023 Dec",
      serviceProvided: ["Content automation", "SEO tools"],
      websiteLink: "https://acom.vercel.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/c4827b3648e28e037e55f392b8aef2362c179ea8-1281x5252.png"],
      techUsed: ["Next13 - Frontend", "Tailwind CSS - Styling", "GraphQL - Database and CSM"],
      message: "New fashion capital."
    },
    {
      id: "22",
      sr: "22",
      title: "Dev Priyansh",
      teaser: "https://cdn.sanity.io/images/s9olv7lh/production/154e236f0d65145720c9b34dac018338bc02db14-1600x1003.jpg",
      path: "devpriyansh",
      introDescription: "My (Priyansh Sharma) personal portfolio, but not the normal portfolio you are expecting.",
      websiteTeaser: "https://cdn.sanity.io/files/mdo42gqc/production/9fa2546f8bc66330bc016bbc09d5e68431482f32.mp4",
      clientName: "Priyansh Sharma",
      launchDate: "2023 Jan",
      serviceProvided: ["Web Design", "SEO", "Website Development", "UI UX design", "Concept Design", "3D models", "Animations", "CMS"],
      websiteLink: "https://devpriyansh.netlify.app/",
      websiteImages: ["https://cdn.sanity.io/images/s9olv7lh/production/3eaefea81caccffc7fa81556ef19c3d9fb91f968-1284x7809.png"],
      techUsed: ["Next13 - Frontend", "Tailwind CSS - Styling", "GraphQL - Database and CSM"],
      message: "Hint - It even contain a game."
    },
  ];
  
export const footer_social_media = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/sparkspectrumstudios40/",
      icon: FaInstagram,
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/channel/UC8027VywG5dracX6Ol0nwcw",
      icon: AiOutlineYoutube,
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/+917999937157?text=Hi There, We would like to know more about services offer by spark spectrum studios.",
      icon: FaWhatsapp,
    }
  ];
  
  export const contentCards = [
    {
      id : 1,
      src : "https://cdn.sanity.io/images/s9olv7lh/production/d1280e85dd501947d7d861bcafebdd7d33f9037d-6756x5087.png",
      client_name : "Orxa Energies",
      path : "orxa",
      introDescription : "Made content on Orxa Mantis -  11 reels and 7 posts, total Engagement of 40k accounts in 1.5 month on Instagram and LinkedIn.",
      cover : "https://cdn.sanity.io/images/s9olv7lh/production/137f05c21e642298c97cc6673d962427cdae27b0-1080x1350.jpg",
      softwareUsed : ["Premier Pro - Video Editing", "After Affects - Special effects & Editing", "Photoshop - Photo editing & Thumbnails",
        "Adobe Fireflies - AI art generation", "Canva - Design & Illustration", "Figma - Design & Illustration", "Capcut - Video Editing"
      ],
      engagementDetails : [
        {
          title : "Reels",
          value : "11",
        },
        {
          title : "posts",
          value : "7",
        },
        {
          title : "Views",
          value : "32k"
        },
        {
          title : "Likes",
          value : "3k"
        },
        {
          title : "Share",
          value : "4k",
        },
        {
          title : "Comments",
          value : "205"
        },
      ],

      reels : [
            "https://www.instagram.com/reel/C1JdknmSqsK/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/reel/C1QzLsxS3bW/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/reel/C1hS3AjS6Jx/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/reel/C1i274HyMgv/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/reel/C1t1Qu4SH2y/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/reel/C166UVzSr2P/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/reel/C2JnmYByz-x/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/reel/C2jHoyeSluc/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/reel/C2rNqUdM29A/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/reel/C2rOImZMVch/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/reel/C2y-TRKMZAS/?utm_source=ig_web_copy_link",
        ],
        posts : [
            {
                src: orxp1,
                link: "https://www.instagram.com/p/C2uF4YIylg3/?utm_source=ig_web_copy_link",
            },
            {
                src: orxp2,
                link: "https://www.instagram.com/p/C1Oly_OS8Si/?utm_source=ig_web_copy_link",
            },
            {
                src: orxp3,
                link: "https://www.instagram.com/p/C1WMTemSTm6/?utm_source=ig_web_copy_link",
            },
            {
                src: orxp4,
                link: "https://www.instagram.com/p/C1q0VcJyqi6/?utm_source=ig_web_copy_link",
            },
            {
                src: orxp5,
                link: "https://www.instagram.com/p/C2PR33NyjKA/?utm_source=ig_web_copy_link",
            },
            {
                src: orxp6,
                link: "https://www.instagram.com/p/C2ZsQLBSXGG/?utm_source=ig_web_copy_link",
            },
            {
                src: orxp7,
                link: "https://www.instagram.com/p/C2e_OgEyOFG/?utm_source=ig_web_copy_link",
            },
            {
                src: orxp7,
                link: "https://www.instagram.com/p/C2uF4YIylg3/?utm_source=ig_web_copy_link",
            }
        ],

        
    },
    {
      id : 2,
      src : "https://cdn.sanity.io/images/s9olv7lh/production/4cd24179ab40239df171d94697e9c80ccfbe2843-6868x5087.png",
      client_name : "Dev With Yatin",
      path : "dev-with-yatin",
      introDescription : "Made 8 reels, total  1.05 million views, 41k likes, 1k comments, 33k shares in 2 months",
      cover : "https://cdn.sanity.io/images/s9olv7lh/production/e7490382415c28f0b4ad576dee57c778fac131b6-5720x3238.png",
      softwareUsed : ["Premier Pro - Video Editing", "Photoshop",
        "Adobe Fireflies - AI art generation", "Figma - Design & Illustration", "Capcut - Video Editing"
      ],
      engagementDetails : [
        {
          title : "Reels",
          value : "8",
        },
        {
          title : "Views",
          value : "1.05 million"
        },
        {
          title : "Likes",
          value : "41k"
        },
        {
          title : "Share",
          value : "33k",
        },
        {
          title : "Comments",
          value : "1k"
        },
      ],

      reels : [
        "https://www.instagram.com/reel/C3_bceryuaB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
        "https://www.instagram.com/reel/C4CS2exvu9u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
        "https://www.instagram.com/reel/C4EorGMSt90/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
        "https://www.instagram.com/reel/C4HQBY4vg0j/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
        "https://www.instagram.com/reel/C4b1Uz7SdQF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
        "https://www.instagram.com/reel/C4e4QNEL-HQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
        "https://www.instagram.com/reel/C3oZ_n9vqso/?utm_source=ig_web_copy_link",
        "https://www.instagram.com/reel/C84NUDiykpY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    ],

    },
    {
      id : 3,
      src : "https://cdn.sanity.io/images/s9olv7lh/production/72b15abf9480c62c406936f0df344edc0f035a72-6784x5087.png",
      client_name : "Poonams Cookingshala",
      path : "poonams-cookingshala",
      introDescription : "Made 10 videos and 4 reels, total 80k views and 4k likes",
      cover : "https://cdn.sanity.io/images/s9olv7lh/production/72b15abf9480c62c406936f0df344edc0f035a72-6784x5087.png",
      softwareUsed : ["Premier Pro - Video Editing", "Photoshop",
        "Kinemaster - Video Editing", "Figma - Design & Illustration", "Capcut - Video Editing"
      ],
      engagementDetails : [
        {
          title : "Videos",
          value : "15",
        },
        {
          title : "Reels",
          value : "4",
        },
        {
          title : "Views",
          value : "80k"
        },
        {
          title : "Likes",
          value : "4k"
        },
        {
          title : "Share",
          value : "2k",
        },
        {
          title : "Comments",
          value : "155"
        },
      ],

      videos : [
            "https://www.youtube.com/watch?v=sNea0pjsKYU",
            "https://youtu.be/fEjyF2gA_Mk?si=XCxd9y1T5p7-jJjQ",
            "https://youtu.be/Txxkb73HYJs?si=aLpVCGdHMSj4DIpE",
            "https://youtu.be/TBWs6hRoFD4?si=YjOBi5Eup416Rp9v",
            "https://youtu.be/VvmSCiPmu4s?si=M86zf25QmzyRRN5O",
            "https://www.youtube.com/watch?v=tIzRcBDACHQ",
            "https://www.youtube.com/watch?v=2D9krA13qhI",
            "https://www.youtube.com/watch?v=ddJu0OnrryE",
            "https://www.youtube.com/watch?v=P1yz5Q8sZBI",
            "https://www.youtube.com/watch?v=jIF-gq4KTFQ",
            "https://www.youtube.com/watch?v=0EfMBJPwvi0",
            "https://www.youtube.com/watch?v=rejnS1MR1JQ",
      ],

      shorts : [
        "https://youtube.com/shorts/5CBc5AbkER4?si=irAnBohYJGl-NWnc",
        "https://youtube.com/shorts/xkZ0ofDtWlE?si=035sNocuA1QFGOO-",
        "https://youtube.com/shorts/76ALfsanzBM?si=z6sFKEJM9d0hU26U"
      ]
    },
    {
      id : 4,
      src : "https://cdn.sanity.io/images/s9olv7lh/production/029401eb1b727f05a3aa71387e8e9c8ad91b9ef1-6779x5087.png",
      client_name : "MindBodyPS",
      path : "mindbodyps",
      introDescription : "Made around 20 fitness videos, teaching about health, fitness, nutrition.",
      cover : "https://cdn.sanity.io/images/s9olv7lh/production/89b270e7b937f26c5b7d37dbffcb2f74fe2c7339-1079x1079.jpg",
      softwareUsed : ["Premier Pro - Video Editing", "After Affects - Special effects & Editing", "Photoshop",
        "Adobe Fireflies - AI art generation", "Figma - Design & Illustration", "Capcut - Video Editing"
      ],
      engagementDetails : [
        {
          title : "Videos",
          value : "53",
        },
        {
          title : "Reels",
          value : "111",
        },
        {
          title : "Views",
          value : "90k"
        },
        {
          title : "Likes",
          value : "11k"
        },
        {
          title : "Share",
          value : "15k",
        },
        {
          title : "Comments",
          value : "1k"
        },
      ],

      videos : [
            "https://youtu.be/G0qYfq8ZIHg?si=av245I7_SgiWtapB",
            "https://youtu.be/NcYYFE3IyLk?si=PEur1Ml7JSINV5Ge",
            "https://youtu.be/zawLs_juuL4?si=ZAabRZYh2-_lFCzI",
            "https://youtu.be/ZJMe0TBOvxA?si=VZ05CFeneFWQ_Ogz",
            "https://youtu.be/__P6vExUAXI?si=eJbD7h5SmpkbDzVI",
            "https://youtu.be/HXWRbr3qBYo?si=YezltbE8rwKw4Gse",
            "https://youtu.be/y1XYMsJGDLs?si=vzzd5qIdLWE5x5Hc",
            "https://youtu.be/JW5ZyaT4Ytc?si=0KMoSh8O9oOFZ7yA",
            "https://www.youtube.com/watch?v=TJbjH0EjARA",
            "https://www.youtube.com/watch?v=xrq3GB1_kjY",
            "https://www.youtube.com/watch?v=pZnqzxYRJqI",
            "https://www.youtube.com/watch?v=I0KywS9pcJ4",
            "https://www.youtube.com/watch?v=CJCnRFjomgY",
            "https://www.youtube.com/watch?v=mrG-APhauTg",
            "https://www.youtube.com/watch?v=gWI2VA8j16Q",
            "https://www.youtube.com/watch?v=3c4yQ2KI3c4"
      ],

      reels : [
        "https://www.instagram.com/reel/C9jYvT8vBB8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/reel/C9vANZoy35X/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/reel/C9xgSDIS0LB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      ]
    }
  ]


  export const processData = [
    {
        srno: 1,
        title: "Briefing",
        description: "Send me a detailed brief with the following information: who you are, your vision, project goals, target audience, the purpose of the video, required features, scope of the project, timeframes and deadlines, examples of other videos you like, and everything else you think is important.",
        src: process1
    },
    {
        srno: 2,
        title: "Evaluation",
        description: "I will closely review your brief and assess whether the project aligns with the terms and requirements of both parties. If there is a match, we will have an online meeting to discuss how to proceed and ensure we're on the same page.",
        src:process2
    },
    {
        srno: 3,
        title: "KickOff",
        description: "We discuss approaches and concepts to find the perfect solution for your needs. This includes brainstorming sessions to align on the video’s tone, style, and key messages. Multiple sessions can be held if necessary.",
        src: process3
    },
    {
        srno: 4,
        title: "Script and Storyboard",
        description: "I will work on the script and storyboard, laying out the video's narrative, scenes, and key moments. This is where we plan the video's structure and flow. After your feedback and approval, we proceed to the next phase.",
        src: process4
    },
    {
        srno: 5,
        title: "Filming",
        description: "If the project involves shooting new footage, this is where the action happens. We schedule and carry out the filming, ensuring all necessary scenes are captured with the highest quality.",
        src: process5
    },
    {
        srno: 6,
        title: "Editing",
        description: "This is where the magic happens. I will edit the footage, adding transitions, effects, and music to create a cohesive and compelling video. I will present you with a rough cut for initial feedback.",
        src: process6
    },
    {
        srno: 7,
        title: "Review and Feedback",
        description: "You review the rough cut and provide feedback. We will discuss any changes or adjustments needed to ensure the video meets your expectations and goals.",
        src: process7
    },
    {
        srno: 8,
        title: "Final Cut",
        description: "After implementing your feedback, I will finalize the edit. This includes fine-tuning the video, color correction, sound design, and adding any final touches. You will receive the final version for approval.",
        src: process8
    },
    {
        srno: 9,
        title: "Quality Assurance",
        description: "We conduct thorough testing on multiple devices and platforms to ensure the video plays perfectly everywhere. Any remaining bugs or issues are fixed. After your final approval, the video is ready to be delivered.",
        src:process9
    },
    {
        srno: 10,
        title: "Delivery",
        description: "The final video is delivered to you in your preferred formats. We also discuss any post-launch support or promotional strategies if needed.",
        src: process10
    }
];



export const faqs = [
    {
        question: "How much does a video edit/website/UI design cost at Spark Spectrum Studios?",
        answer: "Well, how much does a unicorn cost? It depends on what you want it to do! Our prices vary based on your specific needs, the scope of the project, and any magical features you desire. Share your budget, and we'll conjure up exactly what you can expect!",
        askedBy: "Asked by curious clients"
    },
    {
        question: "How long will it take to create my amazing video/website/UI design?",
        answer: "How long does it take to binge-watch your favorite series? For smaller projects, we usually take few days for videos, reels, small websites and designs, while larger endeavors might take months from the first episode (kickoff) to the finale (go-live).",
        askedBy: "Asked by impatient project managers"
    },
    {
        question: "Can you handle big projects?",
        answer: "Absolutely! We’re like the Avengers of the digital world. Spark Spectrum Studios is part of a global network of design and development superheroes, ready to tackle any challenge.",
        askedBy: "Asked by ambitious clients"
    },
    {
        question: "Are you a video editor, designer, or developer?",
        answer: "We’re all of the above! At Spark Spectrum Studios, we edit videos, design from scratch, and build everything in-house. For larger projects, we call in our superhero team for backup.",
        askedBy: "Asked by everyone"
    },
    {
        question: "What design trends can we expect from Spark Spectrum Studios?",
        answer: "Think of futuristic holograms, neon lights, and 3D animations. Just kidding...or are we? Trends come and go, but our focus is on creating timeless designs. Keep an eye out for user-friendly interfaces, minimalistic designs, and yes, maybe a cat gif or two.",
        askedBy: "Asked by trendy tech enthusiasts"
    },
    {
        question: "Is that really you in the framed picture above?",
        answer: "Yes, that’s us at the launch party of our first ever animated 3D website. We clean up pretty well, don’t we?",
        askedBy: "Asked by observant visitors"
    },
    {
        question: "Why did you name your studio Spark Spectrum Studios?",
        answer: "Because we believe in sparking creativity across the full spectrum of digital possibilities. Plus, it sounds way cooler than 'Generic Design Agency.'",
        askedBy: "Asked by curious minds"
    },
    {
        question: "How do I become as awesome as Spark Spectrum Studios?",
        answer: "Start by embracing your inner geek, watch a lot of tutorials, and maybe practice your superhero landing pose. Also, lots of coffee helps.",
        askedBy: "Asked by aspiring creatives"
    },
    {
        question: "Were you on a caffeine high while designing this website?",
        answer: "Nope, just pure, unadulterated creative madness. And maybe a bit of chocolate.",
        askedBy: "Asked by curious caffeine lovers"
    },
    {
        question: "Why doesn’t Spark Spectrum Studios have as many followers on social media as I do?",
        answer: "Because we’re too busy making amazing stuff for our clients! But hey, give us a follow and let’s fix that.",
        askedBy: "Asked by social media enthusiasts"
    },
    {
        question: "What’s hidden in the infamous hidden section of your website?",
        answer: "Shh...it’s a secret! Just kidding, it’s where we keep our most prized possession: our collection of dad jokes and cat memes. And maybe a few Easter eggs.",
        askedBy: "Asked by the adventurous few"
    }
];