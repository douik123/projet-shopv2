import {IconButton} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import {Stack} from "@mui/material";
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import {Link} from 'react-router-dom';
import Menu from './menu.js';
function App() {
  return (
    <div>
    <AppBar position='static'  className="navv">
      <Toolbar>
        <Typography variant='h6' component='div' sx={{flexGrow: 1}} className='NavHome'>
        <Menu/>
       </Typography>
       <nav >
       <Stack direction='row' spacing={{ xs: 0, sm: 0, md: 2}} className="navv">
        
       <div className='NavHome'><Button color='inherit'><Link  to='/'>Home</Link></Button></div>
       <div className='NavHome'><Button color='inherit' ><Link to='/contact'>Contacts</Link></Button></div>
       <div className='NavHome'><Button color='inherit' ><Link to='/AboutUs'>About Us</Link></Button></div>
       </Stack>
       </nav>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default App;
