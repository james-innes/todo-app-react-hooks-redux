import React from "react";
import "./App.css";
import { Jumbotron, Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Container className="p-3">
          <Jumbotron>
            <h1 className="header">Todo App</h1>
            <TodoList />
            <TodoAdd />
          </Jumbotron>
        </Container>
      </div>
    </Provider>
  );
};

export default App;
