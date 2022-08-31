import React from 'react';
import Nav from "react-bootstrap/Nav";

export const NavBar = () => {
    return(
        <div>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="#">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">Moments</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">Notifications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">Messages</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}