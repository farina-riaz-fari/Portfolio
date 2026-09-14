import {
  faCode,
  faMobileScreenButton,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export const projects = [
  {
    title: "Coffee Shop",
    description:
      "A React Native coffee shop application with authentication, favorites, notifications, cart functionality, and order management.",
    technologies: ["React Native", "TypeScript", "Firebase", "AsyncStorage"],
    github: "https://github.com/farina-riaz-fari/Coffee-Shop",
    type: "Mobile App",
    icon: faMobileScreenButton,
    gradient: "from-purple-500/30 via-blue-500/15 to-cyan-500/10",
    iconStyle: "bg-purple-500/15 text-purple-300",
    images: [
      "/projects/coffee-shop/coffeeShopHome.png",
      "/projects/coffee-shop/coffeeShopProductDetail.png",
      "/projects/coffee-shop/coffeeShopProducts.png",
    ],
  },
  {
    title: "Hava Use Plus App",
    description:
      "A React Native mobile application for browsing and viewing products with a clean, responsive interface and smooth user experience.",
    technologies: ["React Native", "TypeScript"],
    github: "https://github.com/farina-riaz-fari/Hava-Use-Plus-App",
    type: "Mobile App",
    icon: faMobileScreenButton,
    gradient: "from-blue-500/30 via-cyan-500/15 to-purple-500/10",
    iconStyle: "bg-blue-500/15 text-blue-300",
    images: [
      "/projects/hava-use-plus/home.png",
      "/projects/hava-use-plus/products.png",
    ],
  },
  {
    title: "Multi-Company",
    description:
      "A React web application for managing companies, employees, partners, settings, and business information through a responsiveinterface.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "IndexedDB"],
    github: "https://github.com/farina-riaz-fari/Multi-Company",
    type: "Web App",
    icon: faGlobe,
    gradient: "from-cyan-500/30 via-blue-500/15 to-purple-500/10",
    iconStyle: "bg-cyan-500/15 text-cyan-300",
    images: [
      "/projects/multi-company/home.png",
      "/projects/multi-company/company.png",
      "/projects/multi-company/setting.png",
      "/projects/multi-company/employee.png",
    ],
  },
  {
    title: "LinkGraph",
    description:
      "Contributed to frontend development for a professional web application, including work on the Google Business Profile moduleand related features.",
    technologies: ["React", "JavaScript"],
    type: "Web App",
    icon: faCode,
    gradient: "from-purple-500/30 via-pink-500/15 to-blue-500/10",
    iconStyle: "bg-purple-500/15 text-purple-300",
    images: [
      "/projects/linkgraph/linkgrapgLLM.jpeg",
      "/projects/linkgraph/linkgraphGBP.png",
      "/projects/linkgraph/linkgraphgbp.webp",
    ],
  },
  {
    title: "Rentaround",
    description:
      "A React Native rental application with separate buyer, seller, and admin workflows. Contributed to the development of the buyer-side application.",
    technologies: ["React Native", "JavaScript"],
    type: "Mobile App",
    icon: faMobileScreenButton,
    gradient: "from-blue-500/25 via-purple-500/15 to-cyan-500/10",
    iconStyle: "bg-blue-500/15 text-blue-300",
    images: [
      "/projects/rentaround/rentArroundHome.png",
      "/projects/rentaround/rentArroundMenu.png",
      "/projects/rentaround/rentArroundSplash.png",
    ],
  },
];

export type Project = (typeof projects)[number];
