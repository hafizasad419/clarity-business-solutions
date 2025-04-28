import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { blogPosts } from "./blogPosts"

const Blog = () => {
  
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog on Business Automation, Data Management & Productivity Tools
            </h1>
            <p className="text-xl mb-8">Leverage the Power of FileMaker by Claris</p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-500 mb-4">{post.date}</p>
                  <Link to={`/blogs/${post.slug}`} className="text-c-zinc font-medium inline-flex items-center">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-c-zinc text-white">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
              3
            </button>
            <button className="px-4 py-2 flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100">
              Next
            </button>
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

export default Blog
