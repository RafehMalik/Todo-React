import styles from "./todoitems.module.css";
export default function TodoItems(prop) {
  return (
    <div className={styles.item1}>
      <div className={styles.itemName}>{prop.item}</div>
      <hr className={styles.line} />
    </div>
  );
}
