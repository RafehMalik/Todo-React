import styles from "./footer.module.css";

export default function Footer({ todoTotal, count }) {
  return (
    <>
      <div className={styles.footer}>
        <h1>
          Total Todos: {todoTotal} Completed Todos:{count}
        </h1>
      </div>
    </>
  );
}
