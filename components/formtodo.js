import React, { useState } from "react";

const Form = ({lol}) => {

    const [newTodo, setNewTodo] = useState('')
    const [warning, setWarning] = useState(false)

    const handleTodo = (e) => {
        if(newTodo) {
            e.preventDefault()
            setWarning(false)
            setNewTodo('')
            lol(newTodo)
        } else {
            e.preventDefault()
            setWarning(true)
        }
       
    }
    
    return(
        <div>
            {warning && <p className="text-white text-lg bg-red-700 p-2">Enter the subject</p> }
            <form className="mt-8 flex flex-col" method="post" onSubmit={handleTodo}>
                <input type="text" value={newTodo} className="h-12" placeholder="Nouveau sujet" onChange={(e) => setNewTodo(e.target.value)} />            
                <input type="submit" value="Submit" className="bg-green-700 text-white text-sm p-2 cursor-pointer" />
            </form>
        </div>  
    )
}

export default Form