import "./App.css";
import Login from "./Components/signIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/signUp";
import Home from "./Components/homePage";
import redirect from "./const/redirect";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path={redirect.signUp} element={<SignUp />} />
            <Route path={redirect.login} element={<Login />} />
            <Route path={redirect.home} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
