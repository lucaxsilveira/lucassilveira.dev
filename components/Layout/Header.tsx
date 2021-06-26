import Image from 'next/image'
import { useEffect, useState } from 'react'

import { MoonIcon, SunIcon } from '@heroicons/react/outline'

const Header = (): JSX.Element => {
  const themeKey = '@lucassilveira:theme'

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (
      localStorage[themeKey] === 'dark' ||
      (!localStorage[themeKey] &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('html').classList.add('dark')
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.querySelector('html').classList.add('dark')
      localStorage.setItem(themeKey, 'dark')
    } else {
      document.querySelector('html').classList.remove('dark')
      localStorage.setItem(themeKey, 'light')
    }
  }, [darkMode])

  return (
    <div className="relative bg-white border-b-2 border-gray-100 dark:bg-dark-300 dark:border-dark-100">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div className="flex items-end">
              <Image src="/images/logo.png" width={40} height={40} priority />
              <span className="ml-4 mono dark:text-white">
                Lucas Silveira<span className="text-primary text-xl">.</span>
              </span>
            </div>
          </div>
          <nav className="dark:text-white hidden md:flex space-x-7 align-middle justify-center">
            <span className="flex items-center">About</span>
            <span className="flex items-center">Projects</span>
            <span className="flex items-center">Find me</span>
            <button className="ml-10 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium dark:text-white bg-indigo-600 hover:bg-indigo-700">
              Resume
            </button>
          </nav>
          <div className="span text-xs flex w-6 text-gray-400">
            {!darkMode && (
              <MoonIcon
                className="cursor-pointer"
                onClick={() => setDarkMode(true)}
              />
            )}
            {darkMode && (
              <SunIcon
                className="cursor-pointer"
                onClick={() => setDarkMode(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
