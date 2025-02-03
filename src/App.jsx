import { useState } from 'react';
import './App.css'
import TodoForm from './ud_components/TodoForm';
import TodoList from './ud_components/TodoList';

function App() {

  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);
  const [editId,setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    //update edited todo
    if(editId)
    {
      const editTodo = todos.find((i)=>i.id===editId);

      const updatedTodos = todos.map((t)=>t.id === editTodo.id?
        t={id:t.id,todo} : {id:t.id,todo:t.todo})
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if(todo !== "")
    {
      // use `` in id for make it string
      setTodos([{ id:`${todo}-${Date.now()}`,todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to)=>to.id !== id);
    setTodos([...delTodo]);
  }

  const handleEdit = (id) => {
    const ediTodo = todos.find((i)=>i.id === id);
    setTodo(ediTodo.todo);
    setEditId(id);
  }
 
  return (
    <div className='App'>
      <div className='container'>
        <h1>Todo List App</h1>
        <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editId={editId}></TodoForm>
        <TodoList todos={todos} handleDelete={handleDelete} handleEdit={handleEdit}></TodoList>
      </div>
    </div>
  )
}

export default App
