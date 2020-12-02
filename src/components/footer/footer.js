import React from 'react';
import Card from 'react-bootstrap/Card';
import './footer.css';

function Footer() {
    return (
        <Card className="text-center footer" style={{backgroundColor: '#97ABB1'}}>
            <Card.Footer className="footer-text">Healthy Recipes &copy; Copyright 2020. All Rights Reserved</Card.Footer>
        </Card>
    )
}

export default Footer;