import React, { useEffect, useReducer } from "react";
import "./styles.css";
import Data from "./Data";
import Info from "./Info";
import Reducer from "./Reducer";
import Form from "./Form";

// reducer to funkcja która przyjmuje dwa parametru: stan i akcję i zwraca nowy stan
//obiekt akcji
// {
//   type: 'ADD',
// }
const fetchAsyncData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
};

const App = () => {
  const [state, dispatch] = useReducer(Reducer, []);
  const asyncFetch = async () => {
    await fetchAsyncData();
    dispatch({ type: "FETCH", data: Data });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const item = state.map((item) => (
    <Info key={item.id} onClickHandler={dispatch} {...item} />
  ));

  return (
    <div className="App">
      {item}
      <Form onClickHandler={dispatch} />
    </div>
  );
};

export default App;
