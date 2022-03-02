import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className="text-center">
      <p className='text-lg'>Ooops...That page cannot be found :(</p>
      <p className='my-4'>Going back to the <Link href="/">
        <a className='btn-container bg-[#4979ff] text-white'>Homepage</a>
      </Link> is 3 seconds...</p>
    </div>
  )
}

export default NotFound