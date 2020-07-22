import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { fetchAllMovies, fetchMovieById } from '../apiCalls'

const Home = ({ loading, data }) => (
  <div className="home container">
    <Helmet>
      <title>{'Movies - Home'}</title>
    </Helmet>
    {loading ? <Loading /> : <Table movies={data} />}
  </div>
)

Home.getInitialProps = (req) => {
  const movies = fetchAllMovies()

  return {
    ...movies,
  }
}

const Table = ({ movies }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Movie</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      {movies.map((movie) => (
        <Row key={movie.id} {...movie} />
      ))}
    </tbody>
  </table>
)

const Row = ({ id, title, rating }) => (
  <tr>
    <td>
      <Link to={`/movie/${id}`}>{title}</Link>
    </td>
    <td>{rating}</td>
  </tr>
)

export default Home
