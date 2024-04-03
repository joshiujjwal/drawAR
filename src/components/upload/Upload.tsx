import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import DrawNavbar from '../drawnavbar/DrawNavbar';

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };

  const handleSubmit = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      try {
        await axios.post('/api/uploadFile', formData);
        alert('File uploaded successfully');
        window.location.href = '/view';
      } catch (error) {
        alert('Error uploading file: '+ error);
      }
    } else {
      alert('No file selected');
    }
  };
   

    return (
        <>
            <DrawNavbar />
            <Container className="d-flex flex-column align-items-center justify-content-center">
                <Form.Group controlId="formFile" className="mb-3" style={{marginTop: "10vh"}}> 
                    <Form.Control type="file" accept=".glb" onChange={handleFileChange} placeholder='Only glb files'/>
                    <Button style= {{width: "-webkit-fill-available", backgroundColor: "black", border: "none"}}onClick={handleSubmit}>Upload</Button>
                </Form.Group>

            </Container>
        </>
    )
}


export { Upload };