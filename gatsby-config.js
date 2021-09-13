module.exports = {
  siteMetadata: {
    siteUrl: 'https://huannguyen.tech',
    title: 'Huan Nguyen Site',
    description: "Huan Nguyen's personal website",
    image:
      'https://filedn.com/lT13jTkasxXX88AiCOSJPJF/800px-Whitebeard_Pirates_zps021f0d2e.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    

    // This set of plugins enable MDX from /src/posts folder
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js'),
        },
      },
    },
    // end of MDX config
  ],
};
