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

const Home = () => {
    return (
        <div>
           <VideoBackground/>
            <Grid container spacing={4}
                  direction="row"
                  position="absolute"
                  sx={{display: 'flex', justifyContent: 'flex-start', top: '100px', right:'0px', left:'0px', paddingX:'110px'}}>
                <Grid item xs={4}  sx={{ height:'50px'}}>
                    <Paper>
                        <CustomCard sx={{height:"auto", marginBottom:"20px"}}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color:'#fdfdfd', paddingBottom:'10px',  fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem'}}>
                                    What is ChordGAN?
                                </Typography>
                                <Typography variant="body1" sx={{textAlign: 'left'}}>
                                    ChordGAN is a tool that provides a Generative Adversarial Neural Networks for Random and Complex Chord Progression Generation
                                </Typography>
                            </CardContent>
                        </CustomCard>
                    </Paper>
                    <Paper>
                        <CustomCard sx={{height:"auto"}}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color:'#fdfdfd', paddingBottom:'10px',  fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem'}}>
                                    Dataset Info
                                </Typography>
                                <Typography variant="body1" sx={{textAlign: 'left'}}>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </Typography>
                            </CardContent>
                        </CustomCard>
                    </Paper>
                </Grid>
                <Grid item xs={4} >
                    <Paper>
                        <CustomCard sx={{height:"auto"}}>
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
                <Grid item xs={4} >
                    <Paper>
                        <CustomCard sx={{minHeight: '300px' ,marginBottom: '20px' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color:'#fdfdfd', paddingBottom:'10px',  fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem'}}>
                                    Check some of our work
                                </Typography>

                                    <ReactPlayer width="auto" height="250px"   url='https://soundcloud.com/playlist/sets/blm-black-lives-matter' />

                            </CardContent>
                        </CustomCard>
                    </Paper>
                    <Paper>
                        <CustomCard sx={{minHeight: '300px' ,marginBottom: '20px' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color:'#fdfdfd', paddingBottom:'10px',  fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem'}}>
                                    Outputs
                                </Typography>
                                <ReactPlayer width="auto" height="250px" url='https://soundcloud.com/playlist/sets/blm-black-lives-matter' />
                            </CardContent>
                        </CustomCard>
                    </Paper>
                </Grid>

            </Grid>
        </div>

    )
};

export default Home;

