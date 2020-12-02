import React from 'react';
import RecipePage from '../recipe'
import image from '../../dinner_images/pan-fried-tilapia.jpg';

class PanFriedTilapia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Pan Fried Tilapia",
            yield: "4 servings",
            time: "25 minutes",
            image: image,
            alt: "Pan fried tilapia",
            ingredients: [
                "1 cup all-purpose flour", "1 teaspoon. garlic powder", "1 teaspoon. onion powder", "1 teaspoon. chili powder", "1/2 teaspoon. ground cumin", "4 (6-oz.) tilapia filets", "Kosher salt", "freshly ground black pepper", "2 tablespoon. canola or vegetable oil, divided", "2 tablespoon. cilantro leaves, for garnish", "Lime wedges, for serving"
            ],
            instructions: [
                "In a large bowl, whisk together flour, garlic powder, onion powder, chili powder, and cumin. Whisk to combine.",
                "Season tilapia filets generously with salt and pepper, then dip each in flour mixture, shaking off any excess flour. Place on a clean plate or baking sheet.",
                "In a large, nonstick skillet over medium heat, heat oil. Add 2 filets and cook 3 to 4 minutes per side, until crust is golden and fish flakes easily with a fork. Repeat with remaining filets.", "Serve immediately with cilantro and lime wedges."
            ]
        }
    }

    render() {
        return(
            <div className="recipe-container">
                <RecipePage name={this.state.name} yield={this.state.yield} time={this.state.time} image={this.state.image} alt={this.state.alt} description={this.state.description} ingredients={this.state.ingredients} instructions={this.state.instructions}></RecipePage>
            </div>
        )
    }
}

export default PanFriedTilapia;