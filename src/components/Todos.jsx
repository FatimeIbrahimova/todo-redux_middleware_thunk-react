import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const Todos = () => {
    const tasks = useSelector(state => state.task)
    return (
        <ul>
            {tasks.map(t => {
                return <Todo key={t.id} title={t.title} isCompleted={t.isCompleted} id={t.id} />
            })}
        </ul>
    )
}

export default Todos