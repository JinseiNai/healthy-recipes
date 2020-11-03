import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Feature from './featured';
import NewRecipe from './new_recipe';

function HomePage() {
    return (
        <Container>
            <Feature />
            <NewRecipe />
        </Container>
    )
}

export default HomePage;