import React from 'react';
import styled from 'styled-components';
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Education = () => {
    return (
        <Layout title="Education">
            <PageSection>
                <PageWrapper
                    className="mb-5"
                    aria-label="You are now in my educational background section"
                >
                    <h1 className="intro__text">Education.</h1> <br />
                    <article>
                        <ul className="timeline">
                            <li className="mt-2">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open IIIT Bhagalpur Website"
                                    href="https://iiitbh.ac.in/"
                                >
                                    Indian Institute of Information Technology, Bhagalpur
                                </a>
                                <a className="float-right" tabIndex={-1}>
                                    <b>Nov 2022 - Jul 2026</b>
                                </a>
                                <p>
                                    Bachelor of Technology in Computer Science Engineering<br />
                                    CGPA: 8.97 (absolute)
                                </p>
                            </li>
                        </ul>
                    </article>
                </PageWrapper>

                <PageWrapper
                    className="mb-5"
                    aria-label="You are now in my experience section"
                >
                    <article>
                        <h4>Experience & Activities.</h4>
                        <ul className="timeline">
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id="cardHover"
                                    aria-label="AlgoZenith Chapter"
                                    href="#"
                                >
                                    CP/DSA Lead | AlgoZenith Chapter | IIIT Bhagalpur
                                </a>
                                <a className="float-right" tabIndex={-1}>
                                    <b>Aug 2024 - Present</b>
                                </a>
                                <p>
                                    Orchestrated "Algoquest", a 30-day DSA challenge, engaging 20+ students through consistent practice.
                                </p>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id="cardHover"
                                    aria-label="Student Gymkhana"
                                    href="#"
                                >
                                    Frontend Developer | IIIT Bhagalpur Student Gymkhana
                                </a>
                                <a className="float-right" tabIndex={-1}>
                                    <b>May 2024 - Jul 2024</b>
                                </a>
                                <p>
                                    Crafted responsive frontends for the Technical and Hostel Board websites using React and Tailwind CSS. Incorporated FFmpeg for image optimization and GSAP for animations, enhancing performance and UI/UX.
                                </p>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id="cardHover"
                                    aria-label="OPCODE"
                                    href="#"
                                >
                                    Project Maintainer | OPCODE (Open-Source Spring Fest)
                                </a>
                                <a className="float-right" tabIndex={-1}>
                                    <b>Mar 2024 - Apr 2024</b>
                                </a>
                                <p>
                                    Led 'Slithercraft' & 'Codecrack', ensuring 100% timely delivery, resolving 60+ issues & reviewing 150+ PRs.
                                </p>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id="cardHover"
                                    aria-label="PyC Coding Club"
                                    href="#"
                                >
                                    Club Lead | PyC | Coding Club of IIIT Bhagalpur
                                </a>
                                <a className="float-right" tabIndex={-1}>
                                    <b>Jan 2024 - Feb 2025</b>
                                </a>
                                <p>
                                    Guided 40+ students in Competitive Programming and Data Structures & Algorithms, improved rankings, and organized 5 contests, including one with 200+ participants.
                                </p>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id="cardHover"
                                    aria-label="PyC Incharge"
                                    href="#"
                                >
                                    Incharge | PyC | IIIT Bhagalpur
                                </a>
                                <a className="float-right" tabIndex={-1}>
                                    <b>Jul 2023 - Jan 2024</b>
                                </a>
                                <p>
                                    Managed club activities and organized programming competitions for students to enhance their coding skills.
                                </p>
                            </li>
                        </ul>
                    </article>
                </PageWrapper>
            </PageSection>

            <PageWrapper>
                <FooterLink goto="/projects" className="mt-3 mb-5">
                    Learn More About My Projects.
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
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default Education;
