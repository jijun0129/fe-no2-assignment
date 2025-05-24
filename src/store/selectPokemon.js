import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectPokemon: [],
};

const selectPokemon = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.selectPokemon.push(action.payload);
    },
    removePokemon: (state, action) => {
      state.selectPokemon = state.selectPokemon.filter((p) => p.id !== action.payload.id);
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export
export const { addPokemon, removePokemon } = selectPokemon.actions;
// reducer 는 configStore에 등록하기 위해 export default
export default selectPokemon.reducer;
