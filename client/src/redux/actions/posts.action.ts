import { loading } from "../utils/loading.utils";
import {READ_POSTS, READ_POSTS_LOADING, READ_POSTS_ERROR, BASE_URL_API_REQUEST} from "../variables/variables";
import axios from "axios";

export const readPosts = (search?: any) => (dispatch: any) => {
    let requestString = `${BASE_URL_API_REQUEST}/api/posts`;
    if(search) {
        let entries: any = Object.entries(search);

        for(let [index, [key, value]] of entries.entries()){
            console.log(index)
            if(value && index > 0) {
                requestString += `&${key}=${value}`;
            } else if(value && index === 0) {
                requestString += `?${key}=${value}&`;
            }
        }
    }

    loading({ type: READ_POSTS_LOADING, loading: true });
    axios.get(`${requestString}`)
        .then(response => {
            dispatch({
                type: READ_POSTS,
                payload: response.data,
            });
        }).catch(error => {
            dispatch({
                type: READ_POSTS_ERROR,
                payload: error 
            })
        });
}