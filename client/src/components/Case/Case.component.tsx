import React from 'react'
import { NavLink } from 'react-router-dom';
import { fadeAndSlide } from '../../styles/animations';
import { useScroll } from '../../utils/useScroll';
import { Access, CaseWrapper, ImageWrapper, Source, Title } from './case.style';
import { AiOutlineCaretRight as IconArrow } from "react-icons/ai";
import { BASE_URL_IMAGE } from '../../utils/data';

interface ICase {
    _id?: string;
    name: string;
    source: string;
    image: string;
    element?: any;
}
const Case: React.FC<ICase> = ({ name, source, image }) => {
    const [ element, controls ] = useScroll();

    return (
        <CaseWrapper ref={element} variants={fadeAndSlide} animate={controls} initial="hidden">
            <ImageWrapper>
                <img src={`${BASE_URL_IMAGE}${image}`} alt={`${name}`} /> 
            </ImageWrapper>
            <div className="contentWrapper">
                <Source>{source}</Source>
                <Title>{name}</Title>
                <Access>
                    <IconArrow />
                    <NavLink to="/">View case</NavLink>
                </Access>
            </div>
        </CaseWrapper>
    )
}

export default Case;
