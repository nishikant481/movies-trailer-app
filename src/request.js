const API_KEY = "7e7287b0edc68d57b889c5054fceb4a6";
// import 
// import dotenv from 'dotenv'
// dotenv.config();

// const API_KEY=process.env.REACT_APP_APIKEY;
// console.log(API_KEY);

const requests={
    fetchTrending: "/trending/all/week?api_key="+API_KEY+"&language=en-US",
    fetchOriginals: "/discover/tv?api_key="+API_KEY+"&with_networks=213",
    fetchTopRated: "/movie/top_rated?api_key="+API_KEY+"&language=en-US",
    fetchAction: "/discover/movie?api_key="+API_KEY+"&with_genres=28",
    fetchComedy: "/discover/movie?api_key="+API_KEY+"&with_genres=35",
    fetchHorror: "/discover/movie?api_key="+API_KEY+"&with_genres=27",
    fetchRomance: "/discover/movie?api_key="+API_KEY+"&with_genres=10749",
    fetchDocumentaries: "/discover/movie?api_key="+API_KEY+"&with_genres=99",
}
export default requests;