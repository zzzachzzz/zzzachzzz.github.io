import * as React from 'react';
import NextLink from 'next/link';
import A from './A';

type Props = {
  href: string;
  children: React.ReactNode;
  noblock?: boolean;
};

const Link = React.forwardRef((
  { href, children, ...rest }: Props,
  ref
) => (
  <NextLink href={href} passHref>
    <A href={href} target="_self" ref={ref} {...rest}>{children}</A>
  </NextLink>
));

export default Link;

