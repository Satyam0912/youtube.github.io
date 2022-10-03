import React from 'react'
import logo from '../../assests/logo.webp';

const NavbarComponent = () => {
    return (
        <div className='navbarComponent'>
            <span className='navlogoSpan'>
                <img src={logo} alt="logo" className='logo' />
                <p className='h3'>YouTube™</p>
            </span>
            <span className='searchSpan'>
                <input type="text" />
                <button>search</button>
            </span>
        </div>
    )
}

export default NavbarComponent