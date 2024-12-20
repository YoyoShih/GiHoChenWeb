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
        <div className='flex h-20 p-4 fixed top-0 left-0 right-0 z-50 text-white'>
          <GCHLogo />
          <span className='grow'></span>
          <div className='flex flex-row items-center gap-4 bg-blue-dark1 p-6 rounded-3xl'>
            <p className={`${lusitana.className}`}>產業簡介</p>
            <p className={`${lusitana.className}`}>願景與展望</p>
            <p className={`${lusitana.className}`}>永續經營</p>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
