import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// CSS
import '../recipe.css';
// Images
import healthy_eggs_benedict from '../../breakfast_images/healthy-eggs-benedict.jpg';
class BreakfastPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    name: "Healthy Eggs Benedict",
                    description: "Healthy eggs Benedict is a creative breakfast recipe made up of four delicious layers. Sweet potato toast is topped with Canadian bacon, poached eggs and a drizzle of creamy hollandaise sauce.",
                    image: healthy_eggs_benedict,
                    alt: "Sweet potato eggs benedict"
                }
            ]
        };
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
                <h1 className="category-title">Breakfast Recipes</h1>
                <Row>
                    {this.state.recipes.map(recipe => (
                        <div className="recipe-box">
                            <Link to={"/healthy-recipes/breakfast/" + recipe.name.replaceAll(' ', '-').toLowerCase()}>
                                <Col className="inline" md={4}>
                                    <Image src={recipe.image} alt={recipe.alt} className="recipe-list-image" />
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

export default BreakfastPage;