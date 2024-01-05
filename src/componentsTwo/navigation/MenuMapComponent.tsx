import React, { FC } from 'react'
type MenuMapProps = {
  data: any | unknown
}
const MenuMapComponent: FC<MenuMapProps> = ({ data }) => {
  return (
    <div className="py-2 flex flex-col gap-5 px-3 w-[100%] ">
      {data?.map((val: any) => {
        return (
          <div
            className="flex w-[100%]  hover:bg-gray-300 hover:bg-opacity-300 p-1 gap-5"
            key={val.id}
          >
            <img src={val.img} className="w-[30px]" />
            <h1 className="text-white font-bold"> {val.title}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default MenuMapComponent
