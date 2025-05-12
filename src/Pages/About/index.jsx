import ReusableHeroSection from "@src/Components/UI/ReusableHeroSection"
import Blurb from "@src/Components/UI/Blurb"
import { ourValues } from "./ourValues"
import { ourStory } from "./ourStory"
import InfoAndCta from "@src/Components/UI/InfoAndCta"
import { officeWithEmployees } from "@src/assets/images"
import InfoAndImage from "@src/Components/UI/InfoAndImage"

const About = () => {
  return (
    <main>

      {/* Hero Section */}
      <ReusableHeroSection
        title="About Clarity Business Solutions"
        subtitle="Your Partner in FileMaker Development and Business Growth"
      />

      <InfoAndImage
        imageSrc={officeWithEmployees}
        title={"Our Story"}
        altText="Our Story Image"
        paragraphs={ourStory}
      />

      {/* Values Section */}
      <Blurb
        title="Our Core Values"
        subtitle="These principles guide everything we do at Clarity Business Solutions"
        blurb={ourValues}
      />

      <InfoAndCta
        buttonText={"Get Started"}
        to={"/contact"}
        title={"Ready to Transform Your Business?"}
        description={"Let's work together to create custom solutions that drive growth and efficiency."}
      />


    </main>
  )
}

export default About
