import React, { useState } from 'react'
import fetchUserData from '../services/githubService'
// import useGithubStore from '../stores/useGithubStore'


function Search() {
    const [text, setText] = useState("");
    const [currrentUser, setCurrentUser] = useState("0");

    // const testData = useGithubStore((state) => state.userData);

    const handleSubmit = (e) => {
        //preventing the default behavior of the form
        e.preventDefault();
        //fetching the user from the API call
        const user = fetchUserData(text);

        // setCurrentUser(user);

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{currrentUser.id}</h1>
            <input type="text" placeholder='Search Github' onChange={(e) => { setText(e.target.value) }} style={{ padding: 10, marginRight: 20 }} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Search
