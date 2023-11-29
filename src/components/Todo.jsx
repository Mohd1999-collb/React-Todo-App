import { useState } from "react"
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


const Todo = () => {
    const [todos, setTodos] = useState([]);

    // Add todo item once user click add button
    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    console.log(todos)

    // Function to update items once user click on update button
    function updateTodo(todoId, newValue) {
        setTodos([...todos].map((item) => (item.id === todoId ? newValue : item)));
    }

    // Function to remove items once user click on remove icon
    function removeTodo(id) {
        setTodos([...todos].filter((item) => item.id !== id));
    }



    // Function to show items as complated once user click on completed task

    function completeTodo(id){
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id){
                todo.isComptete = !todo.isComptete;
            }
            return todo;
        })
        setTodos(updatedTodos)
    }
    return (
        <div>
            <h1 className="header">Add your plan for today?</h1>
            <TodoForm onSubmit={addTodo} />

            <TodoList

                todos={todos}
                updateTodo={updateTodo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
            />
        </div>
    )
}

export default Todo