/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

/* -------------------------- Image Dependecy -------------------------- */

import {
  IconRight,
  Linkedin,
  Github,
  Instagram,
  Codeforces,
  Leetcode,
  Codechef,
} from '../Icons';

/* ---------------------------- Style Dependency ---------------------------- */
import { SocialMedia } from '../Layout/style';

interface IFooterLink {
  children: string | React.ReactNode;
  goto?: string;
}

const FooterLink: React.FC<IFooterLink &
  React.AnchorHTMLAttributes<HTMLParagraphElement>> = ({
  children,
  goto,
  ...rest
}) => {
  return (
    <>
      <FooterStyle>
        <Link href={`${goto}`}>
          <p {...rest}>
            {children}
            <IconRight />
          </p>
        </Link>
      </FooterStyle>
      <SocialMedia>
        {/* <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/code_wonders"
          aria-label="Go To Adenekan Wonderful Twitter Page"
          title="Twitter Page"
        >
          <Twitter />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/AdenekanWonderful"
          aria-label="Go To Adenekan Wonderful Facebook Page"
          title="Facebook Page"
        >
          <Facebook />
        </a> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/biraj-sanghai-iiitbh"
          aria-label="Go To Biraj Sanghai Linkedin Page"
          title="Linkedin Page"
        >
          <Linkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/sanghaibiraj"
          aria-label="Go To Biraj Sanghai Github Page"
          title="Github Page"
        >
          <Github />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://codeforces.com/profile/biraj01"
          aria-label="Go To Biraj Sanghai Codeforces Page"
          title="Codeforces Page"
        >
          <Codeforces />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://leetcode.com/u/sanghaibiraj/"
          aria-label="Go To Biraj Sanghai Leetcode Page"
          title="Leetcode Page"
        >
          <Leetcode />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.codechef.com/users/biraj01"
          aria-label="Go To Biraj Sanghai Codechef Page"
          title="Codechef Page"
        >
          <Codechef />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/its._biraj/"
          aria-label="Go To Biraj Sanghai Instagram Page"
          title="Instagram Page"
        >
          <Instagram />
        </a>
      </SocialMedia>
      <p>Inspired by <a href="https://github.com/adenekan41"> Adenekan Wonderful </a>. Coded in Visual Studio Code. </p>
    </>
  );
};

const FooterStyle = styled.footer`
  p {
    font-size: var(--font-sm);
    transition: all 1s ease;

    svg {
      margin-left: 1rem;
      animation-name: forward;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }

    &:hover {
      @keyframes forward {
        from {
          margin-left: 1rem;
        }
        to {
          margin-left: 2rem;
        }
      }
    }
  }
`;

export default FooterLink;
