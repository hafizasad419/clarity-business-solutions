import FAQs from "@src/Components/UI/FAQs";
import InfoAndCta from "@src/Components/UI/InfoAndCta";
import ReusableHeroSection from "@src/Components/UI/ReusableHeroSection"
import ServicesSection from "@src/Components/UI/ServicesSection"
import { services } from "./services";


const Services = () => {
  return (
    <main>
      {/* Hero Section */}
      <ReusableHeroSection
        title="Explore What We Can Do For You?"
        subtitle="Our Services are Designed Specifically to Empower your Businesses Success."
      />

      {/* Services Section */}
      <div className="py-12">
        <ServicesSection
          services={services}
        />
      </div>


      {/* FAQ Section */}
      <FAQs />

      {/* Contact Section */}
      <InfoAndCta
        title={"Need More Clarity?"}
        description={"We believe that every business is unique, which is why we tailor our business solutions to fit your specific requirements. By working closely with your team, we uncover hidden opportunities and develop customized strategies that drive real results."}
        buttonText={"Let's Talk"}
        to={"/contact"}
      />
    
    </main>
  )
}

export default Services
