const AddTodo = ({ onClick }) => {

    return (<div>
        <input type="text" id="todotext" />
        <input type="button" onClick={
            (document.getElementById("todotext").value.trim() != "") ?
                onClick(document.getElementById("todotext").value) : ""
        }
        >Add
            </input>
    </div >
    );
}