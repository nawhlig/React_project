import React from 'react';
import queryString from 'query-string';
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Layout from "Layout"
import content_fa_group from "content_fa_group"
import content_fa_info from "content_fa_info"
import content_fa_list from "content_fa_list"
import content_todo_group from "content_fa_group"
import content_todo_info from "content_todo_info"
import content_todo_list from "content_todo_list"


export default function Router() {
    return (<>
            <Switch>
                {/* <Route exact path="/" component={<Layout/>}/> */}
                <Route path="/fa/group" component={content_fa_group}/>
                <Route path="/fa/list" component={content_fa_list}/>
                <Route path="/fa" component={content_fa_info}/>
                <Route path="/todo/group" component={content_todo_group}/>
                <Route path="/todo/list" component={content_todo_list}/>
                <Route path="/todo" component={content_todo_info}/>
                <Route component={NoPage}/>
            </Switch>
        
        </>        
    )
}

// function Home({history, location, match})
// {
//     console.dir(location)
//     console.dir(match)
//     const click = () => {
//         history.push('/students')
//     }
//     return(
//         <div>
//             HOME
//             <button onClick={click}>Students</button>
//             HOME
//         </div>
//     )
// }
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