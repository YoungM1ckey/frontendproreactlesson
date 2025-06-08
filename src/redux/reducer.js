import { ADD_TODO } from './actions';

const initialState = { todos: [] };

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.payload }],
            };
        default:
            return state;
    }
};
