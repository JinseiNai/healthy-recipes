import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavigationBar from './components/nav/navbar';
import Footer from './components/footer/footer';
import HomePage from './components/home_page/home';
import AboutPage from './components/about_page/about';
import BreakfastPage from './components/breakfast_page/breakfast';
import LunchPage from './components/lunch_page/lunch';
import DinnerPage from './components/dinner_page/dinner';

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Container>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/breakfast">
              <BreakfastPage />
            </Route>
            <Route exact path="/lunch">
              <LunchPage />
            </Route>
            <Route exact path="/dinner">
              <DinnerPage />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    )
  }
}
export default App;
