import React, { useState, useEffect } from 'react'
import frustrated from '../../assets/icons/frustrated.png'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import { motion as m } from 'framer-motion'
function FooterUpdates() {
  const { learnStack } = UsePortfolioContext()
  const style = {
    currentInfo: `mr-10 max_sm:hidden  flex items-center justify-center h-[80%] bg-green-800 p-5 py-8 outline  outline-[2px] rounded-[20px] outline-orange-700`,
    img: 'w-[50px]',
  }

  const [index, setIndex] = useState<number>(0)
  const [switcher, setSwitcher] = useState<boolean>(false)
  useEffect(() => {
    setSwitcher(!switcher)
    let timeOut = setTimeout(() => {
      if (index > learnStack.length - 2) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, 4000)
    return () => clearInterval(timeOut)
  }, [index, learnStack])

  return (
    <div onClick={() => console.log(learnStack)} className={style.currentInfo}>
      <img className={style.img} src={frustrated} />
      <div>
        <h1 className="text-white font-bold text-[1.2rem]">
          Currently Learning
        </h1>
        <div className="flex items-center justify-center gap-2">
          <m.h1
            animate={{ x: switcher ? 0 : 50 }}
            className=" font-bold text-[1.2rem]"
            style={{ color: `${learnStack[index]?.color}` }}
          >
            {learnStack[index]?.title}
          </m.h1>
          <m.img
            animate={{ x: switcher ? 0 : -90 }}
            className="w-[30px]"
            src={learnStack[index]?.img}
          />
        </div>
      </div>
    </div>
  )
}

export default FooterUpdates
