import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Loading from './Loading'

import { fetchMovieById } from '../apiCalls'

const Movie = ({ loading, data }) => (
  <div className="post container">
    <Helmet>
      <title>{`Movies - ${loading ? 'Movie' : data.title}`}</title>
    </Helmet>
    {loading ? (
      <Loading />
    ) : (
      <div className="card">
        <div className="card-header">
          <div className="card-title h5">{data.title}</div>
          <div className="card-subtitle text-gray">
            IMDB Rating - {data.rating}
          </div>
        </div>
        <div className="card-body">{data.plot}</div>
        <div className="card-footer">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )}
  </div>
)

Movie.getInitialProps = ({ path }) => {
  return fetchMovieById(path.split('/').pop())
}

export default Movie
