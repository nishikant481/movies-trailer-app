 
import React, {useState,useEffect} from 'react'
import axios from './axios';
import './Row.css'
import YouTube  from 'react-youtube';
import movieTrailer from 'movie-trailer'
const baseurl="http://image.tmdb.org/t/p/original";

function Row({title,fetchUrl,isLargeRow}) {

    const[movies,setMovies]   = useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

useEffect(() => {
     async function fetchData() {
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
     } 
     fetchData();
}, [fetchUrl]);

 
 console.log(movies);

 const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  const handleClick= (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || movie?.title || movie?.original_title || movie?.original_name || "")       //movieTrailer search trailer for given name
            .then((url) => { console.log('difisdhfdkvkjvhd');     //gives full url and we will find only needed part from it
                console.log(new URL(url),'#####');
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams.get("v"),'@@@@@@@@@@@@@@@@@@@@@@@@@@');
                setTrailerUrl(urlParams.get("v"));//v=id in url
            })
            .catch((err) => console.log(err));
        }
  }
    return (
        <div className ="row">
            <h2>{title}</h2>
            <div className="row_posters">
             {  movies.map( movie =>(  
              <img key ={movie.id}
              className={"row_poster"+(isLargeRow?" rowPosterLarger":"")}
              src= {baseurl+(isLargeRow? movie.poster_path : movie.backdrop_path)} alt ={movie.name}
              onClick={()=>{handleClick(movie)}}
              />
             ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
    )
}

export default Row
// useEffect(() => {
//     async function fetchdata(){
//         const request = await axios.get(fetchUrl);
//     }
//     fetchdata();
// }, [movies])


























// import React, { useEffect, useState } from "react"
// import axios from './axios'
// import './Row.css'
// import YouTube from 'react-youtube'
// import movieTrailer from 'movie-trailer'

// const baseurl="http://image.tmdb.org/t/p/original";

// function Row({title,fetchurl,isLargeRow}){
//     const [movies,setmovies]=useState([]);
//     const [trailerUrl,setTrailerUrl]=useState("");

//     useEffect(()=>{
//         //to get data from api make async func which is called explicitly & use await keyword
//         async function fetchData(){
//             const request=await axios.get(fetchurl);
//             //console.log(request);
//             setmovies(request.data.results);
//             return request;
//         }
//         fetchData();
//     }, [fetchurl]);

//     //console.log(movies);

//     const opts = {
//         height: '390',
//         width: '100%',
//         playerVars: {
//           // https://developers.google.com/youtube/player_parameters
//           autoplay: 1,
//         },
//       };
      
//       const handleClick= (movie) => {
//             if(trailerUrl){
//                 setTrailerUrl('');
//             }else{
//                 movieTrailer(movie?.name || movie?.title || movie?.original_title || movie?.original_name || "")       //movieTrailer search trailer for given name
//                 .then((url) => {      //gives full url and we will find only needed part from it
//                     const urlParams = new URLSearchParams(new URL(url).search);
//                     console.log(urlParams.get("v"));
//                     setTrailerUrl(urlParams.get("v"));//v=id in url
//                 })
//                 .catch((err) => console.log(err));
//             }
//       }
    
//     return (
//         <div className="row">
//              <h2> {title} </h2>

//              <div className="rowPosters">
//                 {movies.map((movie) => (
//                      <img 
//                         key={movie.id}
//                         onClick={() => handleClick(movie)}
//                         className={"rowPoster"+(isLargeRow?" rowPosterLarger":"")}
//                         src={baseurl+(isLargeRow?movie.poster_path:movie.backdrop_path)}
//                         alt={movie.name}
//                      />
//                 ))}
//              </div>
//              {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
//         </div>
//     )
// }

// export default Row