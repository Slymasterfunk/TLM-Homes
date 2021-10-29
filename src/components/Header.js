import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='navbar'>
            <div className='flex'>
                <Link to='/' className='logo'>TLM HOMES</Link>
            </div>
        </div>
    )
}

export default Header
