import React, {useEffect, useState} from "react";
import "./App.css";
import PhotoPage from './components/PhotoPage';
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import styled from 'styled-components';

const WebTitle = styled.h1`
font-family: 'Liu Jian Mao Cao', cursive;
font-size: 50px;
`;


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
    <Row>
    <WebTitle>Astronomy photo of the Day</WebTitle>
      <PhotoPage date = {photo.date}
       image = {photo.url}
       title = {photo.title}
       author = {photo.copyright}
       explanation = {photo.explanation}
       key ={photo}/>
      </Row>
    </Container>
   
  );
}

export default App;
