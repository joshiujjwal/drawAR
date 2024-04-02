import React from 'react';
import { Button, Container } from 'react-bootstrap';
import DrawNavbar from '../drawnavbar/DrawNavbar';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <>
            <DrawNavbar />
            <Container className="d-flex flex-column align-items-center justify-content-center" style={{ marginTop: "10vh" }} >
                <p>
                    DrawAR is a platform that allows you to view your 3D models in Augmented Reality.
                    <br></br>
                    You can upload your 3D models in .glb format and view them in AR.
                </p>
                <Button style={{ backgroundColor: "black", border: "none" }} size="sm" className="mt-3">
                    <Link to="/view" style={{ color: "white" }}>View in AR</Link>
                </Button>
            </Container>
        </>
    );
};

export default Home;