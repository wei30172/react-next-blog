import React, { useState, useEffect } from 'react'
// import { submitComment } from '../services'

const index = () => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })

  useEffect(() => {
    setLocalStorage(window.localStorage)
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      password: window.localStorage.getItem('email')
    }
    setFormData(initalFormData)
  }, [])

  const onInputChange = (e) => {
    const { target } = e
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleCommentSubmit = () => {
    setError(false)
    const { name, email, password } = formData
    if (!name || !email || !password) {
      setError(true)
      return
    }

    const commentObj = {
      name,
      email,
      password
    }
  }

  return (
    <div className="container mx-auto px-10 mb-8">

      <div className="card-container">
        <h3 className="text-xl mb-8 font-semibold border-b-2 border-gray-400 pb-4">Log In</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            name="name"
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={onInputChange}
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={onInputChange}
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={onInputChange}
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          />
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
      </div>
    </div>
  )
}

export default index