import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './homepage.css';
import chicken from '../../images/herbed-chicken-marsala.jpg';

class Feature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'herbed-chicken-marsala.jpg',
            alt: 'herbed chicken marsala',
            name: 'Herbed Chicken Marsala',
            description: 'Smothered in low-calorie sauteed mushrooms and sun-dried tomatoes, this dish is both healthy and satisfying. A little bit of butter goes a long way in the sauce-just a touch adds creamy richness'
        }
    }
    render() {
        return (
            <Card className="featured">
                <Link to="/healthy-recipes/lunch/herbed-chicken-marsala">
                    <Card.Header>Featured Dish of the Month</Card.Header>
                    <Card.Img src={chicken} alt={this.state.alt} className="featured-img" />
                    <Card.Title className="featured-name">{this.state.name}</Card.Title>
                </Link>
            </Card>
        )
    }
}

export default Feature;