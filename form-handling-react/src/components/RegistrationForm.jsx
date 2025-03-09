import { useState } from 'react';

const RegistrationFrom = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [username]: value }));
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
                onChange={handleChange}
                placeholder='name'
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder='email'
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder='password'
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationFrom;