export const NAV = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "works", label: "Projects" },
    { id: "blog", label: "Writing" },
    { id: "contact", label: "Contact" },
];


export const SERVICES = [
    { title: "Backend APIs (Java/TS)", blurb: "Well‑tested REST/GraphQL services, clean domain layers, and observability built in." },
    { title: "Cloud Infra (AWS & OCI)", blurb: "IaC via CDK/Terraform, CI/CD, secure networking, and cost‑aware architectures." },
    { title: "Frontend (Next.js)", blurb: "Accessible, mobile‑first UIs with fast data fetching and SEO‑friendly routing." },
    { title: "Testing & QA Automation", blurb: "From your QA roots to now—E2E, contract tests, and performance regression suites." },
    { title: "Data & Analytics", blurb: "Event tracking, dashboards, and product analytics to ship with confidence." },
    { title: "Performance & Cost", blurb: "Profiling, caching, and budgets to keep apps fast and infra lean." },
];


export const COUNTERS = [
    { value: 9, label: "Years Experience" },
    { value: 25, label: "Enterprise Projects Delivered" },
    { value: 4, label: "Companies (FAANG+)" },
    { value: 5, label: "Open Source Repos" },
];

export type WorkLink = { href: string; label: string };
export type Work = {
    tag?: string;
    completed?: boolean;
    title: string;
    blurb?: string;
    img?: string;        // keep existing
    images?: string[];   // NEW
    showImage?: boolean;
    links?: { href: string; label: string }[];
};
export const WORKS = [
    {
        tag: "Web Application",
        completed: true,
        title: "Personal Portfolio",
        blurb: "My personal portfolio and site to showcase software projects, career history, and personal interests.",
        img: "/images/portfolio2.png",
        showImage: true,
        links: [
            { href: "https://hectordominguez.dev", label: "live" },
            { href: "https://github.com/hecdom001/hectordominguez-portfolio", label: "Code" }
        ]
    },
    {
        tag: "Web Application",
        completed: true,
        title: "Jackywear",
        blurb: "JackyWear.com is a small online footwear shop created to support a side business selling shoes in Mexico. Customers can browse available pairs and contact through WhatsApp to reserve or buy.",
        images: [
            "/images/jackywear/homepage.png",
            "/images/jackywear/catalog.png",
            "/images/jackywear/variants.png",
            "/images/jackywear/mobileHome.png",
            "/images/jackywear/mobileCatalog.png",
            "/images/jackywear/mobileAddToCart.png",
            "/images/jackywear/mobileCart.png"
        ],
        showImage: true,
        links: [
            { href: "https://jackywear.com", label: "live" },
            { href: "https://github.com/hecdom001/jackiecrocs", label: "Code" }
        ]
    },
    {
        tag: "Web Application",
        completed: true,
        title: "Inventory Tracker",
        blurb: "Our Inventory Tracker is a simple, private-seller tool designed for managing footwear inventory in Mexico. It powers the JackyWear site with features like dashboards, adding and listing inventory, fast search, and sales history. It’s currently used internally, and we’re exploring expanding it so other local sellers in Mexico can manage their inventory through the same platform.",
        showImage: true,
        images: [
            "/images/jackywearAdmin/desktopDashboard.png",
            "/images/jackywearAdmin/desktopInventory.png",
            "/images/jackywearAdmin/desktopOperations.png",
            "/images/jackywearAdmin/desktopHistory.png",
            "/images/jackywearAdmin/desktopLogin.png",
            "/images/jackywearAdmin/mobileDashboard.jpeg",
            "/images/jackywearAdmin/mobileInventoryFast.jpeg",
            "/images/jackywearAdmin/mobileInventoryNormal.jpeg",
            "/images/jackywearAdmin/mobileOperations.png",
            "/images/jackywearAdmin/mobileOperationsAddProduct.jpeg",
            "/images/jackywearAdmin/mobileOperationsTransfer.jpeg",
            "/images/jackywearAdmin/mobileHistory.png",
            "/images/jackywearAdmin/mobileComments.png",
            "/images/jackywearAdmin/mobileLogin.png"
        ],
        links: [
            { href: "https://jackywear.com/admin", label: "live" },
            { href: "https://github.com/hecdom001/jackiecrocs", label: "Code" }
        ]
    },
    {
        tag: "Web Application",
        completed: true,
        title: "ExpertRoofing",
        blurb: "Expert Roofing is a responsive business website built to showcase services, capture leads, and establish trust for a local roofing company.",
        img: "/images/1expertroofing/desktopHome.png",
        showImage: true,
        images: [
            "/images/1expertroofing/desktopHome.png",
            "/images/1expertroofing/desktopServices.png",
            "/images/1expertroofing/desktopGallery.png",
            "/images/1expertroofing/desktopContact.png",
            "/images/1expertroofing/mobileHome.png",
            "/images/1expertroofing/mobileServices.png",
            "/images/1expertroofing/mobileGallery.png",
            "/images/1expertroofing/mobileContact.png"
        ],
        links: [
            { href: "https://www.1expertroofing.com", label: "live" },
            { href: "https://github.com/hecdom001/expertroofing-site", label: "Code" }
        ]
    }
];


export const POSTS = [
    { title: "From QA to SDE: leverage testing to ship faster", date: "2025-07-15", href: "/blog/qa-to-sde", img: "/blog/qa-to-sde.jpg", showImage: false },
    { title: "AWS vs OCI for Solo Builders (2025)", date: "2025-08-02", href: "/blog/aws-vs-oci", img: "/blog/aws-oci.jpg", showImage: false },
];
