import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Alexander Bamichas" },
  { id: "1", name: "Michael Meliopoulos" },
  { id: "2", name: "Filippos Tsaousis" },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
