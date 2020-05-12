import Home from './components/Home'
import Movie from './components/Movies'
import { fetchAllMovies, fetchMovieById } from './apiCalls'

const routes = [
  {
    path: '/',
    exact: true,
    Component: Home,
    getInitialData: () => fetchAllMovies(),
  },
  {
    path: '/movie/:id',
    Component: Movie,
    getInitialData: (path = '') => fetchMovieById(path.split('/').pop()),
  },
]

export default routes
