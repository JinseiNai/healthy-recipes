import React from 'react';
import RecipePage from '../recipe';
import image from '../../breakfast_images/healthy-eggs-benedict.jpg';

class RecipeTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            yield: "",
            time: "",
            image: image,
            alt: "",
            description: "",
            ingredients: [],
            instructions: []
        }
    }

    render() {
        return (
            <div>
                <RecipePage name={this.state.name} yield={this.state.yield} time={this.state.time} image={this.state.image} alt={this.state.alt} description={this.state.description} ingredients={this.state.ingredients} instructions={this.state.instructions}></RecipePage>
            </div>
        )
    }
}

export default RecipeTemplate;