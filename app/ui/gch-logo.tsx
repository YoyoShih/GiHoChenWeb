import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function GCHLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-gray-800`}
    >
      <Image
        src='/logo.png'
        width={80}
        height={80}
        className='mr-2'
        alt='GCH logo'
      />
    </div>
  );
}
