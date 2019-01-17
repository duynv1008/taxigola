import React,{Component} from 'react';
import {Router,Scene} from 'react-native-router-flux'

import Splash from './splash';
import Login from './login';

const App=()=>{
    return(
        <Router>
            <Scene key="root">
            <Scene key="Splash" component={Splash} title="Splash" hideNavBar={true} initial={true}/>
            <Scene key="Login" component={Login} title="Login" hideNavBar={true}/>
            </Scene>
        </Router>
    )
}

export default App;