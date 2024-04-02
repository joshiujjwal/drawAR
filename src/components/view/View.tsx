import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import DrawNavbar from '../drawnavbar/DrawNavbar';
import ErrorBoundary from './ErrorBoundary'; // assuming you have an ErrorBoundary component

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const View = () => {


    const [assets, setAssets] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/getFiles');
                setAssets(Object.values(response.data)[0] as any[]);
                console.log('Assets:', Object.values(response.data)[0]);
            } catch (error) {
                console.error('Error fetching assets:', error);
            }
        };

        fetchData();
    }, []);

    const timeAgo = (dateString: string) => {
            const now = new Date();
            const updatedDate = new Date(dateString);
            const diffInMilliseconds = now.getTime() - updatedDate.getTime();
        
            const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
            const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
            const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
        
            if (diffInDays > 0) {
                return `${diffInDays} day(s) ago`;
            } else if (diffInHours > 0) {
                return `${diffInHours} hour(s) ago`;
            } else {
                return `${diffInMinutes} minute(s) ago`;
            }
        };

    const imgUrl = "https://d0d2-44-209-53-215.ngrok-free.app/"
    return (
        <>
            <ErrorBoundary>
                <DrawNavbar />
                <Container >
                    <h1>View Assets</h1>
                    <CardGroup>
                        {assets ? (
                            assets.map((asset: any) => (

                                <Card key={asset.id} >
                                    <Card.Img variant="top" src={imgUrl + asset.img} style={{height: "200px", width: "200px"}} />
                                    <Card.Body>
                                        <Card.Title>{asset.name}</Card.Title>
                                        <Card.Text>
                                            This asset {asset.name} show amazing pipes </Card.Text>
                                        <Button style={{ backgroundColor: "black", border: "none" }} size="sm" className="mt-3">
                                            <Link to={`/view/${asset.name}`} style={{ color: "white" }}>View in AR</Link>
                                        </Button>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated {timeAgo(asset.lastModified)} </small>
                                    </Card.Footer>
                                </Card>


                            ))
                        ) : (
                            <p>No assets found</p>
                        )}
                    </CardGroup>
                </Container>
            </ErrorBoundary>
        </>
    );
};

export default View;