//import React from 'react';
import React from 'react';

import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
//import './materialize.css';
import './style.css';



import Main from './home';
import Contact from './contactus';
import About from './aboutus';
import Air from './air';
import Sea from './sea';
import Warehouse from './warehouse';
import Payment from './payment';
import Services from './services';
//import Profile from './profile';
import Footer from './footer';
import Logo from './logo.jpg';
import Track from './track';
import Calculator from './calculator';
import clsx from 'clsx';
//import welcome from './img/air-con-compressor-not-working-hero-image.jpg';
//import logo from './img/user2.jpg';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu_ from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme)=>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
    displayer_small:{
        [theme.breakpoints.up('xs')]: {
        display:'flex',
        },
         [theme.breakpoints.up('sm')]: {
       display:'none',
        }
    },
    displayer_big:{
        [theme.breakpoints.up('xs')]: {
        display:'none',
        },
         [theme.breakpoints.up('sm')]: {
       display:'flex',
        }
    }
}));




const Menu = ()=>{
    
  const classes = useStyles();
  const [state, setState] = React.useState({top: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[<Link to="/">Home</Link>,<Link to="/services">Services</Link>,<Link to="/calculator">Frieght Calculator</Link>, <Link to="/track">Tracking</Link>, <Link to="/about">About Us</Link>, <Link to="/contact">Contact Us</Link>].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );


        
 
 console.log()     
        
        
        

    return(
        
        <Router>
        <nav className="white" role="navigation">
         <div className={classes.displayer_big}>
            <div className="nav-wrapper containe before" >
                <Link to="./" className="brand-logo logo-container"> <img src={Logo} className="logo_img" alt="" /></Link>
                <ul className="right hide-on-med-and-down">
        
                    
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/Track">Tracking</Link></li>
                    <li><Link to="/calculator">Frieght Calculator</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                
        
         </div>
         </div>
        
        <div>
       
        
        
        <div className={classes.displayer_small} style={{textAlign:'left', padding:10}}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><Menu_ /></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      
      <span style={{marginLeft:'24%'}}>
         <img src={Logo} className="logo_img_small" alt="" />
      </span>
    </div>
        
        
        
        </div>
        </nav>
        
        
       
        
        <Switch>
          <Route path="/services">
            <Services/>
          </Route> 
        
        <Route path="/about">
            <About />
          </Route>
        
        <Route path="/track">
            <Track />
          </Route> 

       <Route path="/calculator">
            <Calculator />
          </Route> 
       
       <Route path="/air">
            <Air />
          </Route> 
        <Route path="/sea">
            <Sea />
          </Route> 
        <Route path="/warehouse">
            <Warehouse />
          </Route> 
       <Route path="/payment">
            <Payment />
          </Route> 
      
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
        
        
        
        <Footer/>
        </Router>
        
        
        
        
    )
    
}



export default Menu;