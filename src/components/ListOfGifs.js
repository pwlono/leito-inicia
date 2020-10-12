import React from "react";
import Gif from "./Gif";

export default function ListOfGifs({ gifs }) {
  console.log(gifs);
  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif title={title} url={url} id={id} />
      ))}
    </div>
  );
}
