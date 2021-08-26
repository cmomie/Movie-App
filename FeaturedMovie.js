import React, {
    useState,
    useEffect,
  } from "react"
  import Tag from "../Tag/Tag"
  import { API_KEY } from "../API_KEY"
  import "./FeaturedMovie.css"
  
  function FeaturedMovie() {
    //Setting a default state value to my component
    const [
      featuredMovie,
      setFeaturedMovie,
    ] = useState(
      "Tenet"
    )
  
    async function getFeaturedMovie() {
      try {
        // API call to get the featured movie
        const data = fetch(
          `https://api.themoviedb.org/3/movie/451048?api_key=4c7ff8e6151131469216f007e4be3b3d&language=en-US`
        )
        const response = await data
        const jsonResponse = await response.json()
  
        // Updating the featuredMovie state with the response from the API
        setFeaturedMovie(
          jsonResponse
        )
      } catch (error) {
        console.error(
          error
        )
      }
    }
  
    // Using the useEffect because the getFeaturedMovie is causing a "side effect" to my app.
    useEffect(() => {
      getFeaturedMovie()
    }, [])
  
    return (
      <header>
        {
          // Checking I do have some data inside the featuredMovie state before rendering
          // the component to avoid a fatal error
          featuredMovie.original_title && (
            <div
              className="featured-movie flex"
              style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}')`,
              }}
            >
              <h1>
                {
                  featuredMovie.original_title
                }
              </h1>
              <Tag
                genre={
                  featuredMovie
                    ?.genres[1]
                    ?.name
                }
              />
              <p>
                {
                  featuredMovie.overview
                }
              </p>
              <button>
                Watch
                Now
              </button>
            </div>
          )
        }
      </header>
    )
  }
  
  export default FeaturedMovie
  