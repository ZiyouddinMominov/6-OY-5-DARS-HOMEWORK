import React from "react";
import styles from "./todo.module.css";
function Todo({ todo, onDelete }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <input className={styles.checkbox} type="checkbox" />
          <p className={styles.paragraph}>{todo}</p>
        </div>
        <div className={styles.btnWrapper}>
          <button className={styles.delete} onClick={onDelete}>
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
