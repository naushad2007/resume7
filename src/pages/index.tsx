import type { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import Hero from 'src/home/hero';
import Features from 'src/home/features';
import NavBar from 'src/home/navbar';

const Main = styled.main`
  padding: 10px 5% 0;
  margin: auto;
  max-width: 1200px;

  & > div {
    margin-bottom: 25px;
  }
`;

const Home: NextPage = () => {
  return (
    
      <Head>
        <title>Resume Builder</title>
        <meta name="keyword"     content="Single Page Resume Builder for everyone" />
        <meta name="keyword"     content="Resume Builder" />
        <meta name="keyword"     content="Resume maker" />
        <meta name="keyword"     content="Cv maker" />
        <meta name="keyword"     content="Bio data maker" />
        <meta name="description" content="Single Page Resume Builder for everyone" />
        <meta name="description" content=" Resume Builder " />
        <meta name="description" content="Resume maker" />
        <meta name="description" content="Cv maker" />
        <meta name="description" content="Bio data maker" />
        <!-- Primary Meta Tags -->

<meta name="title" content="Single Page Resume Builder">
<meta name="description" content="Bio data maker">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://resumbuilder.netlify.app/">
<meta property="og:title" content="Single Page Resume Builder">
<meta property="og:description" content="Bio data maker">
<meta property="og:image" content="">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://resumbuilder.netlify.app/">
<meta property="twitter:title" content="Single Page Resume Builder">
<meta property="twitter:description" content="Bio data maker">
<meta property="twitter:image" content="">
  
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <NavBar />
        <Hero />
        <Features />
      </Main>
    </>
  );
};

export default Home;
