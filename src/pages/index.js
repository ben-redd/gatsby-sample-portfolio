import { Link, graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { header, btn } from '../styles/home.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop and Deploy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            veniam perferendis sint eveniet sed vitae ipsa mollitia inventore,
            consectetur debitis aliquid harum nam libero laborum ducimus! Sed
            vel reprehenderit dignissimos?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            veniam perferendis sint eveniet sed vitae ipsa mollitia inventore,
            consectetur debitis aliquid harum nam libero laborum ducimus! Sed
            vel reprehenderit dignissimos?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            veniam perferendis sint eveniet sed vitae ipsa mollitia inventore,
            consectetur debitis aliquid harum nam libero laborum ducimus! Sed
            vel reprehenderit dignissimos?
          </p>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage image={getImage(data.file)} alt="banner image" />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(formats: NO_CHANGE, placeholder: BLURRED)
      }
    }
  }
`;
