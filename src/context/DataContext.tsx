import { createContext, useContext } from 'react'
import { skills } from '../DataUtils'
import { db } from '../firebase/firebase'

type Cell = {}

const DataContext = createContext<Cell | null>(null)

export const DataContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>
}

export const UseContext = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error('Not Wrapped')
  }
  return context
}
