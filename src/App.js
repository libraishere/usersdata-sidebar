
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/sideBarNav/Sidebar';
import UserList from './components/usersList/userList'

function App() {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path='/userList' element={ <UserList />} />        
      </Routes>
    </Router>
  );
}

export default App;
