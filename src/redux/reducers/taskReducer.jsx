export const taskReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload]

        case "DELETE":
            const newArr = state.filter(s => s.id !== action.id);
            return newArr;

        case "COMPLETE":
            const completedTask = state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, isCompleted: !todo.isCompleted }
                }
                else {
                    return todo;
                }
            })
            return completedTask;
        default: return state;
    }
}
