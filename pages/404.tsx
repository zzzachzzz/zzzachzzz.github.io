import styled from 'styled-components';
import Code from '@/components/Code';
import Link from '@/components/Link';

export default function Custom404() {
  return (
    <Div>
      <Code css="font-size: 1.3em; margin: 2rem 0;">
        404
      </Code>
      <span>Back to <Link href="/blog">/blog</Link></span>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.4em;
`;

