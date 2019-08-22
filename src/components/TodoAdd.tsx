import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todosSlice";
import uuid from "uuid";

const TodoAdd = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name.trim() === "") return null;
    dispatch(
      addTodo({
        id: uuid(),
        name,
        complete: false
      })
    );
    setName("");
  };

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        className="p-3"
        type="text"
        placeholder="Enter new Todo"
        value={name}
        onChange={handleChange}
      />

      <Button type="submit" variant="primary">
        Add
      </Button>
    </Form>
  );
};

export default TodoAdd;
