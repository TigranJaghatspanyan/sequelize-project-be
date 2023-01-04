import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/signIn";
import SignUp from "./Components/signUp";
import Home from "./Components/homePage";
import redirectUrls from "./const/redirect";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path={redirectUrls.signUp} element={<SignUp />} />
            <Route path={redirectUrls.login} element={<Login />} />
            <Route path={redirectUrls.home} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
