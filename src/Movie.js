import React, { Component } from 'react';
import Movies from './Movies';
import ListGroup from "react-bootstrap/ListGroup";

class Movie extends Component {
    render() {
        console.log(this.props.movieData);
        return (
            <div>
                
                <ListGroup>
                    <ListGroup.Item>{this.props.movieData.title}</ListGroup.Item>
                    <ListGroup.Item>{this.props.movieData.overview}</ListGroup.Item>
                    
                </ListGroup>
            </div>
        );
    }
}
export default Movie;

//<Movies movieData={this.props.movieData.Movies} />
//{this.props.movieData.map(movie => <Movies movie={movie} key={movie.id} />)}
