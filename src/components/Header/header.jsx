import React from "react";
import styles from "./header.module.css";
export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <p className={styles.text}>admin</p>
        <button className={styles.btnBlue}>Logout</button>
      </div>
    </>
  );
}
