import { PropsWithChildren } from 'react';

interface Props {
  href: string;
  external?: boolean;
}

export function Link({ children, href, external }: PropsWithChildren<Props>) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a
      className="text-blue-500 decoration-dotted transition-colors hover:text-blue-700 hover:underline"
      href={href}
      {...externalProps}
    >
      {children}
    </a>
  );
}
