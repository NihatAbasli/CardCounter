import React from "react";
import { Card } from "../Card";
import styles from "./Content.module.css";

export const Content = (props) => {
  return (
    <div className={styles.content}>
      <Card dataFruit={props} />
    </div>
  );
};
