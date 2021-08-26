import Tag from "../Tag/Tag";
import './MovieCard.css'
function MovieCard(props) {
    return(
        <div className="movie-card" >
            <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${props.poster}`} alt="poster"/>

            <Tag genre={props.genre}/>
            <h2>{props.title}</h2>
        </div>
    )
}
export default MovieCard;