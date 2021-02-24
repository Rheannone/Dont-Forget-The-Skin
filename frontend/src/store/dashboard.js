import {csrfFetch} from './csrf';

const SET_LIST = 'dashboard/setList';

const setList = (list) => {
    return {
    type: SET_LIST,
    list,
    };
};

export const getList = (userId) => async dispatch => {
    const res = await csrfFetch(`/api/dashboard/${userId}`);
    if (res.ok){
    const data = await res.json();
    console.log("FROM FETCH", data.list) 
    dispatch(setList(data.list))
    return res;
    }
}


const initialState = {
    list:[]
}
function dashboardReducer(state = initialState, action) {
    switch(action.type) {
        case SET_LIST:
            const allDash = {};
            action.list.forEach(item => {
                allDash[item.id] = item
                // console.log("from reducer", allDash)
            });
            return {
                ...allDash,
                ...state,
                list: action.list
            }
        default:
            return state;
    }
}
export default dashboardReducer;