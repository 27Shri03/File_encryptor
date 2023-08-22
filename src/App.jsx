import './App.css'
import Nav from './Navbar'
import Logic from './Logic'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Encrypt from './Encrypt';
import Decrypt from './Decrypt';
import { useState } from 'react';
import Alert from './alert';
import About from './About';
function App() {
  const [files, setFiles] = useState(null);
  const [key, Setkey] = useState(null);
  const [alert, setalert] = useState({ valid: false, msg: null });
  const handleAlert = (text) => {
    setalert((prev) => {
      let obj = { prev };
      obj.valid = true;
      obj.msg = text;
      return obj;
    })
    setTimeout(() => {
      setalert((prev) => {
        return { ...prev, valid: false }
      })
    }, 1500)
  }
  return (
    <>
      <Router Basename='/File_encryptor'>
        <Nav setFiles={setFiles}/>
        <Alert alert={alert} />
        <Logic setFiles={setFiles} alert={handleAlert} />
        <Routes>
          <Route exact path="/File_encryptor" element={<Encrypt alert={handleAlert} files={files} setFiles={setFiles} Setkey={Setkey} mint={key} />} />
          <Route path="/decrypt" element={<Decrypt alert={handleAlert} files={files} setFiles={setFiles} Setkey={Setkey} mint={key} />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
