import { Link } from "react-router-dom"
import { Linkedin } from "lucide-react"
import { footerLinks } from "./footerLinks"
import { clarityLogo, charlie } from "@src/assets/images"
import BlurredShade from "../BlurredShade"
import PrimaryButton from "../PrimaryButton"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (

    <>
      <section className="py-16 md:py-22 bg-black relative overflow-hidden">

        <BlurredShade
          right
        />
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


            <div className="w-full flex justify-start">
              <img
                src={charlie}
                alt="Charlie"
                className="w-64 md:w-58 opacity-90 pointer-events-none md:absolute -top-4 -ml-6 md:-ml-32 scale-x-[-1]"
              />
            </div>


            <div>
              <h2 className="h1 font-bold text-gray-800 mb-4">
                Innovative Project Ideas?
              </h2>
              <p className="text-gray-300">
                Let's convert your idea into reality 
              </p>

              <PrimaryButton
              type="link" 
              to="/contact"
              className="mt-4"
              text="Let's Talk"
              />

            </div>


          </div>
        </div>


      </section>


      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <Link to="/">
                <img
                  src={clarityLogo}
                  className="h-16 w-auto"
                  alt="Clarity Business Solution Logo"
                />
              </Link>
              <p className="text-gray-400 mb-4 text-sm">
                Integration, Automation, Insight.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-c-zinc transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-gray-400 font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-gray-400 hover:text-c-zinc transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-gray-400 font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-gray-400 hover:text-c-zinc transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-gray-400 font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-gray-400 hover:text-c-zinc transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 text-center text-gray-400">
            <p>Clarity. {currentYear}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>



  )
}

export default Footer
