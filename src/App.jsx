import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import StateDemo from "./pages/StateDemo";
import EffectDemo from "./pages/EffectDemo";
import StorageDemo from "./pages/StorageDemo";
import History from "./pages/History";
import Portfolio from "./pages/Portfolio";

import "./App.css";

function App() {
return (
<> <Navbar />

```
  <main className="main-content">
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/state"
        element={<StateDemo />}
      />

      <Route
        path="/effect"
        element={<EffectDemo />}
      />

      <Route
        path="/storage"
        element={<StorageDemo />}
      />

      <Route
        path="/history"
        element={<History />}
      />

      <Route
        path="/portfolio"
        element={<Portfolio />}
      />
    </Routes>
  </main>

  <Footer />
</>

);
}

export default App;
