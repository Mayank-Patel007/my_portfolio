import { createSlice } from '@reduxjs/toolkit';

const sectionSlice = createSlice({
  name: 'section',
  initialState: {
    activeSection: null,
  },
  reducers: {
    scrollToSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { scrollToSection } = sectionSlice.actions;
export default sectionSlice.reducer;
