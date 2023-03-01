import logo from './logo.svg';
import Loop from "./components/loop";
import Add from "./components/add";
import House from "./components/house";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import Home from "./screens/home";
import Tarp from "./screens/tarp";
import TodoList from "./screens/todos/TodoList";

function App() {
  const hello = 'Hello World!'
  return (
    <div className="container">
      <Router>
        <Link to='/'>Home</Link>|
        <Link to='/house'>House</Link>|
        <Link to='/add/3/4'>Add</Link>|
        <Link to='/loop'>Loop</Link>|
        <Link to='/todos'>ToDos</Link>|
        <Link to='/tarp'>Tarp</Link>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/house" element={<House/>}/>
          <Route path="/todos" element={<TodoList/>}/>
          <Route path="/add/:A/:B" element={<Add/>}/>
          <Route path="/loop" element={<Loop/>}/>
          <Route path="/tarp/*" element={<Tarp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
