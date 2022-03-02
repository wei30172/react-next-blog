import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-16 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          alt={author.name}
          src={author.photo.url}
          width="80px"
          height="80px"
          className="align-middle rounded-full"
        />
        <h3 className="text-white mt-2 mb-2 text-xl font-bold">{author.name}</h3>
        <p className="text-white">{author.bio}</p>
      </div>
    </div>
  )
}

export default Author