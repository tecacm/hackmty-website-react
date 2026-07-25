declare module 'react-router-hash-link' {
  import * as React from 'react';

  export const HashLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { smooth?: boolean }>;
}
