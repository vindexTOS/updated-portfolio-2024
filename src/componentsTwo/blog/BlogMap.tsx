import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { UsePortfolioContext } from '../../context/PortfolioContext'
type BlogMapProps = {
  id: string
  date: string
  title: string
  dec: string
}
const BlogMap: FC<BlogMapProps> = ({ id, date, title, dec }) => {
  const { blogPostNav } = UsePortfolioContext()
  return (
    <div className="bg-gray-100 h-[200px] flex flex-col px-10 justify-between py-5 ">
      <h1 className="font-bold text-gray-500   max_smm1:text-[1rem] text-[1.5rem]">
        {title}
      </h1>
      <p className="font-light text-gray-400  max_smm1:text-[12px]">
        {dec.length > 120 ? dec.slice(0, 120) : dec}...
        <button
          className="text-gray-500 font-bold"
          onClick={() => blogPostNav(id)}
        >
          Read More
        </button>
      </p>
      <p className=" text-gray-500   max_smm1:text-[11px] ">{date}</p>
      <div className="w-[95%] h-[1px] bg-gray-500"></div>
    </div>
  )
}

export default BlogMap
