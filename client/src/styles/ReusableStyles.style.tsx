import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PageWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 2rem 2rem 0 2rem;
`;

export const Wrapper = styled.div`
    width: auto;
    height: auto;
`;

export const Link = styled(NavLink)`
    text-transform: uppercase;
    color: #ffffff;
    font-family: Teko;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: normal;
    text-decoration: none;

    &:not(:first-child) {
        margin:  5px 5px 22px;
    }
`;

export const Clickable = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
`;