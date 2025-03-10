import { useState } from 'react';

const RegistrationFrom = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = (e) => {
        const { name, value } = e.target;
        setUsername(prevState => ({ ...prevState, [name]: value }));
    };

    const handleChangePassword = (e) => {
        const { name, value } = e.target;
        setPassword(prevState => ({ ...prevState, [name]: value }));
    };

    const handleChangeEmail = (e) => {
        const { name, value } = e.target;
        setEmail(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={username}
                onChange={handleChangeUsername}
                placeholder='name'
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChangeEmail}
                placeholder='email'
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChangePassword}
                placeholder='password'
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationFrom;