import React from 'react';
import RecipePage from '../recipe';
import image from '../../lunch_images/pan-seared-salmon.jpeg';

class SalmonKaleAppleSalad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Pan-Seared Salmon with Kale and Apple Salad",
            yield: "4 servings",
            time: "40 minutes",
            image: image,
            alt: "Pan seared salmon with kale and apple salad",
            description: "The star of this dish is the kale salad. It's crunchy, tangy and sweet!",
            ingredients: [
                "4 5-oz. center-cut salmon fillets (about 1-inch thick)", "3 tablespoons fresh lemon juice", "3 tablespoons olive oil", "Kosher salt", "1 bunch kale, ribs removed, leaves very thinly sliced (about 6 cups)", "1/4 cup dates", "1 Honeycrisp apple", "1/4 cup finely grated pecorino", "3 tablespoons toasted silvered almonds", "Freshly ground black pepper", "4 whole wheat dinner rolls"
            ],
            instructions: [
                "Bring the salmon to room temperature 10 minutes before cooking.", "Meanwhile, whisk together the lemon juice, 2 tablespoons of the olive oil and 1/4 teaspoon salt in a large bowl. Add the kale, toss to coat and let stand 10 minutes.", "While the kale stands, cut the dates into thin slivers and the apple into matchsticks. Add the dates, apples, cheese and almonds to the kale. Season with pepper, toss well and set aside.", "Sprinkle the salmon all over with 1/2 teaspoon salt and some pepper. Heat the remaining 1 tablespoon oil in a large nonstick skillet over medium-low heat. Raise the heat to medium-high. Place the salmon, skin-side up in the pan. Cook until golden brown on one side, about 4 minutes. Turn the fish over with a spatula, and cook until it feels firm to the touch, about 3 minutes more.", "Divide the salmon, salad and rolls evenly among four plates."
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

export default SalmonKaleAppleSalad;