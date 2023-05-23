import logo from './logo.svg';


import Join from "./Component/Join/Join"
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import MainComponent from "./Component/MainComponent/MainComponent"
function App() {
  return (
    <div >
   
    <Router>
      <Routes>
         <Route element={<Join/>} path="/join"/> 
         <Route element={<MainComponent/>} path="/Main"/> 
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
