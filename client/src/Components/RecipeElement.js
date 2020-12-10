import React from 'react';

import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import Recipe from '../Api/Recipe';


class RecipeElement extends React.Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        return (
           
                <Card>
                    <Link>
                     <Card.Img src={this.props.recipe.cover} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className="caption_recipes font_text">{this.props.recipe.name}</Card.Title>
                    </Card.ImgOverlay>
                    </Link>
                </Card>
        );
    } 
}

export default RecipeElement;
