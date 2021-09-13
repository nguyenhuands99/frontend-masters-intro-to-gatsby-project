import * as React from 'react';
import Layout from '../components/layout.js';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPost {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            date(fromNow: true)
            description
            title
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <h1>Hello!! This is Huan from September 2021!!</h1>

      <h2>Check out my recent blog posts!</h2>
      <u1>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
            <small>  posted {post.frontmatter.date}</small>
          </li>
        ))}
      </u1>
    </Layout>
  );
}
