import React from 'react';

const VideoPlayer = ({ video }) => {
    
    if(!video){
        return <div>Loading..</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="video">
            <iframe src={videoSrc} className="video__player" title={video.snippet.title}/>

            <div className="video__detail">
                <h4 className="video__heading">{video.snippet.title}</h4>
                <p className="video__desc">{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoPlayer;
