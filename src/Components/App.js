import React from 'react';
import Header from './Header';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

class App extends React.Component{

    state = { videos: [], selectedVideo: null };

    getItems = (items) =>{
        this.setState({ videos: items, selectedVideo: items[0] });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    }

    render(){
        return (
            <>
                <Header getItems={this.getItems}/>
                <div className="container">
                    <VideoPlayer video={this.state.selectedVideo}/>
                    
                    <VideoList 
                    listItems={this.state.videos} 
                    onVideoSelect={this.onVideoSelect} 
                    selectedVideo={this.state.selectedVideo}/>
                </div>
            </>
        )
    }
    
}

export default App;
