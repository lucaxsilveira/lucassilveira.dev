import React, { createContext, useContext, useState } from 'react'

type UserBioType = {
  text: string
  techs?: [string]
}

type PropsUserContext = {
  bio: UserBioType
  setBio: React.Dispatch<React.SetStateAction<UserBioType>>
}

const DEFAULT_STATE = {
  bio: {
    text: '',
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
