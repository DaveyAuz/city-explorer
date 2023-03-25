import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
export default class Map extends Component {
  render() {
    return (
      <Image src={this.props.img_url} alt={this.props.city} title={this.props.city} rounded fluid/>
    )
  }
}
