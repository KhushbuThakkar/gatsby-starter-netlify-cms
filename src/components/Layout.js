import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/NewNavbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div className="has-navbar-fixed-bottom">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="dot" sizes="180x180" href="/img/dot.png" />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Dancing+Script"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Ledger&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
