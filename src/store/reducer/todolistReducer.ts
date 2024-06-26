import { createSlice } from "@reduxjs/toolkit";

const todolistReducer = createSlice({
    name: "todolistReducer",
    initialState:{
        jobs:[
            {
                id:1,
                name:"học lập trình"
            },
            {
                id:2,
                name:"học lập trình2"
            },{
                id:3,
                name:"học lập trình3"
            }
        ]
    },
    reducers:{
        addTodo:(state,action:any)=>{
            state.jobs.push(action.payload)
        }

    }
})
// xuất ra các action
// dùng destructoring
const {addTodo}= todolistReducer.actions
// xuất ra hàm redecer
export default todolistReducer.reducer;

