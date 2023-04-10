import React, { Component } from 'react';

export default class Movie extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Movies</h3>
                
                {this.props.movieData.map(movie => <Movie movieData={movie}/>)}
            </div>
        );
    }
}
