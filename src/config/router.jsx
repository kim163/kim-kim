import React from 'react';
import { Route } from 'react-router';
import Poss from '../component/app/index/index';
import ChildrenRt from '../component/app/router';

export default (
    <div>
        <Route path='/' component={Poss}>
            {ChildrenRt}
        </Route>
    </div>
);