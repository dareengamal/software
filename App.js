import React from "react";
import './App.css';
import { MessageBox } from 'element-react';
//import {TextField} from '@material-ui/core'

const App =() =>{

    return(
        <div>
            <h1> check your order status here...
            </h1>
            <h1>order number :</h1> 
           <input type ="text" />
           <button > SHOW STATUS</button>
           <button > CANCEL MY ORDER </button>
            
           <Button type="text" onClick={this.onClick.bind(this)}>Click to open the Message Box</Button>
           onClick() {}
  
            
        </div>
    );
}

export default App;