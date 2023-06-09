import {User} from 'lucide-react'
import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/Signin'
import { EmptyMemories } from '@/components/EmptyMemories'
export default function Home() {
  return (
<main className="grid grid-cols-2 min-h-screen bg-[url(../assets/bg-stars.svg)] bg-cover">
  <div className="relative flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10">
    
    <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full "></div>
    
    <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"></div>

    <SignIn />

    {/* hero */}
    <Hero/>


    {/*copyright */}

    <Copyright/>

  </div>
  {/*Direita do site */}
<div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
  <EmptyMemories/>

</div>

</main>
  )
}
