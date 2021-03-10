import styled, { css } from "styled-components";

export const ContactWrapper = styled.div`
    margin: 12rem;

    @media screen and (max-width: 835px) {
        margin: 7rem 0;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 645px) {
        flex-direction: column;
    }
`;

export const Title = styled.h2`
    width: 235px;
    font-family: Teko;
    font-size: 60px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #0e0e0e;
    text-align: left;
    display: block;
`;

export const FormContact = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3.3rem;
    margin-left: 12rem;
    grid-template-areas: "name email"
                         "message ."
                         "button .";

    @media screen and (max-width: 835px) {
        margin-left: 3.5rem;
        display: flex;
        flex-direction: column;
        grid-gap: 0;
    }

    @media screen and (max-width: 645px) {
        margin-left: 0;
        margin-top: 4.7rem;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    position: relative;

    @media screen and (max-width: 835px) {
        &:not(:first-child) {
            margin-top: 1.2rem;
        }
    }

    .error {
        position: absolute;
        bottom: -2.3rem;
        left: 0;
        color: orangered;
    }
`;

export const Input: any = styled.input`
    border: none;
    border-bottom: 1.2px solid darkgrey;
    outline: none;
    height: 4.2rem;

    ${(props: any) =>
        props.error &&
        css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px, rgb(251, 178, 174) 0px 0px
            0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`;


export const Label = styled.label`
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    color: #0e0e0e;
    text-transform: uppercase;
`;

export const Submit = styled.button`
    padding: 2.3rem 3.3rem;
    border: none;
    cursor: pointer;
    background-color: #1a18f7;
    color: #ffffff;
    text-transform: uppercase;
    padding: 8px 51px 12px;
    width: 14rem;
    height: 5rem;
    grid-area: button;
    outline: none;

    @media screen and (max-width: 835px) {
        margin-top: 1.2rem;
    }
`;

export const Textarea = styled.textarea`
    border: none;
    border-bottom: 1.2px solid darkgrey;
    outline: none;
    min-height: 9rem;
    max-height: 12rem;
`;