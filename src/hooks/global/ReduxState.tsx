
// import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
// import { iUser } from "../../types";


// const initialState = {
//     currentUser: {} as iUser | null,
// };

// const ReduxState = createSlice({
//     name: "istand",
//     initialState,
//     reducers: {
//         User: (state, { payload } : PayloadAction<iUser>) => 
//         {
//             state.currentUser = payload
//         },

//         logout: (state) => {
//             state.currentUser = null;
//         }
//     },
// });

// export const { User, logout } = ReduxState.actions;

// export default ReduxState.reducer;




// ReduxState.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { iUser } from "../../types";

interface State {
  currentUser: SerialisedUser | null;
  error:  string | null;
}

interface SerialisedUser  {
    _id? : string;
    fullName? : string;
    businessName? : string;
    businessContact? : string;
    businessServices? : string;
    email? : string;
    password? : string;
}

const initialState: State = {
  currentUser: null,
  error: null,
};

const ReduxState = createSlice({
  name: "istand",
  initialState,
  reducers: {
    User: (state, { payload }: PayloadAction<SerialisedUser>) => {

        const serializedUser : SerialisedUser = {
            fullName: payload.fullName,
            businessName: payload.businessName,
            businessContact: payload.businessContact,
            businessServices: payload.businessServices,
            email: payload.email,
            password: payload.password
        }

      state.currentUser = serializedUser;
      state.error = null; // Clear the error if the action was successful
    },

    UserError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload; // Store the error message in the state
    },

    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { User, UserError, logout } = ReduxState.actions;

export default ReduxState.reducer;
