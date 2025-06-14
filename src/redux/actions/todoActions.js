export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const fetchTodosRequest = () => ({ type: FETCH_TODOS_REQUEST });
export const fetchTodosSuccess = (todos) => ({ type: FETCH_TODOS_SUCCESS, payload: todos });
export const fetchTodosFailure = (error) => ({ type: FETCH_TODOS_FAILURE, payload: error });


export const fetchTodos = () => {
    return async (dispatch) => {
        dispatch(fetchTodosRequest());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            if (!response.ok) throw new Error('Failed to fetch todos');
            const data = await response.json();
            dispatch(fetchTodosSuccess(data));
        } catch (error) {
            dispatch(fetchTodosFailure(error.message));
        }
    };
};

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id,
});

