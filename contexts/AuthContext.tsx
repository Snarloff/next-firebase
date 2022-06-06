import { createContext, useState } from 'react'
import { GithubAuthProvider } from 'firebase/auth'
import Router from 'next/router'
import firebase from 'lib/firebase'

interface LayoutProps {
  children: React.ReactNode;
}

interface AuthContextInterface {
  user: any,
  loading: any,
  signin: () => Promise<void>,
  signout: () => Promise<void>
}

const AuthContext = createContext<Partial<AuthContextInterface>>({})

export const AuthProvider = ({ children }: LayoutProps) => {

  const [user, setUser] = useState(null || false)
  const [loading, setLoading] = useState(true)

  const signin = async (): Promise<void> => {
    try {
      setLoading(true)
      const response: any= await firebase.auth().signInWithPopup(new GithubAuthProvider())
      setUser(response.user)
      Router.push('/dashboard')
    } finally {
      setLoading(false)
    }
  }
  
  const signout = async (): Promise<void> => {
    try {
      Router.push('/')
      await firebase.auth().signOut()
      return setUser(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = AuthContext.Consumer

export default AuthContext
