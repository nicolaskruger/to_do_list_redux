import { connect } from "react-redux"
import getVisibleTodos from "../../store/operation/getVisibeTodos"
import toggleTodo from "../../store/operation/toggleTodo"
import TodoList from "../todoList/TodoList"


const mapStateToTodoListProps = (
    state
) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        ) 
    }
}
const mapDispatchToTOdoListProps = (
    dispatch
) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTOdoListProps
)(TodoList)

export default VisibleTodoList;