import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import ProjectsSection from "./projects-section";
import ExperienceSection from "./experience-section";
import ContactSection from "./contact-section";


export default function Page(){
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
            <Footer />
        </>
    );
}