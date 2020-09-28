import React from 'react';
import queryString from 'query-string';
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Layout from "Layout"
import Page_fa_group from "./pages/Fa_group"
import Page_fa_list from "./pages/Fa_list"
import Page_todo_group from "./pages/Todo_group"
import Page_todo_list from "./pages/Todo_list"


export default function Router() {
    return (<>
            <Switch>
                {/* <Route exact path="/" component={<Layout/>}/> */}
                <Route path="/fa/group" component={Page_fa_group}/>
                <Route path="/fa/list" component={Page_fa_list}/>
                <Route path="/todo/group" component={Page_todo_group}/>
                <Route path="/todo/list" component={Page_todo_list}/>
                <Route component={NoPage}/>
            </Switch>
        
        </>        
    )
}

function NoPage({history, location, match})
{
    console.dir(location)
    console.dir(match)
    return(
        <div>
            NoPage
        </div>
    )
}