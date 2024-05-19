import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [response, setResponse] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost/backend/api/contact.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => setResponse(data.message));
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
};

export default Contact;