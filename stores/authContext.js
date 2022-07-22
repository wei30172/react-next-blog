import { createContext, useEffect, useState } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
})

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [authReady, setAuthReady] = useState(false)

  useEffect(() => {
    netlifyIdentity.on('login', (user) => {
      setUser(user)
      netlifyIdentity.close()
      // console.log('log in')
    })

    netlifyIdentity.on('logout', () => {
      setUser(null)
      // console.log('log out')
    })

    netlifyIdentity.on('init', (user) => {
      setUser(user)
      setAuthReady(true)
      // console.log('init')
    })

    // init netlify identity connection
    netlifyIdentity.init()

    return () => { // unregister event listener
      netlifyIdentity.off('login')
      netlifyIdentity.off('logout')
      netlifyIdentity.off('init')
    }
  }, [])

  const login = () => {
    netlifyIdentity.open()
  }

  const logout = () => {
    netlifyIdentity.logout()
  }

  if (user) {
    window.localStorage.setItem('email', user.email)
  }
  const context = { user, login, logout, authReady }

  return (
    <AuthContext.Provider value={context}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext
