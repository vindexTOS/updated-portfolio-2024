import React from 'react'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import { motion as m } from 'framer-motion'
import { MdCancelPresentation, MdZoomOutMap, MdZoomInMap } from 'react-icons/md'
const Skills = () => {
  const {
    CloseWindow,
    skills,
    layoutState,
    dragTurnOff,
  } = UsePortfolioContext()

  const [zoom, setZoom] = React.useState<boolean>(false)

  const style = {
    mainDiv: `${
      zoom ? 'w-[100%] h-[100%]  mt-[4rem]' : 'w-[70%] h-[80%] '
    } max_lg:w-[100%] max_lg:h-[90%]   max_lg:mt-8 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `,
    topDiv: `w-[100%]  flex items-center justify-between px-5 h-[50px]  bg-gray-800`,
    section: ` w-[100%] h-[100%]  ${
      layoutState.greenLayout
        ? 'bg-gray-100'
        : layoutState.purpleLayOut
        ? 'bg-skills-purple'
        : 'bg-white'
    }`,
    header: `text-white text-[1.5rem] `,
    icon: `w-[2rem] h-[2rem] flex  items-center  justify-center font-bold text-[1.5rem] hover:bg-red-500  bg-red-600 text-white rounded-[5px]`,
    iconZoom: `text-[2rem] bg-green-600 hover:bg-green-400 text-white rounded-[5px] max_lg:hidden  `,
    btnDiv: `gap-2 flex `,
    skillsDiv: ` flex flex-wrap items-center justify-center w-[100%] h-[90%] py-10 px-20 max_sm:p-0 gap-20  max_sm:gap-10 max_sm:h-[90%]  overflow-y-scroll `,
    singleSkill: `flex flex-col items-center justify-center max_sm:w-[100px] gap-2  `,
    img: `w-[100px] h-[100px] max_sm:w-[40px] max_sm:h-[40px]`,
    imgDiv: `rounded-[50%] w-[180px] h-[180px] max_sm:w-[80px] max_sm:h-[80px]  bg-opacity-5  flex items-center justify-center`,
    skillHeader: `text-[1.2rem] font-bold text-gray-600  max_sm:text-[14px]`,
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
          <h1 className={style.header}>Tools I Use</h1>
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
        <div className={style.skillsDiv}>
          {skills.map((val: any, i: number) => {
            return (
              <div key={String(val.bgo + i)} className={style.singleSkill}>
                <m.div
                  whileHover={{ backgroundColor: `${val.color}` }}
                  transition={{ duration: 1 }}
                  className={`${style.imgDiv}   `}
                  style={{ backgroundColor: `${val.bgo}` }}
                >
                  <img src={val.icon} className={style.img} />
                </m.div>

                <h1 className={style.skillHeader}>{val.title}</h1>
              </div>
            )
          })}
        </div>
      </m.section>
    </div>
  )
}

export default Skills
