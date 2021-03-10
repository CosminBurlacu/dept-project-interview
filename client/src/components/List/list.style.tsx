import { motion } from "framer-motion";
import styled from "styled-components";
import { Wrapper } from "../../styles/ReusableStyles.style";

export const ListWrapper: any = styled(motion.div)`
    width: 100%;
    height: 4.7rem;
    border-radius: 0.47rem;
    display: grid;
    grid-template-columns: 7rem  12rem 1fr 12rem 1fr 12rem;;
    align-items: center;
    padding: 0.47rem;
    background-color: #f7f7f7;
    grid-gap: 1.2rem;
`;

export const ImageWrapper = styled.div`
    height: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 0.47rem;

    img {
        width: auto;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const ListContentWrapper = styled.div`

`;

export const ListElementWrapper = styled(Wrapper)`
    font-size: 1.3rem;
    font-weight: 700;

    a {
        color: #1a18f7;
        text-decoration: none;
    }
`;