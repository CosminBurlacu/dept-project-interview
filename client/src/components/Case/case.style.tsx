import { motion } from "framer-motion";
import styled from "styled-components";

export const CaseWrapper: any = styled(motion.div)`
    width: 100%;
`;

export const ImageWrapper: any = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 33rem;

    img {
        width: 100%;
        position: absolute;
    }
`;

export const Source = styled.span`
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #939393;
  display: block;
  text-align: left;
`;

export const Title = styled.p`
  margin: 12px 276px 14px 0;
  font-family: Teko;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  color: #272727;
  text-align: left;
  display: block;
`; 

export const Access = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    a{
        font-family: Arial;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.14;
        letter-spacing: normal;
        color: #1a18f7;
        display: block;    
        text-align: left;
        text-transform: uppercase;
        text-decoration: none;
    }

    svg {
        fill: #1a18f7;
        margin-right: 0.7rem;
    }
`;