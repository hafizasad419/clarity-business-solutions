import { charlieCopy } from "@src/assets/images"
import { ArrowRight, Star } from "lucide-react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-c-zinc/20 px-4 py-1 rounded-full text-sm font-medium text-white">
                #1 Top Notch Business Consultant
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                FileMaker
                <br />
                Development &<br />
                Customized
                <br />
                Business Solutions
              </h1>
              <p className="text-lg md:text-xl">Unique solutions for unique business</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="relative">

              {/* <img
                src={charlieCopy}
                alt="Charlie"
                /> */}
              <div className="bg-white p-6 rounded-xl shadow-xl max-w-md mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=48&width=48"
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
                <p className="text-gray-700 italic">"Clarity simplified our processes and delivered great results!"</p>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-xl shadow-lg">
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

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Evolutionary Path of Our Consultancy Agency
              </h2>
              <p className="text-gray-600">
                We've established a platform for budding entrepreneurs to master the art of initiating and expanding
                their businesses successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <h3 className="text-xl font-semibold text-gray-800">Our Approach</h3>
                <Link to="/about" className="btn-outline">
                  Learn More <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Tailored Solutions:",
                  description:
                    "Expertise in FileMaker development to create custom, scalable, and user-friendly solutions for businesses.",
                },
                {
                  number: "02",
                  title: "Unique Approach:",
                  description:
                    "A background in psychology helps us understand business processes, leaders, and customers holistically.",
                },
                {
                  number: "03",
                  title: "Collaborative Process:",
                  description:
                    "We listen carefully, ask insightful questions, and apply our experience to unlock business potential.",
                },
                {
                  number: "04",
                  title: "Focus on Results:",
                  description:
                    "Solutions are designed to streamline workflows, boost productivity, and achieve business goals.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-c-zinc font-bold text-xl">{item.number}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600">Successful Projects</p>
              <p className="mt-4 text-gray-600">
                Our offerings encompass services that serve as startup mentoring or include consulting, contributing to
                the enhanced value proposition of your business.
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
              <p className="text-gray-600">Awwards Winning</p>
              <p className="mt-4 text-gray-600">
                Total Earning
                <span className="block text-green-500 mt-1">• 12% Increase From Target</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">FileMaker Development</h2>
              <p className="text-gray-600">
                We've built a dynamic platform focused on empowering aspiring entrepreneurs to master the necessary
                skills for both launching and scaling their businesses effectively.
              </p>
              <p className="text-gray-600">
                Need help or support with FileMaker by Claris. We do that! Our FileMaker experts can handle custom app
                development, API Integration, customer management, database development, and subcontract support. We can
                help you streamline operations, improve efficiency, and achieve your business goals.
              </p>
              <Link to="/filemaker-development" className="btn-outline inline-flex">
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden h-80">
              <img
                src="/placeholder.svg?height=320&width=560"
                alt="FileMaker Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden h-80 order-2 lg:order-1">
              <img
                src="/placeholder.svg?height=320&width=560"
                alt="Business Coaching"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Business Coaching</h2>
              <p className="text-gray-600">
                We've built a dynamic platform focused on empowering aspiring entrepreneurs to master the necessary
                skills for both launching and scaling their businesses effectively.
              </p>
              <p className="text-gray-600">
                Looking to understand your business, your clients, or yourself. Consider Coaching. With a background in
                psychology and success building several businesses, our business coaching service can help you
                strategize effectively for the future.
              </p>
              <Link to="/business-coaching" className="btn-outline inline-flex">
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Unlock Your Potential With FileMaker By Claris
            </h2>
            <p className="text-gray-600">
              At Clarity Business Solutions, we understand that success looks different for every business. That's why
              we take a personalized approach to FileMaker development, tailoring solutions to your unique needs and
              goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Boost Efficiency & Productivity</h3>
              <p className="text-gray-600">
                Our custom FileMaker applications streamline workflows, automate tasks, and eliminate data silos,
                freeing up your team's time to focus on what matters most.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Enhance Customer Management</h3>
              <p className="text-gray-600">
                Build powerful customer relationship management (CRM) solutions that centralize customer data, improve
                communication, and personalize interactions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Seamless Integration</h3>
              <p className="text-gray-600">
                Integrate FileMaker with your existing systems and applications to ensure smooth data flow and eliminate
                manual data entry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Support</h3>
              <p className="text-gray-600">
                As FileMaker experts we're here to guide you every step of the way, from initial consultation and
                development to ongoing maintenance and support.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary inline-flex">
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get to know our amazing Team</h2>
            <p className="text-gray-600">
              Mi turpis turpis in justo pellentesque id nibh praesent. Posuere vel sit dignissim eu nisl.
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
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Innovative Project Ideas?</h2>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's
              </p>
            </div>
            <div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">Subscribe to our newsletter to get the latest Prettifier news</p>
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
  )
}

export default Home
