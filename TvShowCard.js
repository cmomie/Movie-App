import Tag from "../Tag/Tag";
function TvShowCard ({title,rating,poster,genre}) {
    return (
<div className="tvshow-card">
<h3>{title}</h3>
<h3>{rating}</h3>
<img src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster}`} alt="poster"/>
<Tag id={genre[0]}/>
</div>

    )
}

export default TvShowCard;
