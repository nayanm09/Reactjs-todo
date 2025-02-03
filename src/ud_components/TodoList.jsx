import { Button } from "@/components/ui/button"

function TodoList({todos,handleEdit,handleDelete}) {
  return (
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
  )
}

export default TodoList