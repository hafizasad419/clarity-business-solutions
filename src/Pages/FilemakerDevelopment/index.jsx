import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const FilemakerDevelopment = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom Claris/FileMaker Development Services</h1>
            <p className="text-xl mb-8">Leverage the Power of FileMaker by Claris</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">API Integration</h2>
              <p className="text-gray-600">
                Do you want to integrate your information with Mail Chimp so you can do a custom campaign for much less?
                Are you tired of entering customer information into your CRM and again in Quickbooks? We can help you
                increase your productivity and decrease the cost of doing business through API integration.
              </p>
              <Link to="/contact" className="btn-outline inline-flex">
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden h-80">
              <img
                src="/placeholder.svg?height=320&width=560"
                alt="API Integration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="rounded-xl overflow-hidden h-80 order-2 lg:order-1">
              <img
                src="/placeholder.svg?height=320&width=560"
                alt="Customer Management"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-800">Customer Management</h2>
              <p className="text-gray-600">
                Are you using three or four products to manage your customer flow. One to keep track of your customers
                information, another to create invoices and bills. Another to track services and products. Integrating
                that all into one place for ease of access and data consistency well that's just the sane way to do
                business
              </p>
              <Link to="/contact" className="btn-outline inline-flex">
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Your Data Where You Need It</h2>
              <p className="text-gray-600">
                FileMaker solutions can be accessed from MacOS and Windows as well as all modern mobile devices. That
                means your data is where you need it, when you need it!
              </p>
              <Link to="/contact" className="btn-outline inline-flex">
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden h-80">
              <img
                src="/placeholder.svg?height=320&width=560"
                alt="Data Access"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden h-80 order-2 lg:order-1">
              <img
                src="/placeholder.svg?height=320&width=560"
                alt="Custom Solutions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-800">Your Data the Way You Need It</h2>
              <p className="text-gray-600">
                Have you ever wished "if only this program would add X feature my life would be so much easier!" Custom
                solutions give you the flexibility to build the App you want and need. Need a button here we can do
                that? Need a feature? No problem.
              </p>
              <Link to="/contact" className="btn-outline inline-flex">
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">FAQS</h2>
            <p className="text-gray-600 mb-8">
              Explore answers to common questions about Clarity, including details about our services, user guidance,
              and support. Find quick, clear, and concise solutions to enhance your experience with us. If your query
              isn't listed, our support team is ready to assist!
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  What is FileMaker software and what does it do?
                </h3>
                <p className="text-gray-600">
                  FileMaker is a powerful and flexible software platform that allows users to create custom database
                  applications without requiring advanced programming skills. With FileMaker, users can organize and
                  manage their data, automate workflows, create reports, and share information with others in their
                  organization. The software includes a variety of built-in templates and tools that can be customized
                  to suit specific business needs, as well as support for mobile devices and cloud-based hosting.
                  FileMaker is used by businesses of all sizes and across a range of industries, including healthcare,
                  education, finance, and non-profit organizations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    What are the system requirements for running FileMaker software?
                  </h3>
                  <button className="text-c-zinc text-2xl font-bold">+</button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-800">How much does FileMaker software cost?</h3>
                  <button className="text-c-zinc text-2xl font-bold">+</button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    What are difference between FileMaker Pro & FileMaker Server?
                  </h3>
                  <button className="text-c-zinc text-2xl font-bold">+</button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    Can I develop custom solutions using FileMaker software?
                  </h3>
                  <button className="text-c-zinc text-2xl font-bold">+</button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-800">What programming language dose FileMaker use?</h3>
                  <button className="text-c-zinc text-2xl font-bold">+</button>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/contact" className="btn-primary inline-flex">
                Get Started <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Questions before getting started? Get in touch.</h2>
            <p className="text-gray-600 mb-8">
              We believe that every business is unique, which is why we tailor our FileMaker business solutions to fit
              your specific requirements. By working closely with your team, we uncover hidden opportunities and develop
              customized strategies that drive real results.
            </p>
            <Link to="/contact" className="btn-primary inline-flex">
              Book A Free Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FilemakerDevelopment
