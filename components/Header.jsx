import React, { useContext } from "react";
import Link from "next/link";
import AuthContext from "../stores/authContext";

const Header = () => {
  const { user, login, logout, authReady } = useContext(AuthContext);

  return (
    <div className="container mx-auto mb-8 px-10">
      <nav className="mx-auto mt-5 mb-10 flex items-center">
        <Link href="/">
          <h1 className="cursor-pointer text-4xl font-bold text-white hover:text-gray-100">
            CMS Blog
          </h1>
        </Link>
        <span className="ml-2 hidden cursor-pointer text-sm font-bold text-white hover:text-gray-100 lg:inline-block">
          | React, NextJS, Tailwind CSS, GraphQL
        </span>
        {authReady && (
          <ul className="ml-auto flex list-none items-center p-0">
            {!user && (
              <li
                className="ml-16 inline-block"
                onClick={login}
                className="btn-container ml-2 border-primary bg-secondary-100 align-middle text-primary hover:bg-primary hover:text-secondary-100 md:border-4"
              >
                Login/Signup
              </li>
            )}
            {user && (
              <li className="ml-2 text-sm lg:ml-16 lg:text-lg">{user.email}</li>
            )}
            {user && (
              <li
                className="ml-16 inline-block"
                onClick={logout}
                className="btn-container ml-2 border-primary bg-secondary-100 align-middle text-primary hover:bg-primary hover:text-secondary-100 md:border-4"
              >
                Logout
              </li>
            )}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;
