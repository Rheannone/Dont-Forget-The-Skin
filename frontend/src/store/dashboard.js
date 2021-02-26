import {csrfFetch} from './csrf';

const SET_LIST = 'dashboard/setList';
const ADD_TASK = 'dashboard/addTask';

const setList = (list) => {
    return {
    type: SET_LIST,
    list,
    };
};

const addTask = (task) => {
    return {
        type: ADD_TASK,
        task,

    }
}

export const createTask = (data) => async dispatch => {
    const { userId, singleStep, tags, lengthInMin, type, startDate, emptyDate, sizeInFlOz, mon, tues, wed, thur, fri,
      sat,
      sun,
      night,
      morning,
      activeIngredients } = data;

    console.log("from post", data)
    const response = await csrfFetch(`/api/dashboard/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
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
            if(!state[action.task.id]) {
                const newState = {
                    ...state,
                    [action.task.id]: action.task
                };
                const taskList = newState.task.map(id => newState[id]);
                taskList.push(action.task);
                console.log("ADD TASK REDUCER", newState.task)
            }
        }
        default:
            return state;
    }
}
export default dashboardReducer;