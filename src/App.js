import React, { Fragment } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Main from './containers/main';
import Support from './containers/support';

import styles from './index.scss';

export default () => {
    return (
        <BrowserRouter>
            <div className={styles.mainWrapper}>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/support" component={Support} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};
