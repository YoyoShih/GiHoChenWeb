import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { Company } from '@/app/company';

export default function Page() {
  return (
    <main className='flex min-h-screen flex-col'>
      {/* Hero */}
      <div className='relative text-white'>
        <div className='absolute top-1/2 left-5 md:left-1/4 z-10 -translate-y-1/4 flex flex-col gap-2 md:gap-3 lg:gap-4'>
          <p className='text-2xl md:text-4xl lg:text-5xl'>集合成 GiHoChen</p>
          <p className='text-sm md:text-lg lg:text-xl'>環保科技股份有限公司</p>
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

      <div className='flex grow flex-col text-gray-800'>
        {/* Slogan */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 bg-green-light w-full px-6 md:px-16 lg:px-28 py-12 md:py-20 lg:py-28'>
          <Image
            src='/logo.png'
            width={200}
            height={200}
            className='w-24 md:w-36 lg:w-[200px] h-auto'
            alt='logo'
          />
          <div className='flex flex-col gap-3 text-center md:text-left'>
            <p className={`${lusitana.className} text-xl md:text-3xl lg:text-4xl`}>
              (總結下面這段的一句Slogan)
            </p>
            <p className={`${lusitana.className} text-sm md:text-base`}>
              為了響應環保署廢棄汽機車回收政策，於2000年創立集合成環保科技股份有限公司，致力於...
            </p>
          </div>
        </div>

        {/* 公司簡介 */}
        <div className='flex flex-col w-full bg-white'>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='flex flex-col items-start px-6 md:px-12 lg:px-20 py-10 md:py-14 lg:py-20'>
              <p className='p-4 text-2xl md:text-3xl lg:text-4xl'>公司簡介與產業發展</p>
              <p className='p-4 text-sm md:text-base'>創辦人施隨聲榮譽董事長於1965年創立金屬材料鑄造廠，後續20年間先後增設機械部、整合材料及製造方、提升設備以提供更高階的金屬材質。1992年創立廢機動車輛回收協會並擔任理事長，並在2000年底進一步成立集合成以響應環保署廢棄汽機車回收政策。</p>
              <p className='p-4 text-sm md:text-base'>集合成目前市佔率達25%，每年處理5萬公噸的廢棄汽機車，現任董事長施評如同時兼任財務長，曾任會計師事務所及多家公司財會主管；總經理施文凱具有高科技廠建廠經驗，於廢車資源化及環保產業資歷逾20年</p>
              <Link
                href='/industry'
                className='flex items-center gap-5 self-start rounded-lg bg-green-apple px-6 py-3 text-white hover:bg-green-dark text-sm md:text-base'
              >
                <span>了解更多</span>
                <ArrowRightIcon className='w-5 md:w-6'/>
              </Link>
            </div>
            <Image
              src='/p4.png'
              width={300}
              height={300}
              className='image-fade-bl hidden lg:block'
              alt='p2'
            />
          </div>

          {/* 子公司卡片 */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            <Company image='/giho-chen.jpg'>{['集合成', '介紹']}</Company>
            <Company image='/gao-hong.jpg'>{['高宏', '介紹']}</Company>
            <Company image='/xin-jie.jpg'>{['欣潔', '介紹']}</Company>
            <Company image='/dong-hui.jpg'>{['東輝', '介紹']}</Company>
            <Company image='/shang-jing.jpg'>{['尚淨', '介紹']}</Company>
          </div>
        </div>

        {/* 永續經營 */}
        <div className='flex flex-col bg-green-light w-full px-6 md:px-12 lg:px-20 py-10 md:py-14 lg:py-20'>
          <p>這部分是企業永續經營</p>
        </div>
      </div>
    </main>
  );
}
