import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FeaturedPostCard } from "../components";
import { getFeaturedPosts } from "../services";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const CustomLeftArrow = ({ onClick }) => (
    <div
      onClick={() => onClick()}
      className="absolute left-0 cursor-pointer rounded-full bg-primary py-3 px-3 text-center"
    >
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </svg>
    </div>
  );

  const CustomRightArrow = ({ onClick }) => (
    <div
      onClick={() => onClick()}
      className="absolute right-0 cursor-pointer rounded-full bg-primary py-3 px-3 text-center"
    >
      <svg
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </div>
  );

  return (
    <div className="mb-8">
      <Carousel
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        responsive={responsive}
        itemClass="px-4"
      >
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;
