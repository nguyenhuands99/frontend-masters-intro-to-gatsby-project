import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';


export function Seo(props) {
  const data = useStaticQuery(graphql`
    query GetSiteMetadata {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `);

  const defaults = data?.site?.siteMetadata;

  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const image = new URL(props.image || defaults.image, defaults.siteUrl);
  const url = new URL(props.path || '/', defaults.siteUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url}/>
      <meta property="og:type" content="webstite"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      {image && <meta name="og:image" content={image} />}

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content={description}/>
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
