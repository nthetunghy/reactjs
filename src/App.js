import { useState } from "react";
import InputText from "./components/InputText";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const addTodo = (data) => {
    setTodo([
      ...todo,
      {
        todo: data,
      }
    ]);
  };

  return (
    <div className="App">
      <InputText addTodo={addTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
