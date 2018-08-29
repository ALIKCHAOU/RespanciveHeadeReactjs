import React from 'react'
import './SideDrawer.css'
const SideDrawer=props=>{
    let ClasssDrawer='Sidedrawer';
    if(props.show){
        ClasssDrawer='Sidedrawer open';
        console.log(ClasssDrawer)
    }
return (<nav className={ClasssDrawer} >
<ul>
   <li> <a href='/'>home</a></li>
   <li> <a href='/'>app</a></li>
   <li> <a href='/'>contact</a></li>
    </ul>
</nav>);

};
export default SideDrawer;