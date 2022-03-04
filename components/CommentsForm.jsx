import React, { useState, useEffect, useContext } from 'react'
import { submitComment } from '../services'
import AuthContext from '../stores/authContext'

const CommentsForm = ({ slug }) => {
  const { user, authReady, login } = useContext(AuthContext)
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', comment: '', storeData: false })

  useEffect(() => {
    if (authReady) {
      setLocalStorage(window.localStorage)
      const initalFormData = {
        name: window.localStorage.getItem('name') || '',
        email: window.localStorage.getItem('email') || '',
        storeData: window.localStorage.getItem('name') || '',
      }
      setFormData(initalFormData)
    }
  }, [user, authReady])

  const onInputChange = (e) => {
    const { target } = e
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }))
    }
  }

  const handleCommentSubmit = () => {
    setError(false)
    const { name, email, comment, storeData } = formData
    if (!name || !email || !comment) {
      setError(true)
      return
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    }

    if (storeData) {
      localStorage.setItem('name', name)
    } else {
      localStorage.removeItem('name')
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = ''
          }
          formData.comment = ''
          setFormData((prev) => ({
            ...prev,
            ...formData,
          }))
          setShowSuccessMessage(true)
          setTimeout(() => {
            setShowSuccessMessage(false)
          }, 6000)
        }
      })
  }

  return (
    <div className="card-container">
      <h3 className="text-xl mb-8 font-semibold border-b-2 border-gray-400 pb-4">Reply the post</h3>
      {authReady && (<>
        {!user && <p className='my-8'>Please
          <span onClick={login} className='btn-container align-middle mx-2 text-primary hover:text-secondary-100 hover:bg-primary'>
            logged in
          </span>
        to leave comments...</p>}
        
        {user && (<>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <textarea
              name="comment"
              placeholder="Comment"
              value={formData.comment}
              onChange={onInputChange}
              className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <input
              name="name"
              placeholder="Nickname"
              type="text"
              value={formData.name}
              onChange={onInputChange}
              className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            />
            {/* <input
              name="email"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={onInputChange}
              className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            /> */}
            <div>
              <input
                id="storeData"
                name="storeData"
                type="checkbox"
                value="true"
                checked={formData.storeData}
                onChange={onInputChange}
              />
              <label
                className="text-gray-500 text-sm cursor-pointer ml-2"
                htmlFor="storeData"
              >
                Save my nickname in this browser for the next time I comment.
              </label>
            </div>
          </div>
          {error && <p className="text-xs text-red-500">All fields are required</p>}
          <div className="mt-8">
            <button
              type="button"
              onClick={handleCommentSubmit}
              className="btn-container bg-primary text-white hover:tracking-wider"
            >
              Post Comment
            </button>
            {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
          </div>
        </>
        )}
      </>)}
    </div>
  )
}

export default CommentsForm