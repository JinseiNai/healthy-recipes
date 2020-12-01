import React from 'react';
import RecipePage from '../recipe';
import image from '../../dinner_images/rib-eye-steak-potatoes.jpg';

class RibEyeSteakPotatoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Rib-Eye Steak and Potatoes',
            yield: '2 servings',
            time: '1 hour',
            image: image,
            alt: "Rib-eye steak and potatoes",
            description: "For a special occasion with a sweetheart, sharing a simple, luxurious dinner at home is even better than going to a restaurant. Splurge on a cut like rib-eye or tenderloin and open a great bottle of win. It's a simple, no-fuss endeavor, yet very special.",
            ingredients: [
                "1 large boneless rib-eye steak, cut 2 inches thick (at least 1 1/2 pounds)", "Salt and freshly ground black pepper", "2 cloves garlic, sliced", "1 teaspoon minced garlic", "1 rosemary sprig, roughly chopped", "1 pound very small potatoes, rinsed", "2 tablespoons butter", "1/4 cup finely chopped parsley", "finely grated zest of 1 small lemon", "Arugula or watercress, for serving (optional)"
            ],
            instructions: [
                "Season steak generously with salt and pepper. Sprinkle with sliced garlic and rosemary and set aside to marinate, 20 to 30 minutes.",
                "Heat oven to 450 degrees. Meanwhile, bring a pot of well-salted water to a boil. Add potatoes and cook at a brisk simmer until just done, 10 to 15 minutes. Drain and keep warm.", "Heat a cast-iron or other heavy skillet over high heat. Remove and discard sliced garlic from steak. (If left on, it will burn in the skillet.)", "When pan is hot, put in the steak and let brown well on one side, 4 to 5 minutes. Wait until steak forms a crust and comes away cleanly from the bottom to move it.", "Flip steak and transfer pan to oven, uncovered. Roast until juices begin to rise on surface of steak (you will see the droplets) and internal temperature is 120 degrees, 8 to 10 minutes. Remove steak from pan and let rest, tented with foil, for 5 to 10 minutes. (Residual heat will continue to cook the meat to medium-rare as it rests.) Warm a serving bowl for the potatoes and plates for the steak.", "Melt butter in a wide skillet over medium-high heat. Add potatoes and toss to coat and heat through. Sprinkle with salt and pepper. Add minced garlic and cook, stirring, until softened but not browned, 1 minute or less. Gently stir in parsley and lemon zest and transfer to serving bowl.", "Cutting on a slight diagonal, slice steak into 1/2-inch slices, then transfer to plates. If using, place a handful of greens next to the steak. Serve immediately, passing potatoes at the table."
            ]
        };
    }

    render() {
        return (
            <div>
                <RecipePage name={this.state.name} yield={this.state.yield} time={this.state.time} image={this.state.image} alt={this.state.alt} description={this.state.description} ingredients={this.state.ingredients} instructions={this.state.instructions}></RecipePage>
            </div>
        )
    }
}

export default RibEyeSteakPotatoes;