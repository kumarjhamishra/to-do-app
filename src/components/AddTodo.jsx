import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function AddTodo() {

  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();


  const handleAddButtonClicked = (event) => {
    // don't send the data to server
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} due on: ${dueDate}`);

    // after using set their values to blank
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    addNewItem(todoName, dueDate);
  };

  return (
    // Wrapping the entire content in a parent div with the custom container class
    <div className={styles.container}>
      <form
        className="container text-center kg-row"
        onSubmit={handleAddButtonClicked}
      >
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Your tasks"
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              name=""
              id=""
              ref={dueDateElement}
            />
          </div>
          <div className="col-2">
            {/* the by default type of button is submit in the form */}
            <button
              type="submit"
              className="btn btn-success kg-button"
              // onClick={handleAddButtonClicked}
            >
              <IoAddCircleOutline />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
