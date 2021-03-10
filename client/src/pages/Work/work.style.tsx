import styled from "styled-components";

export const WorkWrapper = styled.div``;

export const BannerWrapper = styled.div`
    width: 100%;
    height: 98vh;
    padding: 28px 100px 80px 80px;
    background-color: #afafaf;
    background-size: cover;
    position: relative;

    @media screen and (max-width: 445px) {
      margin-bottom: 16rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 48vh;
      padding: 0;
    }
`;

export const TitleBanner = styled.h2`
    font-family: Teko;
    font-size: 40rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #0e0e0e;
    text-align: left;
    
    @media screen and (max-width: 445px) {
      font-size: 14rem;
    }
`;

export const ButtonBanner = styled.button`
  width: 170px;
  height: 50px;
  padding: 8px 0 12px;
  background-color: #0e0e0e;
  position: absolute;
  bottom: 4.5rem;
  right: 4.5rem;
  border: none;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 445px) {
    position: absolute;
    bottom: -7rem;
    width: 100%;
    left: 0;
  }
`;