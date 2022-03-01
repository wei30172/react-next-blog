import Head from 'next/head'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections/index'
import { PostCard, Categories, PostWidget } from '../components'

const Home = ({posts}) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => <PostCard key={index} post={post.node}/>)}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticky relative top-8">
            <Categories />
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

// Fetch data when build
export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}