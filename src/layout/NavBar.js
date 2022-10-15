import {IconButton} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import {Stack} from "@mui/material";
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import {Link} from 'react-router-dom'
import { AiFillShopping } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
function App() {
  return (
    <div>
    <AppBar position='static'  color='secondary' className="nav">
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' className='NavHome'>
           <ShoppingCartIcon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow: 1}} className='NavHome'>
          DouikShop
       </Typography>
       <nav>
       <Stack direction='row' spacing={{ xs: 0, sm: 0, md: 4 }} className="nav">
       <div className="location-container">
        <ImLocation2 className="location-icon" />
        <div className="location">
          <h6>Delivery location</h6>
          <h6>Select your location</h6>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search For Products"
          size="49"
          className="input"
        ></input>
        <div className="iconsear">
          <AiOutlineSearch className="location-icon" />
        </div>
      </div>
      <div className="icons">
        <div className="heart">
          <AiFillHeart />
        </div>
        <div className="user">
          <AiOutlineUser />
        </div>
        <div className="shopp">
          <AiFillShopping />
        </div>
      </div>
       </Stack>
       </nav>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default App;
