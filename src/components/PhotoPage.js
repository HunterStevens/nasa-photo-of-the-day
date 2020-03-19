import React, {useState} from 'react';
import {Container, Row, Col, Collapse} from 'reactstrap';

const PhotoPage = props =>{
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible(!visible);
   
  // document.querySelector('.mainPhoto').style.backgroundImage =`url(${props.image})`;

    return(
        <Container>
            <div className = "mainPhoto" onClick = {toggle}
            style = {{backgroundImage: "url("+ props.image + ")" }}>
                
                <Collapse visible={visible}>
                    <section className = "description">
                    <h3 className = "photo-date">
                        {props.date}
                    </h3>
                    <h1>{props.title}</h1>
                    <h2>{props.author}</h2>
                    <p>explanation: {props.explanation}</p>
                    </section>
                </Collapse>
            </div>
        </Container>
    )
}
export default PhotoPage;