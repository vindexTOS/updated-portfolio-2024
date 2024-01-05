import React from 'react'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import { motion as m } from 'framer-motion'
import { MdZoomOutMap, MdZoomInMap, MdTopic } from 'react-icons/md'
import { SiGmail } from 'react-icons/si'
import { RiMailSendLine } from 'react-icons/ri'
import { FcInfo } from 'react-icons/fc'
import { Link } from 'react-router-dom'
const Contact = () => {
  const {
    CloseWindow,
    skills,
    layoutState,
    dragTurnOff,

    setEmail,
    setTopic,
    setMainMessage,
    contactError,
    EmailHanndler,
    email,
    topic,
    mainMessage,
  } = UsePortfolioContext()

  const [zoom, setZoom] = React.useState<boolean>(false)

  const style = {
    mainDiv: `${
      zoom ? 'w-[100%] h-[100%]  mt-[4rem]  ' : 'w-[70%] h-[80%] '
    } max_lg:w-[100%] max_lg:h-[90%]   max_lg:mt-8 flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `,
    topDiv: `w-[100%]  flex items-center justify-between px-5 h-[50px]  bg-gray-800`,
    section: ` w-[100%] h-[100%]   ${
      layoutState.greenLayout
        ? ' bg-gray-200 '
        : layoutState.purpleLayOut
        ? 'bg-skills-purple'
        : 'bg-white'
    }`,
    header: `text-white text-[1.5rem] `,
    icon: `w-[2rem] h-[2rem] flex  items-center  justify-center font-bold text-[1.5rem] hover:bg-red-500  bg-red-600 text-white rounded-[5px]`,
    iconZoom: `text-[2rem] bg-green-600 hover:bg-green-400 text-white rounded-[5px] max_lg:hidden  `,
    btnDiv: `gap-2 flex `,
    emailDiv: `  flex flex-wrap items-center justify-center h-[90%] overflow-y-scroll py-5      `,
    textDiv: `  resize-none w-[700px] max_md:w-[90%] h-[300px] bg-white rounded-[20px] generalBoxShaddow p-5 outline-none`,
    form: `w-[100%] flex  flex-col items-center justify-center gap-5`,
    topInputDiv: `flex flex-col w-[700px] max_md:w-[90%] gap-2 `,
    inputDiv: `flex bg-white rounded-[20px]  items-start py-2  items-center justify-around px-10 generalBoxShaddow`,
    input: `w-[90%] py-1 outline-none  `,
    sendWrapper: `  gap-5  max_md:flex-col max_md:w-[90%] w-[700px] flex items-center justify-end px-1`,
    sendBtn: `w-[14rem] gap-2 max_sm:w-[310px]  max_md:justify-center max_md:gap-9 max_md:w-[100%] max_md:text-[2rem] flex items-center justify-between px-7 font-medium text-gray-500 hover:text-blue-400 bg-white py-2 rounded-[20px] generalBoxShaddow`,
    bottomDivWrapper: `flex max_md:w-[100%] max_md:flex-col max_md:justify-center max_md:items-start max_md:px-10 max_md:gap-5  justify-around w-[500px] generalBoxShaddow p-2 py-[10px] bg-white  rounded-[20px] `,
    bottomEmailDiv: `flex gap-2 text-[12px] text-gray-600 font-medium  `,
    bottomParagraph: `generalBoxShaddow  p-2 py-[10px] max_md:px-2 bg-white  rounded-[20px] max_md:w-[90%]    w-[700px] flex items-center justify-around px-10`,
  }
  return (
    <div className={style.mainDiv}>
      <m.section
        drag={false}
        dragConstraints={{ left: -1000, right: 1000, top: -500, bottom: 500 }}
        dragElastic={false}
        dragMomentum={false}
        initial={{ y: -2800 }}
        animate={{ y: -70, x: dragTurnOff ? 2 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className={style.section}
      >
        <div className={style.topDiv}>
          <h1 className={style.header}>Contact</h1>
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
        <div className={style.emailDiv}>
          <form className={style.form}>
            <div className={style.topInputDiv}>
              <div className={style.inputDiv}>
                <SiGmail className="text-red-600 text-[1.3rem]" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={style.input}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className={style.inputDiv}>
                <MdTopic className="text-yellow-500 text-[1.5rem]" />
                <input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className={style.input}
                  type="text"
                  placeholder="Topic"
                />
              </div>
            </div>
            <textarea
              value={mainMessage}
              onChange={(e) => setMainMessage(e.target.value)}
              className={style.textDiv}
            >
              Write....
            </textarea>
            <div className={style.sendWrapper}>
              <div className={style.bottomDivWrapper}>
                <div className={style.bottomEmailDiv}>
                  <SiGmail className="text-red-600 text-[1.3rem]" />
                  <p className="outline-none select-text ">
                    g.kutateli@gmail.com
                  </p>
                </div>
              </div>

              <m.button
                onClick={(e) => EmailHanndler(e)}
                whileHover={{ scale: 1.1 }}
                className={style.sendBtn}
              >
                <RiMailSendLine className="text-blue-500 text-[1rem]  max_sm:text-[1.5rem] max_md:text-[2rem]" />
                <p className="max_sm:text-[16px] text-[14px]">
                  Send It On My way
                </p>
              </m.button>
            </div>
            <div className={style.bottomParagraph}>
              <FcInfo className="text-[1.7rem] max_md:text-[3rem] " />
              <p className="text-[1.2rem] font-medium flex  gap-1 max_md:text-[13px] max_md:p-0 max_md:gap-0 max_md:flex-col pr-10 text-gray-400">
                More Contact Infomration Can Be Found On
                <Link className="text-blue-400 font-bold" to="/about">
                  About Page
                </Link>
              </p>
            </div>
            {contactError !== '' && (
              <p className="absolute text-red-500 font-bold text-[2rem]">
                {contactError}
              </p>
            )}
            {contactError !== '' && (
              <p className="absolute text-green-300 font-bold text-[2rem]">
                {contactError}
              </p>
            )}
          </form>
        </div>
      </m.section>
    </div>
  )
}

export default Contact
