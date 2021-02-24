import {csrfFetch} from './csrf';

const SET_LIST = 'dashboard/setList';

const setList = (list) => ({
    type: SET_LIST,
    payload: list
})

export const getList = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/dashboard/${userId}`);
    if (res.ok){
    const data = await res.json();
    console.log("FROM FETCH", data.list) 
    dispatch(setList(data.list))
    return res;
    }
}

function reducer(state = {}, action) {
    let newState;
    
    switch(action.type) {
        case SET_LIST:
            newState = {};
            action.payload.forEach(item => {
                // console.log("FROM REDUCER", item)
                newState[item.id] = {
                    id: item.id,
                    body: item.body
                }
            });
            return newState
        default:
            return state;
    }
}

export default reducer;