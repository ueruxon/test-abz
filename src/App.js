import React, { Fragment } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Main from './containers/main';
import Support from './containers/support';

import index from './index.scss';

export default () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/support" component={Support} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
};
