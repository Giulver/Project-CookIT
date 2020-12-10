import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Link } from 'react-router-dom';

import RecipeElement from './RecipeElement.js'

class RecipesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    

    render() {
        return (
            <Carousel controls={false}>
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
