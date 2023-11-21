import React, { useState } from "react";
import styles from "./Card.module.css";

export const Card = ({Data}) => {
  const { id, name, color, taste, price, url, stockCount } = Data;
  const [count, setCount] = useState(0);

  // console.log(Data);
  // console.log(name)

  

  return (
    <>
      <div>
        <div className={styles.container} style={{backgroundColor:color}}>
          <img src={url} width={200} alt="fruits" />
          <h1>Name:{name}</h1>
          <h2>Taste:{taste}</h2>
          <h3>Price:{price}</h3>
          <div>
            <button
              disabled={!count}
              onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
              className={styles.button}
            >
              -
            </button>
            <span className={styles.span}>{count}</span>
            <button
              onClick={() =>setCount((prev) => (prev < stockCount ? prev + 1 : 10))}
              className={styles.button}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
