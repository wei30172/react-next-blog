import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="md:flex justify-between border-b-2 w-full py-8">
        <div>
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white hover:text-gray-100">CMS Blog</span>
          </Link>
          <span className="cursor-pointer font-bold text-sm hidden ml-2 lg:inline-block text-white hover:text-gray-100">| React, NextJS, Tailwind CSS, GraphQL</span>
        </div>
        <div className='flex justify-end'>
          <Link href="/user">
            <span className="btn-container align-middle ml-2 text-primary border-primary bg-secondary-100 md:border-4 hover:text-secondary-100 hover:bg-primary">
              Sign up
            </span>
          </Link>
          <Link href="/user">
            <span className="btn-container align-middle ml-2 text-primary border-primary bg-secondary-100 md:border-4 hover:text-secondary-100 hover:bg-primary">
              Log in
            </span>
          </Link>
          <Link href="/user">
            <span className="btn-container align-middle ml-2 text-primary border-primary bg-secondary-100 md:border-4 hover:text-secondary-100 hover:bg-primary">
              Log out
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header