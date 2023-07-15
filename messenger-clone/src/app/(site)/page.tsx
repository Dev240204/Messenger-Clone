import Image from "next/image"
import Authform from "@/components/Authform/Authform"

export default function Home() {
  return (
    <div
    className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div 
      className="sm:mx-auto sm:w-full sm:mx-w-md">
        <Image
        alt='Logo'
        src='/images/logo.jpg'
        className='mx-auto w-auto'
        width={48}
        height={48}
        />
        <h2
        className="mt-2 text-center tracking-tight text-gray-900 text-4xl font-bold">
           Sign in to your Account
        </h2>
        <Authform/>
      </div>
      
    </div>
  )
}
