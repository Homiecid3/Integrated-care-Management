//IMPORT: Packages:
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//IMPORT: Elements:
import "./App.css";
import { AppWrapper } from "./App.element";

//IMPORT: Pages:
import LaunchPage from "./App/Pages/Launch page/LaunchPage.component";
import MainHub from "./App/Pages/Main hub/MainHub.component";

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LaunchPage />} />
          <Route path="/mainhub" element={<MainHub />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
