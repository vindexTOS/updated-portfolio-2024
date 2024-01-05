import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { UsePortfolioContext } from '../../context/PortfolioContext'

type OptionDivProps = {
  img: string

  title: string
  link: string
}
const OptionsDiv: FC<OptionDivProps> = ({ img, title, link }) => {
  const {
    dropOutMenu,
    setDropOutMenu,
    Navigate,
    layoutState,
  } = UsePortfolioContext()
  const location = useLocation()

  return (
    <div
      onClick={() => Navigate(link)}
      title={title}
      className={`  ${
        layoutState.greenLayout
          ? 'hover:bg-green-800 hover:border-b-2 border-orange-600'
          : layoutState.purpleLayOut
          ? 'hover:bg-purple-800 hover:border-b-2 border-purple-400'
          : ''
      } w-[5rem] flex items-center justify-center h-[100%] cursor-pointer ${
        layoutState.greenLayout
          ? location.pathname === `/${link}` && 'bg-green-900 border-b-4'
          : location.pathname === `/${link}` && 'bg-purple-900 border-b-4'
      } `}
    >
      <img src={img} className={`w-[50px] cursor-pointer  `} />
    </div>
  )
}

export default OptionsDiv
