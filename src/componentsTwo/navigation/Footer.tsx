import React, { FC, useState } from 'react'
import shuriken from '../../assets/icons/shuriken.png'
import { motion as m } from 'framer-motion'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import PersonalInfo from '../../assets/icons/personal-information.png'
import ClipBoard from '../../assets/icons/clipboard.png'
import Skills2 from '../../assets/icons/skills2.png'
import gear from '../../assets/icons/gear.png'
import analytics from '../../assets/icons/analytics.png'
import computer from '../../assets/icons/computer.png'
import idcard from '../../assets/icons/id-card.png'
import { useLocation } from 'react-router-dom'
import gmail from '../../assets/icons/gmail.png'
import FooterUpdates from './FooterUpdates'
import OptionsDiv from './FooterOptionDiv'
const Footer = () => {
  const context = UsePortfolioContext()
  if (!context) {
    return null
  }

  const { dropOutMenu, setDropOutMenu, Navigate, layoutState } = context
  const [iconImg, setIconImg] = useState<boolean>(false)

  const style = {
    footer: `w-[100vw] h-[72px] bottom-0 flex justify-between    ${
      layoutState.greenLayout
        ? 'bg-[#245a50] boxShaddow'
        : layoutState.purpleLayOut
        ? 'bg-[#2d648e]  cardBoxShaddowPurple'
        : ''
    }  absolute flex `,
    iconDiv: `flex items-center justify-center h-[100%] w-[5rem] rounded-[50%]   `,
    img: `w-[50px] cursor-pointer    ${iconImg && 'rotate-180'} `,
    options: `flex items-center justify-center   `,
  }

  return (
    <footer className={style.footer}>
      <div className="flex">
        <div
          className={style.iconDiv}
          onClick={() => setDropOutMenu(!dropOutMenu)}
        >
          <m.img
            onClick={() => setIconImg(!iconImg)}
            animate={{ rotate: iconImg ? 180 : 0 }}
            className={style.img}
            src={
              layoutState.greenLayout
                ? shuriken
                : layoutState.purpleLayOut
                ? gear
                : gear
            }
          />
        </div>
        <div className={style.options}>
          <OptionsDiv
            img={
              layoutState.greenLayout
                ? PersonalInfo
                : layoutState.purpleLayOut
                ? idcard
                : PersonalInfo
            }
            title="About Me"
            link="about"
          />
          <OptionsDiv
            img={
              layoutState.greenLayout
                ? ClipBoard
                : layoutState.purpleLayOut
                ? analytics
                : ClipBoard
            }
            title="Projects"
            link="projects"
          />
          <OptionsDiv
            img={
              layoutState.greenLayout
                ? Skills2
                : layoutState.purpleLayOut
                ? computer
                : Skills2
            }
            title="Skills"
            link="skills"
          />
          <div className="max_sm:hidden h-[100%]">
            <OptionsDiv img={gmail} title="Contacts" link="contact" />
          </div>
        </div>
      </div>
      <div className="h-[100%] flex items-center">
        <FooterUpdates />
      </div>
    </footer>
  )
}

export default Footer
