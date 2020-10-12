import React, { useContext } from "react";
import StaticSearch from "../../context/StaticSearch";

export default function Detail() {
  const { urls } = useContext(StaticSearch);
  const pos = 0;
  /* const pos = urls.map(); */
  console.log(urls);

  return (
    <div>
      <h1>El que vo' elegiste pha</h1>
      <br />
      <img alt='pija' src={urls[pos]} />
    </div>
  );
}
