import React from 'react';
import { Container } from 'react-bootstrap';
import DrawNavbar from '../drawnavbar/DrawNavbar';

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
                <h3>Demo</h3>
                <img
                    src='src/asset/walkthrough1.gif'
                    alt="Walkthrough"
                    className="img-fluid"
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
            </Container>
        </>
    );
};

export default Home;