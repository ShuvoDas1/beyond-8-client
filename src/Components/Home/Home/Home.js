import React from 'react';
import './Home.css'
import NavbarNav from '../NavbarNav/NavbarNav'
import Classes from '../Classes/Classes';
import  { useState, useEffect } from 'react';

const Home = () => {
    
//     
//     const [classes, setClasses] = useState({})

//   useEffect(() => {
//     fetch('http://localhost:4000/allClasses')
//       .then(res => res.json())
//       .then(data => data.map(semester => setClasses(semester)))
//   }, [])

//     const handleSearch = () =>{
//         useEffect(()=>{
//             fetch('http://localhost:4000/search' + classes.semester)
//             .then(res => res.json())
//             .then(data => console.log(data))
//         },[search])
//     }
    
    return (
        <main>
            {/* <NavbarNav /> */}
            <Classes />
        </main>
    );
};

export default Home;