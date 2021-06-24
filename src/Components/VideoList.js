import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ listItems, onVideoSelect }) => {

    const video = listItems.map((item, index)=> {
        return <VideoItem onVideoSelect={onVideoSelect} video={item} key={index}/>
    })

    return (
        <div className="videoList">
            {video}
        </div>
    )
}

export default VideoList;
