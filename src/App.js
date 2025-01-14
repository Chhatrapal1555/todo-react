import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";

const App = () => {
  return (
    <>
      <header>
        <section className="title-section">
          <h1>What Todo</h1>
        </section>
      </header>
      <main>
        <section className="todo-section">
          <AddTodoForm />
          <TodoList />
        </section>
      </main>
      <footer className="summary-section">
        <TotalCompleteItems />
      </footer>
    </>
  );
};

export default App;
