import React, { useEffect, useState } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result)
    })
  }, [])
  
  return (
    <>
      {comments.length > 0 && (
        <div className="card-container">
          <h3 className="text-xl mb-8 font-semibold border-b-2 border-gray-400 pb-4">
            {comments.length}
            {' '}
            Comments
          </h3>
            {comments.map((comment, index) => (
              <div key={index} className="border-b-2 mb-4 pb-4">
                <p className="mb-4">
                  <span className="font-semibold">{comment.name}</span>
                  {' '}on{' '}
                  {moment(comment.createdAt).format('MMM DD, YYYY')}
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full font-body">{parse(comment.comment)}</p>
              </div>
            ))}
        </div>
      )}
    </>
  )
}

export default Comments