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
        <div className='flex flex-row items-center justify-center bg-blue-dark2 w-screen px-20 md:px-45 lg:px-60 py-40 md:py-50 lg:py-60'>
          <Image
            src='/logo.png'
            width={200}
            height={200}
            sizes='1%'
            alt='logo'
          />
          <div className='flex flex-col'>
            <p className={`${lusitana.className} text-2xl md:text-3xl lg:text-4xl`}>
              (總結下面這段的一句Slogan)
            </p>
            <p className={`${lusitana.className}`}>
              為了響應環保署廢棄汽機車回收政策，於2000年創立集合成環保科技股份有限公司，致力於...
            </p>
          </div>
        </div>
        <div className='flex flex-col w-screen bg-gradient-to-b from-black to-blue-dark2'>
          <div className='flex flex-row'>
            <div className='flex flex-col items-start px-10 md:px-30 lg:px-40 py-20 md:py-30 lg:py-40'>
              <p className='p-4 text-2xl md:text-3xl lg:text-4xl'>公司簡介與產業發展</p>
              <p className='p-4'>施隨聲榮譽董事長於1965年創立金屬材料鑄造廠，後續20年間先後增設機械部、整合材料及製造方、提升設備以提供更高階的金屬材質。1992年創立廢機動車輛回收協會並擔任理事長，並在2000年底進一步成立集合成以響應環保署廢棄汽機車回收政策。</p>
              <p className='p-4'>集合成目前市佔率達25%，每年處理5萬公噸的廢棄汽機車(?)，現任董事長施萍如同時兼任財務長，具有35年的財務經驗；</p>
              <Link
                href='/industry'
                className='flex items-center gap-5 self-start rounded-lg bg-blue-light px-6 py-3 text-blue-dark2 hover:bg-blue-dark1 md:text-base'
              >
                <span>了解更多</span>
                <ArrowRightIcon className='w-5 md:w-6'/>
              </Link>
            </div>
            <Image
              src='/p4.png'
              width={300}
              height={300}
              className='image-fade-bl'
              alt='p2'
            />
          </div>
          <div className='flex flex-row'>
            {/* 感覺之後要改成flex-grid之類的，每列的公司數量根據視窗大小調整，不然小視窗塞5個公司，每個公司空間很小 */}
            <Company>{['集合成', '介紹']}</Company>
            <Company>{['高宏', '介紹']}</Company>
            <Company>{['欣潔', '介紹']}</Company>
            <Company>{['東輝', '介紹']}</Company>
            <Company>{['尚淨', '介紹']}</Company>
          </div>
        </div>
        <div className='flex flex-col bg-gradient-to-b from-blue-dark2 to-black w-screen px-10 md:px-30 lg:px-40 py-20 md:py-30 lg:py-40'>
          <p>這部分是企業永續經營</p>
        </div>
      </div>
    </main>
  );
}
