import React, { useEffect, useState } from "react";
import { AuthContextProvider } from "../stores/authContext";
import { Layout } from "../components";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
