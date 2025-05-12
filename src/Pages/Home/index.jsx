import ServicesSection from "@src/Components/UI/ServicesSection";
import PromoSection from "@src/Components/UI/PromoSection";
import { filemakerFeatures, services } from "./homeItems"
import HeroSection from "./HeroSection";
import HowWeWork from "./HowWeWork";
import OurTeam from "./OurTeam";
import Testimonials from "./Testimonials";
import InfoAndCta from "@src/Components/UI/InfoAndCta";



const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <InfoAndCta
        buttonText={"Learn More"}
        to={"/about"}
        title={" Our Journey to Empowering Modern Businesses"}
        description={"We've established a results-driven environment that helps entrepreneurs master the skills needed to initiate and grow successful digital businesses"}
      />
      <Testimonials />
      <HowWeWork />
      <ServicesSection
        services={services} />
      <PromoSection
        title="Unlock Your Potential with FileMaker by Claris"
        subtitle="Claris Business Solutions offers custom-built systems tailored to your business goals."
        buttonText="Get Started"
        features={filemakerFeatures}
        onClick={() => alert("CTA clicked!")}
      />
      <OurTeam />

    </main>
  );
};

export default Home;
