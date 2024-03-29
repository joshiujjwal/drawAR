
import { Route, Routes } from 'react-router'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Upload from './components/upload/Upload';
import XrHitCubeContainer from './components/xr-hit-cube/XrHitCubeContainer';

function App() {

  return (
    <Routes>
      <Route path="/" element={<XrHitCubeContainer />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/view" element={<h1>View in AR</h1>} />
    </Routes>
  )
}

export default App
