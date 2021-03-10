import React from 'react'
import { Link } from '../../styles/ReusableStyles.style';
import { FooterWrapper, Logo, MainFooter, MainFooterBottom, MainFooterUpper, SocialMedia, TopReturn, IconLink, TextWrapper, Copyright, NavWrapper } from './footer.style';
import {
    FaFacebookF as IconFacebook,
    FaTwitter as IconTwitter,
} from "react-icons/fa";
import { 
    AiFillInstagram as IconInstagram,
    AiOutlineArrowUp as IconArrow, 
} from "react-icons/ai";

const Footer: React.FC = () => {
    const navigation = [
        {_id: "footerNav", name: "Home", url: "/"},
        {_id: "footerNav1", name: "Service", url: "/service"},
        {_id: "footerNav2", name: "Stories", url: "/stories"},
        {_id: "footerNav3", name: "About", url: "/about"},
        {_id: "footerNav4", name: "Careers", url: "/careers"},
        {_id: "footerNav5", name: "Contact", url: "/contact"}
    ];

    const socialMedia = [
        {_id: "socialMediaFacebook", icon: <IconFacebook />, url: "www.facebook.com"},
        {_id: "socialMediaTwitter", icon: <IconTwitter />, url: "www.twitter.com"},
        {_id: "socialMediaInstagram", icon: <IconInstagram />, url: "www.instagram.com"}
    ];
    return (
        <FooterWrapper>
            <MainFooter>
                <MainFooterUpper>
                    <Logo to="/">Dept</Logo>
                    <NavWrapper>
                        {navigation.map(nav => {
                            return <Link to={nav.url} key={nav._id}>{nav.name}</Link>
                        })}
                    </NavWrapper>
                    <SocialMedia>
                        {socialMedia.map(sm => {
                            return <IconLink to={sm.url} key={sm._id}>{sm.icon}</IconLink>
                        })}
                    </SocialMedia>
                </MainFooterUpper>

                <MainFooterBottom>
                    <TextWrapper>
                        <p>Chamber of Commerce: 63464101</p>
                        <p>VAT: NL 8552.47.502.B01</p>
                        <p>Terms and conditions</p>
                    </TextWrapper>
                    <Copyright>
                        <p>© 2018 Dept Agency</p>
                    </Copyright>
                </MainFooterBottom>
            </MainFooter>

            <TopReturn>
                <IconArrow />
                <span>Top</span>
            </TopReturn>
        </FooterWrapper>
    )
}

export default Footer;
