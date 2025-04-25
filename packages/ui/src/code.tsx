import { type JSX } from 'react';

type CodeProps = {
  className?: string;
} & React.PropsWithChildren<{}>;

export function Code({ children, className }: CodeProps): JSX.Element {
  return <code className={className}>{children}</code>;
}
