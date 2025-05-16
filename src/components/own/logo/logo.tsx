import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className={`cursor-pointer max-w-max`}>
      <Link className='flex items-center font-bold' href='/'>
        <span>
          <Image src='/svg/logo.svg' width={100} height={100} alt='logo' className='w-8 h-8' />
        </span>
        <span className='ml-[.4rem] text-xl text-white'>Coderoom</span>
      </Link>
    </div>
  );
}
