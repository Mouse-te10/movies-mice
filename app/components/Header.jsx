"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
        <Link href="/" className='header-logo'>MoviesMice</Link>
        <nav>
            <Link href="/" className={pathname === '/' ? 'active' : ''}>Фильмы</Link>
            <Link href="/serials" className={pathname === '/serials' ? 'active' : ''}>Сериалы</Link>
        </nav>
        <Link className='header-button' href='https://github.com/Mouse-te10' target="_blank">Github</Link>
    </header>
  )
}

export default Header
