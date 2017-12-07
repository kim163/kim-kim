import React from 'react';
import { Route , IndexRoute} from 'react-router';

import Index from './index/index';
import Home from './home/index';
import BettingCenter from './bettingCenter/index';

const enrollRt = (
    <div>
        <IndexRoute component={Home}  />
        <Route path='bc' component={BettingCenter}></Route>
    </div>
);

export default enrollRt;