import React from 'react'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import { motion as m } from 'framer-motion'
import me2 from '../../assets/me.jpg'
import { MdCancelPresentation, MdZoomOutMap, MdZoomInMap } from 'react-icons/md'
import { GiBulletBill } from 'react-icons/gi'
import {
  AiOutlineCopy,
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { portfolioData } from '../../DataUtils'

const AboutMe = () => {
  const InfoData = [
    {
      title: `vindexTOS`,
      icon: <AiFillGithub className="text-[2rem] text-orange-700" />,
      link: `https://github.com/vindexTOS`,
    },
    {
      title: `giorgi kutateladze`,
      icon: <AiFillLinkedin className="text-[2rem] text-blue-500" />,
      link: `https://www.linkedin.com/in/giorgi-kutateladze-65a83919a/`,
    },
    {
      title: `vindexTOS`,
      icon: <AiFillYoutube className="text-[2rem] text-red-500" />,
      link: `https://www.youtube.com/@VindexTOS/featured`,
    },
  ]
  const [zoom, setZoom] = React.useState<boolean>(false)

  const { CloseWindow, layoutState, dragTurnOff } = UsePortfolioContext()
  const style = {
    mainDiv: `${
      zoom ? 'w-[100%] h-[100%] mt-[4rem]' : 'w-[70%] h-[80%] '
    }  max_lg:w-[100%] max_lg:h-[90%]   max_lg:mt-8  flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `,
    topDiv: `w-[100%]  flex items-center justify-between px-5 h-[50px]  bg-gray-800`,
    section: ` w-[100%] h-[100%] ${
      layoutState.greenLayout
        ? 'bg-gray-100'
        : layoutState.purpleLayOut
        ? 'bg-section-purple'
        : ''
    }   `,
    mainContent: ` flex w-[100%] h-[90%] max_sm:h-[90%]   p-2 gap-5 justify-between overflow-y-scroll  max_md:flex-col `,
    header: `text-white text-[1.5rem] `,
    icon: `w-[2rem] h-[2rem] flex  items-center  justify-center font-bold text-[1.5rem] hover:bg-red-500  bg-red-600 text-white rounded-[5px]`,
    iconZoom: `text-[2rem] bg-green-600 hover:bg-green-400 text-white rounded-[5px] max_lg:hidden  `,
    btnDiv: `gap-2 flex `,
    photoDiv: `w-[500px]  h-[600px]  max_md:w-[100%]  ${
      layoutState.greenLayout
        ? ' bg-white '
        : layoutState.purpleLayOut
        ? 'bg-gray-200 bg-opacity-30'
        : ''
    }    flex flex-col  justify-center   items-center gap-5 py-4 `,
    img: `w-[270px] h-[270px]`,
    infoBtn: `flex items-center text-[1rem]  font-bold w-[270px] gap-5 outline outline-[1px] p-2 py-3 cursor-pointer  ${
      layoutState.greenLayout
        ? 'hover:bg-gray-800 text-gray-500  hover:text-white  '
        : layoutState.purpleLayOut
        ? ' bg-gray-800 text-gray-500   text-white  hover:bg-gray-900 hover:text-purple-700'
        : ''
    } `,
    infoDiv: `flex flex-col  gap-2 max_md:flex-row max_md:flex-wrap max_md:items-center max_md:justify-center`,
    copySpan: `absolute w-[5rem] h-[2.3rem] bg-green-300 text-white rounded-[20px] flex items-center text-center justify-center font-bold text-[1.2rem] mt-10 ml-[8rem]`,
    textDiv: `  w-[80%]  max_sm:h-[1500px] h-[100vh] px-10   max_md:px-5 flex flex-col gap-5 max_md:w-[100%]   ${
      layoutState.greenLayout
        ? '  '
        : layoutState.purpleLayOut
        ? 'bg-gray-200 bg-opacity-30'
        : ''
    }  `,
    headerDiv: `flex flex-col max_md:text-center `,
    InreleventDiv: `flex flex-col  `,
  }
  const [copy, setCopy] = React.useState<string>('')
  function copyToClipboard() {
    navigator.clipboard
      .writeText('g.kutateli@gmail.com')
      .then(() => setCopy('Copied!'))
      .catch((error) =>
        console.error('Error copying text to clipboard:', error),
      )
    setTimeout(() => {
      setCopy('')
    }, 2000)
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
          <h1 className={style.header}>About Me</h1>
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
        <section className={style.mainContent}>
          {/* photo div */}

          <div className={style.photoDiv}>
            <img className={style.img} src={me2} />
            <div className={style.infoDiv}>
              <div
                title="Copy To ClickBoard"
                onClick={copyToClipboard}
                className={style.infoBtn}
              >
                <AiOutlineCopy className="text-[2rem]" />
                <div className="flex flex-col text-[12px]  ">
                  <p> g.kutateli@gmail.com </p>

                  <m.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: copy !== '' ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={style.copySpan}
                  >
                    {copy}
                  </m.span>
                </div>
              </div>
              {InfoData.map((val: any) => (
                <div key={String(val.link)} className={style.infoBtn}>
                  {val.icon}
                  <Link
                    target="_blank"
                    to={val.link}
                    className="text-[1.2rem] "
                  >
                    {val.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Text area  */}
          <div className={style.textDiv}>
            <div className={style.headerDiv}>
              <h1
                className={` text-[3rem] ${
                  layoutState.greenLayout
                    ? 'text-gray-500'
                    : layoutState.purpleLayOut
                    ? 'text-white font-bold'
                    : ''
                } `}
              >
                Hi, My Name Is <span className="text-orange-500">Giorgi</span>
              </h1>
              <p
                className={`   text-[1.1rem] ${
                  layoutState.greenLayout
                    ? 'text-gray-500'
                    : layoutState.purpleLayOut
                    ? 'text-white font-bold'
                    : ''
                } `}
              >
                I am a web developer
              </p>
            </div>
            <p
              className={`  aboutParagraph   text-[1.1rem]  ${
                layoutState.greenLayout
                  ? 'text-gray-400'
                  : layoutState.purpleLayOut
                  ? 'text-white  textshaddow '
                  : ''
              }`}
            >
              {portfolioData.aboutMe}
            </p>
            <div>
              <h1
                className={`text-[1.6rem] font-medium   max_md:text-center  ${
                  layoutState.greenLayout
                    ? 'text-orange-700'
                    : layoutState.purpleLayOut
                    ? 'text-white  textshaddow '
                    : ''
                }`}
              >
                My Goals
              </h1>
              <p
                className={`  aboutParagraph   text-[1rem]  ${
                  layoutState.greenLayout
                    ? 'text-gray-400'
                    : layoutState.purpleLayOut
                    ? 'text-white  textshaddow '
                    : ''
                }`}
              >
                My current long-term goal is to build up my freelance portfolio
                while working the full time job and to work for myself at the
                end of the day, you can see my
                <Link className="text-blue-400 px-1" to="/projects">
                  projects
                </Link>{' '}
                page, In the short term, I am focused on improving my back-end
                development skills.
              </p>
            </div>
            <div className={style.InreleventDiv}>
              <h1
                className={`text-[1.6rem]   max_md:text-center  ${
                  layoutState.greenLayout
                    ? 'text-blue-900'
                    : layoutState.purpleLayOut
                    ? 'text-white  textshaddow '
                    : ''
                }`}
              >
                Some Inrelevent Infomration About Me
              </h1>
              <ol
                className={`flex flex-col gap-5 text-[1.1rem]   max_md:text-[1.1rem]   max_xl:text-[14px] ${
                  layoutState.greenLayout
                    ? 'text-gray-600 '
                    : layoutState.purpleLayOut
                    ? 'text-white  textshaddow '
                    : ''
                } `}
              >
                {portfolioData.InreleventInfo.map((val: any, index: number) => (
                  <li key={index} className="flex items-center gap-2 ">
                    {val.point}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </m.section>
    </div>
  )
}

export default AboutMe
