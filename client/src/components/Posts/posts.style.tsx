import styled from "styled-components";

export const PostsWrapper: any = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${(props: any) => props.viewState === "list" ? "1fr" : "repeat(2, 1fr)"};
    grid-template-rows: auto;
    grid-gap: 3rem;
    padding: 0 12rem;

    @media screen and (max-width: 1000px) {
        padding: 0 4.5rem;
        grid-gap: 2.3rem;
    }

    @media screen and (max-width: 835px) {
        padding: 0;
        grid-gap: 1.4rem;
    }

    @media screen and (max-width: 445px) {
        grid-template-columns: 1fr;
    }
`;