import { useState } from "react";
import Header from "./components/Header/header";
import TodoList from "./components/TodoList/todoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="TodoText">
          <h1>Todo App</h1>
        </div>
        <div className="inputWrapper">
          <input
            className="mainInput"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="mainPlus" onClick={handleAddTodo}>
            Submit
          </button>
        </div>
        <TodoList todos={todos} onDelete={handleDeleteTodo} />
      </div>
    </>
  );
}

export default App;
