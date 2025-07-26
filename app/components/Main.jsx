import React from 'react'
import { movies } from '../movies.js'

const Main = () => {
  return (
    <main>
        <h1>Фильмы: Все</h1>
        {
            movies.map(item => (
                <div className='movie-item' key={item.id}>
                    <img src={item.poster} alt={item.title} />
                    <h3>{item.title}</h3>
                    <b>{item.rating}⭐</b>
                    <p>{item.description}</p>
                    <p className='movie-duration'>{item.duration} минут</p>
                    <button>Подробнее</button>
                </div>
            ))
        }
    </main>
  )
}

export default Main