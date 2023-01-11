import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/actions/taskAction'

const Input = () => {
    const inputRef = useRef()
    const dispatch = useDispatch()

    const addTask = (e) => {
        e.preventDefault()
        dispatch(
            add(
                {
                    id: Date.now(),
                    title: inputRef.current.value,
                    isCompleted: false
                }
            ),
            inputRef.current.value = ""
        )
        //  console.log(inputRef.current.value);
    }

    // const tasks=useSelector(state=>state.task)
    // console.log(tasks);
    return (
        <>
            <form onSubmit={addTask}>
                <input type="text" ref={inputRef} />
            </form>
        </>
    )
}

export default Input