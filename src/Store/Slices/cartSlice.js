import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            const item = action.payload;
            if (!state.some(it => it.id === item.id)) {
                item.count = 1;
                state.push(item);
            }
        },
        remove(state, action) {
            return state.filter((item) => {
                return item.id !== action.payload;

            });
        },
        incre(state, action) {
            for (let it in state) {
                if (state[it].id === action.payload && state[it].count < 10) {
                    state[it].count += 1;
                }
            }
        },
        decre(state, action) {
            for (let it in state) {
                if (state[it].id === action.payload && state[it].count > 1) {
                    state[it].count -= 1;
                }
            }
        }
    },
});

export const { add, remove, incre, decre } = cartSlice.actions;
export default cartSlice.reducer;