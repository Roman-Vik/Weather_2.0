import React from 'react';
import {Home} from "./pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import {MonthStatistic} from "./pages/MonthStatistic/MonthStatistic";
import {Header} from "./pages/shared/Header/Header";


function App() {
  return (
    <div className="App">
        <div className="container">
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mouth-statistics" element={<MonthStatistic/>} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
