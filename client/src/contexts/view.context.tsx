import React, { createContext, useState } from "react";

interface IInitial {
    viewState: string;
    toggleViewState?: (ev: any) => void;
}
const INITIAL_STATE: IInitial = {
    viewState: "grids",
};

export const ViewContext: React.Context<IInitial> = createContext(INITIAL_STATE);

export const ViewProvider = ({ children }: any) => {
    const [ viewState, setViewState ] = useState(INITIAL_STATE.viewState);
    const toggleViewState = (ev: any) => {
        setViewState(ev.target.getAttribute("data-view-type"));
    }
    return (
        <ViewContext.Provider value={{ viewState, toggleViewState }}>
            {children}
        </ViewContext.Provider>
    )
}