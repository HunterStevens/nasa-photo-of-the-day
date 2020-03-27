import React, {useState} from 'react';
import { Col, Collapse, CardTitle, CardSubtitle, 
     CardText, Button} from 'reactstrap';
import styled from 'styled-components';


//styled-Components
const ImageContainer = styled.div`
width: 90%;
height: 90vh;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
margin-bottom: 2%;
background-repeat: no-repeat;
background-size: cover;
box-shadow: 0 0 10px 20px rgba(50, 50, 100, 0.5);
`;
const Description = styled.section`
background-color: rgba(50, 50, 50, 0.7);
color: white;
margin: 10%;
padding:1%;
border-radius: 10px;
display:${props => (props.visible ? "none" : "block")};
&:hover{
    display:${props => (props.visible ? "block" : "none")};
}
`;


const PhotoPage = props =>{
   // const [visible, setVisible] = useState(false);
   // const toggle = () => setVisible(!visible);
   
    return(
           <ImageContainer
           style = {{backgroundImage: "url("+ props.image + ")" }}>
                    <Description>
                    <CardSubtitle className = "photo-date">
                        {props.date}
                    </CardSubtitle>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.author}</CardSubtitle>
                    <CardText>explanation: {props.explanation}</CardText>
                    </Description>
            </ImageContainer>

    )
}
export default PhotoPage;