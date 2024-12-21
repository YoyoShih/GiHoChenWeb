'use client';

import { useState } from 'react';

interface CompanyProps extends React.HTMLAttributes<HTMLElement> {
  children: Array<string>;
}

export function Company({ children }: CompanyProps) {
  const [isHovering, setIsHovered] = useState(true);
  const onMouseEnter = () => setIsHovered(false);
  const onMouseLeave = () => setIsHovered(true);
  return (
    <div className='flex-1'>
      <p
        className='aspect-square text-center bg-[url("/p2.jpg")] bg-cover bg-no-repeat hover:bg-none'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {isHovering ? (children[0]) : (children[1])}
      </p>
    </div>
  );
}
