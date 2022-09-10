import "./App.css";
import Login from "./Components/signIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/signUp";
import Home from "./Components/homePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="signUp" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
