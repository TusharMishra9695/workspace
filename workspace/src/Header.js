import React,{useState} from 'react' 
import './App.css'; 
import {AppBar,Toolbar,IconButton,Button,Box,Grid,Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Router ,Link,Route} from 'react-router-dom'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

import App from './App'
import Sidebar from './Sidebar';
export default function Header(){
  var [dep,setdep]=useState("");
function getdata(e){
    eval(setdep(dep+e.target.value))
console.warn()
}
    return(<div>
        <AppBar position="relative" className="App" color="secondary">
            <Toolbar>
          
            <IconButton edge="start" color="inherit" aria-label="menu" className="Button1">

    <MenuIcon  style={{color:"white"}} />
   
    </IconButton>
 
    <Box className="but2">
      <Button color="primary" variant="contained" align="right" size="Medium" align="center">
      <Typography size="small">Amount</Typography>  
      </Button>
      </Box>

    <Box className="but" display="flex">
      <Button color="primary" variant="contained" align="right" size="Medium" align="center">
      <Typography >   Deposit</Typography>  
      < AddCircleOutlinedIcon/>
      </Button>
      </Box>
      
           
            </Toolbar>
        </AppBar>
    </div>)
 }

