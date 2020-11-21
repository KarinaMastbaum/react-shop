import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export default class Carousels extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d26lpennugtm8s.cloudfront.net/stores/252/472/themes/zen/slide-1604575922234-6777632164-d1e4167b7b4c44b4fd4510a36dbf60ec1604575929-1920-1920.jpg?630765300"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d26lpennugtm8s.cloudfront.net/stores/252/472/themes/zen/slide-1604570891751-3431905089-9e9b1f1e4783875a4b92421c9e941e741604570901-1920-1920.jpg?630765300"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d26lpennugtm8s.cloudfront.net/stores/252/472/themes/zen/slide-1604575795547-5067718986-2e762b9f4b63898821525a5fe512c3871604575802-1920-1920.jpg?630765300"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}