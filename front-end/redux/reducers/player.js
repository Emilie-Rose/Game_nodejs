import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: null,
    loading: null,
    error: false,
}

export const Personnages = createSlice({
    name: "PLAYERS",
    initialState,
    
    reducers: {
        FETCH_STAR: (draft) =>{
            draft.loading = true;
        },
        FETCH_SUCCESS: (draft, action) =>{
            draft.loading = false;
            draft.data = action.payload;
        },
        FETCH_FAILURE: (draft) =>{
            draft.loading = false;
            draft.error = true;
        },
    }
})

export const {FETCH_FAILURE, FETCH_SUCCESS, FETCH_STAR} = Players.actions;
export default Players.reducer