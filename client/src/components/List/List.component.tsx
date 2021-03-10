import React from 'react'
import { NavLink } from 'react-router-dom';
import { fadeAndSlideLists } from '../../styles/animations';
import { BASE_URL_IMAGE } from '../../utils/data';
import { useScroll } from '../../utils/useScroll';
import { ListWrapper, ImageWrapper, ListElementWrapper } from './list.style';

interface IList {
    _id?: string;
    name: string;
    source: string;
    image: string;
    category: string;
    industry: string; 
    element?: any;
}
const List: React.FC<IList> = ({ name, source, category, industry, image }) => {
    const [ element, controls ] = useScroll();

    return (
        <ListWrapper ref={element} variants={fadeAndSlideLists} animate={controls} initial="hidden">
            <ImageWrapper>
                <img src={`${BASE_URL_IMAGE}${image}`} alt={name} />
            </ImageWrapper>
            <ListElementWrapper>
                {source}
            </ListElementWrapper>
            <ListElementWrapper>
                {name}
            </ListElementWrapper>
            <ListElementWrapper>
                {category}
            </ListElementWrapper>
            <ListElementWrapper>
                {industry}
            </ListElementWrapper>
            <ListElementWrapper>
                <NavLink to="/">View case</NavLink>
            </ListElementWrapper>
        </ListWrapper>
    )
}

export default List;
