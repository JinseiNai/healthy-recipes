import React from 'react';
import RecipePage from '../recipe';
import image from '../../lunch_images/broiled-salmon-herb-mustard.jpeg';

class BroiledSalmonHerbMustard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Broiled Salmon with Herb Mustard Glaze",
            yield: "6 servings",
            time: "19 minutes",
            image: image,
            alt: "Broiled salmon with herb mustard glaze",
            description: "It takes less than 20 minutes to make this succulent, 5-star Broiled Salmon. Make it for dinner one night, and use the leftovers to top greens or make into salmon salad later in the week.",
            ingredients: [
                "2 garlic cloves", "3/4 teaspoon finely chopped fresh rosemary leaves", "3/4 teaspoon finely chopped fresh thyme leaves", "1 tablespoon dry white wine", "1 tablespoon extra-virgin olive oil", "2 tablespoons Dijon mustard", "2 tablespoon whole-grain mustard", "Nonstick olive oil cooking spray", "Six 6-8 ounce salmon filets", "Salt and freshly ground black pepper", "6 lemon wedges"
            ],
            instructions: [
                "In a mini food processor, combine garlic, rosemary, thyme, wine, oil, Dijon mustard, and 1 tablespoon of whole-grain mustard. Grind the mustard sauce until combined, about 30 seconds. Transfer to a small bowl. Add remaining 1 tablespoon of whole-grain mustard to the sauce and stir to combine. Set aside mustard sauce.", "Preheat the broiler. Line a heavy rimmed baking sheet with foil. Spray the foil with nonstick spray. Arrange the salmon fillets on the baking sheet and sprinkle them with salt and pepper. Broil for 2 minutes. Spoon the mustard sauce over the fillets. Continue broiling until the fillets are just cooked through and golden brown, about 5 minutes longer.", "Transfer the fillets to plates and serve with lemon wedges."
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

export default BroiledSalmonHerbMustard;