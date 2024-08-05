import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    cards:{

    }
}


export const cardsSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers:{
        addCard: (state,action) => {
            const {id,front,back} = action.payload
            state.cards[id] = {id,front,back}
        }
    }
})


export const selectCard = (state, id) => state.cards.cards[id];


export const {addCard} = cardsSlice.actions;

export default cardsSlice.reducer;



