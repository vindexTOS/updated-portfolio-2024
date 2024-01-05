import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
type MenuComponentType = {
  img: string
  title: string
  link: string
  arrowCheck: boolean
  setDropDown?: React.Dispatch<React.SetStateAction<boolean>>
  dropDownBool?: boolean
}

const MenuComponent: FC<MenuComponentType> = ({
  img,
  title,
  link,
  arrowCheck,
  setDropDown,
  dropDownBool,
}) => {
  const style = {
    icon: `text-orange-500 text-[1.2rem]`,
  }

  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        setDropDown && setDropDown(!dropDownBool!) // @ts-ignore
      }}
      className={`flex  items-center justify-start ${
        arrowCheck && 'justify-between'
      }  gap-2 w-[90%] hover:bg-gray-200 hover:bg-opacity-50 p-2  cursor-pointer`}
    >
      <div
        onClick={() => navigate(link)}
        className="flex gap-4 items-center justify-center"
      >
        <img className="w-[30px]" src={img} />
        <button className="text-white ">{title}</button>
      </div>
      {arrowCheck && (
        <>
          {dropDownBool ? (
            <MdKeyboardArrowDown className={style.icon} />
          ) : (
            <MdOutlineKeyboardArrowUp className={style.icon} />
          )}
        </>
      )}
    </div>
  )
}

export default MenuComponent
