import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {

    return (
        <div onClick={()=> onVideoSelect(video)} className="itemBox">
            <div className="imgBox">
                <img 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title} 
                className="thumbnail" />
            </div>
            <h4 className="videoTitle">{video.snippet.title}</h4>
        </div>
    )
}

export default VideoItem;
