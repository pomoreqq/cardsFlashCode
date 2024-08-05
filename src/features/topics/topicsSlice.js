import { createSlice,createSelector} from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";
// podstawowy stan
const initialState = {
    topics: {
       
    }
}
// stan i akcje
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state,action) => {
            const {id,name,icon} = action.payload
            state.topics[id] = {id: id,name: name,icon: icon,quizIds: []}
        }   
    },
    extraReducers: (builder) => {
        builder.addCase(addQuiz, (state,action) => {
            const {id,topicId} = action.payload
            state.topics[topicId].quizIds.push(id)
        })
    }
    
})

// uzyskanie stanu 
const selectState = (state) => state

// pobieranie wewnetrznego obiektu
export const selectTopics = createSelector([selectState],
    (state) => state.topics.topics
    )


    export const {addTopic, addQuizzToTopic} = topicsSlice.actions
    export default topicsSlice.reducer