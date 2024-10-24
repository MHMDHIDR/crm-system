import { IconGlobe } from '@tabler/icons-react'
import Link from 'next/link'

export default async function Nav() {
  return (
    <header className='fixed top-0 left-0 w-full z-[100] bg-white dark:bg-neutral-900 py-2 px-4 sm:px-10 shadow-sm shadow-purple-900'>
      <nav className='container flex justify-between items-center px-0 mx-auto'>
        <Link
          href='/'
          className='flex gap-x-2 items-center text-xl font-semibold focus:outline-purple-900 focus:opacity-80'
          aria-label='Brand'
        >
          <IconGlobe className='w-6 h-6 stroke-blue-600' />
          <span className='[font-family:Orbitron] text-gradient select-none hidden sm:inline-block text-xxs md:text-sm'>
            TechnoDevLabs
          </span>
        </Link>

        <div className='relative'>
          <input
            type='checkbox'
            id='menu-toggle'
            className='absolute top-0 right-0 w-6 h-6 opacity-0 cursor-pointer peer'
          />
          <label htmlFor='menu-toggle' className='block z-50 cursor-pointer md:hidden'>
            <svg
              className='w-6 h-6'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3 12H21M3 6H21M3 18H21'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </label>

          <div
            className='absolute top-full invisible mt-2 w-48 bg-white opacity-0 transition-all duration-300 ease-in-out -translate-y-2 ltr:right-0 rtl:left-0 dark:bg-neutral-900 md:relative md:opacity-100 md:translate-y-0 md:visible md:bg-transparent md:mt-0 peer-checked:opacity-100 peer-checked:translate-y-0 peer-checked:visible md:w-auto'
            id='menu'
          >
            <div className='flex flex-col gap-4 border shadow-md md:flex-row md:items-center md:p-0 md:shadow-none md:border-none'>
              <NavLink href='/projects' label='Projects' />
              <NavLink href='/about' label='About' />
              <NavLink href='/services' label='Services' />
              <NavLink href='/contact' label='Contact' />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className='p-4 text-xs font-medium text-gray-600 transition-colors md:text-base hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-500 focus:outline-purple-900 hover:bg-purple-900/10'
    >
      {label}
    </Link>
  )
}
