import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import { Header } from "./Pages/components/Header.jsx";
import { About } from "./Pages/About.jsx";
import { Projects } from "./Pages/Projects.jsx";
import { Contact } from "./Pages/Contact.jsx";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"about"} element={<About />} />
        <Route path={"projects"} element={<Projects />} />
        <Route path={"contact"} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
