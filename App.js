/*import {
  useEffect,
  useState,
} from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"
import "./App.css"
import MoviePage from "./MoviePage/MoviePage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
          >
            
          </Route>
          <Route path="/movie/;id">
            <MoviePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App*/
import {
  useEffect,
  useState,
} from "react"
import FeaturedMovie from "./FeaturedMovie"
import MovieCard from "./MovieCard/MovieCard"
import TvShowCard from "./TvShowCard/TvShowCard"

function HomePage() {
  const [
    movieList,
    setMovieList,
  ] = useState(
    []
  )
  const [
    tvShowList,
    setTvShowList,
  ] = useState(
    []
  )

  async function getMovieList() {
    try {
      // API call to get the list of movies
      const data = fetch(
        "https://api.themoviedb.org/3/movie/451048/similar?api_key=4c7ff8e6151131469216f007e4be3b3d&language=en-US&page=1"
      )
      const response = await data
      const jsonResponse = await response.json()
      // Updating the movieList state with the response from the API
      setMovieList(
        jsonResponse.results
      )
    } catch (error) {
      console.error(
        error
      )
    }
  }

  async function getTvShowList() {
    try {
      // API call to get the list of tv shows
      const data = fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=4c7ff8e6151131469216f007e4be3b3d&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate"
      )
      const response = await data
      const jsonResponse = await response.json()
      // Updating the tvShowList state with the response from the API
      setTvShowList(
        jsonResponse.results
      )
    } catch (error) {
      console.error(
        error
      )
    }
  }

  useEffect(() => {
    getMovieList()
  }, [])

  useEffect(() => {
    getTvShowList()
  }, [])

  return (
    <div className="App">
      <FeaturedMovie />
      <main>
        <section className="movie-list">
          <div className="section-title">
            {
              "Featured Movies >"
            }
          </div>
          {movieList.map(
            (
              movie
            ) => (
              <MovieCard
                title={
                  movie.original_title
                }
                genre={
                  movie
                    .genre_ids[0]
                }
                poster={
                  movie.poster_path
                }
                id={
                  movie.id
                }
                key={
                  movie.original_title
                }
              />
            )
          )}
        </section>
        <section className="tvshow-list">
          <div className="section-title">
            {
              "Featured TV shows >"
            }
          </div>
          {tvShowList.map(
            (
              movie
            ) => {
              if (
                movie.poster_path
              ) {
                return (
                  <TvShowCard
                    title={
                      movie.original_name
                    }
                    genre={
                      movie
                        .genre_ids[0]
                    }
                    poster={
                      movie.poster_path
                    }
                    id={
                      movie.id
                    }
                    key={
                      movie.original_title
                    }
                  />
                )
              }
            }
          )}
        </section>
      </main>
    </div>
  )
}

export default HomePage