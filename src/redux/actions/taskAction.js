export const add = (todo) => {
    return {
        type: "ADD",
        payload: todo
    };
};
export const deleteTodo = (id) => {
    return {
        type: "DELETE",
        id: id
    }
}
export const completeTodo=(id)=>{
    return{
        type:"COMPLETE",
        id:id
    }
}