import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import VisibleTodoList from "./components/VisibleTodoList";

const TodoApp = () => (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );

export default TodoApp