import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // console.log(axios(requests.fetchActionMovies);
  return (
    <div className="app">
      <HomeScreen />
      {/* <Router>
        <Routes>
          <Route path="/a">
            <h1>332</h1>
          </Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
