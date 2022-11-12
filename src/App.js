import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ComingSoon from './ComingSoon'

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path='/' element={<ComingSoon/>} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
