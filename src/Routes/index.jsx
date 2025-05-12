import { Suspense, lazy } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Fallback from "@src/Components/Fallback"

const Home = lazy(() => import("@src/Pages/Home"))
const About = lazy(() => import("@src/Pages/About"))
const Services = lazy(() => import("@src/Pages/Services"))
const Projects = lazy(() => import("@src/Pages/Projects"))
const Blog = lazy(() => import("@src/Pages/Blog"))
const BlogPost = lazy(() => import("@src/Pages/Blog/BlogPost"))
const Contact = lazy(() => import("@src/Pages/Contact"))

function AuthRoutes() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  )
}

export default AuthRoutes
