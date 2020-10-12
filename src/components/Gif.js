import React, { useContext } from "react";
import { Link } from "wouter";
import StaticSearch from "../context/StaticSearch";

export default function Gif(props) {
  const { title, url, id } = props;
  const { urls } = useContext(StaticSearch);
  urls.push(url);

  return (
    <div>
      <Link to={`/detail/${id}`}>
        <h4>{title}</h4>
        <img alt={title} src={url} />
      </Link>
    </div>
  );
}
