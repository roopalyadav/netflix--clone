import Row from './Row';
import './App.css';
import requests from './requests';
import Header from './Header';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Netflix Originals"  fetchUrl={requests.fetchNetflixOriginals} isLarge/>
     <Row title="Trending"  fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentries"  fetchUrl={requests.fetchDocumentaries}/>
    
    </div>
  );
}

export default App;
