import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Atendimentos from "./pages/Atendimentos";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/atendimentos" element={<Atendimentos />} />
      </Routes>
    </Router>
  );
}

export default App;
