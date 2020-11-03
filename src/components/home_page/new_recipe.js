import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './homepage.css';
import New01 from '../../images/pan-seared-salmon.jpeg';

class NewRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name01: 'Pan Seared Salmon with Kale and Apple Salad',
            Description01: "The star of this dish is the kale salad. It's crunchy, tangy and sweet!"
        }
    }

    render() {
        return (
            <div>
                <h2>Newly Added Recipes</h2>
                <hr></hr>
                <Row>
                    <Link to="/lunch/pan-seared-salmon-kale-apple-salad">
                        <Col xs={4} className="display-inline">
                            <Image className="new-recipe" src={New01} rounded />
                        </Col>
                        <Col xs={8} className="display-inline">
                            <h4 className="recipe-name">{this.state.Name01}</h4>
                            {/* <p>{this.state.Description01}</p> */}
                        </Col>
                    </Link>
                </Row>
            </div>
        )
    }
}

export default NewRecipe;