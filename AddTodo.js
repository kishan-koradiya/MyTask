import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleAddClick = () => {
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddClick}>Add</button>
        </div>
    );
};

export default AddTodo;
