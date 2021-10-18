import React from "react";
import Culture from "../Culture/Culture";
import styles from "./Cultures.module.css";
function Cultures() {
  return (
    <div className={styles.cultures}>
      <Culture />
      <Culture />
    </div>
  );
}

export default Cultures;
