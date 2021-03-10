import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../components/Header/Header.component';
import Work from '../pages/Work/Work.page';
import { PageWrapper } from '../styles/ReusableStyles.style';

const Routers: React.FC = () => {
    return (
        <>
            <PageWrapper>
                <Header />
                <Switch>
                    <Route exact={true} path="/" component={Work} />
                </Switch>
            </PageWrapper>
        </>
    )
}

export default Routers;
