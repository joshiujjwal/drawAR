import { Card, Container } from 'react-bootstrap';
import DrawNavbar from '../drawnavbar/DrawNavbar';
import ErrorBoundary from './ErrorBoundary'; // assuming you have an ErrorBoundary component

import { useEffect, useState } from 'react';
import axios from 'axios';

const View = () => {

    
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/getFiles');                
                setAssets(response.data);
            } catch (error) {
                console.error('Error fetching assets:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <ErrorBoundary>
                <DrawNavbar />
                <Container className="d-flex flex-column align-items-center justify-content-center">
                    <h1>View Assets</h1>
                    {assets && assets.length > 0 ? (
                        assets.map((asset: any) => (
                            <Card key={asset.id} style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{asset.name}</Card.Title>
                                    <Card.Link href={`/view/${asset.name}`}>View</Card.Link>
                                </Card.Body>
                            </Card>
                        ))
                    ) : (
                        <p>No assets found</p>
                    )}
    
                </Container>
            </ErrorBoundary>
        </>
    );
};

export default View;