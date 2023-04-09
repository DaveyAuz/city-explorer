import React, { Component } from 'react'
import Movies from './Movies';
import ListGroup from "react-bootstrap/ListGroup";

export default class Movie extends Component {
    render() {
        console.log(this.props.Movies);
        return (
            
                <ListGroup>
                    <ListGroup.Item>{this.props.movieData.Title}</ListGroup.Item>
                    <ListGroup.Item>{this.props.movieData.Overview}</ListGroup.Item>
                </ListGroup>

                {this.props.movieData.map(movies => <Movies movies={movies} />)}

        )
    }
}

