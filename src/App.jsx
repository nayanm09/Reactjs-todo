import { useState } from 'react';
import './App.css'
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

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
        <form className='todoForm' onSubmit={handleSubmit}>
          <Input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter your task"></Input>
          <Button type="submit"> {editId ? "Edit" : 'Go'}</Button>
        </form>
        
        <ul className='allTodos'>
          {
            todos.map((t) => (
              <li key={t.id} className='singleTodo'> 
                <span className='todoText'>{t.todo}</span> 
                <Button onClick = {()=>handleEdit(t.id)}>Edit</Button>
                <Button onClick={()=>handleDelete(t.id)}>Delete</Button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
