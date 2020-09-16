import React from "react";
import "../App.css";
import { Link } from "wouter";

export default function NavBar() {
  return (
    <nav className='navbar'>
      <ul className='vevo'>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>leo</a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>jorge</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
