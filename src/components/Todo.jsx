import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo } from '../redux/actions/taskAction'

const Todo = ({ title, isCompleted, id }) => {
    const dispatch = useDispatch()
    return (
        <>
            {isCompleted ? <h5>Done</h5> : <h5>Not Done</h5>}
            <li>
                <h3>{title}</h3>
                <button onClick={() => dispatch(deleteTodo(id))}>delete</button>
                <button onClick={() => dispatch(completeTodo(id))}>complete</button>
            </li>
        </>
    )
}

export default Todo