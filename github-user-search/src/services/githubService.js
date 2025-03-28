import axios from 'axios';
import useGithubStore from '../stores/useGithubStore'

const fetchUserData = async (user) => {
    axios(`https://api.github.com/users/${user}`)
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err.message)
    })
};

export default fetchUserData