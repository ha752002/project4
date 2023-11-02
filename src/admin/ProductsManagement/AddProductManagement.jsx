import React, { useState } from "react";

const AddProductManagement = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editedTodo, setEditedTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditedTodo(todos[index]);
  };

  const handleSaveEdit = () => {
    const newTodos = [...todos];
    newTodos[editIndex] = editedTodo;
    setTodos(newTodos);
    setEditIndex(null);
    setEditedTodo("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container mt-5">
      <h1>Todo List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="list-group">
        {todos.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {index === editIndex ? (
              <input
                type="text"
                className="form-control"
                value={editedTodo}
                onChange={(e) => setEditedTodo(e.target.value)}
              />
            ) : (
              item
            )}
            <div>
              {index === editIndex ? (
                <button className="btn btn-success" onClick={handleSaveEdit}>
                  Save
                </button>
              ) : (
                <button
                  className="btn btn-warning"
                  onClick={() => handleEditTodo(index)}
                >
                  Edit
                </button>
              )}
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddProductManagement;
