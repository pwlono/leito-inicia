import React from "react";

const Context = React.createContext({
  keyword: null,
  quantity: null,
  setKeyword: null,
  setQuantity: null,
});

export default Context;
