import React from "react";
import {Card, CardContent, Grid, Paper, Typography} from "@mui/material";
import VideoBackground from '../components/VideoBackground'
import {styled} from "@mui/material/styles";

const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#999999',
    color: '#272727',
    padding:'8px',
    boxShadow: "-7px 7px 7px rgb(88,88,88)"

}));


const Home = () => {
    return (

        <div>
            <VideoBackground/>
            <Grid container spacing={5} direction="row"
                  justifyContent="center"
                  alignItems="flex-start"
                  position="absolute"
                  sx={{display: 'flex', justifyContent: 'center', top: '195px', right:'0px', left:'0px', paddingX:'110px'}}>
                <Grid item xs={3}>
                    <Paper>
                        <CustomCard sx={{ }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color:'#fdfdfd', paddingBottom:'10px',  fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem'}}>
                                    What is ChordGAN?
                                </Typography>
                                <Typography variant="body1" sx={{textAlign: 'left'}}>
                                    ChordGAN is a generative adversarial neural networks for random and complex chord progression generation
                                </Typography>
                            </CardContent>
                        </CustomCard>
                    </Paper>
                </Grid>
                <Grid item xs={3} >
                    <Paper>
                        <CustomCard sx={{ }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color:'#fdfdfd', paddingBottom:'10px',  fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem'}}>
                                    How does it works?
                                </Typography>
                                <Typography variant="body1" sx={{textAlign: 'left'}}>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </Typography>
                            </CardContent>
                        </CustomCard>
                    </Paper>
                </Grid>
                <Grid item xs={3} >
                    <Paper>
                        <CustomCard sx={{ }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color:'#fdfdfd', paddingBottom:'10px',  fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem'}}>
                                    Check some of our work
                                </Typography>
                                <Typography variant="body1" sx={{textAlign: 'left'}}>
                                    AQUI VA LA PLAYLIST DE SOUNDCLOUD
                                </Typography>
                            </CardContent>
                        </CustomCard>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <CustomCard sx={{ }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color:'#fdfdfd', paddingBottom:'10px',  fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem'}}>
                                    Other Playlist
                                </Typography>
                                <Typography variant="body1" sx={{textAlign: 'left'}}>
                                    AQUI VA LA PLAYLIST DE SOUNDCLOUD
                                </Typography>
                            </CardContent>
                        </CustomCard>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    )
};

export default Home;

