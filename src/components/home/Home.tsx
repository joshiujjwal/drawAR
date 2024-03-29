import React from 'react';
import { Container } from 'react-bootstrap';
import DrawNavbar from '../drawnavbar/DrawNavbar';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <Container>
            <DrawNavbar />
            <Container className="d-flex flex-column align-items-center justify-content-center" >
                <h1>Welcome to DrawAR</h1>
                <p>This is the description of the app.</p>
                <Link to="/view">View In AR</Link> {/* Added closing tag */}
            </Container>
        </Container>
    );
};

export default Home;