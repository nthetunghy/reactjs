import React from 'react'
const TodoList = (props) => {
    const handleDelete = (index) => {
        let arr = [];
        for (let i = 0; i < props.todo.length; i++) {
            if (i !== index) {
                arr.push(props.todo[i]);
            }
        }
        props.setTodo(arr)
    }
    return props.todo.map((data, index) => {
        return <>
            <div className='todo' key={index}>
                {data.todo}
            </div>
            < button onClick={() => { handleDelete(index) }}> xoa</button >
        </>
    })
}





export default TodoList;