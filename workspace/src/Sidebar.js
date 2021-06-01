import React from 'react' 
import './App.css'; 
import {AppBar,Toolbar,IconButton,Button,Box,Grid,Typography,Hidden} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import TransformIcon from '@material-ui/icons/Transform';
import Side from './Side'
export default function Sidebar(){
    return(<div >
        <Grid  className="side">
            <Grid item >
     <Side data="Profile" component={<AccountCircleIcon display="flex" size="small"  color="secondary" />}/>
     </Grid>
     
     <Grid item>  <Side data="Balance"   component={<MonetizationOnIcon size="small"  color="secondary" />} /></Grid>
     <Grid item> <Side data="Trades"  component={<TransformIcon size="small"   color="secondary"   />}/></Grid>
    <Grid item><Side data="Help"  component={<HelpIcon size="small"   color="secondary"   />}/></Grid>
     
     <Grid item><Side data="About"  component={<InfoIcon size="small"  color="secondary"/>}/></Grid>
     
</Grid >
    </div>)
}