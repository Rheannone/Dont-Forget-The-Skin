import {csrfFetch} from './csrf';

const SET_LIST = 'dashboard/setList';
const ADD_TASK = 'dashboard/addTask';
const DELETE_TASK = 'dashboard/deleteTask'

const setList = (list) => {
    return {
    type: SET_LIST,
    list,
    };
};

const deleteTask = (id) => {
    return {
         type: DELETE_TASK,
         id,
    }
}


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
        const newList = await response.json();
        dispatch(deleteTask(newList))
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
    // console.log("FROM FETCH", data.list) 
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
                console.log("from reducer.....allDash", allDash)
                console.log("from reducer.....state", state)
                
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
            
            return newState;
        }
        case DELETE_TASK :{
            const newerList = state.list.filter(item => item.id !== action.payload)
            return newerList
        }
        default:
            return state;
    }
}
export default dashboardReducer;


