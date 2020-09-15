import React from "react";
import "./App.css";
import { Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResult";
import Detail from "./pages/Detail";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1 className='title'>Buscateungif.com </h1>
        <NavBar />
        <Route component={Home} path='/' />
        <Route component={SearchResults} path='/search/:keyword/:quantity' />
      </section>
    </div>
  );
}

export default App;
