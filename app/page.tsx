import styles from './ui/home.module.css'
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      <div className={styles.shape}></div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Bienvenido a Next.js.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
        
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        {/* <img src='/hero-deskotp.png' alt="hero" /> */}
        <Image width={1000} height={760} className='hidden md:block' src='/hero-desktop.png' alt="hero" />
        <Image width={1000} height={760} className='block md:hidden' src='/hero-mobile.png' alt="hero" />
        </div>
      </div>
    </main>
  );
}
