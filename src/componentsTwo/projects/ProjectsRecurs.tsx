import React, { FC, useState } from 'react'
import { ProjectItemType } from '../../DataUtils'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import folder from '../../assets/icons/folderclosed.png'
import folderopen from '../../assets/icons/folderopen.png'
type ProjectRecursProps = {
  data: ProjectItemType
  index: number
}

const ProjectsRecurs: FC<ProjectRecursProps> = ({ data }, index) => {
  const { projectDispatch, projectState } = UsePortfolioContext()
  const [hideFolders, setHideFolders] = useState<boolean>(true)

  return (
    <div
      key={index + data.id}
      onClick={() => {
        projectDispatch({
          type: 'id',
          payload: data.id,
        }),
          setHideFolders(true)
        // console.log(data.id)
      }}
      className={`hover:bg-gray-200 w-[100%] text-gray-400  h-[3rem] flex  folderFont items-center text-[1rem] gap-2 cursor-pointer px-4 ${
        projectState.productID === data.id && 'bg-gray-200  '
      }`}
    >
      <img
        className={`w-[2rem]`}
        src={projectState.productID === data.id ? folderopen : folder}
      />
      {data.title}
    </div>
  )
}

export default ProjectsRecurs
