import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(()=> {
    getCategories().then((result) => setCategories(result))
  },[])

  return (
    <div className="card-container">
      <h3 className="text-xl font-semibold border-b-2 border-gray-400 mb-4 pb-4">
        Categories
      </h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories