import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Authorization/Login";
import Signup from "./Components/Authorization/Signup";
import Reset from "./Components/Authorization/Reset";
import MainPage from "./Components/Authorization/MainPage";
import Home from "./Components/Main/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
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
