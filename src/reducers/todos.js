
import { ADD_TODO, CHANGE_TODO } from '../PossibleActions';

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state,
            {
                text: action.text,
                id: action.id,
                completed: false
            }
            ]
        case CHANGE_TODO:
            return state.map(todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : { todo });

        default:
            return state
    }
};

export default todos;