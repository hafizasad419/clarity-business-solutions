import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { teamMembers } from "./teamMembers"

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Clarity Business Solutions</h1>
            <p className="text-xl mb-8">Your Partner in FileMaker Development and Business Growth</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Story</h2>
              <p className="text-gray-600">
                Clarity Business Solutions was founded with a simple mission: to help businesses streamline their
                operations and achieve their goals through custom FileMaker solutions and strategic business coaching.
              </p>
              <p className="text-gray-600">
                With a background in psychology and years of experience in business development, our team brings a
                unique perspective to every project. We don't just build software; we create solutions that address the
                human elements of your business processes.
              </p>
              <p className="text-gray-600">
                Based in Victoria, BC, we work with clients across Canada, the US, and beyond, delivering tailored
                solutions that drive real results.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden h-80">
              <img src="/placeholder.svg?height=320&width=560" alt="Our Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600">These principles guide everything we do at Clarity Business Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Client-Centered Approach</h3>
              <p className="text-gray-600">
                We listen carefully to understand your unique challenges and goals, ensuring our solutions address your
                specific needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence in Execution</h3>
              <p className="text-gray-600">
                We're committed to delivering high-quality solutions that exceed expectations and stand the test of
                time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Continuous Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of FileMaker development and business strategies to bring you the most
                effective solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600">The talented individuals behind Clarity Business Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-500 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 mb-8">
              Let's work together to create custom solutions that drive growth and efficiency.
            </p>
            <Link to="/contact" className="btn-primary inline-flex">
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
