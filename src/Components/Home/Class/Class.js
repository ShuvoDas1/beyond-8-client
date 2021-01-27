
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Class.css'
const Class = (props) => {

    const {_id,semester,subject,  topics, image} = props.semester;
    const history = useHistory();
    const handleDetails = (id) =>{
        history.push(`/details/${id}`)
    }
    return (

        <div className='col-md-4  allClass col-12 '>
            <Card  className='perClass'>
                <Card.Img variant="top" style={{height: '280px'}} src={image} />
                <Card.Body className='bg-dark text-light'>
                    <Card.Title> <h4>Class:{semester}</h4></Card.Title>
                    <Card.Text> <h5>Subject: {subject}</h5></Card.Text>
                    <Card.Text> <h5>Course: {topics}</h5> </Card.Text>
                    <Button onClick={()=>handleDetails(_id)} variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>


    );
};

export default Class;