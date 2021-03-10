import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../../styles/ReusableStyles.style";

export const FooterWrapper = styled.div`
    width: 100%;
    height: 34rem;
    display: grid;
    grid-template-columns: 1fr 12rem;
    align-items: center;

    @media screen and (max-width: 885px) {
        grid-template-columns: 1fr 6.5rem;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 445px) {
        height: auto;
        grid-template-columns: 1fr;
    }
`;

export const MainFooter = styled.div`
    width: 100%;
    margin: 0 30px 0 0;
    padding: 98px 100px 111px 120px;
    background-color: #0e0e0e;
    padding: 9.8rem 12rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1200px) {
        padding: 9.8rem 4.7rem;
        margin: 0;
    }

    @media screen and (max-width: 445px) {
        padding: 2rem;
        margin: 0;
    }
`;

export const MainFooterUpper = styled.div`
    width: 100%;
    height: 7rem;
    border-bottom: 1.6px solid #3e3e3e;
    display: grid;
    grid-template-columns: 13rem 1fr 13rem;
    align-items: center;
    
    @media screen and (max-width: 445px) {
        grid-template-columns: 1fr 4.5rem;
        align-items: start;
        height: auto;
    }
`;

export const MainFooterBottom = styled.div`
    width: 100%;
    height: 7rem;
    display: grid;
    grid-template-areas: ". text copyright";
    grid-template-columns: 13rem 1fr 23rem;
    align-items: center;

    @media screen and (max-width: 445px) {
        height: auto;
        display: flex;
        flex-direction: column;
        height: auto;
        align-items: left;
        justify-content: flex-star
    }

    p {
        font-family: Arial;
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #808080;
    }
`;

export const TopReturn = styled.button`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;

    @media screen and (max-width: 800px) {
        display: none;
    }

    svg {
        fill: #1a18f7;
        font-size: 3.3rem;
    }

    span {
        font-family: Teko;
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.45;
        letter-spacing: normal;
        text-align: center;
        color: #1a18f7;
    }

`;
export const Logo = styled(NavLink)`
    text-decoration: none;
    font-weight: 700;
    font-size: 2.3rem;
    text-transform: uppercase;
    color: #ffffff;

    @media screen and (max-width: 445px) {
        display: none;
    }
`; 

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin: 0;

    @media screen and (max-width: 445px) {
        display: flex;
        flex-direction: column;
    }

    a {
        margin: 0;
        padding: 0;
        
        @media screen and (max-width: 445px) {
            margin: 0;
            font-size: 2.3rem;

            &:not(:first-child) {
                margin: 0;
            }
        }
    }
`;

export const IconLink = styled(NavLink)`
    text-decoration: none;
    margin: 0;
    padding: 0;

    &:not(:first-child) {
        margin-left: 3rem;
    }
    
    svg {
        fill: #ffffff;
        width: 14px;
        height: 14px;
    }
`;

export const TextWrapper = styled.div`
    grid-area: text;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    @media screen and (max-width: 445px) {
        width: 100%;
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;
        padding: 1.6rem 0;
    }
`;

export const Copyright = styled.div`
    grid-area: copyright;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 445px) {
        width: 100%;
        margin-top: 1.6rem;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

export const NavWrapper = styled(Wrapper)`
    @media screen and (max-width: 445px) {
        display: flex;
        flex-direction: column;

        a {
            margin: 0;
            margin-top: 1.2rem;

            &:not(:first-child) {
                margin: 0;
            }
        }
    }
`;