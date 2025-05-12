import { ArrowLeft } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { blogPosts } from "../blogPosts"

const BlogPost = () => {
  const { slug } = useParams()

  // Find the blog post based on slug
  const blogPost = blogPosts.find(post => post.slug === slug)

  // Fallback if not found
  if (!blogPost) {
    return (
      <main className="py-20 text-center">
        <h1 className="text-3xl font-bold text-red-500">404 - Blog Post Not Found</h1>
        <p className="text-gray-600 mt-4">The blog post you’re looking for doesn’t exist.</p>
        <Link to="/blogs" className="inline-block mt-6 text-c-zinc font-semibold">
          ← Back to Blogs
        </Link>
      </main>
    )
  }

  // Temporary static HTML content for demonstration
  const content = `
    <p>Efficient data management is essential for the success of small businesses. FileMaker provides an excellent solution.</p>
    <h2>Why FileMaker is Perfect?</h2>

    
    <p>FileMaker's flexibility allows you to create customized workflows tailored to your unique business needs.</p>
    <br/>
    <ul><li>Custom apps</li><li>Integration</li><li>Visual dashboards</li></ul>
  `

  // Suggesting 3 related posts (other than current one)
  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blogs" className="flex items-center text-c-zinc mb-6">
          <ArrowLeft size={18} className="mr-2" />
          Back to Blog
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{blogPost.title}</h1>
        <p className="text-gray-500 mb-8">{new Date(blogPost.date).toLocaleDateString()}</p>

        <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: content }} />

        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map(post => (
            <Link
              key={post.id}
              to={`/blogs/${post.slug}`}
              className="bg-gray-50 hover:shadow-md transition rounded-xl overflow-hidden"
            >
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default BlogPost
