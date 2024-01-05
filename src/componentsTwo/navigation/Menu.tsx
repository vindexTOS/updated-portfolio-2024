import React from 'react'
import { motion as m } from 'framer-motion'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Blog from '../../assets/icons/blogMenu.png'
import contact from '../../assets/icons/contact-book.png'
import brain from '../../assets/icons/creativity.png'
import MenuComponent from './MenuComponent'
import MenuMapComponent from './MenuMapComponent'
const Menu = () => {
  const locatoin = useLocation()
  const {
    dropOutMenu,
    layoutDispatch,
    layoutState,
    learnStack,
  } = UsePortfolioContext()
  const style = {
    section: ` ${
      layoutState.greenLayout
        ? ' bg-[#245a50] boxShaddow '
        : layoutState.purpleLayOut
        ? 'bg-[#2d648e]  menuBoxShaddowPurple rounded-[16px] '
        : ' '
    }  w-[350px] h-[350px] ml-1 bottom-20 left-0  absolute z-10 flex flex-col items-center justify-start py-5  `,

    layout1: `w-[44%] h-[120px] outline outline-[1px] outline-orange-600   bg-img  flex  flex-col items-center justify-between hover:outline-orange-300 cursor-pointer`,
    layout2: `w-[44%] h-[120px] outline outline-[1px]  outline-purple-500  bg-purple-img flex  flex-col items-center justify-between hover:outline-purple-300 cursor-pointer`,
  }
  const [dropDownLearning, setDropDownLearning] = React.useState<boolean>(false)

  return (
    <m.section
      initial={{ x: -400 }}
      animate={{ x: dropOutMenu ? 0 : -400 }}
      className={style.section}
    >
      <MenuComponent
        title={'Contact Me'}
        img={contact}
        link={'contact'}
        arrowCheck={false}
      />
      <MenuComponent
        title={'Personal Blog'}
        img={Blog}
        link={'blog'}
        arrowCheck={false}
      />

      <MenuComponent
        title={'Currently Learning'}
        img={brain}
        link={`${locatoin.pathname}`}
        arrowCheck={true}
        setDropDown={setDropDownLearning}
        dropDownBool={dropDownLearning}
      />
      {dropDownLearning && (
        <div className=" flex  absolute bg-green-700 bg-opacity-50 w-[90%] mt-[9rem] ml-[3rem]">
          <MenuMapComponent data={learnStack} />
        </div>
      )}
    </m.section>
  )
}

export default Menu
