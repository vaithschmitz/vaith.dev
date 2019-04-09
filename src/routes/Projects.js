import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography'
import logo from '../web_logo_VS.png';
import './Projects.css'

const MyCardMedia = (
    <CardMedia  
    style={{height: 0, paddingTop: '100%'}}
    image={logo}/>
) 

const Projects = () => {
    return(
        <div className='maintext'>
            <div className="cards">
                <Card className="single-card">
                    <CardHeader title="Project 1"/>
                    {MyCardMedia}
                    {/* <CardMedia  
                        style={{height: 0, paddingTop: '100%'}}
                        image={logo}/> */}
                    <CardContent>
                        <Typography component="p">
                            This is a project with things and stuff.
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="single-card">
                    <CardHeader title="Project 2"/>
                    {MyCardMedia}
                    <CardContent>
                        <Typography component="p">
                            This is another project with things and stuff.
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="single-card">
                    <CardHeader title="Project 3"/>
                    {MyCardMedia}
                    <CardContent>
                        <Typography component="p">
                            And here's yet another one.
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="single-card">
                    <CardHeader title="Project 4"/>
                    {MyCardMedia}
                    <CardContent>
                        <Typography component="p">
                            Hello, did anybody say cheesecake. Or beef cake? Or pie?
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="single-card">
                    <CardHeader title="Project 5"/>
                    {MyCardMedia}
                    <CardContent>
                        <Typography component="p">
                        This is a project with things and stuff.
                        </Typography>
                    </CardContent>
                </Card>
            
            
            </div>
            <br/>
            <Link to="/">      
                <Button variant="outlined" color="secondary">Home
                </Button> 
            </Link>
            
        </div>

    )
}

export default Projects;