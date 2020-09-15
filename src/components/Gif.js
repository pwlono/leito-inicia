import React from "react";

export default function Gif(props) {
  const { title, id, url } = props;
  console.log(props);
  return (
    <div>
      <h4>{title}</h4>
      <img alt={title} src={url} />
    </div>
  );
}
