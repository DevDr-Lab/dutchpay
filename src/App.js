import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateGroup } from './components/CreateGroup';
import { AddMembers } from './components/AddMembers';
import { ExpenseMain } from './components/ExpenseMain';
import { RecoilRoot } from 'recoil';

const App = () => (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={ <CreateGroup /> } /> 
          {/* 전체를 담당하고 있는 컴포넌트를 넘겨줘야 함  */}
          <Route path="/members" element={ <AddMembers /> } />
          <Route path="/expense" element={ <ExpenseMain /> } />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
)

export default App;
