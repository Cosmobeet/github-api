import "./App.css";
import React from "react";
import Profile from "./Components/Profile";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <SearchBar />
        <Profile />
      </React.Fragment>
    </div>
  );
}

export default App;
