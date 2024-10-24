import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'This is the Next page'
}

export default function NextPage() {
  return (
    <>
      <div className='grid w-full text-2xl text-center grid-col-1'>
        <div>
          <Image
            className='mr-auto ml-auto'
            src='/images/logo.png'
            alt='Logo image'
            width={256}
            height={256}
          />
        </div>
        <span>⚡ Nextron ⚡</span>
      </div>
      <div className='flex flex-wrap justify-center mt-1 w-full'>
        <Link href='/'>Go to home page</Link>
      </div>
    </>
  )
}
