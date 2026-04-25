'use client';

import { useState } from 'react';

interface CompanyProps extends React.HTMLAttributes<HTMLElement> {
  children: Array<string>;
  image: string;
}

export function Company({ children, image }: CompanyProps) {
  const [isHovering, setIsHovered] = useState(true);
  const onMouseEnter = () => setIsHovered(false);
  const onMouseLeave = () => setIsHovered(true);
  return (
    <div
      className='relative aspect-square overflow-hidden w-full'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: isHovering ? `url("${image}")` : 'none' }}
      />
      {isHovering && (
        <div className='absolute inset-0 bg-gradient-to-br from-black/60 to-transparent' />
      )}
      <p className={`absolute top-4 left-4 text-xl font-semibold ${isHovering ? 'text-white' : 'text-gray-800'}`}>
        {isHovering ? children[0] : children[1]}
      </p>
    </div>
  );
}
