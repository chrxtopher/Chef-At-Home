import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import PagesAll from "./pages/PagesAll";

function App() {
  return (
    <Router>
      <PagesAll />
    </Router>
  );
}

export default App;
