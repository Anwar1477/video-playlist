import { Route, Routes } from "react-router-dom";

import Course from "./Components/Course/Course";
import Home from "./Views/Home/Home";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:coursename" element={<Course />} />
      </Routes>
    </div>
  );
}

export default App;
