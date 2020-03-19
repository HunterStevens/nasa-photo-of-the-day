import React, {useState} from 'react';
import {Container, Col, Collapse, Card, 
    CardBody, CardTitle, CardSubtitle, 
    CardText, Button} from 'reactstrap';

const PhotoPage = props =>{
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible(!visible);
   
    return(
        <Container>
            <Col sm="10">
            <Card className = "mainPhoto"
            style = {{backgroundImage: "url("+ props.image + ")" }}>
                
                <Collapse isOpen={visible}>
                    <CardBody className = "description">
                    <CardSubtitle className = "photo-date">
                        {props.date}
                    </CardSubtitle>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.author}</CardSubtitle>
                    <CardText>explanation: {props.explanation}</CardText>
                    </CardBody>
                </Collapse>
            </Card>
            </Col>
            <Button outline color="primary" onClick = {toggle}>Description</Button>
        </Container>
    )
}
export default PhotoPage;