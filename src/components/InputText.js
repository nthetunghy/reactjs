import React, { useState } from "react";
const InputText = ({ addTodo }) => {
    const [data, setData] = useState("");
    const handleChange = (e) => {
        setData(e.target.value);
    };
    return <div className="input_text_container">
        <input type="text" className="input_text" onChange={handleChange}></input>
        <button onClick={() => addTodo(data)}>them</button>
    </div >
}
export default InputText;