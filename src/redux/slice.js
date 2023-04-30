import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../data/posts";

export const postSlice = createSlice({
    name: 'PostFilter',
    initialState: {
        activeTab: 'MỚI NHẤT',
        postsToShow: PostsData
    },
    
    reducers: {
        filterPostsOnCategory: (state, action) => {
            state.activeTab = action.payload;
            state.postsToShow = state.activeTab != "MỚI NHẤT" ? PostsData.filter(post => post.category == state.activeTab) : PostsData
        }
    }
})

// Action creators are generated for each case reducer function
export const { filterPostsOnCategory } = postSlice.actions

export default postSlice.reducer