export interface ProjectItem {
  title: string;
  client: string;
  description: string;
  imageSrc: string;
  tags: string[];
  websiteUrl?: string;
  status: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Accounting & Advisory",
    client: "Modern UK Businesses",
    description:
      "Accounting, Advisory & Financial Education for Modern UK Businesses. A specialized platform for financial growth and compliance.",
    imageSrc: "/assets/brands/projectImages/accountmock.png",
    tags: ["Accounting", "Financial Advisory"],
    websiteUrl: "https://bukz-accounting.vercel.app/",
    status: "Live client work",
  },
  {
    title: "Baytown Energy",
    client: "Baytown Energy Services Ltd",
    description:
      "Oil & Gas services providing company. Baytown Energy Services Ltd is rightly positioned to provide quality services at the right cost and delivery time that is attainable.",
    imageSrc: "/assets/brands/projectImages/oilCompany.png",
    tags: ["Oil & Gas", "Engineering"],
    websiteUrl: "https://baytownenergy.com/",
    status: "Live client work",
  },
  {
    title: "Listigo",
    client: "Listigo",
    description:
      "Sell and Buy Near You. Simple, Fast and Efficient. A marketplace platform for local buying and selling.",
    imageSrc: "/assets/brands/projectImages/ListGo.png",
    tags: ["Marketplace", "Web Development"],
    websiteUrl: "https://listigo.co.uk/",
    status: "Live client work",
  },
  {
    title: "South Town Place",
    client: "South Town Catering Services",
    description:
      "Food e-commerce website with integrated payments and customer order messaging.",
    imageSrc: "/assets/brands/projectImages/southplace.png",
    tags: ["Web Development", "UI/UX Design"],
    websiteUrl: "https://www.southtownplace.com/",
    status: "Live client work",
  },
  {
    title: "Tasty Bowls",
    client: "Tasty Bowls",
    description:
      "Online food ordering website with seamless payment flow and SMS customer updates.",
    imageSrc: "/assets/brands/projectImages/tastyBowls.png",
    tags: ["Web Development", "UI/UX Design"],
    websiteUrl: "https://tasty-bowls.com/",
    status: "Live client work",
  },
  {
    title: "Next Oasis Care",
    client: "Next Oasis Care",
    description:
      "Healthcare staffing website built to communicate services clearly and professionally.",
    imageSrc: "/assets/brands/projectImages/NextOasisCare.png",
    tags: ["Web Development", "UI/UX Design"],
    websiteUrl: "https://nextoasiscare.co.uk/",
    status: "Live client work",
  },
  {
    title: "Zebral Global",
    client: "Zebral Global Integrated Services",
    description:
      "Corporate services website built to present technical capabilities and multi-sector operations clearly.",
    imageSrc: "/assets/brands/projectImages/ZebraMock.png",
    tags: ["Web Development", "UI/UX Design"],
    websiteUrl: "https://zebralglobal.com.ng/",
    status: "Live client work",
  },
  {
    title: "Ascension Anglican",
    client: "Ascension Anglican Church, Houston TX",
    description:
      "Church website built to communicate faith, love, community, and core church information clearly.",
    imageSrc: "/assets/brands/projectImages/AscensionMock.png",
    tags: ["Web Development", "UI/UX Design"],
    websiteUrl: "https://www.ascension-anglican.com/",
    status: "Live client work",
  },
  {
    title: "Dialtech Systems",
    client: "Dialtech Systems LLC",
    description:
      "Protect What Matters Most with Precision Security. Comprehensive protection services from cybersecurity to physical surveillance.",
    imageSrc: "/assets/brands/projectImages/DaliSys.png",
    tags: ["Security Systems", "Cybersecurity", "Web Development"],
    websiteUrl: "https://dialtechsystems.com/",
    status: "Live client work",
  },
];

export const featuredProjects = projects.slice(0, 4);
