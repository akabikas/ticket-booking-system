
import MovieStatus from '@/components/movieStatus';
import Layout from '../components/layout'
import Image from 'next/image';
import React from 'react';
import MovieDates from '@/components/movieDates';
import MovieCard from '@/components/movieCard';



export default function Home() {
  return (
    <>

        <Layout>
          <section className='page-home-container'>
            <div className='page-home'>
              <div className='hero'>
                <Image
                  src="/assets/img/home-featured.jpg"
                  alt="background"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  className='home-featured'
                />
                <div className='gradient'>

                </div>
              </div>
              <div className='movie-container'>
                <div className='container'>
                  <div className='row main-details'>
                    <h1>Now Showing</h1>
                    <MovieStatus itemType="no-selected" />
                    <MovieDates />
                  </div>
                  <div className='row movies-lists'>
                    <MovieCard />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>

    </>
  )
}
