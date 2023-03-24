import React from 'react';

class Movie extends React.Component {
    render() {
        console.log(this.props.cityMovieData);
        return (
            <>
            <p>this.props.movie.title</p>
            <p>this.props.movie.overview</p>
            </>
            
            
            <div className="movie">
                <img src={this.props.image} alt={this.props.title} />
                <h3>{this.props.title}</h3>
            </div>
        );
    }