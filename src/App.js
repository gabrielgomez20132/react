
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Formulario from "./components/pages/formulario/Formulario";
import Login from "./components/pages/login/Login";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={ <Login/> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/formulario" element={ <Formulario /> } />

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
