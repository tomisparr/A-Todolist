import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Todo } from "./Components/Todo";
import { List } from "./Components/List";

import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const onChangeList = (e) => setTodo(e.target.value);

  const totalTodo = todos.length + 1;

  const addList = (e) => {
    e.preventDefault();

    const newAdd = {
      title: todo,
      description: "todo example description",
      important: true,
    };

    try {
      axios
        .post("https://todo-api-23xs.onrender.com/api/todos", newAdd)
        .then(() => setTodos([...todos, newAdd]));
    } catch (error) {
      console.log(error);
    }
    setTodo("");
  };

  useEffect(() => {
    axios
      .get("https://todo-api-23xs.onrender.com/api/todos")
      .then((result) => {
        setTodos(result.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const deleteTodo = (id) => {
    axios.delete(`https://todo-api-23xs.onrender.com/api/todos/${id}`).then(() => {
      const newTodos = todos.filter((todo) => todo.id !== id)
      setTodos(newTodos)
    }).catch((err) => console.log(err))
  }

  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      <Todo
        addList={addList}
        onChangeList={onChangeList}
        tasks={todos}
        totalTodo={totalTodo}
        handleDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
