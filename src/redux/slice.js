import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../data/posts";

export const postSlice = createSlice({
    name: 'PostFilter',
    initialState: {
        value: 0,
        activeTab: 'MỚI NHẤT',
        postsToShow: PostsData
    },
    
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        filterPostsOnCategory: (state, action) => {
            state.activeTab = action.payload;
            state.postsToShow = state.activeTab != "MỚI NHẤT" ? PostsData.filter(post => post.category == state.activeTab) : PostsData
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, filterPostsOnCategory } = postSlice.actions

export default postSlice.reducer