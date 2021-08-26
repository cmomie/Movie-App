import {
  useEffect,
  useState,
} from "react"
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie"
import MovieCard from "../MovieCard/MovieCard"
import TvShowCard from "../TvShowCard/TvShowCard"

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
        "https://api.themoviedb.org/3/movie/451048/similar?api_key=75c71bba96b13e3bcb37983469d3c13c&language=en-US&page=1"
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
        "https://api.themoviedb.org/3/discover/tv?api_key=75c71bba96b13e3bcb37983469d3c13c&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate"
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
              tvshow
            ) => {
              if (
                tvshow.poster_path
              ) {
                return (
                  <TvShowCard
                    title={
                      tvshow.original_name
                    }
                    genre={
                      tvshow
                        .genre_ids[0]
                    }
                    poster={
                      tvshow.poster_path
                    }
                    id={
                      tvshow.id
                    }
                    key={
                      tvshow.original_title
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
  
  