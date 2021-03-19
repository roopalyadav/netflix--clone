import React, {useEffect, useState} from 'react'
import './Header.css';
import axios from './axios';

function Header({fetchUrl}) {
    const [movie, setMovie] = useState();
    //const baseImgUrl = "https://image.tmdb.org/t/p/original";
    useEffect(() => {
        async function fetchMovie()
        {
            const result = await axios.get(fetchUrl);
            console.log(result.data.results);
           
            setMovie(result.data.results[Math.floor(Math.random()*result.data.results.length-1)]);

            return result;
        }
        fetchMovie();
        
        
    }, [fetchUrl])
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
    console.log(movie);
    return (
        <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backdropPosition: "center center",
      }}
    >
      {/* Background image */}
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List </button>
        </div>

        {/* description */}
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
    )
}

export default Header
