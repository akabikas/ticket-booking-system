import Layout from '@/components/layout'
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image';
import MovieStatus from '@/components/movieStatus';
import MovieDates from '@/components/movieDates';
import TicketForm from '@/components/ticketForm';
import { useQuery, gql } from '@apollo/client';



function MovieSingle() {
    const router = useRouter();
    const movieId = router.query.movieId;

    return (

        <Layout>
            <section className='movie-single'>
                <div className='background-container'>
                    <Image
                        src="/assets/img/jw.jpg"
                        alt="movie-poster-john-wick"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                        className='movie-poster'
                    />
                    <div className='gradient'>

                    </div>
                </div>
                <div className="container movie-details">
                    <div className="row justify-content-between">
                        <div className="col-5 left">
                            <h1>Title</h1>
                            <div className="content">
                                <p>Description</p>
                            </div>
                            <div className="other details">
                                <p>Run time: Runtime</p>
                                <p>Director: Director</p>
                            </div>
                        </div>
                        <div className="col-4 right">
                            <h2>Casts</h2>
                            <ul>
                                <li>Cast name</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='container ticket-form-container'>
                    <div className='row'>
                        <div className='col-12 main-details d-flex justify-content-end flex-column'>
                            <MovieStatus />
                            <MovieDates />
                        </div>
                        <TicketForm />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default MovieSingle
