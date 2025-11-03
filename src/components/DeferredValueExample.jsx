import { useState, useDeferredValue } from "react";

export default function DeferredValueExample() {

    const [query, setQuery] = useState("")
    const deferredQuery = useDeferredValue(query)

    const items = Array.from({ length: 10000 }, (_, i) => `Items ${i + 1}`)
    const filtered = items.filter((item) =>
        item.toLowerCase().includes(deferredQuery.toLocaleLowerCase())
    )
    return (

        <div className="p-6 bg-gray-800 text-white rounded-lg mt-6 max-w-md mx-auto">
            <h2 className="text-lg font-bold mb-3">
                useDeferredValue Example
            </h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search items..."
                className=" w-full px-3 py-2 rounded bf-gray-700 text-white placeholder-gray-400 mb-3"
            />
            <p
                className="text-gray-400 mb-2 text-sm"
            >
                live query: <strong>{query}</strong>
            </p>
            <p
                className="text-gray-400 mb-2 text-sm"
            >
                deferredQuery <strong>{deferredQuery}</strong>
            </p>
            <ul
            className="h-40 overflow-y-auto bg-gray-700 rounded p-2 text-sm"
            >
                {filtered.map((item)=>(
                    <li
                        key={item}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}