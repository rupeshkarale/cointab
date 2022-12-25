import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import UserDetails from './pages/userDetails';
function App() {
  

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/UserDetails" element={<UserDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
