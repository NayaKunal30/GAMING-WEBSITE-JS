import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <div className="page-content">
        {children}
      </div>
    </>
  );
};

export default Layout;
