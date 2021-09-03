import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Call from '@material-ui/icons/Call';
import Email from '@material-ui/icons/Email';
import LocationOn from '@material-ui/icons/LocationOn';
import WhatsApp from '@material-ui/icons/WhatsApp';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const useStyles=makeStyles((theme)=>({
    caro:{ 
        
      backgroundColor:'black',
      color:'white',
        padding:'50px',
       
    },
    back:{ 
        
      backgroundColor:'black',
      color:'gray',
        padding:'10px',
        fontSize:13
       
    }
}));




function Example(props){
    const classes=useStyles()
    return (
        
        <div className={classes.back}>
        <div className={classes.caro}>
        <Grid container spacing={8}>
        <Grid item lg={3} sm={12} md={3} >
         <h2 style={{textAlign:'left'}} data-aos={"fade-up"}> Atiefoo Express Company</h2>
        <Grid container spacing={0} style={{textAlign:'left'}} data-aos={"fade-up"}>
        
       
Atiefoo Express Company is a shipping
company that transports your goods from
China to Ghana. We believe in excellence
and we will give you just that
        </Grid>
        </Grid>
        
       
        <Grid item  lg={2} sm={12} md={2} >
    <h2 style={{textAlign:'left'}} data-aos={"fade-up"}> Quick Link</h2>
        
        
        <Grid container spacing={1} style={{textAlign:'center'}}>
        
        <Grid item xs={12} sm={12} md={12} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
       <Link to='./sea'>
        Sea Shipping
       </Link>
         </Grid>
        <Grid item xs={12} sm={12} md={12} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
        <Link to='./air'>
        Air Shipping
       </Link>
         </Grid>
        
        <Grid item xs={12} sm={12} md={12} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
       <Link to='./Warehousing'>
        Warehousing
       </Link>
         </Grid>
        <Grid item xs={12} sm={12} md={12} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
        <Link to='./about'>
        About Us
       </Link>
         </Grid>
        </Grid>
    
        </Grid>
        
         <Grid item  lg={4} sm={12} md={4} >
         <h2 style={{textAlign:'left'}} data-aos={"fade-up"}> Location</h2>
        <Grid container spacing={2}>
        
        <Grid item lg={1} sm={2} md={2} style={{textAlign:'left', paddingTop:'8px'}} data-aos={"fade-up"}>
        <LocationOn/>
         </Grid>
        <Grid item lg={11} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
          <a href="https://goo.gl/maps/kuEJyQHjEerrqNYR7"> China Air Cargo Warehouse Address
Tongtong Trade City Area A, Yuexiu District, Guangzhou</a>        
         </Grid>

<Grid item lg={1} sm={2} md={2} style={{textAlign:'left', paddingTop:'8px'}} data-aos={"fade-up"}>
        <LocationOn/>
         </Grid>
        <Grid item lg={11} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
          <a href="https://goo.gl/maps/kuEJyQHjEerrqNYR7"> China Sea Shipping Warehouse Address
Jiaxing Cang C9, Yuexi North Road, Baiyun District, Guangzhou.</a>        
         </Grid>
<Grid item lg={1} sm={2} md={2} style={{textAlign:'left', paddingTop:'8px'}} data-aos={"fade-up"}>
        <LocationOn/>
         </Grid>
        <Grid item lg={11} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
          <a href="https://goo.gl/maps/kuEJyQHjEerrqNYR7"> Accra Ghana Office
Accra Tudu behind Stanbic Bank.</a>        
         </Grid>
<Grid item lg={1} sm={2} md={2} style={{textAlign:'left', paddingTop:'8px'}} data-aos={"fade-up"}>
        <LocationOn/>
         </Grid>
        <Grid item lg={11} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
          <a href="https://goo.gl/maps/kuEJyQHjEerrqNYR7"> Kumasi Ghana Office
Asafo near Ahmadiyya Roundabout.</a>        
         </Grid>
        </Grid>
        
        </Grid>
        
        <Grid item  lg={3} sm={12} md={3} >
        <h2 style={{textAlign:'left'}} data-aos={"fade-up"}> Contact Us</h2>
        
        <Grid container spacing={2} style={{textAlign:'left'}}>
         
        
          <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
            CHINA <br/>
        <a href='tel:+86 18665696987'>+86 18665696987 </a><br/>
        <a href='tel:+86 13751834054'>+86 13751834054 </a><br/>
        <a href='tel:+86 15575168525'>+86 15575168525 </a>
         </Grid>
  <Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
            GHANA <br/>
        <a href='tel:+233 555433938'>+233 555433938 </a><br/>
        <a href='tel:+233 244614970'>+233 244614970 </a><br/>
        <a href='tel:+233 240025547'>+233 240025547 </a>
         </Grid>
        
        
      
        
        
        </Grid>
    
        </Grid>
        
        

      </Grid>
 </div>
     <p style={{textAlign:'center'}}>
      Copyright 2021 Atiefoo Express Company all rights reserved <br/>
      Powered by <a  href="http://ravinlead.com">RavinLead Tech Hub</a>
</p>
        </div>
        
   
        
        
    

    )
}


export default Example


