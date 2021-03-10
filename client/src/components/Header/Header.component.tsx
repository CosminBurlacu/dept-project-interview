import React from 'react'
import Logo from '../Logo/Logo.component';
import { HeaderWrapper, MenuWrapper } from './header.style';

const MenuButton = () => {
    return (
        <MenuWrapper>
            <span>Menu</span>
            <div className="icon">
                <div className="icon--primary"></div>
                <div className="icon--secondary"></div>
            </div>
            <div className="clickable"></div>
        </MenuWrapper>
    )
}

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <Logo />
            <MenuButton />
        </HeaderWrapper>
    )
}

export default Header;
