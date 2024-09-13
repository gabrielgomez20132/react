import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Characters from "./components/pages/characters/Characters";


function App() {
  return (
    <BrowserRouter> 
      <Routes>
          <Route path="/" element={ <Home /> } />

          <Route path="/characters" element={ <Characters /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
