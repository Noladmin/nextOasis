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
    title: "South Town Place Food Commerce Platform",
    client: "South Town Catering Services",
    description:
      "Food e-commerce website built for ordering and conversion, with integrated payments and SMS gateway messaging for instant customer updates and confirmations.",
    imageSrc: "/assets/brands/projectImages/southplace.png",
    tags: ["Food E-Commerce", "Payments", "SMS Gateway"],
    websiteUrl: "https://www.southtownplace.com/",
    status: "Live client work",
  },
  {
    title: "Tasty Bowls Food Commerce Website",
    client: "Tasty Bowls",
    description:
      "Food e-commerce website with integrated online payments and connected SMS gateway flows to deliver instant order messaging to customers.",
    imageSrc: "/assets/brands/projectImages/tastyBowls.png",
    tags: ["Food Ordering", "Payments", "Customer Messaging"],
    websiteUrl: "https://tasty-bowls.com/",
    status: "Live client work",
  },
  {
    title: "Next Oasis Care Healthcare Staffing Website",
    client: "Next Oasis Care",
    description:
      "Healthcare staffing website built to present trained care assistants and communicate staffing support for residential care homes, nursing homes, day centres, rehabilitation centres, home care, and supported living.",
    imageSrc: "/assets/brands/projectImages/NextOasisCare.png",
    tags: ["Healthcare Staffing", "Care Services", "Service Website"],
    websiteUrl: "https://nextoasiscare.co.uk/",
    status: "Live client work",
  },
];

export const featuredProjects = projects.slice(0, 2);
