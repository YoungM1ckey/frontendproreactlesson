import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, TOGGLE_TODO } from '../actions/todoActions';



const initialState = {
    loading: false,
    todos: [],
    error: null,
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_TODOS_SUCCESS:
            return { ...state, loading: false, todos: action.payload };
        case FETCH_TODOS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
    }
}