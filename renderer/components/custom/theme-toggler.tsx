'use client'

import { useTheme } from 'next-themes'
import { Monitor, Moon, Sun } from '@/components/custom/icons'
import { useState, useEffect } from 'react'
import { LoadingCard } from './loading'

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className='flex gap-x-1.5 border rounded-full p-1'>
        <LoadingCard className='w-7 h-7 rounded-full' renderedSkeletons={3} />
      </div>
    )
  }

  return (
    <div className='flex items-center p-1 border rounded-full space-x-2 max-w-fit rtl:[direction:ltr]'>
      <button
        className={`${
          theme === 'light' ? 'bg-slate-100/30' : 'bg-transparent'
        } w-7 h-7 p-1 rounded-full transition-colors`}
        onClick={() => setTheme('light')}
        aria-label='Light Theme'
      >
        <Sun />
      </button>
      <button
        className={`${
          theme === 'system' ? 'bg-slate-100/30' : 'bg-transparent'
        } w-7 h-7 p-1 rounded-full transition-colors`}
        onClick={() => setTheme('system')}
        aria-label='System Theme'
      >
        <Monitor />
      </button>
      <button
        className={`${
          theme === 'dark' ? 'bg-slate-100/30' : 'bg-transparent'
        } w-7 h-7 p-1 rounded-full transition-colors`}
        onClick={() => setTheme('dark')}
        aria-label='Dark Theme'
      >
        <Moon />
      </button>
    </div>
  )
}
