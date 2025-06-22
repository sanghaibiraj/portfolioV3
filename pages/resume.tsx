import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Resume = () => {
  const resumeData =
    'https://ik.imagekit.io/h7f3y1fnx/Portfolio_Projects/BirajSanghai_CPResume_27Sep.pdf?updatedAt=1728897021325';
    // https://ik.imagekit.io/h7f3y1fnx/Portfolio_Projects/BirajSanghai_CPResume_27Sep.pdf?updatedAt=1728897021325
  const previewData = `${resumeData.substr(
    0,
    resumeData.lastIndexOf('/') + 1
  )}view?embed`;

  return (
    <Layout title="Resume">
      <PageWrapper>
        <PageSection>
          <article>
            <h1 className="intro__text">Resumé.</h1>
            <p>
              Reach out to me via my{' '}
              <b>
                <Link href="/contact">contact page</Link>
              </b>{' '}
            </p>
          </article>
          <br />
          <iframe
            src={resumeData}
            allowFullScreen
            width="740"
            height="780"
            title="Biraj Sanghai Resumé"
          />
        </PageSection>
        <br />
        <br />
        <FooterLink goto="/contact" className="mt-3 mb-5">
          Are you convinced to contact me now ?
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  iframe {
    width: 100%;
    filter: invert(var(--invert)) grayscale(calc(var(--invert) - 0.15));
    border: none;
    height: 44.5rem;
    @media (min-width: 768px) {
      width: 82.8% !important;
      height: 70.4rem !important;
    }
  }
`;
export default Resume;
