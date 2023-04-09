import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default class Weather extends React.Component {

    render() {
    console.log(this.props)
        return (
            <ListGroup>
                <ListGroup.Item>{this.props.weatherData.date}</ListGroup.Item>
                <ListGroup.Item>{this.props.weatherData.description}</ListGroup.Item>
            </ListGroup>
        );

    }
}

