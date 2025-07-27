import React from 'react'
import { movies } from '../movies.js'
import Item from './Item.jsx'

const Main = () => {
  return (
    <main>
        <h1>Фильмы: Все</h1>
        {
            movies.map(item => (
              <Item key={item.id} item={item}/>
            ))
        }
        <h4>Упс, Больше ничего нет...</h4>
    </main>
  )
}

export default Main