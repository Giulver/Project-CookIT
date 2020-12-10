import React from 'react';
import Badge from 'react-bootstrap/Badge';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { Link, Redirect } from 'react-router-dom';


class InsertionBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            destination: ''
        }
    }
    

    render() {
        return (
                <Badge pill className="insertion_style mt-1">
                    <Form className="my-1">
                        <Form.Row className="justify-content-between mx-1">
                            <FormControl style={{borderRadius: '15px', width: '60%'}} type="text" placeholder="Insert your ingredient"/>
                                <Image src="mic_icon.svg" className="mx-auto my-1" width={30}/>
                                <Image src="camera_icon.svg" className="mx-auto my-1" width={30}/>
                                <Image src="camera_icon.svg" className="mx-auto my-1" width={30}/>
                        </Form.Row>
                    </Form>
                </Badge>
        );
    } 
}


export default InsertionBar;
