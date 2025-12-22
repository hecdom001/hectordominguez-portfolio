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
    tag: string;
    title: string;
    blurb?: string;
    img: string;
    links?: WorkLink[];
    stack?: string[]; // optional list of tech pills
    showImage: boolean;
    completed: boolean;
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
        img: "/images/jackywear.png",
        showImage: true,
        links: [
            { href: "https://jackywear.com", label: "live" },
            { href: "https://github.com/hecdom001/jackiecrocs", label: "Code" }
        ]
    },
    {
        tag: "Platform",
        completed: false,
        title: "CoachOS",
        img: "",
        showImage: false,
        blurb: "All-in-one platform for fitness coaches: scheduling, CRM, workout tracking, and payments.",
        links: []
    }
];


export const POSTS = [
    { title: "From QA to SDE: leverage testing to ship faster", date: "2025-07-15", href: "/blog/qa-to-sde", img: "/blog/qa-to-sde.jpg", showImage: false },
    { title: "AWS vs OCI for Solo Builders (2025)", date: "2025-08-02", href: "/blog/aws-vs-oci", img: "/blog/aws-oci.jpg", showImage: false },
];
