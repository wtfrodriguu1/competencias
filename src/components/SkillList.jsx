import React from "react";

function SkillList({ values }) {
    return (
        <ul>
            {values.map(value => (
                <div>
                    { value.name }
                </div>
            ))}
        </ul>
    );
}

export default SkillList;