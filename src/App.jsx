import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./App.css"
import Header from './Header';
import Left from './Left';
// import Loader from './Loader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [yt, setYt] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('programming');
  const [loading, setLoading] = useState(true)
  const apiKey = 'AIzaSyAB-mRcU8KEhrLNJObaKtPEwpEiTMz-_BU';
  const maxResults = 50;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}&maxResults=${maxResults}&order=date`
        );
        setYt(data.items);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
      }
    };

    fetchData();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (<div>
    <Header search={search} setSearch={setSearch} handleSearch={handleSearch}/>
    <Router>
      <Routes>
        <Route path="/" element={<Left setQuery = {setQuery} />} />
    </Routes>
    </Router>
    <div className='parent'>      
      <div className='container'>
        {
          yt.map((video, index) => (
            <div className='vdo' key={index}>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                <img 
                  src={video.snippet.thumbnails.medium.url} 
                  alt={video.snippet.title} 
                />
                <h4 style={{width: "350px", marginBottom: "50px"}}>{video.snippet.title}</h4>
              </a>
            </div>
          ))
        }
      </div>
    </div> 
  
  </div>
  );
}

export default App;
