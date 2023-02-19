import * as React from 'react';
import styled from 'styled-components';
import Link from './Link';
import RssLink from './RssLink';

type Props = { postSlug?: string; };

export default function Navigation({ postSlug }: Props) {
  return (
    <Container>
      <Nav>
        <Link href="/">/</Link>
        <Arrow />
        <Link href="/blog">blog</Link>
        {postSlug && <Arrow />}
        {postSlug &&
          <Link href={`/blog/${postSlug}`}>
            {postSlug}
          </Link>
        }
      </Nav>
      <RssLink />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1.2rem;
  margin: 5px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-decoration: none;
  gap: 5px;
`;

const Arrow = () => (
  <span css="color: white; font-weight: 500; line-height: 1;">&gt;</span>
);

