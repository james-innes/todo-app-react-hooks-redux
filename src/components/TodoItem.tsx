import React from "react";
import { Form, FormControl, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleTodo, updateNameTodo } from "../redux/todosSlice";

const TodoItem = (props: any) => {
  const { id, name, complete } = props.todo;
  const dispatch = useDispatch();

  const handleNameChange = (e: any) => {
    e.preventDefault();
    dispatch(updateNameTodo({ id, name: e.target.value }));
  };

  const handleCompleteChange = (e: any) => {
    dispatch(toggleTodo({ id, complete: !complete }));
  };

  return (
    <div className="todos">
      <Form>
        <Row>
          <Col>
            <FormControl
              className="p-3"
              type="text"
              placeholder={"name place holder"}
              value={name}
              onChange={handleNameChange}
            />
          </Col>
          <Col>
            <Form.Check
              className="p-3"
              id={id}
              type="checkbox"
              label="Status"
              checked={complete}
              onChange={handleCompleteChange}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TodoItem;
