import React from "react";
import InfoSection from "@src/Components/List";
import { charlieCopy } from "@src/assets/images";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonBgT from "@src/Components/UI/OutlinedButton";
import SolidButton from "@src/Components/UI/PrimaryButton";
import ServicesSection from "@src/Components/Servises";
import PromoSection from "@src/Components/promoSection";

const infoItems = [
  {
    number: "01",
    title: "Customized Solutions:",
    description:
      "Leveraging FileMaker expertise to craft scalable and tailored solutions for your business needs.",
  },
  {
    number: "02",
    title: "Holistic Approach:",
    description:
      "With a foundation in psychology, we deeply understand business dynamics, leaders, and customer behavior.",
  },
  {
    number: "03",
    title: "Collaborative Approach:",
    description:
      "We actively listen, ask the right questions, and use our experience to unlock your business's true potential.",
  },
  {
    number: "04",
    title: "Results-Driven Focus:",
    description:
      "Our solutions are crafted to optimize workflows, enhance productivity, and drive your business towards its goals.",
  },
];

const services = [
  {
    title: 'Custom Application Development',
    description: `We have developed an innovative platform that equips aspiring entrepreneurs with the essential skills needed to successfully start and scale their businesses.

    Need assistance with FileMaker by Claris? We've got you covered! Our team of FileMaker experts specializes in custom app development, API integrations, database management, customer relationship tools, and subcontracting services. Let us optimize your operations, boost efficiency, and help you achieve your business objectives.`,
  },
  {
    title: 'Executive Coaching',
    description: `Our platform is designed to empower entrepreneurs with the knowledge and tools necessary for launching and growing their businesses with confidence.

    If you're looking to gain clarity about your business, your clients, or your personal growth, consider our coaching services. With expertise in psychology and a proven track record in building successful businesses, we offer coaching sessions that will help you craft effective strategies for long-term success.`,
  },
  {
    title: 'API Integration Services',
    description: `We’ve created a robust platform dedicated to helping entrepreneurs acquire the skills needed to launch and expand their businesses effectively.

    Need seamless integration for your systems? Our team excels in API integrations, ensuring that your applications and services communicate smoothly with other platforms. We work to ensure that your processes are connected, efficient, and scalable, optimizing your business performance.`,
  },
  {
    title: 'Database Solutions',
    description: `Our platform is crafted to empower future business leaders with the skills to both launch and grow their ventures.

    We specialize in comprehensive database solutions. Whether it’s for customer management, operational tracking, or custom reporting, our database services are designed to streamline your data handling, ensuring easy access and improved decision-making for your business.`,
  },
  {
    title: 'Business Strategy Development',
    description: `Our innovative platform provides the tools and knowledge necessary for entrepreneurs to successfully launch and scale their businesses.

    Our business strategy services are designed to assist you in crafting effective plans that drive growth. Whether you’re refining your market approach, analyzing competition, or evaluating business risks, we help you develop and implement strategies that align with your goals and lead to sustainable success.`,
  },
];

const filemakerFeatures = [
  {
    icon: "Settings",
    title: "Boost Efficiency & Productivity",
    description:
      "Streamline workflows, automate tasks, and free up your team's time.",
  },
  {
    icon:"SquareChevronRight",
    title: "Enhance Customer Management",
    description:
      "Build smart CRMs that improve communication and personalize interactions.",
  },
  {
    icon:"MessageSquareMore",
    title: "Seamless Integration",
    description:
      "Connect FileMaker with your existing tools to eliminate manual effort.",
  },
  {
    icon:"ClipboardCheck",
    title: "Expert Support",
    description:
      "From strategy to execution—we’re with you every step of the way.",
  },
];


