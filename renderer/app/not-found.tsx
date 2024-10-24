import { IconBook, IconCode, IconHome, IconMessage } from '@tabler/icons-react'
import Link from 'next/link'
import { NotFoundIcon } from '@/components/custom/icons'
import { Button } from '@/components/custom/button'
import { Block } from '@/components/custom/block'

export default async function RootNotFoundPage() {
  return (
    <section className={`p-4 py-20 select-none`}>
      <div className='container flex flex-col justify-center items-center px-6 py-20 mx-auto w-full min-h-screen'>
        <div className='flex flex-col items-center mx-auto max-w-lg text-center'>
          <NotFoundIcon />

          <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
            We lost this page
          </h1>
          <p className='mt-4 text-gray-500 dark:text-gray-400'>
            We searched high and low, but could not find what you are looking for. Let us
            find a better place for you to go.
          </p>

          <div className='flex gap-x-3 items-center mt-6 w-full shrink-0 sm:w-auto'>
            <Link href='/' className='w-full'>
              <Button type='button' withArrow>
                Home
              </Button>
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-8 mx-auto mt-8 w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-3'>
          <Block
            href='/'
            blockLabel={'Go Home'}
            blockDescription={'Go back to the home page'}
            blockIcon={<IconHome />}
          >
            Go back to the home page
          </Block>
        </div>
      </div>
    </section>
  )
}
