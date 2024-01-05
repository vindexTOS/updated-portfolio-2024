import { Route, Routes } from 'react-router-dom'
import Home from './componentsTwo/Home'
import Footer from './componentsTwo/navigation/Footer'
import AboutMe from './componentsTwo/about/AboutMe'
import Skills from './componentsTwo/skills/Skills'
import Projects from './componentsTwo/projects/Projects'
import ProjectDiv from './componentsTwo/projects/ProjectDiv'
import Contact from './componentsTwo/contact/Contact'
import Blog from './componentsTwo/blog/Blog'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
