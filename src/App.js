import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateGroup } from './components/CreateGroup';
import { AddMembers } from './components/AddMembers';
import { ExpenseMain } from './components/ExpenseMain';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <CreateGroup /> } /> /* 전체를 담당하고 있는 컴포넌트를 넘겨줘야 함 */
        <Route path="/members" element={ <AddMembers /> } />
        <Route path="/expense" element={ <ExpenseMain /> } />
      </Routes>
    </BrowserRouter>
)

export default App;
