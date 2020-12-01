import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// CSS
import '../recipe.css';
// images
import ribeye_steak from '../../dinner_images/rib-eye-steak-potatoes.jpg';
import pan_fried_tilapia from '../../dinner_images/pan-fried-tilapia.jpg';
import lemon_garlic_shrimp_grits from '../../dinner_images/lemon-garlic-shrimp-grits.jpeg';

class DinnerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    name: "Rib-Eye Steak and Potatoes",
                    description: "For a special occasion with a sweetheart, sharing a simple, luxurious dinner at home is even better than going to a restaurant. Splurge on a cut like rib-eye or tenderloin and open a great bottle of wine. It's a simple, no-fuss endeavor, yet very special.",
                    image: ribeye_steak,
                    alt: "Rib-eye steak and potatoes"
                },
                {
                    name: "Pan-Fried Tilapia",
                    description: "It's lean and inexpensive, making it a great choice for your next weeknight dinner. Follow a few simple rules and take this affordable filet from zero to hero.",
                    image: pan_fried_tilapia,
                    alt: "Pan fried tilapia"
                },
                {
                    name: "Lemon-Garlic Shrimp and Grits",
                    description: "You won't find sticks of butter in this comfort food. Don't worry about flavor though; these shrimp are plenty zesty from the lemon and garlic.",
                    image: lemon_garlic_shrimp_grits,
                    alt: "Lemon garlic shrimp and grits"
                }
            ]
        }
    }


    render() {
        function msgLen(msg) {
            if(msg.length > 100) {
                msg = msg.substring(0, 100) + '...';
                return msg;
            } else {
                return msg;
            }
        }
        return (
            <Container>
                <h1 className="category-title">Dinner Recipes</h1>
                <Row>
                    {this.state.recipes.map(recipe => (
                        <div className="recipe-box">
                            <Link to={"/healthy-recipes/dinner/" + recipe.name.replaceAll(' ', '-').toLowerCase()}>
                                <Col className="inline" md={4}>
                                    <Image className="recipe-list-image" src={recipe.image} alt={recipe.alt} />
                                </Col>
                                <Col className="inline" md={8}>
                                    <h3>{recipe.name}</h3>
                                    <p>{msgLen(recipe.description)}</p>
                                </Col>
                            </Link>
                        </div>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default DinnerPage;