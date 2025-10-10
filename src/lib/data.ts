import { ArrowUpRight, Github } from "lucide-react";


export const NAV = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
] as const;


export const SOCIALS = [
    { href: "https://github.com/hdomi001", label: "GitHub", icon: Github },
    { href: "https://www.linkedin.com/in/hdomi001", label: "LinkedIn", icon: ArrowUpRight },
    { href: "mailto:hecdom001@gmail.com", label: "Email", icon: ArrowUpRight },
] as const;


export const SKILLS = {
    languages: [
        "Java",
        "C/C++",
        "JavaScript",
        "TypeScript",
        "Kotlin",
        "Python",
        "SQL",
        "HTML",
        "CSS"
    ],
    frameworksAndTools: [
        "Node.js",
        "Selenium",
        "TestNG",
        "JavaFX"
    ],
    cloudAndDevOps: [
        "AWS",
        "OCI",
        "Docker",
        "Oracle ADB-S",
        "Terraform",
        "CDK",
        "Jenkins"
    ]
} as const;

export type ProjectLink = { href: string; label: string };
export type Project = {
    title: string;
    blurb: string;
    tags: readonly string[];
    links: readonly ProjectLink[];
};

export const PROJECTS = [
    {
        title: "Personal Portfolio",
        blurb: "My personal portfolio and site to showcase software projects, career history, and personal interests.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "pnpm"],
        links: [
            { href: "https://hectordominguez-portfolio.vercel.app", label: "Live" },
            { href: "https://github.com/hecdom001/hectordominguez-portfolio", label: "Code" }
        ]
    },
    {
        title: "CoachFlow",
        blurb: "All-in-one platform for fitness coaches: scheduling, CRM, workout tracking, and payments.",
        tags: ["React", "TypeScript", "AWS", "Serverless"],
        links: [
            { href: "https://your-demo.com", label: "Live" },
            { href: "https://github.com/hector/coachflow", label: "Code" }
        ]
    }
] satisfies ReadonlyArray<Project>;


export const EXPERIENCE = [
    { company: "Oracle", role: "Sr Software Engineer", period: "01/2024 — Present",
        summary: "tba",
        bullets: [
            "tba"
        ]},
    { company: "Amazon", role: "Software Development Engineer II", period: "05/2019 — 08/2023",
        summary: "Amazon.com is an online retailer and web service provider. I worked as a fullstack developer responsible for designing, building, deploying and maintaining\n" +
            "internal applications in AWS Silk Team, Distribution Center Technologies Team\n" +
            "and Cross-Border-Listings Team.",
        bullets: [
            "Actively participated in Agile Scrum meetings, including sprint planning, grooming, estimation, task breakdown, and defect triage.",
            "Collaborated with customers, stakeholders, and peers to align software features with business goals and deliver meaningful solutions.",
            "Designed and delivered a full-stack project introducing 'Send Feedback' and 'Star Rating' features to Amazon’s Silk Browser, deployed across all Echo Show devices worldwide.",
            "Built a backend serverless workflow orchestration system for grocery distribution centers, improving operational efficiency by over 70% compared to manual processes previously managed through spreadsheets and whiteboards.",
            "Resolved critical issues in Seller Central’s Build International Listings applications, including report generation for datasets with 1M+ records, ensuring accurate aggregates for thousands of global users.",
            "Supported application reliability through DevOps on-call rotations, addressing production issues and maintaining service stability across multiple teams."

        ]},
    { company: "American Express", role: "Software Development Engineer II", period: "05/2017 - 05/2019",
        summary: "American Express is a provider of card products and travel-related services. I\n" +
            "worked with the Safekey team which focuses on the payer authentication\n" +
            "services that provides an extra layer of security for card members online\n" +
            "purchases and fraud liability.",
        bullets: [
            "Implemented the global industry standard Secure EMVCo protocol and specifications in Safekey APIs by building Restful Webservices using JAX-RS Framework.",
            "Developed a CI/CD automation framework for testing all Safekey APIs, enabling the team to run regression tests before code reviews. This improved code readability and maintainability, while reducing UAT defects by more than 70%."

        ]},
    { company: "Syntel Inc", role: "Software Engineer - Tester", period: "04/2015 - 05/2017",
        summary: "Syntel Ltd. provides information technology solutions and consulting services.\n" +
            "Through Syntel Ltd., I worked with American Express as a contractor\n" +
            "developing test automation solutions for various teams.",
        bullets: [
            "Developed hybrid automation frameworks using a combination of Java, TestNG, Selenium, Jenkins, XLR, and reporting dashboard tools to test REST APIs and front-end applications; this eliminated the need for daily 1-hour manual testing by developers.",
            "Developed a Java-based application using JavaFX and DAO design patterns to connect, create, and load test data onto IBM mainframes, as well as execute mainframe jobs via a distributed application."

        ]},
];