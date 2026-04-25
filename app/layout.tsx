import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import GCHLogo from '@/app/ui/gch-logo';
import { lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <div className='flex h-20 p-4 fixed top-0 left-0 right-0 z-50 bg-white shadow-sm text-gray-800'>
          <GCHLogo />
          <span className='grow'></span>
          <div className='flex flex-row items-center gap-2 md:gap-4 bg-green-apple text-white px-4 py-2 md:p-6 rounded-3xl text-sm md:text-base'>
            <p className={`${lusitana.className}`}>產業簡介</p>
            <p className={`${lusitana.className}`}>願景與展望</p>
            <p className={`${lusitana.className}`}>永續經營</p>
          </div>
        </div>
        {children}
        <footer className='bg-green-dark text-white'>
          <div className='mx-auto max-w-3xl px-10 py-12 flex flex-col md:flex-row gap-10 md:gap-24 justify-center'>
            <div className='flex flex-col gap-3'>
              <p className={`${lusitana.className} text-2xl font-semibold mb-2`}>集合成環保科技股份有限公司</p>
              <p className='text-base text-gray-300'>509 彰化縣伸港鄉線工北一路26號</p>
              <p className='text-base text-gray-300'>04-791 0083</p>
              <p className='text-base text-gray-300'>bridge_swk@hotmail.com</p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className={`${lusitana.className} text-lg font-semibold`}>榮譽績效</p>
              <p className={`${lusitana.className} text-lg font-semibold`}>許可證書</p>
              <p className={`${lusitana.className} text-lg font-semibold`}>回收夥伴供應鏈</p>
            </div>
          </div>
          <div className='border-t border-green-mid/30 text-center py-4 text-sm text-gray-400'>
            © {new Date().getFullYear()} 集合成環保科技股份有限公司
          </div>
        </footer>
      </body>
    </html>
  );
}
