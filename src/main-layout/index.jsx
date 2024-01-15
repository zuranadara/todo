import React, { useState } from "react";
import add from '../photos/add.png'
import check from '../photos/check.png'
import trash from '../photos/trash.png'
import circle from '../photos/circle.png'
import './index.css'

export const MainLayout = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() === '') {
            return; 
        }
        setTodos([...todos, { text: todo, completed: false }]);
        setTodo(''); 
    };

    const handleCheckboxChange = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    return (

<div className="main-todo">
    <form className="form-todo" onSubmit={handleSubmit}>
        <div className="input-container">
            <input
                type="text"
                placeholder="Note"
                className="input-text"
                value={todo}
                onChange={handleInputChange}
            />
        </div>
        <div><button className="add-text" type="submit"><img src={add} alt="Add Icon" /></button></div>
    </form>

    <div className="new-todo">
        <div className="ul-form">
            {todos.map((item, index) => (
                <div key={index} className={`todo-item ${item.completed ? 'completed' : ''}`}>
                    <div className="trash">
                        <div className="text">
                            <span>{item.text}</span>
                        </div>
                        <div>
                            <img 
                                src={item.completed ? 'path-to-completed-circle-image' : 'path-to-incomplete-circle-image'}
                                className="check-box"
                                onClick={() => handleCheckboxChange(index)}
                            />
                        </div>
                        <div>
                            <img
                                src={trash}
                                alt="Delete Icon"
                                className="delete-icon"
                                onClick={() => handleDeleteTodo(index)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
    );
};

