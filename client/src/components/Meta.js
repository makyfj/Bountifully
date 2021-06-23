import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Bountifully",
  description: "We sell the best soaps for cheap and great quality",
  keywords: "soap, quality, buy soaps, cheap soaps, excellent soaps",
};

export default Meta;
