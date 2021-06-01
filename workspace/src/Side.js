import React from 'react' 
import './App.css'; 
import Profile from './Profile';
import Main from './Main'
import {AppBar,Toolbar,IconButton,Button,Box,Grid,Typography, Container, Hidden} from '@material-ui/core'
import { BuildOutlined} from '@material-ui/icons';
import {BrowserRouter as Router ,Link,Route} from 'react-router-dom'
export default function Side(prop){
    return(<div >

        <Box className="Box contain" >
        <Box className="Icon" > {prop.component} </Box> 
     <Router>
    <Link to="/profile" className="Link">
              <Typography className="typo" color="secondary" variant="h6"> {prop.data}</Typography> 
         
            </Link> 
            <Route path="/profile" component={Profile } >
            </Route>
            </Router>
           
</Box>
          
    </div>)
}