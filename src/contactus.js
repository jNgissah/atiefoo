import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Image from './img/Engaging-an-AC-Compressor-Clutch.jpg'
import {makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Call from '@material-ui/icons/Call';
import Email from '@material-ui/icons/Email';
import LocationOn from '@material-ui/icons/LocationOn';
import WhatsApp from '@material-ui/icons/WhatsApp';
import Para1 from './img/atiefoo/woman-wearing-headphones-as-call-center-staff-with-hand-open.jpg';
import Para2 from './img/contact2.jpg';
import Leave from './leave'
import AOS from 'aos';
import "aos/dist/aos.css";



const parallaxside={
    backgroundColor:"#63d471",
    backgroundImage: "linear-gradient(315deg, #2FA71B 0%, #0F6300 74%)",
    padding:30,
    color:"white",
    textAlign:"left"
    
    
 
    
}


const useStyles=makeStyles((theme)=>({
    mainname:{
        [theme.breakpoints.down('lg')]: {
     fontSize:40
    },
        [theme.breakpoints.down('sm')]: {
     fontSize:30
    }
    },
    mainwrite:{
         [theme.breakpoints.down('lg')]: {
     fontSize:19
    },
        [theme.breakpoints.down('sm')]: {
     fontSize:14
    }
    },
 
     root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '70%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
    
    
    
    caro:{ 
        
        backgroundRepeat: 'no-repeat', 
        backgroundImage: `url(${Image})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        textAlign:'left',
        paddingLeft:'8%',
        [theme.breakpoints.up('xs')]: {
        height:240,
            paddingTop: '15%'
    },   
      [theme.breakpoints.up('sm')]: {
      height:550,
          paddingTop: '15%'
         
    }
    }
}));





function Example(props){
      AOS.init({
    // initialise with other settings
    duration : 700
  });
//    const classes = useStyles();
    
    var items = [
        {
            name: "GET IN TOUCH",
            image: Para1,
            description: "Need any help? Just send us a message via WhatsApp, email or give us call"
        }
    ]


    return (
        <div>
        <Carousel swipe={true} touch={true} animation={"slide"} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>

    
 
            <h2 className="MuiTypography-h4"  style={{marginTop:40}} data-aos={"fade-up"}>Get In Touch</h2>
        <p className="MuiTypography-h6" style={{marginTop:'-29px'}}></p>
<br/>
<br/>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15852.715187970067!2d-1.6076919!3d6.6247003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7484da3476fe47a!2sJsk%20Renewable%20Energy%20Ltd!5e0!3m2!1sen!2sgh!4v1626316766707!5m2!1sen!2sgh" width="100%" height="400" style={{border:0, allowfullscreen:""}} title="location"loading="lazy"></iframe>
<br/>
<br/>

        <Grid container spacing={0} >
        <Grid item xs={12} sm={6} md={6}  >

        <h2 className="MuiTypography-h4" style={{marginTop:'20px',textAlign:'center'}} data-aos={"fade-up"}>Our Contact</h2>

           <Grid item  xs={12} sm={12} md={12} >
        
        <Grid container spacing={1} style={{textAlign:'center'}}>
         

    <Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        <Call/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
            CHINA <br/>
        <a href='tel:+86 18665696987'>+86 18665696987 </a><br/>
        <a href='tel:+86 13751834054'>+86 13751834054 </a><br/>
        <a href='tel:+86 15575168525'>+86 15575168525 </a>
         </Grid>
  <Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        <Call/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
            GHANA <br/>
        <a href='tel:+233 555433938'>+233 555433938 </a><br/>
        <a href='tel:+233 244614970'>+233 244614970 </a><br/>
        <a href='tel:+233 240025547'>+233 240025547 </a>
         </Grid>

<Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}}data-aos={"fade-up"}>
        <Email/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}}data-aos={"fade-up"}>
        <a href='mailto:support@atiefooexpress.com'>support@atiefooexpress.com</a>
         </Grid>


<Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        <WhatsApp/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
        <a href="https://wa.me/+233546330506/?text=Hi there, Welcome to JSK Renewable Energy. Please send your message"> WhatsApp Chat</a>
         </Grid>

<Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        <LocationOn/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
          <a href="https://goo.gl/maps/kuEJyQHjEerrqNYR7"> China Air Cargo Warehouse Address
Tongtong Trade City Area A, Yuexiu District, Guangzhou</a>        
         </Grid>

<Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        <LocationOn/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
          <a href="https://goo.gl/maps/kuEJyQHjEerrqNYR7"> China Sea Shipping Warehouse Address
Jiaxing Cang C9, Yuexi North Road, Baiyun District, Guangzhou.</a>        
         </Grid>
<Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        <LocationOn/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
          <a href="https://goo.gl/maps/kuEJyQHjEerrqNYR7"> Accra Ghana Office
Accra Tudu behind Stanbic Bank.</a>        
         </Grid>
<Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        <LocationOn/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
          <a href="https://goo.gl/maps/kuEJyQHjEerrqNYR7"> Kumasi Ghana Office
Asafo near Ahmadiyya Roundabout.</a>        
         </Grid>

        </Grid>
    
        </Grid>
        
        
         </Grid> 

        <Grid item xs={12} sm={6} md={6} style={{textAlign:'left', padding:15}}data-aos={"fade-up"}>

        <h3 className="MuiTypography-h4" style={{marginTop:'10px',textAlign:'left'}} data-aos={"fade-up"}>Leave A Message</h3>
        <p className="MuiTypography-h6" style={{marginTop:'-29px'}}></p>
<br/>
            <p style={{marginBottom:80}}>
           <Leave/>
            </p>
            
            
            
         </Grid>
        </Grid>
            <br/>
            <br/>
            <br/>
            <br/>



    </div>

      
    )
}

function Item(props)



{
    const classes=useStyles()
    return (
        
        <div className={classes.caro} style={{backgroundImage: `url(${props.item.image})`}}>
            <h1 style={{color:"black",  marginTop:"0%", width:"300px" }} className={classes.mainname} data-aos={"flip-right"}><span>{props.item.name} </span></h1>
            <p style={{ color:"black", marginTop:"-20px", width:"240px"}} className={classes.mainwrite} data-aos={"zoom-in"}>{props.item.description}</p>

          
        
        
        </div>
        
     
     

    )
}


export default Example


