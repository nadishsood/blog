import jsonPlaceHolder from './../apis/jsonPlaceholder';

// export const fetchPosts =  () => {

//     return async (dispatch)=>{
//         const response = await jsonPlaceHolder.get("/posts");
//         dispatch({type: 'FETCH_POSTS', payload: response });
//     };
// };

//refactor to es6 removed braces and all

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get(`posts`);
    dispatch({type: 'FETCH_POSTS', payload: response.data});
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data});
}












 




