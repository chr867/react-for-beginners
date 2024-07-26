import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Detail(){
  const {id} = useParams();
  
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const getMovie = async () =>{
    const json = await(
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  };
  useEffect(()=>{getMovie()}, []);

  return (
    <div>
      <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
      <h1>Detail for: {movie.title}</h1>
      {loading ?<h2>Loading...</h2> : <Movie 
        id={movie.id}
        medium_cover_image={movie.medium_cover_image}
        title={movie.title}
        summary={movie.description_intro}
        genres={movie.genres}
      />}
    </div>
  );
}

export default Detail;
