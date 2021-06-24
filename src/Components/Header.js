import React from 'react';
import SearchBar from './SearchBar';
import youtube from './api/Youtube';

class Header extends React.Component {

    componentDidMount(){
        this.onTermSubmit('cars');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        });
        
        this.props.getItems(response.data.items);
    };

    render(){
        return (
            <header>
                <h2>Mini Youtube</h2>
                <SearchBar onTermSubmit={this.onTermSubmit} />
            </header>
        )
    }
}

export default Header
