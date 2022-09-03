import React from 'react';
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ProfilePicture } from './ProfilePicture';


const NavBarItem = ({title, link}) => {

    return(
        <div>
            <span>
                <a href={link}>{title}</a>
            </span>
        </div>
    )
}

export const NavBar = () => {
    return(
        <div>
            {/* <Nav>
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
            </Nav> */}

            <Row className='mt-2 border-bottom'>
               <Col>
                    <Row>
                        <Col>
                            <NavBarItem title={"Home"} link={"#"} />
                        </Col>

                        <Col>
                            <NavBarItem title={"Moments"} link={"#"} />
                        </Col>

                        <Col>
                            <NavBarItem title={"Notifications"} link={"#"} />
                        </Col>

                        <Col>
                            <NavBarItem title={"Messages"} link={"#"} />
                        </Col>
                    </Row>

                    {/* <NavBarItem title={"Home"} link={"#"} />

                    <NavBarItem title={"Moments"} link={"#"} />

                    <NavBarItem title={"Notifications"} link={"#"} />

                    <NavBarItem title={"Messages"} link={"#"} /> */}
               </Col>

               <Col>
                    <span>Twitter Icon</span>
               </Col>

               <Col>
                    <Row>
                        <Col>
                            <ProfilePicture />
                        </Col>

                        <Col>
                            <Button className='mb-2'>Tweet</Button>
                        </Col>
                    </Row>
                    
               </Col>
            </Row>

            {/* <div className='justify-content-left'>
                <NavBarItem title={"Home"} link={"#"} />

                <NavBarItem title={"Moments"} link={"#"} />

                <NavBarItem title={"Notifications"} link={"#"} />

                <NavBarItem title={"Messages"} link={"#"} />
            </div> */}
        </div>
    )
}