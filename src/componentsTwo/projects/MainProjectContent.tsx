import React, { FC, useState, useRef, useReducer, Dispatch } from 'react'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import { AiOutlineBars } from 'react-icons/ai'
import folder from '../../assets/icons/folderclosed.png'
import folderopen from '../../assets/icons/folderopen.png'
import ProjectDiv from './ProjectDiv'
import ProjectsRecurs from './ProjectsRecurs'
import { MainProjects } from '../../DataUtils'
import OuterProjectFolder from './OuterProjectFolder'
type MainProps = {
  zoom: boolean
}

export type FolderState = {
  main: boolean
  small: boolean
  work: boolean
}

export type FolderAction = {
  type: string
}
const MainProjectContent: FC<MainProps> = ({ zoom }) => {
  const {
    projectsData,
    projectDispatch,
    projectState,
    layoutState,
    mainProjectsData,
    miniProjects,
    workChallanges,
  } = UsePortfolioContext()
  const [hideFolders, setHideFolders] = useState<boolean>(true)
  const style = {
    mainContent: ` flex w-[100%] h-[90%] p-2 gap-5    justify-between  max_md:flex-col `,
    folders: `w-[400px] max_md:w-[100%] ${
      layoutState.greenLayout
        ? 'bg-white '
        : layoutState.purpleLayOut
        ? 'bg-gray-900 bg-opacity-70'
        : ''
    } h-[100%] flex flex-col px-10 gap-5 ${hideFolders && 'max_sm:hidden'}`,
    header: `flex text-[1.8rem] font-bold px-5  folderHeader ${
      layoutState.greenLayout
        ? 'text-gray-700'
        : layoutState.purpleLayOut
        ? 'text-gray-200  '
        : ''
    }`,
    folder: `hover:bg-gray-200 w-[100%] text-gray-400  h-[3rem] flex  folderFont items-center text-[1rem] gap-2 cursor-pointer px-4`,
    projectDiv: `w-[100%]  overflow-y-scroll   h-[100%] `,
    folderDiv: `flex flex-col gap-2 justify-start items-start `,
    icon: `w-[2rem]`,
    dropDownDiv: `w-[100%] flex  items-center  gap-10 px-5 sm:hidden ${
      layoutState.purpleLayOut && 'bg-gray-900 bg-opacity-60 '
    }`,
    dropDown: `text-[3rem]  ${layoutState.purpleLayOut && 'text-gray-100 '} `,
  }
  const scrollRef = useRef(null)
  React.useEffect(() => {
    const scrollEvent = (scrollRef.current as unknown) as HTMLDivElement
    if (scrollEvent) {
      scrollEvent.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [projectState.productID])

  const FolderDirReducer = (state: FolderState, action: FolderAction) => {
    switch (action.type) {
      case 'main':
        return { ...state, main: !state.main }
      case 'small':
        return { ...state, small: !state.small }
      case 'work':
        return { ...state, work: !state.work }
      default:
        return state
    }
  }

  const [folderState, folderDispatch] = useReducer(FolderDirReducer, {
    main: false,
    small: false,
    work: false,
  })

  return (
    <section className={style.mainContent}>
      <div
        onClick={() => setHideFolders(!hideFolders)}
        className={style.dropDownDiv}
      >
        <AiOutlineBars className={style.dropDown} />
        <h1
          className={`text-[1.6rem]  ${
            layoutState.greenLayout
              ? 'text-gray-800'
              : layoutState.purpleLayOut
              ? 'text-gray-200 font-bold '
              : ''
          } `}
        >
          Folders
        </h1>
      </div>
      <div className={style.folders}>
        <h1 className={style.header}>Projects</h1>
        <div className={style.folderDiv}>
          <OuterProjectFolder
            title={'Freelance'}
            data={workChallanges}
            Dispatch={folderDispatch}
            type={'work'}
            state={folderState.work}
          />
          {/* <button onClick={() => console.log(mainProjectsData)}>ON</button> */}
          <OuterProjectFolder
            title={'Projects'}
            data={mainProjectsData}
            Dispatch={folderDispatch}
            type={'main'}
            state={folderState.main}
          />
          <OuterProjectFolder
            title={'Side Projects'}
            data={miniProjects}
            Dispatch={folderDispatch}
            type={'small'}
            state={folderState.small}
          />
        </div>
      </div>
      <div className={style.projectDiv}>
        <ProjectDiv scrollRef={scrollRef} zoom={zoom} />
      </div>
    </section>
  )
}

export default MainProjectContent
