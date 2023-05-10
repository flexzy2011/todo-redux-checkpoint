import {createSlice} from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        taskList: [
            {desc:"task1",id:Math.random(),isDone:false},
            {desc:"task2",id:Math.random(),isDone:false},
            {desc:"task3",id:Math.random(),isDone:true}
        ],
        filterStatus: "all"
    },
    reducers: {
        addTask:(state,action)=>{
            state.taskList.push(action.payload)
        },
        changeDone: (state,action)=>{
            const index = state.taskList.findIndex(
                (el)=>el.id === action.payload.id
            );
            state.taskList[index].isDone = action.payload.isDone
        },
        editTask:(state,action)=>{
            const index = state.taskList.findIndex(
                (el)=>el.id === action.payload.id
            );
            state.taskList[index].desc = action.payload.desc
        },
        removeTask:(state,action)=>{
            const index = state.taskList.findIndex(
                (el)=>el.id === action.payload
            );
            state.taskList.splice(index,1)
        },
        updateFilter:(state,action)=>{
            state.filterStatus = action.payload
        }
    }
})

export default taskSlice.reducer
export const {addTask,changeDone,editTask,removeTask,updateFilter} = taskSlice.actions