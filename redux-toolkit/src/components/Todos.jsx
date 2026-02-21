import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/Todos/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
console.log(useSelector(state => state));

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Todos</h2>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex gap-4 items-center mb-2"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
