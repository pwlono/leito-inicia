import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import "../../App.css";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, setPath] = useLocation();
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = evt => {
    evt.preventDefault();
    setPath(`/search/${keyword}/${quantity}`);
  };
  const handleChange = evt => {
    setKeyword(evt.target.value);
  };

  const handleQuantity = evt => {
    setQuantity(evt.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <input
            placeholder='Search gifs here..'
            onChange={handleChange}
            type='text'
            value={keyword}
          />
          <input
            type='number'
            max={10}
            onChange={handleQuantity}
            value={quantity}
          />
          <button type='submit'>Mandale Mecha</button>
        </div>
      </form>
    </div>
  );
}
