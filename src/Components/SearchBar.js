import React from 'react';
import Icon from '../assets/sprite.svg';

class SearchBar extends React.Component{

    state = { term: '' };

    onInputChange = e => {
        this.setState({ term: e.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    };

    render(){
        return(
            <form className="search" onSubmit={this.onFormSubmit}>
                <input type="text"
                 className="search__bar" 
                 placeholder="Search" 
                 name="search bar" 
                 value={this.state.term}
                 onChange={this.onInputChange}/>
                <button className="search__btn" onClick={this.onFormSubmit}>
                    <svg className="search__btn--svg">
                        <use xlinkHref={`${Icon}#icon-search`}></use>
                    </svg>
                </button>
            </form>
        )
    }
}

export default SearchBar;