import React from "react";

const Greeting = (prop) => {

    return (
        <>
        <h1>
            Hello {prop.studName}
        </h1>
        <p>
            You have got {prop.marks} marks.
        </p>
        <button>Click Me</button>
        
        
        
    
        </>
    )
}
export default Greeting