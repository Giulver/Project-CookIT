import React from 'react';
import './App.css';

import NavBar from './Components/NavBar';


// Import react-router-dom
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';


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
            {/* <Container style={{backgroundImage: 'url(/svg/background.svg)'}} fluid> */}


            <Switch>

              <Route path="/" render={(props) => {
                return (
                    <NavBar location={this.state.location} setLocation={this.setLocation}/>
                );
              }} />

              <Route path='/recipe' render={(props) => {}} >
              </Route>


              <Route path="/last_recipe"> </Route>

              <Route path="/favorite_recipes"> </Route>

              <Route path="/last_ingredients"> </Route>

            </Switch>

          {/* </Container> */}
        </Router>
      </>
        );
      }
}


export default App;
