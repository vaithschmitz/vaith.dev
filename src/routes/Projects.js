import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Projects.css'


const Projects = () => {
    return(
        <div className='maintext'>
            Under Construction.   
            <Link to="/">      
                <Button variant="contained" color="secondary">Home
                </Button> 
            </Link>
        </div>

    )
}

export default Projects;