import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import IndustriesWeServe from "@/components/Industries";
import ClientSlider from "@/components/OurClients";
import OurPartners from "@/components/OurPartner";
import OurTechnology from "@/components/OurTechnology";
import PortfolioGrid from "@/components/Portfolio";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";

export default function page() {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <Services />
            <WorkProcess />
            <IndustriesWeServe />
            <PortfolioGrid />
            <OurTechnology />
            <OurPartners />
            <ClientSlider />

        </>
    )
}


//        <Navbar/>
