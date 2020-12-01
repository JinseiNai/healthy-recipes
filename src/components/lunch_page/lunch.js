import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// CSS
import '../recipe.css';
// Images
import salmon_kale_apple_salad from '../../lunch_images/pan-seared-salmon.jpeg';
import broiled_salmon_herb_mustard from '../../lunch_images/broiled-salmon-herb-mustard.jpeg';
import slow_cooker_pork_tacos from '../../lunch_images/slow-cooker-pork-tacos.jpeg';

class LunchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    name: "Pan-Seared Salmon with Kale and Apple Salad",
                    description: "The star of this dish is the kale salad. It's crunchy, tangy and sweet!",
                    image: salmon_kale_apple_salad,
                    alt: "Pan seared salmon with kale and apple salad"
                },
                {
                    name: "Broiled Salmon with Herb Mustard Glaze",
                    description: "It takes less than 20 minutes to make this succulent, 5-star Broiled Salmon. Make it for dinner one night, and use the leftovers to top greens or make into salmon salad later in the week.",
                    image: broiled_salmon_herb_mustard,
                    alt: "Broiled salmon with herb mustard glaze"
                },
                {
                    name: "Slow-Cooker Pork Tacos",
                    description: "It's impossible to resist flavorful and tender pork shoulder after it's been slowly simmered in chicken broth and aromatic spices.",
                    image: slow_cooker_pork_tacos,
                    alt: "Three slow cooked pork tacos"
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
                <h1 className="category-title">Lunch Recipes</h1>
                <Row>
                    {this.state.recipes.map(recipe => (
                        <div className="recipe-box">
                            <Link to={"/healthy-recipes/lunch/" + recipe.name.replaceAll(' ', '-').toLowerCase()}>
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

export default LunchPage;