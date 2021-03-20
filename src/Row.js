import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';

function Row({title, fetchUrl, isLarge}) {
    const baseImgUrl = "https://image.tmdb.org/t/p/original";
    const [movies, setMovies]= useState([]);
    const [trailerUrl, setTrailerUrl]= useState("");
    useEffect(()=>{
        async function fetchMovie()
        {
            const result = await axios.get(fetchUrl);
            console.log(result);
            setMovies(result.data.results);
            return result;
        }
        fetchMovie();


    }, [fetchUrl]);
    const opts={
        height: '450',
        width: '100%',
        playerVars: {
            autoplay: 1,
          },
    };

    const handleClick =async (movie)=>{
         if(trailerUrl)
         {
             setTrailerUrl('')
         }
         else
         {
             const trailer = await axios.get(`/movie/${movie.id}/videos?api_key=1dd45951665bc5b4d458fa05190123b3`);
             setTrailerUrl(trailer.data.results[0]?.key);
         }
    }

    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__posters">
                {
                    movies.map((movie)=>(
                        <img key={movie?.name} 
                        onClick={()=>handleClick(movie)}
                        className={` ${isLarge ?"islarge": "row__poster"}`} src={`${baseImgUrl}${movie.poster_path}`} alt={movie?.name}/>

                    ))
                }
                
            </div>
            {trailerUrl && <Youtube  videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
