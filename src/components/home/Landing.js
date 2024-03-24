import React, { Component } from 'react';
import Header from '../header/Header';
import Card from '../cards/Cards';

class Landing extends Component {
    render() {
        const backgroundStyle = {
            backgroundImage: 'url("sc2.jpeg")',  // Replace 'path_to_your_image.jpg' with the actual path to your image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',  // Set the minimum height of the background
        };

        return (
            <div style={backgroundStyle}>
                <Header />
                <Card />
            </div>
        );
    }
}

export default Landing;