import React from 'react';
import RecipePage from '../recipe';
import image from '../../lunch_images/slow-cooker-pork-tacos.jpeg';

class SlowCookerPorkTacos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Slow-Cooker Pork Tacos",
            yield: "8 servings",
            time: "5 hr 36 min",
            image: image,
            alt: "Three slow cooked pork tacos",
            description: "It's impossible to resist flavorful and tender pork shoulder after it's been slowly simmered in chicken broth and aromatic spices.",
            ingredients: [
                "3 whole ancho chiles", "3 whole pasilla chiles", "4 cloves garlic, unpeeled", "2 to 3 chipotles in adobo sauce", "1/2 medium white onion, roughly chopped", "3 tablespoons extra-virgin olive oil", "2 tablespoons honey", "1 tablespoon cider vinegar", "Kosher salt", "2 teaspoons dried oregano, preferably Mexican", "3 3/4 cups low-sodium chicken broth", "4 pounds boneless pork shoulder (untrimmed), cut into chunks", "Freshyly ground pepper", "2 bay leaves", "1 cinnamon stick", "Corn tortillas, warmed, for serving", "Assorted taco toppings, for garnish"
            ],
            instructions: [
                "Put the ancho and pasilla chiles and the garlic in a bowl; add 2 to 3 tablespoons water. Microwave on high until soft and pliable, 2 to 3 minutes. Stem and seed the chiles; peel the garlic. Transfer the chiles and garlic to a blender.", "Add the chipotles, onion, 2 tablespoons olive oil, honey, vinegar, 1 tablespoon salt and the oregano to the blender; puree until smooth. Heat the remaining 1 tablespoon oil in a large skillet over high heat; add the chile sauce and fry, stirring, until thick and fragrant, about 8 minutes. Pour in the broth and reduce until slightly thickened.", "Season the pork all over with salt and pepper and transfer to a large slow cooker. Add the bay leaves and cinnamon stick, then pour in the sauce. Cover and cook on high until the meat is tender, about 5 hours. (Or cook the meat in a large Dutch oven, covered, for 1 hour 45 minutes at 350 degrees; uncover and cook 30 more minutes.)", "Discard the bay leaves and cinnamon stick. Shred the pork with 2 forks; season with salt and pepper. Serve the shredded pork in the tortillas, along with toppings."
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

export default SlowCookerPorkTacos;