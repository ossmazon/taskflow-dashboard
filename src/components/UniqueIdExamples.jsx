import { useId } from "react"

export default function UniqueIdExample(){
    
    const id = useId()
    
    return(

        <div className="p-6 bg-gray-800 text-white rounded-lg mt-6 max-w-md mx-auto">
            <h2 className="text-lg font-bold mb-3">
                useId Example
            </h2>
            <label
                htmlFor={`${id}-email`}
                className="block mb-2"
            >
                Email address
            </label>
            <input
            id={`${id}-email`}
            type = "email"
            className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
            placeholder="example@domain"
            />

        </div>
    )
}