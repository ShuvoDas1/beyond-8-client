import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
const ClassDetails = () => {
    const { id } = useParams();
    const [classDetail, setClassDetail] = useState({})

    useEffect(() => {
        fetch('https://afternoon-river-41787.herokuapp.com/details/' + id)
            .then(res => res.json())
            .then(data => {
                const details = data.find(details => details._id === id)
                setClassDetail(details)
            })


    }, [])

    return (
        <section>
            <Navbar bg="dark" variant="dark">
                <Link to='/'><Navbar.Brand>BEYOND 8 ACADEMY</Navbar.Brand></Link>
            </Navbar>
            <div className='container'>
                <div className="row mt-3">
                    <div className="col-12 p-5 bg-dark text-light">
                        <h1>Details</h1>
                        <hr className='bg-light' />
                        <h3>Class: {classDetail.semester}</h3>
                        <h4 className='my-3'>Subject: {classDetail.subject}</h4>
                        <h4>Faculty: {classDetail.faculty}</h4>
                        <h4 className='mt-3'>Description:<p className='mt-2'>{classDetail.description}</p></h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassDetails;