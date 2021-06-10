import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function projects({ data }) {
  const projectsArr = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Portfolio Projects</h1>
        <h3>Projects I've Made</h3>
        <div className={styles.projects}>
          {projectsArr.map((project) => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <GatsbyImage
                image={getImage(project.frontmatter.thumb)}
                alt="project thumbnail"
              />
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

//export page query
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          stack
          slug
          date
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  }
`;
