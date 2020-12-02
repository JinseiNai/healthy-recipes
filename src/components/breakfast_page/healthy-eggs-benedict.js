import React from 'react';
import RecipePage from '../recipe';
import image from '../../breakfast_images/healthy-eggs-benedict.jpg';

class HealthyEggsBenedict extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Healthy Eggs Benedict",
            yield: "4 servings",
            time: "30 minutes",
            image: image,
            alt: "Sweet potato eggs benedict",
            description: "Healthy eggs Benedict is a creative breakfast recipe made up of four delicious layers. Sweet potato toast is topped with Canadian bacon, poached eggs and a drizzle of creamy hollandaise sauce.",
            ingredients: [
                "1 sweet potato, cut into 1/4 inch to 1/2 inch thick slices", "4 eggs", "4 slices Canadian bacon", "parsley, for garnish", "-Hollandaise Sauce-", "3 egg yolk", "1 tablespoon lemon juice", "1/2 teaspoon dijon", "1/4 teaspoon salt", "pinch of cayenne pepper", "1/2 cup hot butter, or ghee"
            ],
            instructions: [
                "Preheat your oven to 400 degrees Fahrenheit.", "Slice the potato into even round slices, using a sharp knife or mandoline. Place the slices on a baking sheet and bake for 30-40 minutes, or until cooked through. Note: thicker slices may take longer.", "When the sweet potato is almost done, prepare the other ingredients.", "Cook the Canadian bacon for about a minute on each side in a pan on medium heat. Set aside.", "Bring a pot of water to a simmer. Create a vortex with a spoon and crack and poach the eggs for 3-4 minutes. Remove the eggs from the pot and place in a bowl.", "Add the egg yolks, lemon juice, dijon, salt and cayenne pepper to a high powered blender and blend for about 5 seconds. Then slowly pour in the hot butter with the blender on medium high, until you've fully emulsified the sauce. Pour into a small bowl.", "Once the potatoes have cooked, add to a plate and top with canadian bacon, a poached egg, and a drizzle of hollandaise sauce. Garnish with chopped parsley and serve immediately!"
            ]
        }
    }

    render() {
        return (
            <div className="recipe-container">
                <RecipePage name={this.state.name} yield={this.state.yield} time={this.state.time} image={this.state.image} alt={this.state.alt} description={this.state.description} ingredients={this.state.ingredients} instructions={this.state.instructions}></RecipePage>
            </div>
        )
    }
}

export default HealthyEggsBenedict;