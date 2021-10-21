import {addTodo, removeAllTodo, deleteTodo} from "../actions/actions";

const initialState={
    list:[],
}

const todoReducer = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":

        if(action.payload.data.length>2){
            return {
                // ...state, 
                list:[...state.list,
                    {id:action.payload.id,
                        data:action.payload.data,
                    }
                ]
            }
        }
        else{
            alert("Enter more than 2 char")
            console.log(action.payload.data.length)
        }
       
            
        case "DELETE_TODO":
            const newList=state.list.filter((ele)=>ele.id!==action.payload.data);
            console.log("delete",newList)
            return {
                // ...state, 
                list:[...newList,
                    
                ]
            }

            case "REMOVE_ALL_TODO":
            
                return {
                    // ...state, 
                    list:[],
                }
         
        default: return state
            
    }
}

export default todoReducer;