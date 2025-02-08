import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage = () => {

  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p className={styles.welcomeMessage}>No tasks to do. So Enjoy🥳🥳</p>
    )
  );
};

export default WelcomeMessage;
