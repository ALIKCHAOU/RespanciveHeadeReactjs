import React from 'react'
import  './Toolbar.css';

import Drawerbutton from '../SideDrawer/DrawerTaggelButton';
const Toolbar = props => (

        <header className="toolbar">
        <nav className="toolbar_Navigation">
            <div className='displaybuton'><Drawerbutton click={props.Drawerclickhandel}/></div>
            <div className="toolbarlogo"> <a href='/'>THE LOGO</a></div>
            <div className='spacer'/>
            <div className="toolbar-navigation-items">
                <ul>
                    <li><a href='/'>home</a></li>
                    <li><a href='/'>app</a></li>
                    <li><a href='/'>contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default Toolbar;