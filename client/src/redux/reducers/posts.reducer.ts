import { READ_POSTS, READ_POSTS_ERROR, READ_POSTS_LOADING } from "../variables/variables";

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: {}
}

const postsReducer = (state: any = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case READ_POSTS:
            return {
                ...state,
                loading: false,
                posts: [...action.payload]
            }
        case READ_POSTS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case READ_POSTS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default postsReducer;