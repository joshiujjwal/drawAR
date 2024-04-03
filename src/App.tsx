
import { Route, Routes } from 'react-router'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cube from './components/cube/Cube';
import XrCube from './components/xr-cube/XrCube';
import Home from './components/home/Home';
import { Upload } from './components/upload/Upload';
import View from './components/view/View';
import AssetContainer from './components/asset/AssetContainer';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cube"  element={<Cube />}  />
      <Route path="/xr-cube" element={<XrCube />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/view" element={<View/>} />
      <Route path="/view/:id/:local" element={<AssetContainer />} />
    </Routes>
  )
}

export default App
