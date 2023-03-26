import logo from "./logo.svg";
import Loop from "./components/loop";
import Add from "./components/add";
import House from "./components/house";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./screens/home";
import Tarp from "./screens/tarp";
import TodoList from "./screens/todos/TodoList";
import ProfileScreen from "./screens/profile";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterScreen from "./screens/couter";
import TodosScreen from "./screens/todos-screen";
import LoginScreen from "./screens/login";
import TuitsScreen from "./screens/tuits-screen";
import Navigation from "./components/nav";

function App() {
  const hello = "Hello World!";
  return (
    <Provider store={store}>
      <div className="container">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/tuits" element={<TuitsScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/todos-redux" element={<TodosScreen />} />
            <Route path="/counter" element={<CounterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route index element={<Home />} />
            <Route path="/house" element={<House />} />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/add/:A/:B" element={<Add />} />
            <Route path="/loop" element={<Loop />} />
            <Route path="/tarp/*" element={<Tarp />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
