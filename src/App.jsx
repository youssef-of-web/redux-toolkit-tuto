import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { logout, setAuth } from "./redux/reducers/auth.reducer";
import { fetchProducts } from "./redux/actions/products.action";

function App() {
  const { data, connected } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const Login = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch(setAuth(result));
      });
  };

  const Logout = () => {
    dispatch(logout());
  };

  const fetchData = () => {
    dispatch(fetchProducts());
  };
  return (
    <>
      <div>{JSON.stringify(products)}</div>
      {data.username && <h3>Welcome {data.username}</h3>}
      <div style={{ display: "flex", gap: 4 }}>
        {connected ? (
          <div>
            <button onClick={Logout}>logout</button>
            <button onClick={fetchData}>fetch data</button>
          </div>
        ) : (
          <div>
            <button onClick={Login}>login</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
