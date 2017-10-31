import { SHOW_ALL, MODIFY_FILTER } from '../PossibleActions';

const filter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case MODIFY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default filter;