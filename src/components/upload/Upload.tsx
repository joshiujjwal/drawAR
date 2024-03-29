import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
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
        await axios.post('/uploadFile', formData);
        alert('File uploaded successfully');
        window.location.href = '/view';
      } catch (error) {
        console.error('Error uploading file: ', error);
      }
    } else {
      console.error('No file selected');
    }
  };
   

    return (
        <>
            <DrawNavbar />
            <Container className="d-flex flex-column align-items-center justify-content-center">
                <Form.Group controlId="formFile" className="mb-3"> 
                    <Form.Control type="file" onChange={handleFileChange} placeholder='Only nwd or obj'/>
                </Form.Group>
                <button onClick={handleSubmit}>Upload</button>
            </Container>
        </>
    )
}


export { Upload };