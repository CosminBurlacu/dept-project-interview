import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 6.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    padding: 0 10rem;

    @media screen and (max-width: 445px) {
        background-color: #ffffff;
        top: 0;
        padding: 2rem;
    }
`;

export const MenuWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    span {  
        margin-right: 1.2rem;
        width: 30px;
        height: 32px;
        font-family: Teko;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.78;
        letter-spacing: normal;
        color: #0e0e0e;
    }
    
    .icon {
        display: flex;
        flex-direction: column;

        &--primary {
            width: 2rem;
            height: 2px;
            margin: 2%.3rem 0 0.5rem 2.6rem;
            background-color: #0e0e0e;
        }

        &--secondary {
            margin-top: 1.1rem;
            width: 2rem;
            height: 2px;
            margin: 2%.3rem 0 0.5rem 2.6rem;
            background-color: #0e0e0e;
        }
    }
` 