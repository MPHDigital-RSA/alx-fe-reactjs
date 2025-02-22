import React from 'react'
import Navbar from './Navbar'

function Home() {
    return (
        <>
            <Navbar />
            <div style={{ padding: '20px', height: "100vh", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Welcome to Our Company</h1>
                <p>We are dedicated to delivering excellence in all our services.</p>
            </div>
        </>
    )
}

export default Home
