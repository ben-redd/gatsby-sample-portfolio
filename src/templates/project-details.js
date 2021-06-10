import React from 'react';
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { details, html5, featured } from '../styles/project-details.module.css';
import { graphql } from 'gatsby';

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { stack, title, featuredImg } = data.markdownRemark.frontmatter;
  console.log(html);
  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <GatsbyImage image={getImage(featuredImg)} alt="banner image" />
        </div>
        <div className={html5} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
