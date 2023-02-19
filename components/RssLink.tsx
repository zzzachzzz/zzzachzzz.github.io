import styled from 'styled-components';
import A from './A';

export default function RssLink(props: React.ComponentPropsWithRef<"a">) {
  return (
    <_RssLink href="/blog/rss.xml" title="RSS Feed" {...props}>
      <Svg css="height: 100%;" />
    </_RssLink>
  );
}

// Don't ask about the width and height...
// basically couldn't figure out a better way to make
// the height the same as the Navigation links
// WITH one line of text (not wrapping links that grow).
const _RssLink = styled(A)`
  height: 1.534rem;
  width: 1.534rem;
  padding: 0.2em;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover > svg {
    stroke: ${({ theme }) => theme.prismPurple};
  }
`;

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="5" cy="19" r="1" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <path d="M4 11a9 9 0 0 1 9 9" />
  </svg>
);

