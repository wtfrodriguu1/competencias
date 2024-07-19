import React, { useState } from "react";

function Input({ addSkill }) {
    const [skill, setSkill] = useState("");

    return (
        <div>
            <input 
                type="text"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
            />
            <button onClick={addSkill(skill)}>Adicionar</button>
        </div>
    );
};


export default Input;