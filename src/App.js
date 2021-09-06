 
import './App.css';
import Row from "./Row"
import requests from "./request"
import Banner from './Banner'
function App() {
  const newobject ={
    marginTop:'30 px'
  }
  return (
    <div className="App">
      <Banner/>
       
      <Row title ="STREAM TV"    fetchUrl ={requests.fetchOriginals}
      isLargeRow
      style={newobject}
      />
      <Row title ="Trending Now" fetchUrl ={requests.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={requests.fetchAction} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomance} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />    
    </div>
  );
}

export default App;
