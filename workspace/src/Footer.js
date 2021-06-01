import React from 'react' 
import './App.css'; 
import {AppBar,Toolbar,IconButton,Button,Box,Grid,Typography,Icon} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { BuildOutlined } from '@material-ui/icons';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Timer3Icon from '@material-ui/icons/Timer3';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
export default function Footer(){
    const card=[1,2,3];
    return(<div >
<Grid container className="Foot" display="flex">
 <Box className="Footbox"  >
 <input value=""/>
 <Button variant="contained" color="Secondary" size="large"  className="Footboxer"><Icon><AttachMoneyIcon/></Icon></Button></Box>
 <Box className="Footbox"><Button variant="contained" color="Secondary" size="large" className="Footboxer"><Icon><Timer3Icon/></Icon></Button></Box>
 <Box className="Footbox"><Button  variant="contained" color="Secondary" size="large" className="Footboxer"><Icon><LocalAtmIcon/></Icon></Button>
</Box>
</Grid>
   </div>)
}