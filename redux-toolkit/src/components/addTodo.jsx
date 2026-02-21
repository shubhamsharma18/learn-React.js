 import { useState } from "react";
 import {useDispatch} from "react-redux"
 import {addTodo} from "../features/Todos/todoSlice"
 function Add(){
    const [input, setInput] = useState("");
    const dispatch=useDispatch()

  // handle input change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput("")
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Enter Text
        </label>

        <input
          type="text"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder="Type something..."
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Add