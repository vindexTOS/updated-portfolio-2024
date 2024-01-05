import React from 'react'
import { MdZoomInMap, MdZoomOutMap } from 'react-icons/md'
import { motion as m } from 'framer-motion'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import BlogMain from './BlogMain'
function Blog() {
  const {
    CloseWindow,

    dragTurnOff,
  } = UsePortfolioContext()
  const [zoom, setZoom] = React.useState<boolean>(false)
  const style = {
    mainDiv: `${
      zoom ? 'w-[100%] h-[100%]  mt-[4rem]' : 'w-[70%] h-[80%] '
    } max_lg:w-[100%] max_lg:h-[90%]   max_lg:mt-8 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `,
    topDiv: `w-[100%]  flex items-center justify-between px-5 h-[50px]  bg-gray-800`,
    section: ` w-[100%] h-[100%] bg-gray-100  `,
    header: `text-white text-[1.5rem] `,
    icon: `w-[2rem] h-[2rem] flex  items-center  justify-center font-bold text-[1.5rem] hover:bg-red-500  bg-red-600 text-white rounded-[5px]`,
    iconZoom: `text-[2rem] bg-green-600 hover:bg-green-400 text-white rounded-[5px] max_lg:hidden  `,
    btnDiv: `gap-2 flex `,
    blogDiv: ` flex flex-wrap items-center justify-center w-[100%] h-[90%] py-10 px-20 max_sm:p-0 gap-20  max_sm:gap-10 max_sm:h-[90%]  overflow-y-scroll `,
  }

  return (
    <div className={style.mainDiv}>
      <m.section
        drag={dragTurnOff}
        dragConstraints={{ left: -1000, right: 1000, top: -500, bottom: 500 }}
        dragElastic={false}
        dragMomentum={false}
        initial={{ y: -2800 }}
        animate={{ y: -70, x: dragTurnOff ? 2 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className={style.section}
      >
        <div className={style.topDiv}>
          <h1 className={style.header}>Blog</h1>
          <div className={style.btnDiv}>
            <button className={style.iconZoom}>
              {zoom ? (
                <MdZoomInMap onClick={() => setZoom(!zoom)} />
              ) : (
                <MdZoomOutMap onClick={() => setZoom(!zoom)} />
              )}
            </button>
            <button onClick={CloseWindow}>
              <p className={style.icon}>X</p>
            </button>
          </div>
        </div>

        <BlogMain />
      </m.section>
    </div>
  )
}

export default Blog
