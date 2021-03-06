import React from "react";
import PropTypes from "prop-types";
import Hero from "./Hero";
import Trailer from "./Trailer";
import StoreLink from "./StoreLink";
import Divider from "./Divider";
import Description from "./Description";
import Screenshot from "./Screenshot";
import Layout from "./navidation/Layout";
import Error from "./error/Error";
import Title from "./Title";


/**
 * This is the main component for your website.
 *
 * It is not recommended to change the JSX code of this file or subcomponents.
 * This might lead to errors in future updates.
 *
 * If required attributes do not exist, an error page will display.
 */
const Home = ({ websiteData }) => {
  const { appid, gameName, description, screenshots, movies, supportInfo, legalNotice }
    = websiteData;
  if (!websiteData || !appid || !gameName || !description) return <Error />;

  return (
    <Layout supportInfo={supportInfo} legalNotice={legalNotice}>
      <main className="main">

        <Hero screenshots={screenshots}>
          <Title gameName={gameName} />
          <Trailer movies={movies} />
        </Hero>

        <article className="content">
          <StoreLink appid={appid} gameName={gameName} />
          <Divider displayWith={description} />
          <Description description={description} />
          <Divider displayWith={screenshots} />
          <Screenshot screenshots={screenshots} />
        </article>

      </main>
    </Layout>
  );
};
Home.propTypes = {
  websiteData: PropTypes.shape({
    appid: PropTypes.number,
    gameName: PropTypes.string,
    description: PropTypes.string,
    movies: PropTypes.array,
    screenshots: PropTypes.array,
    legalNotice: PropTypes.string,
    supportInfo: PropTypes.object,
  }).isRequired,
};
export default Home;