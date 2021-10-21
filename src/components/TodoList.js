
import React, {useState} from 'react'
import { useDispatch, useSelector} from "react-redux";
import { addTodo, deleteTodo, removeAllTodo } from '../redux/actions/actions';
import todoReducer from "../redux/reducers/todoReducer"

const TodoList = () => {
    const mystate = useSelector(state => state.todoReducer.list)
    console.log(mystate)
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("")
    return (
        <>
         <div>
      <div>
        Add your to do list here
      </div>
      <div>
        <input type="text" placeholder="✍ write your todo here" value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}}/>
        <button onClick={()=>dispatch(addTodo(inputValue))}>Add</button>
      </div>
    </div>
    <div>
        {mystate.map((ele)=>{
            return (
                <div key={ele.id}>
                    <h3 style={{border:"1px solid black", display:"inline-block"}}>{ele.data}</h3>
                    <button onClick={()=>{dispatch(deleteTodo(ele.id)); console.log("clicked", ele.id)}}>Delete</button>
                </div>
            )
        })}
    </div>
    <div>
        <button onClick={()=>{dispatch(removeAllTodo()); console.log("clicked RM ALL")}}>Remove all Todo</button>
    </div>
        </>

    )
}

export default TodoList
