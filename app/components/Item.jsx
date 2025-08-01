import Link from 'next/link'
import React from 'react'

const Item = ({item}) => {
  return (
                <div className='movie-item' key={item.id}>
                    <img src={item.poster} alt={item.title} />
                    <h3>{item.title}</h3>
                    <b>{item.rating}⭐</b>
                    <p>{item.description}</p>
                    <p className='movie-duration'>{item.duration} минут</p>
                    <Link href={'../about/' + item.id}>Подробнее</Link>
                </div>
           )
}

export default Item