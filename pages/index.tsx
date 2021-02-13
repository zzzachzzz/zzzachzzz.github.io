import * as React from 'react';
import styled from 'styled-components';
import Head from 'next/head'
import Link from '@/components/Link';
import Terminal from '@/components/Terminal';

export default function Index() {
  return (
    <Container>
      <Head>
        <title>zzzachzzz.github.io</title>
        <meta
          name="description"
          content="Personal site and web development blog by Zach Rosenberger"
        />
      </Head>
      <Navbar>
        <Link href="/blog" css="font-size: 0.9em;">Blog</Link>
      </Navbar>
      <TerminalBackground>
        <Terminal />
      </TerminalBackground>
    </Container>
  );
}

const Container = styled.div`
  font-family: sans-serif;
  color: white;
  background-color: #3e4d4f;
`;

const TerminalBackground = styled.div`
  background-image: url("/assets/ubuntu_wallpaper.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = styled.nav`
  height: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

