import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SearchIcon, BellIcon } from '@heroicons/react/solid'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className="fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4
    transition-all lg:px-10 lg:py-6"
    >
      {/* left */}
      <div className="flex items-center space-x-2 md:space-x-10 ">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headeLink">Home</li>
          <li className="headeLink">TV Show</li>
          <li className="headeLink">Movies</li>
          <li className="headeLink">New & Popular</li>
          <li className="headeLink">My List</li>
        </ul>
      </div>
      {/* right */}
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6 " />
        <Link href="/account">
          <img
            src="https://rb.gy/glpwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
