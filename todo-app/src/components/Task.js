import React, { useState } from 'react'

import {useDispatch} from 'react-redux'
import {changeDone,editTask,removeTask} from '../slices/taskSlice'


const Task = (props) => {
    const [checked, setChecked] = useState(props.isDone)
    const [showEdit, setShowEdit] = useState(false)

    const dispatch = useDispatch()

    const handleCheck = () => {
        setChecked(!checked)
        dispatch(changeDone({id:props.id, isDone: !props.isDone}))
    }

    const handleEdit = (e) => {
      dispatch(editTask({id:props.id, desc: e.target.value}))
    }

    const handleRemove = () => {
      dispatch(removeTask(props.id))
    }

    const showEditForm = () => {
        setShowEdit(!showEdit)
    }


  return (
    <div className="cardbox">
        <div>
      <input className="completed" type="checkbox" checked={props.isDone} onChange={handleCheck}/>
      <label style={{textDecoration: checked ? 'line-through' :'none'}} >{props.desc}</label>
        </div>
      <div className="tools">
        {showEdit ? <input type="text" onChange={handleEdit}/> : null}
        {showEdit ? 
        <button className="edit" onClick={showEditForm}>SAVE</button>:
        <button className="edit" onClick={showEditForm}>EDIT</button>
        }
        <button className="delete" onClick={handleRemove}>REMOVE</button>
      </div> 
    </div>
  )
}

export default Task;