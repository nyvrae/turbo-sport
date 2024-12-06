import React from 'react';
import './video-component.css';

const VideoComponent: React.FC = () => {

    return (
        <div className="video__container w-full aspect-video">
            <video
                className="video w-full h-full"
                src="/banner_video.mp4"
                muted
                autoPlay
                loop
                data-testid="video"
            />
        </div>
    );
};

export default VideoComponent;
