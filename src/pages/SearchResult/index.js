import React from "react";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

export default function SearchResult(props) {
  const { keyword, quantity } = props.params;
  const { gifs } = useGifs({ keyword, quantity });

  return <ListOfGifs gifs={gifs} />;
}
