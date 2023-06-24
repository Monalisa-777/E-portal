import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Feed from '@/components/Feed'
import Opinions from '@/components/Opinions'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <Feed />
      <div className='h-full w-full text-5xl bg-white text-black mx-5 '>
        <h1 className='font-serif bg-white text-black border border-b-black mx-5'><i>Opinions</i></h1>
        <Opinions />
      </div>
    </main>
  )
}
