import React from "react";
import {Card, CardContent, Grid, Paper, Typography} from "@mui/material";
import VideoBackground from '../components/VideoBackground'
import {styled} from "@mui/material/styles";
import ReactPlayer from 'react-player';


const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#999999',
    color: '#272727',
    padding:'8px',
    boxShadow: "-7px 7px 7px rgb(88,88,88)"

}));
const CardTitleTypography = styled(Typography)(({ theme }) => ({
    textAlign:'center',
    color:'#fdfdfd',
    paddingBottom:'10px',
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
}));


const Home = () => {
    return (
        <div>
           <VideoBackground/>
            <Grid container spacing={4}
                  direction="row"
                  position="absolute"
                  sx={{display: 'flex', justifyContent: 'center', top: '100px', right:'0px', left:'0px',
                      paddingX:'110px'}}>
                <Grid item xs={4}  sx={{ height:'50px'}}>
                    <Paper>
                        <CustomCard sx={{height:"auto", marginBottom:"20px"}}>
                            <CardContent>
                                <CardTitleTypography gutterBottom variant="h5" component="div">
                                    What is ChordGAN?
                                </CardTitleTypography>
                                <Typography variant="body1" sx={{textAlign: 'left'}}>
                                    ChordGAN is a generative deep learning tool designed to provide real time randomized generation of Jazz chord progressions. The user is able to generate new chord sequence ideas on demand and export them directly in MIDI files. The resulting files can be easily used to compose and produce music as these can be imported in most Digital Audio Workstations.
                                </Typography>
                            </CardContent>
                        </CustomCard>
                    </Paper>
                    <Paper>
                        <CustomCard sx={{height:"auto"}}>
                            <CardContent>
                                <CardTitleTypography gutterBottom variant="h5" component="div">
                                    Dataset Info
                                </CardTitleTypography>
                                <Typography variant="body1" sx={{textAlign: 'left'}}>
                                We have designed and prepared a custom dataset named JazzHarm. Chord progression patterns exist implicitly in  symbolic representation through music itself. For this purpose we chose a collection of jazz themes from The Real Book, one of the main formal sources of knowledge from where musicians learn jazz music theory and execution of their melodic or/and harmonic instrument. These themes were recorded manually using a MIDI keyboard. The process of recording was focused to only capture the chord sequence of the song, not the music itself as a whole, which for the jazz style would commonly contain a lead melody, a rhythm pattern, a walking bass line, among many other possible independent voices that would complicate excessively the data patterns.
                                </Typography>
                            </CardContent>
                        </CustomCard>
                    </Paper>
                </Grid>
                {/*
                <Grid item xs={4} >
                    <Paper>
                        <CustomCard sx={{height:"auto"}}>
                            <CardContent>
                                <CardTitleTypography gutterBottom variant="h5" component="div">
                                    How does it works?
                                </CardTitleTypography>
                                <Typography variant="body1" sx={{textAlign: 'left'}}>
                                    To be done.
                                </Typography>
                            </CardContent>
                        </CustomCard>
                    </Paper>
                </Grid>
                 */}
                <Grid item xs={4} >
                    <Paper>
                        <CustomCard sx={{minHeight: '300px' ,marginBottom: '20px' }}>
                            <CardContent>
                                <CardTitleTypography gutterBottom variant="h5" component="div">
                                    Raw Outputs
                                </CardTitleTypography>
                                    <ReactPlayer width="auto" height="250px"
                                                 url='https://soundcloud.com/peruviantorch/sets/chordgan-raw-outputs?si=9b3c4f6dd38f4bffb2f1fbb6a7829f43&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' />
                            </CardContent>
                        </CustomCard>
                    </Paper>
                    <Paper>
                        <CustomCard sx={{minHeight: '300px' ,marginBottom: '20px' }}>
                            <CardContent>
                                <CardTitleTypography gutterBottom variant="h5" component="div">
                                    Processed Outputs
                                </CardTitleTypography>
                                <ReactPlayer width="auto" height="250px"
                                             url='https://soundcloud.com/peruviantorch/sets/chordgan-processed-outputs?si=db1559eb7b184e75bb1e880e48f75d26&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' />
                            </CardContent>
                        </CustomCard>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
};

export default Home;

