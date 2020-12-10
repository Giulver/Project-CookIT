import React from 'react';

import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            destination: ''
        }
    }
    

    render() {
        return (
            <div className="container-fluid">
                <Navbar bg="white" variant="white" expand="sm" className="row d-flex justify-content-between">

                    {this.props.location === 'home' 
                    ? 
                    <>
                        <Navbar.Brand href="/" className="ml-2">
                            <Image src="icons/logo.jpg" width={100}/> 
                        </Navbar.Brand>
                        <Nav>
                            <i className="fas fa-user mr-2" style={{ fontSize: 40, color: '#f3a42d' }} />
                        </Nav>
                    </>
                    : 
                    <>
                        <Navbar.Brand href="/" className="ml-2 font_text" /*onClick={this.props.setLocation()}*/>
                            <i className="fas fa-angle-left" style={{ color: 'rgba(0, 0, 0)' }}/>
                            <span className="ml-1">{this.props.location}</span>
                        </Navbar.Brand>
                           
                        <Nav.Item href="/" className="ml-2 " /*onClick={this.props.setLocation()}*/>
                            <a className="mr-2 font_text font-weight-bold"><span>Label</span></a>
                        </Nav.Item>
                    </>
                    }

                    

                </Navbar>
            </div>
        );
    } 
}


export default NavBar;
