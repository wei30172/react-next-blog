import React, { useEffect, useState } from "react";
import { getCategories } from "../services";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className="card-container">
      <h3 className="mb-4 border-b-2 border-gray-400 pb-4 text-xl font-semibold">
        Categories
      </h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`block cursor-pointer ${
              index === categories.length - 1 ? "border-b-0" : "border-b"
            } mb-3 pb-3`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
