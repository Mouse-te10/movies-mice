import React from 'react'
import { serials } from '../serials.js'
import Item from './Item.jsx'

const Main = () => {
  return (
    <main>
        <h1>Сериалы: Все</h1>
        {
            serials.map(item => (
              <Item key={item.id} item={item}/>
            ))
        }
        <h4>Упс, Больше ничего нет...</h4>
    </main>
  )
}

export default Main