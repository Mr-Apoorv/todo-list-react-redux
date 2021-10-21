import React, {useState} from 'react'
import { useDispatch} from "react-redux";
import TodoList from './components/TodoList';
import { addTodo } from './redux/actions/actions';

const App = () => {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("")

  return (
   <>
   <TodoList />
   </>
  )
}

export default App;