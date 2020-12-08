import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import RecipeElement from './RecipeElement.js'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import { Navbar, Nav, NavDropdown, Row, CardGroup, Col } from 'react-bootstrap';

import { Link, Redirect } from 'react-router-dom';


class RecipesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    

    render() {
        return (
            <Carousel >
                    <Carousel.Item interval={10000}>
                        <Row>
                        <Col xs={6}><RecipeElement recipe = {this.props.recipes[0]}/></Col>
                        <Col xs={6}><RecipeElement recipe = {this.props.recipes[1]}/></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <Row>
                        <Col xs={6}><RecipeElement recipe = {this.props.recipes[2]}/></Col>
                        <Col xs={6}><RecipeElement recipe = {this.props.recipes[3]}/></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <Row>
                        <Col xs={6}><RecipeElement recipe = {this.props.recipes[4]}/></Col>
                        <Col xs={6}>
                        <Link to={this.props.destination}>
                            <Button variant="light">Browse all</Button>
                        </Link>
                        </Col>
                        </Row>
                    </Carousel.Item>
            </Carousel>
        );
    }
}


export default RecipesList;
