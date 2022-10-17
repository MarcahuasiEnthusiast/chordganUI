import React from 'react';
import ReactPlayer from 'react-player';

const VideoBackground = () => {
    return (
        <div>
            <ReactPlayer style={{pointerEvents:'none'}} width="99vw" height="100vh"  controls='false' playing='true'
                         muted url='https://www.youtube.com/watch?v=34yFcVwq7EM&t=7783s'/>
        </div>
);
}
export default VideoBackground;

