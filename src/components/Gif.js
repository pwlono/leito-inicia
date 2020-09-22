import React from "react";

export default function Gif(props) {
  const { title, url } = props;

  return (
    <div>
      <h4>{title}</h4>
      <img alt={title} src={url} />
    </div>
  );
}
