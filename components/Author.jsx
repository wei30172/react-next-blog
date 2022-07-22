import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-16 text-center">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          alt={author.name}
          src={author.photo.url}
          width="80px"
          height="80px"
          className="rounded-full align-middle"
        />
        <h3 className="mt-2 mb-2 text-xl font-bold text-white">
          {author.name}
        </h3>
        <p className="text-white">{author.bio}</p>
      </div>
    </div>
  );
};

export default Author;
