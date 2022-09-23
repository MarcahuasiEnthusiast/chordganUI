import React from "react";
import {Card, CardContent, Container, Typography} from "@mui/material";
import VideoBackground from '../components/VideoBackground'

const Home = () => {
    return <div>
        <VideoBackground/>
            <Container sx={{display: 'flex', justifyContent: 'center', position:'absolute', top: '150px', right:'0px', left:'0px'}}>
                <Card>
                    <CardContent>
                        <Typography>
                            Generative Adversarial Neural Networks for Random and Complex Chord Progression Generation
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
    </div>
};

export default Home;

