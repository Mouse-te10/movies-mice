"use client"

import React from 'react'
import Head from 'next/head';
import { movies } from '@/app/movies';
import { serials } from '@/app/serials';
import { reviews } from '@/app/reviews'
import Link from 'next/link';

const About = ({params}) => {

  const resolvedParams = React.use(params);
  const id = Number(resolvedParams.id);

  const fetchDataMovies = () => {
    return movies.find(item => item.id === id)
  }

  const fetchDataSerials = () => {
    return serials.find(item => item.id === id)
  }

  const data = id <= 20 ? fetchDataMovies() : fetchDataSerials()

  if (!data) {
    return <div style={{color: 'white'}}>Данные не найдены</div>
  }

  const linkedUser = () => {
    if (typeof window !== "undefined") {
      window.location.href = data.link;
    }
  };

  return (
      <div className='about-serial'>
          <Head>
            <script src="https://code.jquery.com/jquery-3.7.1.js"
            integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
            crossOrigin="anonymous"></script>
          </Head>
          <img className='imgAbout' src={data.poster} alt='poster'/>
          <div className='about-serial--block'>
            <Link href={ id <= 20 ? '/' : '/serials' } className='strelka'>
              <img src='/background/strelka.png' className='strelka-img'/>
            </Link>
                <svg className='logoSVG' width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MoviesMice logo">
                  <rect x="5" y="5" width="390" height="90" fill="none" stroke="#D00000" strokeWidth="3" />
                  <line x1="5" y1="5" x2="25" y2="5" stroke="#D00000" strokeWidth="3" />
                  <line x1="5" y1="5" x2="5" y2="50" stroke="#D00000" strokeWidth="3" />
                  <line x1="110" y1="95" x2="290" y2="95" stroke="#D00000" strokeWidth="3" />
                  <line x1="395" y1="75" x2="395" y2="95" stroke="#D00000" strokeWidth="3" />
                  <text x="50%" y="60" textAnchor="middle" fontFamily="Georgia, serif" fontSize="36" fill="#D00000" letterSpacing="2">
                    MOVIES<tspan fontWeight="bold">MICE</tspan>
                  </text>
                </svg>  
            <h1>{data.title}</h1>
            <p>{data.description}</p>
              <video src="video/piter.mp4" muted controls onClick={linkedUser}></video>

            <h2>Комментарии: {reviews.length}</h2>

            {reviews.map(item => (
              <div className='comment' key={item.id}>
                  <img className='imageUser' src='/background/userPhoto.jpg'></img>
                  <h3 className='nameUser'>{item.name}</h3>
                  <p className='commentUser'>{item.comment}</p>
              </div>
            ))}
          </div>
      </div>
  )
}

export default About