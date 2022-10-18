import React from 'react';
import {Grid, Paper, Card, CardMedia, CardContent, Typography, CardActions} from "@mui/material";
import '../About.css';
import { styled } from '@mui/material/styles';
import monumento from '../assets/monumento.jpg'
import alex from '../assets/alex.JPG'
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
                <TitleTypography gutterBottom variant="h3" component="div" >
                </TitleTypography>
            <MainGrid container spacing={6} direction="row">
                <Grid item xs={5} >
                    <Paper>
                    <CustomCard sx={{ }}>
                            <CustomCardMedia
                                component="img"
                                height="auto"
                                image={monumento}
                            />
                            <CardContent>
                                <NameTypography gutterBottom variant="h5" component="div">
                                    Roberto Vega
                                </NameTypography>
                                <Typography variant="body1" sx={{textAlign: 'justify'}}>
                                    To be done
                                </Typography>
                            </CardContent>
                            <CardActions>
                                
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.instagram.com/cactusmilenario/" target="_blank">
                                        <InstagramIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.youtube.com/channel/UCjYPk7AIw9QRAiuA1xpWYDQ" target="_blank">
                                        <YouTubeIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://github.com/peruviantorch" target="_blank">
                                        <GitHubIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.linkedin.com/in/roberto-vega-berrocal-6a8711ba/" target="_blank">
                                        <LinkedInIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                            </CardActions>
                        </CustomCard>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper>
                        <CustomCard>
                            <CustomCardMedia
                                component="img"
                                height="auto"
                                image={alex}
                            />
                            <CardContent>
                                <NameTypography gutterBottom variant="h5" component="div">
                                    Alexander Melendez
                                </NameTypography>
                                <Typography variant="body1" sx={{textAlign: 'justify'}}>
                                    To be done
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.facebook.com/alexandermoises.melendezrios.7" target="_blank">
                                        <FacebookIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton>
                                    <a className='socialIcon' href="https://www.instagram.com/alexandermelendez_09/" target="_blank">
                                        <InstagramIcon sx={{ fontSize: 30 }}/>
                                    </a>
                                </CustomIconButton>
                                <CustomIconButton >
                                    <a className='socialIcon' href="https://www.linkedin.com/in/alexander-moises-melendez-rios-74912b15b?originalSubdomain=pe" target="_blank">
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

