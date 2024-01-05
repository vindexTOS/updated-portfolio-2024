import React, { FC } from 'react'
import { motion as m } from 'framer-motion'
import me from '../assets/me.jpg'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import { useLocation } from 'react-router-dom'
type NavCardProsp = {
  img: string
  title: string
  styling: string
  link: string
}
const NavCards: FC<NavCardProsp> = ({ img, title, styling, link }) => {
  const { Navigate, navRelocation, layoutState } = UsePortfolioContext()
  const location = useLocation()
  const style = {
    mainDiv: `   ${
      navRelocation
        ? 'w-[370px] h-[320px] max_md:h-[220px]      max_md:w-[320px]  max_sm:h-[180px]    max_smm1:w-[160px]     max_smm1:h-[160px]  flex items-center justify-center relative'
        : ''
    }    `,
    content: ` gap-2 items-center rounded-[50px] justify-center max_sm:h-[130px] max_smm1:rounded-[50%]  max_smm1:h-[150px] max_smm1:w-[150px] flex flex-col  ${
      layoutState.greenLayout
        ? 'bg-[#245a50] boxShaddow text-white'
        : layoutState.purpleLayOut
        ? 'bg-[#2d648e]  cardBoxShaddowPurple rounded-[40px] text-blue-200'
        : ''
    } bg-[#245a50]  cursor-pointer   ${
      location.pathname === `/${link}` ? 'cardBoxOn' : 'cardBoxShaddow '
    }  ${
      navRelocation
        ? 'w-[340px] h-[300px]  max_sm:h-[160px]   max_md:h-[200px] max_md:w-[300px] '
        : 'w-[120px] h-[120px]'
    }`,
    img: `w-[50%]  max_sm:w-[35%] max_smm1:w-[70px]  ${styling}`,
    header: `   flex items-center justify-center font-bold max_smm1:text-[14px] ${
      navRelocation ? 'text-[1.5rem] w-[9rem]' : ''
    }`,
  }

  return (
    <div onClick={() => Navigate(link)} className={style.mainDiv}>
      <m.div
        whileHover={{ scale: 0.92 }}
        transition={{ duration: 0.2 }}
        className={style.content}
      >
        <img className={style.img} src={img} />
        <h1 className={style.header}>{title}</h1>
      </m.div>
    </div>
  )
}

export default NavCards
