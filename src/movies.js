import React, { Component } from 'react';
import Movies from './Movies';

export default class Movie extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Movies</h3>
                {this.props.movieData.map(movie => <Movies movie={movie}/>)}
            </div>
        );
    }
}
