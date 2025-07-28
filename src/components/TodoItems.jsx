import styles from "./todoitems.module.css";
export default function TodoItems({ item, todos, settodos }) {
  function handledelete(itemToDelete) {
    console.log("Deleting:", itemToDelete);
    console.log("Current todos:", todos);

    settodos(todos.filter((todo) => todo !== itemToDelete));
  }
  function itemclick(n) {
    console.log("item click ", n);
    const newArray = todos.map((item) =>
      item.name === n ? { ...item, completed: !item.completed } : item
    );
    settodos(newArray);
    console.log(todos);
  }
  const classname = item.completed ? styles.completed : "";

  return (
    <div className={styles.item1}>
      <div className={styles.itemName}>
        <span className={classname} onClick={() => itemclick(item.name)}>
          {" "}
          {item.name}{" "}
        </span>

        <span className={styles.delete}>
          <button onClick={() => handledelete(item)}>Delete</button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
