import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost/backend/api/services.php')
            .then(response => response.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <h1>Our Services</h1>
            <ul>
                {services.map(service => (
                    <li key={service.id}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;