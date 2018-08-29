import React, { Component } from 'react';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop'


class App extends Component {
  state={
    sidedroweropen:false,
  }
drawerstatechange= ()=>
{ this.setState((prevState)=>{
return {sidedroweropen:!prevState.sidedroweropen} }

);
};
Backdrophandel=()=>
{ this.setState({sidedroweropen:false})   }
  render() {
    
    let backdrop;
    if(this.state.sidedroweropen)
    {
     
      backdrop=<Backdrop  click={this.Backdrophandel}/>

      
    }
    return (
      <div style={{height:"100%"}}>
        <Toolbar Drawerclickhandel={this.drawerstatechange}/>
        <SideDrawer show={this.state.sidedroweropen}/>
        {backdrop}
        <main style={{marginTop:'64px'}}>
        <p>this is the page </p>
        </main>
      </div>
    );
  }
}

export default App;
