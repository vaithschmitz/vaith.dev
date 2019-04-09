import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Projects.css'


const Projects = () => {
    return(
        <div className='maintext'>
            Under Construction 
            <hr/>  
            <hr/>  
            <hr/>  
            <Link to="/">      
                <Button variant="outlined" color="secondary">Home
                </Button> 
            </Link>
        </div>

    )
}

export default Projects;