import React from 'react';
import ReactPlayer from 'react-player';
import '../VideoBackground.css';

const VideoBackground = () => {
    return (
        <div>
            <ReactPlayer style={{pointerEvents:'none'}} width="99vw" height="100vh"  controls='false' playing='true'
                         muted url='https://www.youtube.com/watch?v=-T3LcxYNUMM&list=PLaTP_B8K0vdiUP8f3h6Y2930CJS4e_e4H&index=3'></ReactPlayer>
        </div>
);
}
export default VideoBackground;

