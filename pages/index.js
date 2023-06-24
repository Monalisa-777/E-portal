import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Feed from '@/components/Feed'
import Opinions from '@/components/Opinions'
import Culture from '@/components/Culture'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <Feed />
      <Opinions />
      <Culture/>
      <Footer/>
  
    </main>
  )
}
