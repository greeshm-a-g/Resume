// import logo from './logo.svg';
import Resume from './Components/Resume';
import './App.css';
//  import "./components/Resume.css";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import{BrowserRouter,Routes,Route}from"react-router-dom"
 import Props from './Components/Props.js';

function App() {
  return (
    <BrowserRouter>

    <div >
    <Routes> 
    <Route path="/res" element={<Resume/>}/>
    <Route path="/Pro" element={<Props name="gfh" ContactInfo="" email="jhd"/>}/> 

    </Routes> 

  
    </div>
    </BrowserRouter>

  );
}

export default App;
