import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="ml-5">
      <img src={props.info.image} alt="" />
      <div className="item-info">
        <h2 className="text-xl font-bold">{props.info.name}</h2>
        <p className="text-lg">{props.info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="btn btn-blue m-3 rounded-full"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total">{total ? total : ""}</h3>
        <button className="btn btn-blue m-3 rounded-full" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}