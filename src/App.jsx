import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Authorization/Login";
import Signup from "./Components/Authorization/Signup";
import Reset from "./Components/Authorization/Reset";
import MainPage from "./Components/Authorization/MainPage";
import Home from "./Components/Main/Home";
import MenuPop from "./Menu";
import List from "./Components/Main/List";
import Demo from "./Components/Main/Demo";
import Edit from "./Components/Main/Edit";
import Create from "./Components/Main/Create";
import Details from "./Components/Main/Details";
function App() {
  return (
    <>
      {/* <Create /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route index element={<Demo />} />
            <Route path="list" element={<List />} />
            <Route path="details" element={<Details />} />
            <Route path="create" element={<Create />} />
            <Route path="edit" element={<Edit />} />
          </Route>
          <Route path="/reset" element={<Reset />} />
          <Route path="/" element={<MainPage />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
