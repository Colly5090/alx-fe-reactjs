import React, { useState } from 'react'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            setError("All fields are required!")
        } else {
            setError('')
            console.log('Form Submitted', formData)
            setFormData({
                username: '',
                email: '',
                password: '',
            });
        }
    }
    return (
        <div>
            <h2>Register</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={formData.username}
                placeholder='Username' 
                name='username'
                onChange={handleChange}/>

                <input 
                type="email" 
                value={formData.email}
                name='email'
                placeholder='Email Address'
                onChange={handleChange}/>

                <input 
                type="password"
                value={formData.password} 
                name='password'
                placeholder='Password'
                onChange={handleChange}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegistrationForm;