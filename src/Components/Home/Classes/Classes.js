import React, { useState, useEffect } from 'react';
import Class from '../Class/Class';
import './Classes.css'
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Classes = () => {

  const [classes, setClasses] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://afternoon-river-41787.herokuapp.com/allClasses?search=' + search)
      .then(res => res.json())
      .then(data => setClasses(data))
  }, [search])

  const handleChange = (e) => {
    setSearch(e.target.value);
    e.preventDefault();
  }

  return (
    <section>
      <div>
        <Navbar bg="dark" variant="dark">
          <Link to='/'><Navbar.Brand>BEYOND 8 ACADEMY</Navbar.Brand></Link>
          <Form inline className='m-auto'>
            <input type="search" onChange={handleChange} placeholder='Search your Subject' className='form-control-lg px-5' />
          </Form>
        </Navbar>
      </div>
      <div className="container">
        <div className="row classes">
          {
            classes.map(semester => <Class semester={semester} key={semester.id}></Class>)
          }
        </div>
      </div>

    </section>
  );
};

export default Classes;