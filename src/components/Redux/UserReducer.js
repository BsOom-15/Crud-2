import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../contents/Data/Data";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updatedUser: (state, action) => {
            const {id, name, email} = action.payload;
            const update = state.find((user)=> user.id == id );
            if(update) {
                update.name = name;
                update.email = email;
            }
        },
        deleteUsers: (state, action) => {
            const {id} = action.payload;
            const update = state.find((user)=> user.id == id );
            if(update) {
                return state.filter( f => f.id !== id)
            }
        }

    },
});

export const {addUser, updatedUser, deleteUsers} = userSlice.actions
export default userSlice.reducer;  