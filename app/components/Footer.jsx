import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <p>&copy; Все права защищены</p>
        <nav>
          <Link href="https://t.me/AbleDev" target="_blank">Telegram</Link> <br />
          <Link href="https://m.vk.com/selekekbr" target="_blank">VK</Link>
        </nav>
    </footer>
  )
}

export default Footer