import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export default function useGifs({ keyword, quantity }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword, quantity }).then(gifs => setGifs(gifs));
  }, [keyword, quantity]);

  return { gifs };
}
