import * as React from 'react';

function S(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M10 0H6l1.348 2.697L5 13.5 8 16l3-2.5L8.652 2.697 10 0z" />
    </svg>
  );
}

export default S;