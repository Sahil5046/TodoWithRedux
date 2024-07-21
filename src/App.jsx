import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo.jsx";
import Todos from "./components/Todos.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-2xl font-black">Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
