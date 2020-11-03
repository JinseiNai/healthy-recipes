import React from 'react';
import Card from 'react-bootstrap/Card';
import chicken from '../../images/herbed-chicken-marsala.jpg';

class Feature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'herbed-chicken-marsala.jpg',
            name: 'Herbed Chicken Marsala',
            description: 'Smothered in low-calorie sauteed mushrooms and sun-dried tomatoes, this dish is both healthy and satisfying. A little bit of butter goes a long way in the sauce-just a touch adds creamy richness'
        }
    }
    render() {
        return (
            <Card>
                <Card.Header>Featured Dish of the Month</Card.Header>
                <Card.Img src={chicken} />
                <Card.Title>{this.state.name}</Card.Title>
            </Card>
        )
    }
}

export default Feature;