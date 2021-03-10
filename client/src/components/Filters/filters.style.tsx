import styled from "styled-components";

export const FiltersWrapper = styled.div`
    width: 100%;
    height: 4.7rem;
    padding: 6.5rem 12rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 445px) {
        padding: 0;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 1.6rem;
    }

    @media screen and (max-width: 800px) {
        padding: 6.5rem 0rem;
    }

    @media screen and (max-width: 645px) {
        display: flex;
        flex-direction: column;
        height: auto;
        justify-content: flex-end;
        align-items: flex-end;
    }

    @media screen and (max-width: 445px) {
        padding: 0 0rem 6.5rem 0;
    }
`;

export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    &:not(:first-child) {
        margin-left: 1.2rem;
    }

    p {
        color: #a3a3a3;
    }
    
    p, 
    select {
        margin: 0 11px 0 0;
        font-family: Teko;
        font-size: 30px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.06;
        letter-spacing: normal;
    }
`;

export const Select = styled.select`
    font-size: 1.6em;
    cursor: pointer;
    border: none;
    border-bottom: 1.2px solid #0e0e0e;
    border-radius: 0;
    outline: none;
`; 

export const Option = styled.option`
    font-size: 1.6rem;
`;

export const GridWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-right: 1.6px solid lightgrey;
    padding-left: 1.2rem;
    padding-right: 1.2rem;

    button {
        position: relative;
    }
`;

export const GridButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    outline: none;

    &:not(:first-child) {
        margin-left: 1.2rem;
    }

    svg {
        font-size: 1.6rem;
    }
`;