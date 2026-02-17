import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const formSubmit = (e) => {
        e.preventDefault()

        dispatch(setQuery(text))

        setText('')
    }

    return (
        // The background wrapper (using the acid yellow from the reference image)
        <div className=" min-h-[50vh] flex items-center justify-center font-sans">

            <form onSubmit={(e) => formSubmit(e)} className="flex p-10 gap-6 items-center">
                {/* Neo-Brutalist Input */}
                <input
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    type="text"
                    placeholder="Search Anything......"
                    className="w-80 px-5 py-3 border-[3px] border-black text-black font-bold placeholder-gray-600 bg-white focus:outline-none shadow-[6px_6px_0px_0px_#000000] focus:translate-x-0.75 focus:translate-y-0.75 focus:shadow-[3px_3px_0px_0px_#000000] transition-all"
                />

                {/* Neo-Brutalist Button */}
                <button
                    type="submit"
                    className="px-8 py-3 border-[3px] cursor-pointer border-black bg-[#c4b5fd] text-black font-bold uppercase tracking-wide shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#000000] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all"
                >
                    Search
                </button>
            </form>

        </div>
    );
}

export default SearchBar
