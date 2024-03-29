import React from 'react';
import { Container, Button } from 'react-bootstrap';
import DrawNavbar from '../drawnavbar/DrawNavbar';

const Home: React.FC = () => {
    return (
        <Container>
            <DrawNavbar />
            <Container className="d-flex flex-column align-items-center justify-content-center">
                <h1>Welcome to DrawAR</h1>
                <p>This is the description of the app.</p>
                <Button variant="primary">View in 3D</Button>
            </Container>
        </Container>
    );
};

export default Home;