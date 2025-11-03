import { useState, useTransition } from "react"

export default function Transition() {

    const [input, setInput] = useState("")
    const [list, setList] = useState([])

    const [isPending, startTransition] = useTransition()
    const LIST_SIZE = 5000

    const handleChange = (e) => {

        const value = e.target.value
        setInput(value)

        startTransition(() => {

            const newList = []

            for (let i = 0; i < LIST_SIZE; i++) {
                newList.push(value)
            }
            setList(newList)
        })
    }
    return (
        <div className=" p-6 bg-gray-800 text-white rounded-lg mt-6 max-w-md mx-auto">
            <h2 className="text-lg font-bold mb-3">
                useTransition Example
            </h2>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Type something heavy..."
                className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 mb-3"
            />
            {isPending && (<p
                className="text-gray-400 mb-2 animated-pulse"
            >
                Rendering big list
            </p>)}
            <ul
            className="h-40 overflow-y-auto bg-gray-700 rounded p-2 text-sm"
            >
                {list.map((item, i)=>(
                    <li key={i}>{item}</li>
                ))}

            </ul>

        </div>
    )
}