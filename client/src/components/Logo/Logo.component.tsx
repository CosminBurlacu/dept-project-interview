import React from 'react'
import { NavLink } from 'react-router-dom';
import { LogoWrapper } from './logo.style';

const Logo: React.FC = () => {
    return (
        <LogoWrapper>
            <NavLink to="/">Dept</NavLink>
        </LogoWrapper>
    )
}

export default Logo;
