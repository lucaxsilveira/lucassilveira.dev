import Image from 'next/image'
import { useEffect, useState } from 'react'

import { MoonIcon, SunIcon } from '@heroicons/react/outline'

const Header = (): JSX.Element => {
  const themeKey = '@lucassilveira:theme'

  const [darkMode, setDarkMode] = useState(false)
  const [open, setOpen] = useState(false)

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
          <div className="-mr-10 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
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

      <div
        className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${
          open ? '' : 'hidden'
        }`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div className="absolute right-2 top-4 mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <nav className="grid gap-y-4">
                <span className="flex items-center">About</span>
                <span className="flex items-center">Projects</span>
                <span className="flex items-center">Find me</span>
                <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium dark:text-white bg-indigo-600 hover:bg-indigo-700">
                  Resume
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
