
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
            <Container>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Container>
                        <Navbar.Brand href="#">Меню</Navbar.Brand>
                        <Navbar.Brand href="#">Новинки</Navbar.Brand>
                        <Navbar.Brand href="#">Популярное</Navbar.Brand>
                        <Navbar.Brand href="#">Популярное</Navbar.Brand>
                        <Navbar.Brand href="#">Акции</Navbar.Brand>
                        <Navbar.Brand href="#">Стейки</Navbar.Brand>
                        <Navbar.Brand href="#">Гарниры</Navbar.Brand>
                        <Navbar.Brand href="#">Салаты</Navbar.Brand>
                        <Navbar.Brand href="#">Напитки</Navbar.Brand>
                        <Navbar.Brand href="#">Напитки</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Menu;