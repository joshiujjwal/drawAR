// import React, { ChangeEvent, useState } from 'react';
// import { Button, Container, Form } from 'react-bootstrap';
// import DrawNavbar from '../drawnavbar/DrawNavbar';

// const Upload: React.FC = () => {
//     const [selectedFile, setSelectedFile] = useState<File | null>(null);

//     const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files?.[0];
//         setSelectedFile(file || null);
//     };

//     const handleUpload = () => {
//         if (selectedFile) {
//             const allowedExtensions = ['.nwd', '.obj'];
//             const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();

//             if (allowedExtensions.includes(`.${fileExtension}`)) {
//                 // Save the file to the assets upload folder

//                 alert('File uploaded successfully!');
//             } else {
//                 alert('Invalid file format. Only NWD and OBJ files are allowed.');
//             }
//         }
//     };
//     return (
//         <Container>
//             <DrawNavbar />
//             <Container className="d-flex flex-column align-items-center justify-content-center">
//                 <Form.Group controlId="formFile" className="mb-3"> 
//                     <Form.Control type="file" onChange={handleFileChange} placeholder='Only nwd or obj'/>
//                 </Form.Group>
//                 <Button variant="primary" onClick={handleUpload}>Upload</Button>
//             </Container>
//         </Container>
//     );
// };

// export default Upload;