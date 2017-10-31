import React from 'react';
import { ADD_TODO } from '../PossibleActions';

import ADDTODOACTION from '../actions/AddToDo';
import AddTodoComponent from '../components/AddTodo';


const mapStateToProps = (state, ownProps) => {

}
const mapDispatchToProps = (dispatch, ownProps) => {
    onClick: dispatch(ADDTODOACTION(ownProps.value));
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoComponent);
