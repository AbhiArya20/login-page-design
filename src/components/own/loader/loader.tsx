import Image from 'next/image';
import React from 'react';

export default function Loader() {
  return (
    <div className='flex flex-col justify-center items-center scale-125 gap-2'>
      <span className='animate-spin'>
        <Image src='/svg/logo.svg' width={100} height={100} alt='logo' className='w-8 h-8' />
      </span>
      <span className='ml-[.4rem] text-xl text-white'>Coderoom</span>
    </div>
  );
}
