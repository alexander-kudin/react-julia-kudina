import React from 'react';
import { Route } from 'react-router';
 
export default (
    <Route>
	<Route path='/' />
    <Route path='/exhibitions' />
    <Route path='/contacts' />
    <Route path='/privacy' />
    <Route path='/collection/:seriesSlug' />
    <Route path='/artwork/:artworkSlug' />
    </Route>
);