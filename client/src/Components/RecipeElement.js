import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import { Link, Redirect } from 'react-router-dom';
import {Row, Card} from 'react-bootstrap';
import Recipe from '../api/Recipe';


class RecipeElement extends React.Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        return (
           
                <Card className="bg-dark text-white">
                    <Link>
                     <Card.Img src={this.props.recipe.cover} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Footer>{this.props.recipe.name}</Card.Footer>
                    </Card.ImgOverlay>
                    </Link>
                </Card>
        );
    } 
}

export default RecipeElement;
