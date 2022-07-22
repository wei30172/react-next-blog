import Head from "next/head";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget } from "../components";

const Home = ({ posts }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <Categories />
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// Fetch data when build
export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
};
