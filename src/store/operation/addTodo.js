let nexteTodoId = 0;

const addTodo = (text) =>{
    return {
        type: 'ADD_TODO',
        id: nexteTodoId++,
        text
    };
};

export default addTodo;