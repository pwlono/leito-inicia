import React, { useContext } from "react";
import "../App.css";
import { Link } from "wouter";
import StaticSearch from "../context/StaticSearch";

export default function NavBar() {
  const context = useContext(StaticSearch);

  return (
    <nav className='navbar'>
      <ul className='vevo'>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={`/search/${context.keyword}/${context.quantity}`}>
            <a>Search</a>
          </Link>
        </li>
        <li>
          <Link href='/detail/:id'>
            <a>Detail</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
