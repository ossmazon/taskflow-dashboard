import { useRef } from "react";

export default function FocusInput() {

    const inputRef = useRef(null)

    const handleFocus = () => {
        inputRef.current.focus()
    }

    return (
        <div className="flex flex-col gap-3 p-4 bg-gray-800 text-white rounded-lg mt-6 max-w-md mx-auto">
            <h2 className="text-lg font-bold ">
                Focus Input Example
            </h2>
            <div className="flex items-center gap-3">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Click the button to focus me"
                    className="flex-1 px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
                >
                </input>
                <button
                    onClick={handleFocus}
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded font-semibold"
                >
                    Focus Input
                </button>
            </div>

        </div>
    )
}