import {ProjectsPage, HomePage} from './components';

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
    </div>
  );
}

export default App;
