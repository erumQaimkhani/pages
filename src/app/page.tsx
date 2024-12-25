
import React from 'react';

import  Image from 'next/image';
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-green-900 text-center">
        This is the home page
      </h1>
      <Image className='mx-auto flex items-center justify-center'
        src="/images/heart.jpg"
        alt="Next.js Logo"
        width={700}
        height={500}  />
    </div>
  );
}
