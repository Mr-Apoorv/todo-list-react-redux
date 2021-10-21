export const addTodo = (data) => {
    return({
        type: "ADD_TODO",
        payload:{
            id:Math.random(),
            data:data,
        }
    })
}

export const deleteTodo = (data) => {
    return({
        type: "DELETE_TODO",
        payload:{
          
            data:data,
        }
       
    })
}

export const removeAllTodo = () => {
    return({
        type: "REMOVE_ALL_TODO",
       
    })
}