import React, {useEffect} from "react";
import "./App.css";
import PhotoPage from './components/PhotoPage';
import axios from 'axios';

function App() {
  useEffect(() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res =>{
        console.log(res);
    })
    .catch(err =>{
        console.log('ERROR: ', err);
    })
}, [])


  return (
    <div className="App"> 
    <h1>Astronomy photo of the Day</h1>
      <PhotoPage />
    </div>
   
  );
}

export default App;
