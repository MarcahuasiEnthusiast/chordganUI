import React from 'react';
import '../VideoBackground.css';

const VideoBackground = () => {
    return (
        <div className="video-background">
        <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLy1bC-662HHKXOVHInxvhSRReDz0d4xCI&index=5&autoplay=1&mute=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=3&start=50"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; encrypted-media;"/>
    </div>
);
}
export default VideoBackground;

