import logo from "./logo.svg";
import Loop from "./components/loop";
import Add from "./components/add";
import House from "./components/house";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./screens/home";
import Tarp from "./screens/tarp";
import TodoList from "./screens/todos/TodoList";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterScreen from "./screens/couter";
import TodosScreen from "./screens/todos-screen";
import TuitsScreen from "./screens/tuits-screen";
import ProfileScreen from "./screens/profile";
import LoginScreen from "./screens/login";
import Navigation from "./components/nav";
import AdminScreen from "./screens/admin-screen";
import NapsterScreen from "./napster";
import NapsterSearchScreen from "./napster/napster-search";
import NapsterAlbumDetails from "./napster/napster-album-details";
import LoadProfile from "./components/load-profile";
import OtherProfile from "./screens/other-profile";
function App() {
  const hello = "Hello World!";
  return (
    <Provider store={store}>
      <LoadProfile>
        <div className="container">
          <Router>
            <Navigation />
            <Routes>
              <Route
                path="/napster/album/:id"
                element={<NapsterAlbumDetails />}
              />
              <Route path="/napster/search" element={<NapsterSearchScreen />} />
              <Route
                path="/napster/search/:searchTerm"
                element={<NapsterSearchScreen />}
              />
              <Route path="/napster" element={<NapsterScreen />} />
              <Route path="/admin" element={<AdminScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/profile/:id" element={<OtherProfile />} />
              <Route path="/tuits" element={<TuitsScreen />} />
              <Route path="/todos-redux" element={<TodosScreen />} />
              <Route path="/counter" element={<CounterScreen />} />
              <Route index element={<Home />} />
              <Route path="/house" element={<House />} />
              <Route path="/todos" element={<TodoList />} />
              <Route path="/add/:A/:B" element={<Add />} />
              <Route path="/loop" element={<Loop />} />
              <Route path="/tarp/*" element={<Tarp />} />
            </Routes>
          </Router>
        </div>
      </LoadProfile>
    </Provider>
  );
}

export default App;
