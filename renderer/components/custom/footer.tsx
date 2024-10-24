import ThemeToggler from '@/components/custom/theme-toggler'
import { IconGlobe } from '@tabler/icons-react'
import Link from 'next/link'

export default function Footer({
  withThemeToggler = false
}: {
  withThemeToggler?: boolean
}) {
  return (
    <footer className='mt-auto w-full bg-gray-900 dark:bg-neutral-950'>
      <div className='mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto'>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5'>
          <div className='flex col-span-full gap-x-48 mx-auto sm:col-span-1 sm:flex-col md:mx-0'>
            <Link aria-label='Brand' className='flex flex-1 gap-2 text-white' href='/'>
              <IconGlobe className='w-10 h-10' />
              <div>{withThemeToggler && <ThemeToggler />}</div>
            </Link>
          </div>

          <div className='col-span-1 mx-auto mr-20 md:mx-0 md:mr-0'>
            <h3 className='font-semibold text-gray-100'>Company Links</h3>

            <div className='grid mt-3 space-y-3'>
              <Link
                className='inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200'
                href='/about'
              >
                About Us
              </Link>

              <Link
                className='inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200'
                href='/contact'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className='grid gap-y-2 mt-5 sm:mt-12 sm:gap-y-0 sm:flex sm:justify-between sm:items-center'>
          <div className='flex justify-between items-center'>
            <p className='text-sm text-gray-400 dark:text-neutral-400'>
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
