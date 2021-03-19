import React, {useState, useEffect} from 'react'
import axios from './axios';
import './Row.css';

function Row({title, fetchUrl, isLarge}) {
    const baseImgUrl = "https://image.tmdb.org/t/p/original";
    const [movies, setMovies]= useState([]);
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

    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__posters">
                {
                    movies.map((movie)=>(
                        <img key={movie?.name} 
                        className={` ${isLarge ?"islarge": "row__poster"}`} src={`${baseImgUrl}${movie.poster_path}`} alt={movie?.name}/>

                    ))
                }
                
            </div>
            
        </div>
    )
}

export default Row
