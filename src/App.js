import React, {useEffect, useState} from "react";
import "./App.css";
import PhotoPage from './components/PhotoPage';
import axios from 'axios';
import { Container } from 'reactstrap';


function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res =>{
        console.log(res);
      setPhoto(res.data);
      console.log(photo);
    })
    .catch(err =>{
        console.log('ERROR: ', err);
    })
}, [])


  return (
    <Container className="App"> 
    <h1>Astronomy photo of the Day</h1>
      <PhotoPage date = {photo.date}
       image = {photo.url}
       title = {photo.title}
       author = {photo.copyright}
       explanation = {photo.explanation}
       key ={photo}/>
    </Container>
   
  );
}

export default App;
