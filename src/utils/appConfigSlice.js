import { createSlice } from '@reduxjs/toolkit';

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState: {
    language: { code: 'en', language: 'English' },
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = appConfigSlice.actions;
export default appConfigSlice.reducer;
