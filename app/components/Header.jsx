import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <Link href="/" className='header-logo'>MoviesMice</Link>
        <nav>
            <Link href="/" className='active'>Фильмы</Link>
            <Link href="/" >Сериалы</Link>
        </nav>
        <Link className='header-button' href='/'>Github</Link>
    </header>
  )
}

export default Header
