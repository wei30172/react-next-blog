import React, { useContext } from 'react'
import Link from 'next/link'
import AuthContext from '../stores/authContext'

const Header = () => {
  const { user, login, logout, authReady } = useContext(AuthContext)
  
  return (
    <div className="container mx-auto px-10 mb-8">
      <nav className="flex items-center mt-5 mb-10 mx-auto">
        <Link href="/"><h1 className="cursor-pointer font-bold text-4xl text-white hover:text-gray-100">CMS Blog</h1></Link>
        <span className="cursor-pointer font-bold text-sm hidden ml-2 lg:inline-block text-white hover:text-gray-100">| React, NextJS, Tailwind CSS, GraphQL</span>
        {authReady && (
          <ul className="flex items-center ml-auto list-none p-0">
            {!user && <li className="inline-block ml-16" onClick={login} className="btn-container align-middle ml-2 text-primary border-primary bg-secondary-100 md:border-4 hover:text-secondary-100 hover:bg-primary">
              Login/Signup</li>}
            {user && <li className="text-sm ml-2 lg:text-lg lg:ml-16">{user.email}</li>}
            {user && <li className="inline-block ml-16" onClick={logout} className="btn-container align-middle ml-2 text-primary border-primary bg-secondary-100 md:border-4 hover:text-secondary-100 hover:bg-primary">
              Logout</li>}
          </ul>
        )}
      </nav>
    </div>
  )
}

export default Header