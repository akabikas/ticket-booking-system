import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';

const MOVIE_QUERY = gql`
query GetMovies {
    movies {
      data {
        id
        attributes {
          Title
          Runtime
          Director
          Description
          Casts
          Poster{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;

const SHOWS_QUERY = gql`
  query GetShows {
    shows {
      data {
        id
        attributes {
          time
          date
          movie_id {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

function MovieCard() {
    const { loading: movieLoading, error: movieError, data: movieData } = useQuery(MOVIE_QUERY);
    const { loading: showsLoading, error: showsError, data: showsData } = useQuery(SHOWS_QUERY);

    if (movieLoading || showsLoading) {
        return <div>Loading...</div>;
    }
    if (movieError || showsError) {
        console.error(movieError || showsError);
        return <div>Error occurred while fetching data</div>;
    }

    const movies = movieData.movies.data;
    const shows = showsData.shows.data;

    const formatTime = (timeString) => {
        const time = new Date(`01/01/2023 ${timeString}`);
        return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const getTimings = (movieId) => {
        const movieShows = shows.filter((show) => show.attributes.movie_id.data.id === movieId);
        return movieShows.map((show) => formatTime(show.attributes.time));
    };

    return (
        <>
            {movies.map((movie) => (
                <div className="col-4 movie-single" key={movie.id}>
                    <div className="img-container">
                        <Image
                            src="/assets/img/jw.jpg"
                            alt="movie-poster-john-wick"
                            width="400"
                            height="565"
                            className="movie-poster"
                        />
                        <div className="get-ticket-page">
                            <Link href={`/movie/${movie.id}`}>
                                <svg
                                    width="13"
                                    height="17"
                                    viewBox="0 0 13 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.45901 1.09836V15.8852H3.90949C5.86988 12.4915 7.8536 14.4712 8.60041 15.8852H11.541V1.09836H8.60041C6.528 4.686 4.60963 2.59321 3.90949 1.09836H1.45901Z"
                                        stroke="black"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </Link>
                        </div>
                        <div className="mv-rating">
                            <p>R</p>
                        </div>
                    </div>
                    <div className="this-movie-detials">
                        <h3>{movie.attributes.Title}</h3>
                        <p>{movie.attributes.Runtime}</p>
                        <p className="genre">CRIME, DRAMA</p>
                        <div className="timings">
                            <ul className="row">
                                {getTimings(movie.id).map((timing) => (
                                    <li className="col-4 available" key={timing}>
                                        <a>{timing}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default MovieCard;
