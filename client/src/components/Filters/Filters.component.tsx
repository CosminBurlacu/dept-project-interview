import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { FiltersWrapper, GridButton, GridWrapper, Option, Select, SelectWrapper } from './filters.style';
import { FaList as IconList } from "react-icons/fa";
import { BsFillGridFill as IconGrids } from "react-icons/bs";
import { ViewContext } from '../../contexts/view.context';
import { Clickable } from '../../styles/ReusableStyles.style';
import { useDispatch } from 'react-redux';
import { readPosts } from '../../redux/actions/posts.action';

interface IOption {
    _id: string;
    name: string;
    value: string;
}

interface IFilterSelector {
    type: string;
    options: IOption[],
    onChange: (ev: ChangeEvent<HTMLSelectElement>) => void;
}
const FilterSelector: React.FC<IFilterSelector> = ({ type, options, onChange }) => {
    return (
        <SelectWrapper>
            <p>{type === "category" ? "Show me" : "In"}</p>
            <Select onChange={onChange} name={type}>
                {options.map(option => {
                    return <Option data-filter-name={option.name} key={option._id}>{option.value}</Option>
                })}
            </Select>
        </SelectWrapper>
    )
}

interface IGrids {
    type: string;
}
const GridToggler: React.FC<IGrids> = ({ type }) => {
    const { toggleViewState } = useContext(ViewContext);
    return (
        <GridButton>
            {type === "list" ? <IconList /> : <IconGrids />}
            <Clickable data-view-type={type} onClick={toggleViewState}></Clickable>
        </GridButton>
    )
}

const Filters: React.FC = () => {
    const filters = [
        {
            _id: "select1", type: "category", options: [
                {_id: "optionAllCategories", name: "All", value: "all"},
                { _id: "option1", name: "Technology", value: "technology" },
                { _id: "option2", name: "Design", value: "design" },
                { _id: "option3", name: "Advertising", value: "advertising" },
                { _id: "option4", name: "Commerce", value: "commerce" },
                { _id: "option5", name: "Media", value: "media" },
                { _id: "option6", name: "Branding", value: "branding" },
            ]
        },
        {
            _id: "select2", type: "industry", options: [
                {_id: "optionAll", name: "All", value: "all"},
                { _id: "option7", name: "B2B", value: "b2b" },
                { _id: "option8", name: "Education", value: "education" },
                { _id: "option9", name: "Energy & utilities", value: "energy_utilities" },
                { _id: "option10", name: "Fashion & lifestyle", value: "fashion_lifestyle" },
                { _id: "option11", name: "Retail & commerce", value: "retail_commerce" },
            ]
        },
    ];

    const [filter, setFilter] = useState<any>({
        category: "",
        industry: "",
    });

    const dispatch = useDispatch();
    const getFilter = (ev: ChangeEvent<HTMLSelectElement>) => {
        const name = ev.target.name;
        const value = ev.target.value;
        setFilter({ ...filter, [name]: value });
    }

    useEffect(() => {
        dispatch(readPosts(filter))
    }, [filter]);
    return (
        <FiltersWrapper>
            <GridWrapper>
                <GridToggler type="list" />
                <GridToggler type="grids" />
            </GridWrapper>
            {filters.map(select => {
                return <FilterSelector
                    key={select._id}
                    {...select}
                    onChange={getFilter}
                />
            })}
        </FiltersWrapper>
    )
}

export default Filters;
