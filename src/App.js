import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// CSS
import './App.css';
// Components
import NavigationBar from './components/nav/navbar';
import Footer from './components/footer/footer';
import HomePage from './components/home_page/home';
import AboutPage from './components/about_page/about';
import BreakfastPage from './components/breakfast_page/breakfast';
import LunchPage from './components/lunch_page/lunch';
import DinnerPage from './components/dinner_page/dinner';
// Recipes
// Breakfast Recipes
import healthy_eggs_benedict from './components/breakfast_page/healthy-eggs-benedict';
// Lunch Recipes
import herbed_chicken_marsala from './components/lunch_page/herbed-chicken-marsala';
import salmon_kale_apple_salad from './components/lunch_page/salmon-kale-apple-salad';
import broiled_salmon_herb_mustard from './components/lunch_page/broiled-salmon-herb-mustard';
import slow_cooker_pork_tacos from './components/lunch_page/slow-cooker-pork-tacos';
// Dinner Recipes
import ribeye_steak from './components/dinner_page/rib-eye-steak-and-potatoes';
import panfried_tilapia from './components/dinner_page/pan-fried-tilapia';
import lemon_garlic_shrimp_grits from './components/dinner_page/lemon-garlic-shrimp-grits';

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Container className="content">
          <Switch>
            <Route exact path="/healthy-recipes/" component={HomePage} />
            <Route path="/healthy-recipes/about" component={AboutPage} />

            {/* Breakfast Recipe Routes */}
            <Route exact path="/healthy-recipes/breakfast" component={BreakfastPage} />
            <Route path="/healthy-recipes/breakfast/healthy-eggs-benedict" component={healthy_eggs_benedict} />

            {/* Lunch Recipe Routes */}
            <Route exact path="/healthy-recipes/lunch" component={LunchPage} />
            <Route path="/healthy-recipes/lunch/herbed-chicken-marsala" component={herbed_chicken_marsala} />
            <Route path="/healthy-recipes/lunch/pan-seared-salmon-with-kale-and-apple-salad" component={salmon_kale_apple_salad} />
            <Route path="/healthy-recipes/lunch/broiled-salmon-with-herb-mustard-glaze" component={broiled_salmon_herb_mustard} />
            <Route path="/healthy-recipes/lunch/slow-cooker-pork-tacos" component={slow_cooker_pork_tacos} />

            {/* Dinner Recipe Routes */}
            <Route exact path="/healthy-recipes/dinner" component={DinnerPage} />
            <Route path="/healthy-recipes/dinner/rib-eye-steak-and-potatoes" component={ribeye_steak} />
            <Route path="/healthy-recipes/dinner/pan-fried-tilapia" component={panfried_tilapia} />
            <Route path="/healthy-recipes/dinner/lemon-garlic-shrimp-and-grits" component={lemon_garlic_shrimp_grits} />
          </Switch>
        </Container>
        <Footer className="footer" />
      </Router>
    )
  }
}
export default App;
