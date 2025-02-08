import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {

  const {deleteItem} = useContext(TodoItemsContext);

  return (
    <div className={`container kg-row ${styles.todoItem}`}>
      <div className="row">
        <div className={` ${styles.todoName} col-6`}>{todoName}</div>
        <div className={` ${styles.todoDate} col-4`}>{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-danger kg-button ${styles.todoDeleteButton}`}
            onClick={()=>deleteItem(todoName)}
          >
            <RiDeleteBin5Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
