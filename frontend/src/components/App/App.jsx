import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";


import Authorization from "../Authorization/Authorization";
import Registration from "../Authorization/Registration";
import Instruction from "../Instruction/Instruction";
import ExercisePage from "../ExercisePage/ExercisePage";
import HiPage from '../HiPage/HiPage';
import './App.scss';

function App() {
    // const {data, isLoading, error} = useQuery(['exercises'], () => fetch(
    //     'https://jsonplaceholder.typicode.com/todos/1')
    //     .then(responce => responce.json()), 
    // )

  // const isAuth = useSelector(state => state.user.isAuth)

  return (
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<HiPage/>}/>
          <Route path="/instruction" element={<Instruction/>}/>
          <Route path="/login" element={<Authorization/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/exercise" element={<ExercisePage/>}/>
        </Routes>
       
      </BrowserRouter>
  );
}

export default App;
