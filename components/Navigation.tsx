import * as React from 'react';
import styled from 'styled-components';
import Link from './Link';

type Props = { postSlug?: string; };

export default function Navigation({ postSlug }: Props) {
  return (
    <Nav>
      <Link href="/" css="margin: 5px;">/</Link>
      <Arrow />
      <Link href="/blog" css="margin: 5px;">blog</Link>
      {postSlug && <Arrow />}
      {postSlug &&
        <Link href={`/blog/${postSlug}`} css="margin: 5px;">
          {postSlug}
        </Link>
      }
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-size: 1.2em;
  text-decoration: none;
`;

const Arrow = () => (
  <span css="margin: 5px; color: white; fontWeight: 500;">&gt;</span>
);

