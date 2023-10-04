import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    activeTab: 'HOME',
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = null;
    },

    addActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { addUser, removeUser,   addActiveTab } = userSlice.actions;

export default userSlice.reducer;
