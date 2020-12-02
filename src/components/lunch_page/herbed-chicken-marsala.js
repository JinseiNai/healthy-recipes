import React from 'react';
import RecipePage from '../recipe';
import image from '../../lunch_images/herbed-chicken-marsala.jpg';

class HerbedChickenMarsala extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Herbed Chicken Marsala",
            yield: "4 servings",
            time: "35 minutes",
            image: image,
            alt: "Herbed Chicken Marsala with broccoli",
            description: "Smothered in low-calorie sauteed mushrooms and sun-dried tomatoes, this dish is both healthy and satisfying. A little bit of butter goes a long way in the sauce-just a touch adds creamy richness.",
            ingredients: [
                "4 4oz boneless, skinless chicken breast cutlets", "Kosher salt and freshly ground black pepper", "1/3 cup whole wheat flour", "1 1/2 tablespoon. extra-virgin olive oil", "3/4 cup low-sodium chicken broth", "1/3 cup sun-dried tomatoes (not packed in oil; not rehydrated), finely chopped or very thinly sliced", "1/2 teaspoon. finely chopped rosemary", "10 oz white button or cremini (baby bella) mushrooms, sliced", "1/3 cup sweet marsala wine", "2 teaspoon. unsalted butter", "1 to 2 tablespoon. roughly chopped flat-leaf parsley"
            ],
            instructions: [
                "Place the chicken cutlets between 2 pieces of plastic wrap and pound with a meat mallet (or the flat side of a chef's knife) until about 1/3-inch thick. Sprinkle with 1/4 teaspoon salt and 1/4 teaspoon pepper.", "Put the flour on a medium plate. Heat the oil in a large nonstick skillet over medium-high heat. Dredge the chicken in the flour to fully coat, shaking off any excess. Add the chicken to the skillet and fry until fully cooked and golden brown, about 4 minutes per side. Transfer to a platter and tent with foil to keep warm.", "Add 1/2 cup of the broth, the sun-dried tomatoes and rosemary to any remaining drippings in the skillet and cook, stirring frequently, for 1 minute to plump the tomatoes. Add the mushrooms, 1/4 teaspoon salt and 1/2 teaspoon pepper and cook until the mushrooms are soft, about 5 minutes. Add the marsala and bring to a boil. Add the remaining 1/4 cup broth and the butter and simmer until the butter is fully melted, about 30 seconds.", "Spoon the mushroom mixture and sauce over the chicken, sprinkle with the parsley and serve."
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

export default HerbedChickenMarsala;