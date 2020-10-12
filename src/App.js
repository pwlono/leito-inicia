import React, { useState } from "react";
import "./App.css";
import { Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResult";
import Detail from "./pages/Detail";
import NavBar from "./components/NavBar";
import StaticSearch from "./context/StaticSearch";

function App() {
  const [keyword, setKeyword] = useState();
  const [quantity, setQuantity] = useState(1);
  const urls = [];

  const contextValue = {
    keyword: keyword,
    quantity: quantity,
    setKeyword: setKeyword,
    setQuantity: setQuantity,
    urls: urls,
  };

  return (
    <StaticSearch.Provider value={contextValue}>
      <div className='App'>
        <h1 className='title'>Buscateungif.com</h1>
        <NavBar />
        <body className='App-content'>
          <Route component={Home} path='/' />
          <Route component={SearchResults} path='/search/:keyword/:quantity' />
          <Route component={Detail} path='/detail/:id' />
        </body>
      </div>
    </StaticSearch.Provider>
  );
}

export default App;
