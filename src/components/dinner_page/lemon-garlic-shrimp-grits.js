import React from 'react';
import RecipePage from '../recipe';
import image from '../../dinner_images/lemon-garlic-shrimp-grits.jpeg';

class LemonGarlicShrimpGrits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Lemon-Garlic Shrimp and Grits",
            yield: "4 servings",
            time: "20 minutes",
            image: image,
            alt: "Lemon garlic shrimp and grits",
            description: "You won't find sticks of butter in this comfort food. Don't worry about flavor, though; these shrimp are plenty zesty from the lemon and garlic.",
            ingredients: [
                "3/4 cup instant grits", "Kosher salt and freshly ground black pepper", "1/4 cup grated parmesan cheese", "3 tablespoons unsalted butter", "1 1/4 pounds medium shrimp, peeled and deveined (tails instact)", "2 large cloves garlic, minced", "Pinch of cayenne pepper (optional)", "Juice of 1/2 lemon, plus wedges for serving", "2 tablespoons roughly chopped fresh parsley"
            ],
            instructions: [
                "Bring 3 cups water to a boil in a medium saucepan over high heat, covered. Uncover and slowly whisk in the grits, 1 teaspoon salt and 1/2 teaspoon black pepper. Reduce the heat to medium low and cook, stirring occasionally, until thickened, about 5 minutes. Stir in the parmesan and 1 tablespoon butter. Remove from the heat and season with salt and black pepper. Cover to keep warm.", "Meanwhile, season the shrimp with salt and black pepper. Melt the remaining 2 tablespoons butter in a large skillet over medium-high heat. Add the shrimp, garlic and cayenne, if using, and cook, tossing, until the shrimp are pink, 3 to 4 minutes. Remove from the heat and add 2 tablespoons water, the lemon juice and parsley; stir to coat the shrimp with the sauce and season with salt and black pepper.", "Divide the grits among shallow bowls and top with the shrimp and sauce. Serve with lemon wedges."
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

export default LemonGarlicShrimpGrits;