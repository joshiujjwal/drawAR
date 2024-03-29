
import { Route, Routes } from 'react-router'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import XrHitCubeContainer from './components/xr-hit-cube/XrHitCubeContainer'
import Cube from './components/cube/Cube';
import XrCube from './components/xr-cube/XrCube';
import Home from './components/home/Home';
import { Upload } from './components/upload/Upload';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cube"  element={<Cube />}  />
      <Route path="/xr-cube" element={<XrCube />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/view" element={<XrHitCubeContainer />} />
    </Routes>
  )
}

export default App
