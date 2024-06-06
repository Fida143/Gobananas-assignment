import Container from "@mui/material/Container";
// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page on search
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <div className="App">
        <nav>
          <h1>Todo List</h1>
          <Search onSearch={handleSearch} />
        </nav>
        <TodoList todos={currentTodos} />
        <Pagination
          todosPerPage={todosPerPage}
          totalTodos={filteredTodos.length}
          paginate={paginate}
          currentPage={currentPage}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </Container>
  );
};

export default App;
