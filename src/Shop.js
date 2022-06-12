import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import "./index.css";
import useFetch from "./useFetch.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const {get, loader} = useFetch();

  useEffect(() => {
    get("https://covid-shop-mcs.herokuapp.com/")
    .then(data => {
      if (data) {
        setItems(data);
        console.log(data);
      }
    })  
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="shop">
      <h2>{loader ? "Загружаем..." : ""}</h2>
      {items.map((item) => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  );
}
