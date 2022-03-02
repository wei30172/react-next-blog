import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getRecentPosts, getSimilarPosts } from '../services'
import Link from 'next/link'
import moment from 'moment'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(()=> {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>setRelatedPosts(result))
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result)
      })
    }
  }, [slug])

  return (
    <div className="card-container">
      <h3 className="text-xl font-semibold border-b-2 border-gray-400 mb-8 pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              unoptimized
              src={post.featuredImage.url}
              alt={post.title}
              width="60px"
              height="60px"
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={index}>
              <span className="text-md cursor-pointer hover:font-bold">{post.title}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget