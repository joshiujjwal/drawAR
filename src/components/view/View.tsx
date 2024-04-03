import { Button, Card, CardGroup, Container, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import DrawNavbar from '../drawnavbar/DrawNavbar';
import ErrorBoundary from './ErrorBoundary'; // assuming you have an ErrorBoundary component

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import openDatabaseAsset from '../asset/openDatabaseAsset';


const View = () => {


    const [assets, setAssets] = useState<any[]>([]);
    const [useLocalFiles, setUseLocalFiles] = useState(false); 

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const getArrayBufferFromFile = async (file: File): Promise<ArrayBuffer> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const arrayBuffer = reader.result as ArrayBuffer;
                resolve(arrayBuffer);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsArrayBuffer(file);
        });
    };



const saveFile = async (file: File) => {
  const db = await openDatabaseAsset();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("files", "readwrite");
    const store = transaction.objectStore("files");
    const request = store.put(file, file.name);

    transaction.oncomplete = () => resolve(request.result);
    transaction.onerror = () => reject(transaction.error);
  });
};

const handleSubmit = async () => {
    if (selectedFile) {
        try {
            await saveFile(selectedFile);
            console.log('File saved:', selectedFile);
            window.location.href = `/view/${selectedFile.name}/true`;
        } catch (error) {
            console.error('Error:', error);
        }
    }
};


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
                    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Use local files"
        onChange={() => setUseLocalFiles(!useLocalFiles)}
      />
    </Form>
                {useLocalFiles && (
                   <Form.Group controlId="formFile" className="mb-3" style={{marginTop: "10vh"}}> 
                   <Form.Control type="file" onChange={handleFileChange}  accept=".glb,.fbx"/>
                   <Button style= {{width: "-webkit-fill-available",  backgroundColor: "black", border: "none"}}onClick={handleSubmit}>View in AR</Button>
               </Form.Group>

                )
                }

                {!useLocalFiles && (
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
                                            <Link to={`/view/${asset.name}/${useLocalFiles}`} style={{ color: "white" }}>View in AR</Link>
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
                )}
                </Container>
            </ErrorBoundary>
        </>
    );
};

export default View;