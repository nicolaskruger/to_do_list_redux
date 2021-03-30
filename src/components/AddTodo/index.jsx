import { connect } from "react-redux";
import addTodo from "../../store/operation/addTodo";

let AddTodo = ({dispatch}) =>{
    let input;

    return (
        <div>
            <input ref={node => {
                input = node;
            }}/>
            <button onClick= {()=>{
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
                Add Todo
            </button>
        </div>
    )
}
AddTodo = connect()(AddTodo);
export default AddTodo;