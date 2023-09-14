import {configureStore} from
"@reduxjs/toolkit";

import Players from "./reducers/player";

import authReducer from "./reducers/auth"; 

const store = configureStore({
    reducer: {
        player: Players,
        auth: authReducer,
    },
});

export default store;
