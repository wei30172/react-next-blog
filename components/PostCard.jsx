import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const PostCard = ({ post }) => {
  // console.log(post)
  return (
    <div className="card-container">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-lg">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="img-container absolute h-80 w-full"
        />
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-700 hover:text-blue-600 ">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <Image
            unoptimized
            src={post.author.photo.url}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="rounded-full align-middle"
          />
          <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <p className="mb-8 px-4 text-center text-lg font-normal text-gray-700 first-letter:font-semibold lg:px-20">
        {post.excerpt}
      </p>
      <div className="transform text-center transition duration-300 ease-out hover:scale-125 hover:bg-opacity-50">
        <Link href={`/post/${post.slug}`}>
          <span className="btn-container bg-primary text-white hover:shadow-inner">
            Read more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
