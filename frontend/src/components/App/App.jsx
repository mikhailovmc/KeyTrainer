import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Authorization from "../Authorization/Authorization";
import Registration from "../Authorization/Registration";
import Instruction from "../Instruction/Instruction";
import HiPage from '../HiPage/HiPage';
import './App.scss';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HiPage/>}/>
          <Route path="/instruction" element={<Instruction/>}/>
          <Route path="/login" element={<Authorization/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
