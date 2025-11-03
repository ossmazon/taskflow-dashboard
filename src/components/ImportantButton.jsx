import React from "react";

const ImportantButton = React.memo(({onMarkImportant, taskId})=>{
    
    console.log(`Rendering button for task ${taskId}`)
    
    return (
        <button
        onClick={()=>onMarkImportant(taskId)}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-3 py-1 rounded"
        >
            Mark Important
        </button>
    )
})
export default ImportantButton