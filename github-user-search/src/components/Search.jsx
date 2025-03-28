import React, { useState } from 'react'


function Search() {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{text}</h1>
            <input type="text" placeholder='Search Github' onChange={(e) => { setText(e.target.value) }} style={{ padding: 10, marginRight: 20 }} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Search
