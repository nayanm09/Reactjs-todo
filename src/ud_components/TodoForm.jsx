import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function TodoForm({handleSubmit,todo,editId,setTodo}) {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your task"
      ></Input>
      <Button type="submit"> {editId ? "Edit" : "Go"}</Button>
    </form>
  );
}

export default TodoForm;
