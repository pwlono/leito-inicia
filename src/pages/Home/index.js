import React, { useContext } from "react";
import { useLocation } from "wouter";
import "../../App.css";
import StaticSearch from "../../context/StaticSearch";

export default function Home() {
  const context = useContext(StaticSearch);
  const { keyword, quantity, setKeyword, setQuantity } = context;
  const [path, setPath] = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();
    setPath(`/search/${keyword}/${quantity}`);
  };

  const handleChange = evt => {
    setTimeout(setKeyword(evt.target.value), 3000);
  };

  const handleQuantity = evt => {
    setQuantity(evt.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <input
            autoFocus
            placeholder='Search gifs here..'
            onChange={handleChange}
            type='text'
          />
          <input
            type='number'
            max={10}
            onChange={handleQuantity}
            value={quantity}
          />
          <button type='submit'>Mandale Mecha</button>
          <p> ultima busqueda</p>
        </div>
      </form>
    </div>
  );
}
