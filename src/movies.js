import React from 'react';
import Movie from './Movie';
//import React, { Component } from 'react'
import Movies from './Movies';

export default class Movie extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Movies</h3>
                <ul>
                    {this.props.movieData.map(movies => <Movies movies={movies} />)}
                    {/* <li key={movie}> */}
                    {/* </li> */}
                </ul>
            </div>
        )
    }
}