import React from 'react';
import './App.css';

import NavBar from './Components/NavBar';
import RecipesList from './Components/RecipesList';

import {Row, Container} from 'react-bootstrap';


// Import react-router-dom
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';

var recipes = [
  {"name": "Pasta alla carbonara",
  "cover": "Pecorino.jpg"},
  {"name": "Pasta alla carbonara",
  "cover": "Pecorino.jpg"},
  {"name": "Pasta alla carbonara",
  "cover": "Pecorino.jpg"},
  {"name": "Pasta alla carbonara",
  "cover": "Pecorino.jpg"},
  {"name": "Pasta alla carbonara",
  "cover": "Pecorino.jpg"},
]


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            location: 'home', 
            errorMsg: '',      // Error message received by an API call
        }
    }

    componentDidMount() {}

    /*loadInitialData() {
        API.api_name
          .then() 
          .catch((errorObj) => this.handleErrors(errorObj));
      }

    handleErrors = (errorObj) => {
        if (errorObj) {
          const err0 = errorObj.errors[0];
          const errorString = err0.param + ': ' + err0.msg;
          this.setState({ errorMsg: errorString });
        }
      }
    */
    setLocation = (location) => {
        this.setState({ location: location });
    }

    render() {
        return (
            <>
            <Router>
            <Container fluid>
            {/* <Container style={{backgroundImage: 'url(/svg/background.svg)'}} fluid> */}


            <Switch>

              <Route path="/" render={(props) => {
                return (
                  <>
                    <NavBar location={this.state.location} setLocation={this.setLocation}/>
                    <div className="margin_top">
                    <Row className="mx-auto">
                      <h2 className="font_text">Last Recipes</h2>
                      <i className="far fa-clock ml-2" width = "30" heigth = "30"></i>
                    </Row>
                    <RecipesList recipes = {recipes} destination = "/last_recipes"/>
                    {}
                    <Row className="mx-auto mt-4">
                      <h2 className="font_text">Favorite Recipes</h2>
                      <i className="fas fa-heart ml-2" width = "30" heigth = "30"></i>
                    </Row>
                    <RecipesList recipes = {recipes} destination = "/favorite_recipes"/>
                    {}
                    <Row className="mx-auto mt-4">
                      <h2 className="font_text">Last Ingredients</h2>
                      <i className="far fa-clock ml-2" width = "30" heigth = "30"></i>
                    </Row>
                    <RecipesList recipes = {recipes} destination = "/last_ingredients"/>
                    </div>
                  </>
                );
              }} />

              <Route path='/recipe' render={(props) => {}} >
              </Route>


              <Route path="/last_recipes"> </Route>

              <Route path="/favorite_recipes"> </Route>

              <Route path="/last_ingredients"> </Route>

            </Switch>

          </Container>
        </Router>
      </>
        );
      }
}


export default App;