const histogramData = [40, 60, 80, 70, 90, 50, 65, 75, 85];

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white ">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* HERO LEFT */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full text-sm font-medium  border border-[#07c0cb] backdrop-blur-sm bg-c-zinc/20">
                #1 Expert in Scalable Business Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
                FileMaker
                <br />
                Development & Customized
                <br />
                Business Solutions
              </h1>
              <p className="text-lg md:text-l">
                Solutions as unique as your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* CTA */}
                {/* <Link to="/contact" className="btn-primary">
                <span>Get Started</span>
                <span className="p-2 ml-3 bg-amber-50 rounded-full text-c-zinc">
                  <ArrowRight size={16} strokeWidth={2}/>
                </span>
              </Link> */}

                <SolidButton to="/contact" text="Get Started" iconSize={16} />
              </div>
            </div>

            {/* HERO RIGHT */}
            <div className="relative">
              {/*<img 
                src={charlieCopy}
                alt="Charlie"
                height="400"
                width="450"
                className="absolute -top-44 right-0 w-[90%] md:w-[450px] z-0 opacity-90 pointer-events-none"
              /> */}

              {/* testimmonial card */}
              <div className="bg-white p-6 rounded-xl shadow-xl max-w-md z-10 relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      // src="/placeholder.svg?height=48&width=48"
                      src="https://www.beckonmedia.com.au/wp-content/uploads/2018/07/Professional-Portrait-Photography-17.jpg"
                      alt="Jane Cooper"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Jane Cooper</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Clarity transformed our workflow and exceeded expectations."
                </p>
              </div>

              {/* SALES CARD */}
              <div className="<div absolute -bottom-12 -right-12 bg-white p-4 rounded-xl shadow-lg z-10">
                <div className="flex items-center gap-4">
                  <div className="text-c-zinc">
                    <span className="text-3xl font-bold">52%</span>
                    <p className="text-sm">Sales</p>
                  </div>
                  <p className="text-sm text-gray-500">Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CTA */}
      <section className="py-16 md:py-24 bg-[#F8F8F8] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-700">
              Our Journey to Empowering Modern Businesses
            </h2>
            <p className="text-gray-500 text-xl">
              We've established a results-driven environment that helps
              entrepreneurs master the skills needed to initiate and grow
              successful digital businesses.
            </p>
            <div className="flex justify-center mt-10">
              {/* <Link to="/about" className="flex items-center justify-between w-40 h-12 border-1 border-[#05b4c4] rounded-full text-grey-600 font-semibold bg-white active:brightness-98 hover:scale-102 active:tracking-widest transition-all ease-in-out duration-150">
                <span className="p-4 tracking-tighter">Learn More</span>
                <span className="flex items-center justify-center p-2 m-1 bg-gradient-to-r from-[#05b4c4] to-[#0cdddb] rounded-full">
                  <ArrowRight size={20} strokeWidth={2} className="text-white" />
                </span>
              </Link> */}
              <ButtonBgT text="Learn More" to="/about" />
            </div>
          </div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-[#08c8cd] to-transparent blur-2xl z-10">
            {" "}
          </div>
        </div>
      </section>

      {/* PITCH SECTION */}
      <section className="bg-white py-6 md:py-6">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-26 items-center">
          {/* Left: Info Section */}
          <div className="w-full lg:w-1/2">
            <InfoSection heading="How We Work" items={infoItems} />
          </div>

          {/* Right: Histogram Block */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            {/* Charts */}

            <div className="max-w-md p-6 bg-white rounded-lg shadow-lg relative">
              {/* Text  */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                We provide expert startup mentoring and inclusive consulting
                designed to elevate your business and strengthen its value
                proposition.
              </p>

              {/* Rating and Circles */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative w-40 h-20">
                  <div className="absolute w-14 h-14 top-2 left-2 rounded-full bg-black/10" />
                  <div className="absolute w-14 h-14 top-2 left-12 rounded-full bg-black/20" />
                  <div className="absolute w-14 h-14 top-2 left-[90px] rounded-full bg-black/30" />
                  <span className="absolute top-6 left-16 text-white font-semibold">
                    6K+
                  </span>
                </div>

                <div className="flex items-center">
                  {/* RATINGS STAR */}
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 font-semibold">
                    5.0 (10K+reviews)
                  </span>
                </div>
              </div>

              {/* Histogram Section */}
              <div className="flex justify-between mb-6 h-24 items-end">
                {histogramData.map((height, i) => (
                  <div
                    key={i}
                    className="w-8 rounded bg-gradient-to-t from-cyan-500 to-cyan-100"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>

              {/* Stats Section */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-gray-800">14+</p>
                  <p className="text-gray-600 text-sm">Awards Winning</p>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full mr-2" />
                  <p className="text-gray-600 text-sm">
                    Exceeded Target by 23%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection services={services}/>


      {/* Stats Section */}
      {/* <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600">Successful Projects</p>
              <p className="mt-4 text-gray-600">
                Our offerings encompass services that serve as startup mentoring
                or include consulting, contributing to the enhanced value
                proposition of your business.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold text-gray-800">5K+</h3>
              <div className="flex text-yellow-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
                <span className="ml-2 text-gray-800">5.0 (10k reviews)</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold text-gray-800">70+</h3>
              <p className="text-gray-600">Awards Winning</p>
              <p className="mt-4 text-gray-600">
                Total Earning
                <span className="block text-green-500 mt-1">
                  • 12% Increase From Target
                </span>
              </p>
            </div>
          </div>
        </div>
      </section> */}

      

      {/* Features Section */}
      {/* <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Unlock Your Potential With FileMaker By Claris
            </h2>
            <p className="text-gray-600">
              At Clarity Business Solutions, we understand that success looks
              different for every business. That's why we take a personalized
              approach to FileMaker development, tailoring solutions to your
              unique needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Boost Efficiency & Productivity
              </h3>
              <p className="text-gray-600">
                Our custom FileMaker applications streamline workflows, automate
                tasks, and eliminate data silos, freeing up your team's time to
                focus on what matters most.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Enhance Customer Management
              </h3>
              <p className="text-gray-600">
                Build powerful customer relationship management (CRM) solutions
                that centralize customer data, improve communication, and
                personalize interactions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Seamless Integration
              </h3>
              <p className="text-gray-600">
                Integrate FileMaker with your existing systems and applications
                to ensure smooth data flow and eliminate manual data entry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Expert Support
              </h3>
              <p className="text-gray-600">
                As FileMaker experts we're here to guide you every step of the
                way, from initial consultation and development to ongoing
                maintenance and support.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary inline-flex">
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section> */}

<div>
      <PromoSection
        title="Unlock Your Potential with FileMaker by Claris"
        subtitle="Claris Business Solutions offers custom-built systems tailored to your business goals."
        buttonText="Get Started"
        features={filemakerFeatures}
        onClick={() => alert("CTA clicked!")}

      />
    </div>

    {/* My-Team */}
    

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get to know our amazing Team
            </h2>
            <p className="text-gray-600">
              placeholder paragraph is going to be written here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: "Emily Grace",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Boy Rakabuming",
                role: "Co-Founder & CMO",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sophia Marie",
                role: "Co-Founder & CMO",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/about" className="btn-outline inline-flex">
              See More Team <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Innovative Project Ideas?
              </h2>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and industry.
                Lorem Ipsum has been the industry's
              </p>
            </div>
            <div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Newsletter
                </h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter to get the latest Prettifier news
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-c-zinc"
                  />
                  <button className="btn-primary">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
