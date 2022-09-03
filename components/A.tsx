import * as React from 'react';
import styled from 'styled-components';
import { inlineBlockCss } from './mixins';

type Props = {
  href: string;
  children: React.ReactNode;
  target?: string;
};

const A = React.forwardRef((
  { href, children, target = "_blank", ...rest }: Props,
  ref
) => (
  <A_ href={href} target={target} rel="noopener noreferrer" ref={ref as any} {...rest}>
    {children}
  </A_>
));

const A_ = styled.a<{ noblock?: boolean }>`
  ${({ noblock }) => !noblock && inlineBlockCss}
  color: ${({ theme }) => theme.prismPurple};
  text-decoration: none;
`;

export default A;

