import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ToolsUsed from './ToolsUsed'
import Services from './Services'
import reactModal from './reactModal'

class Routing extends Component{
render(){
    return(
        <Router>
            <Switch>
                <Route exact path= '/' component={ToolsUsed}/>
                <Route exact path='/Services' component={Services}/>
                <Route exact path= '/reactModal' component={reactModal}/>
            </Switch>
        </Router>
    )
}
}
export default Routing;