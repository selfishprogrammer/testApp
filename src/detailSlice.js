import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detailSlice",
  initialState: {
    users: {},
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = detailSlice.actions;
export default detailSlice.reducer;
