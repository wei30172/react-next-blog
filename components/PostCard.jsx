import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'

const PostCard = ({ post }) => {
  // console.log(post)
  return (
    <div className='card-container'>
      <div className="relative overflow-hidden shadow-lg pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="img-container absolute h-80 w-full" />
      </div>
      <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-blue-600 text-3xl font-semibold '>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
            unoptimized
            src={post.author.photo.url}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
          />
          <p className="inline align-middle font-medium text-lg text-gray-700 ml-2">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <p className="first-letter:font-semibold text-center font-normal text-lg text-gray-700 px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
        <Link href={`/post/${post.slug}`}>
          <span className="btn-container bg-primary text-white hover:shadow-inner">Read more</span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard