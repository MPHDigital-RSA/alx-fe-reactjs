import React from 'react'
import Navbar from './Navbar'

function Services() {
    return (
        <>
            <Navbar />
            <div style={{ padding: '20px', height: "100vh", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Our Services</h1>
                <ul>
                    <li>Technology Consulting</li>
                    <li>Market Analysis</li>
                    <li>Product Development</li>
                </ul>
            </div>
        </>
    )
}

export default Services
