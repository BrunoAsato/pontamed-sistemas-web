import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '../(public)/layout';
import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default MyApp;
