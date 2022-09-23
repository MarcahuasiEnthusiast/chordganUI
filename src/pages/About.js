import React from 'react';
import {Grid, Paper, Card, CardMedia, CardContent, Typography, CardActions} from "@mui/material";
import '../About.css';
import { styled } from '@mui/material/styles';
import roberto from '../assets/roberto.jpg'
import alexander from '../assets/alexander.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from "@mui/material/IconButton";

const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#999999',
    color: '#fdfdfd',
    padding:'8px',
    boxShadow: "-7px 7px 7px rgb(88,88,88)"

}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
    color: '#fdfdfd',

}));
const TitleTypography = styled(Typography)(({ theme }) => ({
    color: '#fdfdfd',
    textAlign: 'center',
    marginTop: '15px',


}));


const About = () => {
    return (

        <div>
                <TitleTypography gutterBottom variant="h3" component="div" >
                    Meet the team behind this awesome project
                </TitleTypography>
            <Grid container spacing={6} direction="row"
                  justifyContent="center"
                  alignItems="flex-start" >
                <Grid item xs={5} >
                    <Paper>
                        <CustomCard>
                            <CardMedia
                                sx={{maxHeight: '315px', minHeight:'315px',borderRadius: '4px' }}
                                component="img"
                                height="auto"
                                image={alexander}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{textDecoration: 'underline'}} >
                                    Alexander Melendez
                                </Typography>
                                <Typography variant="body1" sx={{textAlign: 'justify'}}>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.facebook.com">
                                        <FacebookIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.instagram.com">
                                        <InstagramIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.twitter.com">
                                        <TwitterIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.youtube.com">
                                        <YouTubeIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.github.com">
                                        <GitHubIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.linkedin.com">
                                        <LinkedInIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                            </CardActions>
                        </CustomCard>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper>
                        <CustomCard sx={{ }}>
                            <CardMedia
                                sx={{maxHeight: '315px', minHeight:'315px',borderRadius: '4px' }}
                                component="img"
                                height="auto"
                                image={roberto}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{textDecoration: 'underline'}} >
                                    Roberto Vega
                                </Typography>
                                <Typography variant="body1" sx={{textAlign: 'justify'}}>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.facebook.com">
                                        <FacebookIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.instagram.com">
                                        <InstagramIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.twitter.com">
                                        <TwitterIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.youtube.com">
                                        <YouTubeIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.github.com">
                                        <GitHubIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.linkedin.com">
                                        <LinkedInIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                            </CardActions>
                        </CustomCard>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    )

};

export default About;

