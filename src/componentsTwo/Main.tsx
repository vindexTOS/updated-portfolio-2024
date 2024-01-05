import React from 'react'
import Menu from './navigation/Menu'
import NavCards from './navigation/NavCards'
import { UsePortfolioContext } from '../context/PortfolioContext'
import me from '../assets/me.jpg'
import work from '../assets/icons/work.png'
import skills from '../assets/icons/skills.png'
import blog from '../assets/icons/blog.png'
import { motion as m } from 'framer-motion'
const Main = () => {
  const { navRelocation, layoutState } = UsePortfolioContext()
  const style = {
    main: `w-[100vw] h-[100vh]  ${
      layoutState.greenLayout
        ? 'bg-img'
        : layoutState.purpleLayOut
        ? 'bg-purple-img'
        : 'bg-img'
    }   relative flex items-center justify-center`,
    navCardSection: ` ${
      navRelocation
        ? 'flex items-center justify-center  max_md:gap-10  max_sm:gap-0 flex-wrap   max_smm:w-[380px] max_smm:displayGrid   max_md:mb-20 '
        : 'flex flex-col justify-start h-[100%] py-10  items-start w-[100%] gap-5 px-5'
    }`,
  }
  return (
    <main className={style.main}>
      <m.section
        initial={{ x: 0, y: 0 }}
        animate={{ x: navRelocation ? 0 : 20, y: navRelocation ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        className={style.navCardSection}
      >
        <NavCards
          img={me}
          title="About Me"
          styling={` outline outline-orange-500 outline-[1px] rounded-[50%]`}
          link="about"
        />
        <NavCards img={work} title="My Projects" styling="" link="projects" />
        <NavCards img={skills} title="Skills" styling="" link="skills" />
        <NavCards img={blog} title="Blog" styling="" link="blog" />
      </m.section>
      <Menu />
    </main>
  )
}

export default Main
