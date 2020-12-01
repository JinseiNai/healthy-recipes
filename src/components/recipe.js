import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
// CSS
import './recipe.css';

class RecipePage extends React.Component {

    render() {
        return (
            <Container>
                <h1>{this.props.name}</h1>
                <p>Yield: {this.props.yield}</p>
                <p>Time: {this.props.time}</p>
                <Image className="recipe-image" src={this.props.image} alt={this.props.alt} />
                <p>{this.props.description}</p>
                <h3>Ingredients:</h3>
                <hr></hr>
                <ul>
                    {this.props.ingredients.map(ingredient => (
                        <li>{ingredient}</li>
                    ))}
                </ul>
                <h3>Instructions:</h3>
                <hr></hr>
                <ol>
                    {this.props.instructions.map(step => (
                        <li>{step}</li>
                    ))}
                </ol>

            </Container>
        )
    } 
}

export default RecipePage;