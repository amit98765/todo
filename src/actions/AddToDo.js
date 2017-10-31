let id = 0;


export default AddTodo = (data) => {
    id++;
    return {
        text: data,
        id: id,
        completed: false
    }
}