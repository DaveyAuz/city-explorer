import React from 'react';
class Movie extends React.Component {
    render() {
        console.log(this.props.cityMovieData);
        return (
            <div className="movie">
            <>
            <p>this.props.movie.title</p>
                </>
                <h2>this.props.movie.overview</h2>
                <img src={this.props.image} alt={this.props.title} />
                <h3>{this.props.title}</h3>
            </div>
        );
    }
    };