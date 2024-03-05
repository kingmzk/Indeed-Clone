
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./Pages/CreatePost";
import { routePath } from "./Routes/route";


function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.create} element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
