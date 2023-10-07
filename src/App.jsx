import './App.css'
import Nav from './Navbar'
import Logic from './Logic'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Encrypt from './Encrypt';
import Decrypt from './Decrypt';
import { useState } from 'react';
import Alert from './alert';
import About from './About';
import Menu from './Menu';
import Caesar from './caesar_cipher';
import Blowfish_Algo from './blowfish';
import RSA from './RSA';
import Diffie_Hellman from './diffie-hellman';
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
      <Router Basename='/'>
        <Nav setFiles={setFiles} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Menu />}/>
          <Route path="diffie_hellman" element={<Diffie_Hellman alert={handleAlert}/>}/>
          <Route path="RSA" element={<RSA alert={handleAlert}/>}/>
          <Route path="caesar_cipher" element={<Caesar alert={handleAlert}/>}/>
          <Route path="blowfish" element={<Blowfish_Algo alert={handleAlert}/>}/>
          <Route path="/AES" element={<Logic setFiles={setFiles} alert={handleAlert} />} />
          <Route path="/encrypt" element={<Encrypt alert={handleAlert} files={files} setFiles={setFiles} Setkey={Setkey} mint={key} />} />
          <Route path="/decrypt" element={<Decrypt alert={handleAlert} files={files} setFiles={setFiles} Setkey={Setkey} mint={key} />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
