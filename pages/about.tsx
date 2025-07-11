
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import { Date, Github, Codeforces, Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  href="https://github.com/sanghaibiraj"
                >
                  Engineering{' '}
                  <small>
                    <Github />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  id="cardHover"
                  href="https://github.com/sanghaibiraj"
                  className="float-right"
                >
                  View Github
                </a>
                <p>
                  The power of first impressions cannot be underestimated, and the gateway to capitalizing on them lies in exceptional website design. An outstanding website transcends mere aesthetics and extends its influence to encompass seamless functionality and user-friendly navigation. Drawing upon my expertise as a seasoned programmer, I possess the unique ability to tackle intricate technical challenges while crafting websites that exude sleekness and visual allure. Moreover, my extensive knowledge of recognized technical standards is complemented by my proficiency in modern building practices, ensuring that every aspect of your website is finely tuned to perfection.
                </p>
              </li>
              <li>
                <Link href="/projects" aria-label="Open Products Page">
                  Product{' '}
                  <small>
                    <Product />
                  </small>
                </Link>
                <Link
                  href="/projects"
                  aria-label="Open Products Page"
                  id="cardHover"
                  className="float-right"
                >
                  View Products
                </Link>
                <p>
                  While I may not fit the conventional mold of a product manager, my diverse skill set in research, product design, and product coordination empowers me to drive the growth of a product from its inception. As an exceptional analytical thinker, I possess the ability to uphold the product's vision throughout its entire journey, effectively bridging the technical and product aspects. By leveraging my expertise, I can navigate the path from 0 to 1, ensuring the product's success at every stage.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my sports programming section"
          id='achievements'
        >
          <article>
            <h4>Sports Programming.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Codeforces Profile"
                  href="https://codeforces.com/profile/biraj01"
                >
                  Codeforces (Expert, Highest Rating 1643).{' '}
                </a>
                <a
                  className="float-right"
                  tabIndex={-1}
                  href="https://codeforces.com/profile/biraj01"
                >
                  <b>biraj01</b>
                </a>
                <p>
                  Participated in over 60 contests and solved 400+ problems. Ranked 602 out of 63,837 participants (top 1%) in Codeforces Round 920 (Div. 3). This platform has helped me improve my ability to think under pressure and refine my algorithmic skills across diverse problem sets.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open CodeChef Profile"
                  href="https://www.codechef.com/users/biraj01"
                >
                  CodeChef (5-star, Highest Rating 2035).{' '}
                </a>
                <a
                  className="float-right"
                  tabIndex={-1}
                  href="https://www.codechef.com/users/biraj01"
                >
                  <b>biraj01</b>
                </a>
                <p>
                  Engaged in over 40 contests and tackled more than 500 problems. Achieved a rank of 44 out of 2,244 competitors (top 2%) in the CodeChef Starters 123 Division 2 Contest. My journey on CodeChef has been instrumental in building and strengthening my problem-solving foundation.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open LeetCode Profile"
                  href="https://leetcode.com/sanghaibiraj"
                >
                  LeetCode (Guardian, Top 1.5%, Maximum Rating 2157).{' '}
                </a>
                <a
                  className="float-right"
                  tabIndex={-1}
                  href="https://leetcode.com/sanghaibiraj"
                >
                  <b>sanghaibiraj</b>
                </a>
                <p>
                  Solved 750+ challenges of varying complexities. Ranked 318 out of 36,727 participants (top 1%) in Leetcode Weekly Contest 442 is one of the best contest performances. LeetCode has allowed me to continuously sharpen my algorithmic thinking while tackling real-world coding problems.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open AtCoder Profile"
                  href="https://atcoder.jp/users/biraj01"
                >
                  AtCoder (Green, 5Kyu, Rating 1056).
                </a>
                <a
                  className="float-right"
                  tabIndex={-1}
                  href="https://atcoder.jp/users/biraj01"
                >
                  <b>biraj01</b>
                </a>
                <p>
                  Participating in contests on AtCoder has further honed my skills by challenging my ability to come up with efficient and optimized solutions in a high-pressure environment. Consistently working towards improving my rating and ranking across this platform.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my achievements section"
        >
          <article>
            <h4>Achievements.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open ICPC Regional Contest Page"
                  href=""
                >
                  The 2023 ICPC Asia Amritapuri Doublesite Regional Contest.
                </a>
                <a className="float-right" tabIndex={-1}>
                  <b>Nov 2023 - Jan 2024</b>
                </a>
                <p>
                  Secured qualification for the ICPC regional round with a commendable top 650 rank in the preliminary round, earning the first rank in college. Achieved an impressive 135th position among the top 250 selected teams in the Amritapuri regional round.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Codeyudh Contest Page"
                  href=""
                >
                  Codeyudh 1.0 Contest.
                </a>
                <a className="float-right" tabIndex={-1}>
                  <b>April 2024</b>
                </a>
                <p>
                  Earned champion status (rank 1) by winning four successive head-to-head competitive programming matchups. Qualified from an initial round with 150+ participants to the top 16, eventually securing the title.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open PyC Contest Page"
                  href=""
                >
                  TMLE Busters Contest (Organized by PyC Coding Club, IIIT
                  Bhagalpur).
                </a>
                <a className="float-right" tabIndex={-1}>
                  <b>October 2023</b>
                </a>
                <p>
                  Ranked 1st in the TMLE Busters contest, demonstrating exceptional problem-solving skills and competitive programming expertise, leading the leaderboard with a flawless performance.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/education" className="mt-3 mb-5">
          Lets Continue To My Education.
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

export default About;
