import {
    useEffect,
    useState,
  } from "react"
  import { useParams } from "react-router-dom"
  import { API_KEY } from "../API_KEY"
  
  function MoviePage() {
    // LOGIC
  
    const [
      movie,
      setMovie,
    ] = useState(
      {}
    )
    const {
      id,
    } = useParams()
  
    useEffect(() => {
      async function getMovie() {
        try {
          // API call to get the movie
          const data = fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
          )
          const response = await data
          const jsonResponse = await response.json()
          console.log(
            jsonResponse
          )
          // Updating the movie state with the response from the API
          setMovie(
            jsonResponse
          )
        } catch (error) {
          console.error(
            error
          )
        }
      }
      getMovie()
    }, [
      id,
    ])
  
    console.log(
      movie
    )
  
    return (
      <div
        style={{
          color:
            "#fff",
        }}
      >
        <h1>
          {
            movie.original_title
          }
        </h1>
      </div>
    )
  }
  
  export default MoviePage
  