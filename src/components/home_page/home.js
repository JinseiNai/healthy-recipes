import React from 'react';
import { Container } from 'react-bootstrap';
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