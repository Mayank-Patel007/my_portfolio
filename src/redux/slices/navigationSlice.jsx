// navigationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    activeSection: '#home'
  },
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    }
  }
});

export const { setActiveSection } = navigationSlice.actions;
export default navigationSlice.reducer;