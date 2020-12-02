import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './homepage.css';
import img01 from '../../new_recipe_images/pan-seared-salmon.jpeg';
import img02 from '../../new_recipe_images/rib-eye-steak-potatoes.jpg';
import img03 from '../../new_recipe_images/healthy-eggs-benedict.jpg';

class NewRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newRecipes: [
                {
                    category: "lunch",
                    name: "Pan Seared Salmon with Kale and Apple Salad",
                    description: "The star of this dish is the kale salad. It's crunchy, tangy and sweet!",
                    image: img01,
                    alt: "Pan seared salmon with kale and apple salad"
                },
                {
                    category: "dinner",
                    name: "Rib-Eye Steak and Potatoes",
                    description: "For a special occasion with a sweetheart, sharing a simple, luxurious dinner at home is even better than going to a restaurant. Splurge on a cut like rib-eye or tenderloin and open a great bottle of wine. It's a simple, no-fuss endeavor, yet very special.",
                    image: img02,
                    alt: "Rib-eye steak and potatoes"
                },
                {
                    category: "breakfast",
                    name: "Healthy Eggs Benedict",
                    description: "Healthy eggs Benedict is your classic brunch recipe turned into a delicious sweet potato variation. You'll love it!",
                    image: img03,
                    alt: "Sweet potato eggs benedict"
                }
            ]
        }
    }

    render() {
        return (
            <div className="new-recipe-div">
                <h2>Newly Added Recipes</h2>
                <hr className="hr"></hr>
                <Row>
                    {this.state.newRecipes.map(recipe => (
                        <Link to={'/healthy-recipes/' + (recipe.category + '/' + recipe.name.replaceAll(' ','-').toLowerCase())} className="new-recipe">
                            <Col xs={5} className="display-inline">
                                <Image className="new-image" src={recipe.image} alt={recipe.alt} rounded />
                            </Col>
                            <Col xs={7} className="display-inline">
                                <h4 className="recipe-name">{recipe.name}</h4>
                                {/* <p>{this.state.Description01}</p> */}
                            </Col>
                        </Link>
                    ))}
                </Row>
            </div>
        )
    }
}

export default NewRecipe;