import React, {useState} from 'react';
import {Container, Col, Collapse, Card, 
    CardBody, CardTitle, CardSubtitle, 
    CardText, Button, Row} from 'reactstrap';

const PhotoPage = props =>{
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible(!visible);
   
    return(
        <Container>
            <Row>
            <Col lg={{size: 10, offset:2}}>
            <Card className = "mainPhoto"
            style = {{backgroundImage: "url("+ props.image + ")" }}>
                
                <Collapse isOpen={visible}>
                    <Col sm = "4">
                    <CardBody className = "description">
                    <CardSubtitle className = "photo-date">
                        {props.date}
                    </CardSubtitle>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.author}</CardSubtitle>
                    <CardText>explanation: {props.explanation}</CardText>
                    </CardBody>
                    </Col>
                </Collapse>

            </Card>
        <Button outline color="primary" onClick = {toggle}>Description</Button>
            </Col>
            </Row>
        </Container>

    )
}
export default PhotoPage;