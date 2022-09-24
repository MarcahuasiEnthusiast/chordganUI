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
import VideoBackground from '../components/VideoBackground'

const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#999999',
    color: '#272727',
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
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    position:'absolute',
    top: '100px', right:'0px',
    left:'0px'
}));

const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
    maxHeight: '315px',
    minHeight:'315px',
    borderRadius: '4px',
}));

const NameTypography = styled(Typography)(({ theme }) => ({
    textDecoration: 'underline',
    color:'#fdfdfd',
    paddingBottom:'10px',
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.2rem',
}));

const MainGrid = styled(Grid)(({ theme }) => ({
    alignItems: 'center',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    top: '225px',
    right:'0px',
    left:'0px',
    paddingX:'110px'
}));



const About = () => {
    return (

        <div>
                <VideoBackground/>
                <TitleTypography gutterBottom variant="h3" component="div" >
                    Meet the team behind this awesome project
                </TitleTypography>
            <MainGrid container spacing={6} direction="row">
                <Grid item xs={5} >
                    <Paper>
                        <CustomCard>
                            <CustomCardMedia
                                component="img"
                                height="auto"
                                image={alexander}
                            />
                            <CardContent>
                                <NameTypography gutterBottom variant="h5" component="div">
                                    Alexander Melendez
                                </NameTypography>
                                <Typography variant="body1" sx={{textAlign: 'justify'}}>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.facebook.com" target="_blank">
                                        <FacebookIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.instagram.com" target="_blank">
                                        <InstagramIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.twitter.com" target="_blank">
                                        <TwitterIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.youtube.com" target="_blank">
                                        <YouTubeIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.github.com" target="_blank">
                                        <GitHubIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.linkedin.com" target="_blank">
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
                            <CustomCardMedia
                                component="img"
                                height="auto"
                                image={roberto}
                            />
                            <CardContent>
                                <NameTypography gutterBottom variant="h5" component="div">
                                    Roberto Vega
                                </NameTypography>
                                <Typography variant="body1" sx={{textAlign: 'justify'}}>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.facebook.com" target="_blank">
                                        <FacebookIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.instagram.com" target="_blank">
                                        <InstagramIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.twitter.com" target="_blank">
                                        <TwitterIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.youtube.com" target="_blank">
                                        <YouTubeIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.github.com" target="_blank">
                                        <GitHubIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.linkedin.com" target="_blank">
                                        <LinkedInIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                            </CardActions>
                        </CustomCard>
                    </Paper>
                </Grid>
            </MainGrid>
        </div>
    )
};

export default About;

