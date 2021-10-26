import React, { createContext, useContext, useState } from 'react'
import { RichTextBlock } from 'prismic-reactjs'

export type Tech = {
  tech: RichTextBlock[]
}

type UserBioType = {
  text: RichTextBlock[]
  techs?: Tech[]
}

type PropsUserContext = {
  bio: UserBioType
  setBio: React.Dispatch<React.SetStateAction<UserBioType>>
}

const DEFAULT_STATE = {
  bio: {
    text: [] as RichTextBlock[],
    techs: null,
  },
  setBio: () => ({}),
}

const UserContext = createContext<PropsUserContext>(DEFAULT_STATE)

const UserContextProvider: React.FC = ({ children }) => {
  const [bio, setBio] = useState(DEFAULT_STATE.bio)

  return (
    <UserContext.Provider value={{ bio, setBio }}>
      {children}
    </UserContext.Provider>
  )
}

function useUserContext(): PropsUserContext {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('use toast must be used within toast provider')
  }
  return context
}

export { UserContextProvider, useUserContext }

export default UserContext
