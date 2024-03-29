import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Authorization from "../Authorization/Authorization";
import Registration from "../Authorization/Registration";
import Instruction from "../Spravka/Instruction/Instruction";
import HiPage from '../HiPage/HiPage';
import ChangeDifficult from '../ChangeDifficult/ChangeDifficult';
import CreateLevel from '../ChangeDifficult/CreateLevel';
import ChangeLevel from '../ChangeDifficult/ChangeLevel';
import Creators from '../Spravka/Creators/Creators';
import SiteInstruction from '../Spravka/SiteInstruction/SiteInstruction';
import Statistic from '../Statistic/Statistic';
import GetDataFromServer from '../ExercisePage/GetDataFromServer';
import GetDataForExercise from '../KeyboardPage/GetDataForExercise';
import AdminStatistic from '../Statistic/AdminStatistic';

function App() {
    // const {data, isLoading, error} = useQuery(['exercises'], () => fetch(
    //     'https://jsonplaceholder.typicode.com/todos/1')
    //     .then(responce => responce.json()), 
    // )

  // const isAuth = useSelector(state => state.user.isAuth)

  // const [isAdmin]

  return (
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<HiPage/>}/>
          <Route path="/login" element={<Authorization/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/instruction" element={<Instruction/>}/>
          <Route path="/creators" element={<Creators/>}/>
          <Route path="/site-instruction" element={<SiteInstruction/>}/>
          
          <Route path='/' element={<PrivateRoute/>}>
            <Route path="/difficult" element={<ChangeDifficult/>}/>
            <Route path="/create" element={<CreateLevel/>}/>
            <Route path="/changeLevel/:id" element={<ChangeLevel/>}/>
            <Route path="/exercise" element={<GetDataFromServer/>}/>
            <Route path="/keyboard/:id" element={<GetDataForExercise/>}/>
            <Route path="/user-statistic" element={<Statistic/>}/>
            <Route path="/admin-statistic" element={<AdminStatistic/>}/>  
          </Route>
        </Routes>
       
      </BrowserRouter>
  );
}

export default App;
