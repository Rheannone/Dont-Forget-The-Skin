import {csrfFetch} from './csrf';

const SET_LIST = 'dashboard/setList';
const ADD_TASK = 'dashboard/addTask';

const setList = (list) => {
    return {
    type: SET_LIST,
    list,
    };
};



const addTask = ({task}) => {
    return {
        type: ADD_TASK,
        task,
    }
}

export const destroyTask = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/dashboard/task/${id}`, {
        method: 'delete',
    });
    if (response.ok) {
        console.log("from the store, here is the response", response)
        const newList = await response.json();
        dispatch(setList(newList))
    }
}

export const createTask = (data) => async (dispatch) => {
    const { userId, singleStep, tags, lengthInMin, type, startDate, emptyDate, sizeInFlOz, mon, tues, wed, thur, fri,
      sat,
      sun,
      night,
      morning,
      activeIngredients } = data;

    const response = await csrfFetch(`/api/dashboard/${userId}/task`, {
        method: "POST",

        body: JSON.stringify({
            userId, singleStep, tags, lengthInMin, type, startDate, emptyDate, sizeInFlOz, mon, tues, wed, thur, fri,
      sat,
      sun,
      night,
      morning,
      activeIngredients
        })
    });

    if (response.ok) {
        const task = await response.json();
        console.log(task)
        dispatch(addTask(task));
        return response;
        
    }
}

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
            });
            return {
                ...allDash,
                ...state,
                list: action.list
            }
        case ADD_TASK: {
                const newState = {
                    ...state,
                    [action.task.id]: action.task
                };
                newState.list.push(action.task)
                console.log("newstate", newState)
            
            return newState;
        }
        default:
            return state;
    }
}
export default dashboardReducer;


