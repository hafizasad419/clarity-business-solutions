import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link, useParams } from "react-router-dom"

const BlogPost = () => {
  const { slug } = useParams()

  // This would normally fetch the blog post data based on the slug
  // For this example, we'll use static content
  const blogPost = {
    title: "Optimizing Data Management with FileMaker: Tips for Small Businesses",
    date: "Jan 10",
    content: `
      <p>Efficient data management is essential for the success of small businesses. At Clarity Business Solutions, we understand the challenges faced by small business owners and are committed to helping them streamline operations and boost productivity. FileMaker, a powerful and flexible database platform, provides an excellent solution for optimizing data management and enabling business growth.</p>
      
      <p>In this blog, we'll explore actionable tips for small business owners to enhance their data management practices with FileMaker. Whether you're looking for advice on building custom databases or improving workflow efficiency, these strategies will help you make the most of your data.</p>
      
      <h2>Why FileMaker is Perfect for Small Businesses?</h2>
      
      <h3>A Flexible Solution for Custom Data Management</h3>
      <p>FileMaker's versatility allows businesses to design custom database solutions tailored to their unique needs. Unlike one-size-fits-all software, FileMaker enables users to:</p>
      <ul>
        <li>Organize and manage diverse data types like text, images, and dates.</li>
        <li>Build custom apps that address specific business challenges.</li>
        <li>Integrate seamlessly with existing tools like QuickBooks and Google Sheets.</li>
      </ul>
      
      <p>For small businesses, this flexibility means you're not stuck with features you don't need or missing the ones you do. Instead, you have the power to create exactly what you need to drive your business forward.</p>
      
      <h3>Scalability for Growing Businesses</h3>
      <p>As your business evolves, FileMaker grows with you. It supports everything from small-scale databases to enterprise-level solutions, ensuring you never outgrow your data management system. FileMaker's scalability makes it a future-proof solution for businesses that anticipate growth and need systems that can adapt without requiring costly replacements or migrations.</p>
    `,
    relatedPosts: [
      {
        id: 1,
        title: "Top Productivity Tools for Client Relationship Management",
        date: "2024-12-06",
        slug: "top-productivity-tools-client-relationship-management",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: 2,
        title: "The Role of Custom Software in Enhancing Supply Chain Management",
        date: "2024-11-08",
        slug: "role-custom-software-enhancing-supply-chain-management",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: 3,
        title: "A Comprehensive Guide to API Integration for Business Automation",
        date: "2024-10-18",
        slug: "comprehensive-guide-api-integration-business-automation",
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  }

  return (
    <main>
      {/* Blog Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <Link to="/blogs" className="inline-flex items-center text-white hover:text-c-zinc mb-4">
            <ArrowLeft size={16} className="mr-2" /> Back
          </Link>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{blogPost.title}</h1>
            <p className="text-gray-500 mb-8">{blogPost.date}</p>

            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            ></div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPost.relatedPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
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
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
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

export default BlogPost
