import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { Company } from '@/app/company';

export default function Page() {
  return (
    <main className='flex min-h-screen flex-col'>
      <div className='relative text-white'>
        <div className='absolute top-2/4 left-1/4 z-10 -translate-y-1/4 flex flex-col gap-2 md:gap-3 lg:gap-4'>
          <p className='text-3xl md:text-4xl lg:text-5xl'>集合成 GiHoChen</p>
          <p className='text-base md:text-lg lg:text-xl'>環保科技股份有限公司</p>
        </div>
        <Image
          src='/p1.jpg'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto'
          alt='picture 1'
        />
      </div>
      <div className='flex grow flex-col text-white'>
        <div className='flex flex-col bg-blue-dark2 w-screen px-10 md:px-30 lg:px-40 py-20 md:py-30 lg:py-40'>
          <p className={`${lusitana.className} text-2xl md:text-3xl lg:text-4xl`}>
            (總結下面這段的一句Slogan)
          </p>
          <p className={`${lusitana.className}`}>
            為了響應環保署廢棄汽機車回收政策，於2000年創立集合成環保科技股份有限公司，致力於...
          </p>
        </div>
        <div className='flex flex-col bg-blue-dark2 w-screen'>
          <div className='flex flex-row px-10 md:px-30 lg:px-40 py-20 md:py-30 lg:py-40'>
            <p>這部分是公司結構與產業發展</p>
            <Link
              href='/industry'
              className='flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-400 md:text-base'
            >
              <span>了解更多公司結構與產業發展</span>
              <ArrowRightIcon className='w-5 md:w-6' />
            </Link>
          </div>
          <div className='flex flex-row'>
            <Company>{['集合成', '介紹']}</Company>
            <Company>{['高宏', '介紹']}</Company>
            <Company>{['欣潔', '介紹']}</Company>
            <Company>{['東輝', '介紹']}</Company>
            <Company>{['尚淨', '介紹']}</Company>
          </div>
        </div>
        <div className='flex flex-col bg-blue-dark2 w-screen px-10 md:px-30 lg:px-40 py-20 md:py-30 lg:py-40'>
          <p>這部分是企業永續經營</p>
        </div>
      </div>
    </main>
  );
}
