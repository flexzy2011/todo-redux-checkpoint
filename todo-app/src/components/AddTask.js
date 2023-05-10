import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask,updateFilter} from '../slices/taskSlice'

const AddTask = () => {
    const dispatch = useDispatch()

    const [newTask, setNewTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask({desc:newTask,id:Math.random(),isDone:false}))
    }

    const handleFilter = (e) => {
        dispatch(updateFilter(e.target.value))
    }

  return (
    <div>
        <div className="addbox">
            <input placeholder="New task here..."  onChange={(e)=>setNewTask(e.target.value)}/>
            <button onClick={handleSubmit}>Add</button>
        </div>
        <div className="filterbox">
            <select onChange={handleFilter}>
                <option value="all">All</option>
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
            </select>
        </div>
    </div>
  )
}

export default AddTask;