import React from 'react';
import Card from 'react-bootstrap/Card';
import './footer.css';

function Footer() {
    return (
        <Card className="text-center footer">
            <Card.Footer className="text-muted footer-text">Healthy Recipes &copy; Copyright 2020. All Rights Reserved</Card.Footer>
        </Card>
    )
}

export default Footer;