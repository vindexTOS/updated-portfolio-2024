import React, { useState } from 'react'
import book from '../../assets/icons/book.png'
import { motion as m } from 'framer-motion'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import BlogMap from './BlogMap'
import BlogPostInside from './BlogPostInside'
function BlogMain() {
  const {
    mappedBlogData,
    blogId,
    blogPostNav,
    FilterBlogData,
  } = UsePortfolioContext()

  const [menu, setMenu] = useState<boolean>(false)
  const dropDownRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const handleOutclick = (e: { target: any }) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setMenu(false)
      }
    }
    document.addEventListener('mousedown', handleOutclick)
    return () => {
      document.removeEventListener('mousedown', handleOutclick)
    }
  }, [dropDownRef])
  const style = {
    mainDiv: 'bg-gray-300  w-[100%] h-[100%] flex',
    sideNav: `h-[100%] py-5 w-[250px] bg-white flex  flex-col ${
      menu ? ' absolute   pt-[3rem]  ' : 'max_lg:hidden  '
    }  `,
    blogPost: ` flex  justify-start flex-col  w-[100%] overflow-y-scroll h-[100%] gap-2 `,
    menuIcon: `absolute text-[40px] text-gray-800 cursor-pointer hover:text-gray-700 lg:hidden z-50   `,
  }

  const NavLinks = ({ title, id }: { title: string; id: string }) => {
    return (
      <div
        onClick={() => {
          FilterBlogData(id), blogPostNav('')
        }}
        className="flex cursor-pointer gap-13 items-center px-10 hover:bg-gray-500 hover:text-white w-[250px] gap-5 text-[1.3rem] font-bold text-gray-500"
      >
        <img className="w-[26px]" src={book} />
        <h1>{title}</h1>
      </div>
    )
  }
  return (
    <div className={style.mainDiv}>
      {!menu ? (
        <AiOutlineMenuUnfold
          onClick={() => setMenu(!menu)}
          className={style.menuIcon}
        />
      ) : (
        <AiOutlineMenuFold
          onClick={() => setMenu(!menu)}
          className={`${style.menuIcon}`}
        />
      )}
      {menu && (
        <div className="absolute w-[100%] h-[100%] bg-gray-500 bg-opacity-30"></div>
      )}
      <div ref={dropDownRef} className={style.sideNav}>
        <NavLinks id="blog" title="#General" />
        <NavLinks id="diary" title="Dev Diary" />
      </div>
      {blogId == '' ? (
        <div className={style.blogPost}>
          {mappedBlogData.map((val: any) => (
            <BlogMap
              key={val.id}
              date={val.time}
              id={val.id}
              title={val.title}
              dec={val.dec}
            />
          ))}
        </div>
      ) : (
        <BlogPostInside />
      )}
    </div>
  )
}

export default BlogMain
