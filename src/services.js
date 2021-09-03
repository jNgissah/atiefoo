import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Image from './img/Engaging-an-AC-Compressor-Clutch.jpg'
import {makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Power from './img/atiefoo/img1.jpg';
import Storage from './img/atiefoo/img4.jpg';
import Warehouse from './img/atiefoo/img3.jpg';
import Payment from './img/atiefoo/img6.jpg';
import Ship from './img/atiefoo/aerial-view-container-cargo-ship-sea1.jpg';
import Power1 from './img/power.jpg';
import Grid from '@material-ui/core/Grid';
import { Parallax } from "react-parallax";
import Para1 from './img/atiefoo/aerial-view-container-cargo-ship-sea.jpg';
import Para2 from './img/slide2.jpeg';
import Para3 from './img/img/loader3.jpg';
import AOS from 'aos';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import "aos/dist/aos.css";


const insideStyles = {
//  background: "white",
  padding: "0%",
  position: "absolute",
  top: "49%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontSize:"272%",
  color:"white",
    textAlign:"center",
};    

const parallaxside={
     backgroundColor:"#63d471",
 backgroundImage: "linear-gradient(315deg, #2FA71B 0%, #0F6300 74%)",
    padding:20,
    color:"white",
    textAlign:"left"
    
    
 
    
}


const useStyles=makeStyles((theme)=>({
    
    mainname:{
        [theme.breakpoints.down('lg')]: {
     fontSize:40,
            marginTop:"17%"
    },
        [theme.breakpoints.down('sm')]: {
     fontSize:28,
           marginTop:"29%"
    }
    },
    mainwrite:{
         [theme.breakpoints.down('lg')]: {
     fontSize:20
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
        paddingLeft:'10%',
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





function Example(props)

{
     AOS.init({
    // initialise with other settings
    duration : 700
  });
//    const classes = useStyles();
    
  var items = [
        {
            name: "We offer quick & powerful shipping solutions",
            image: Para1,
            description: ""
        }
    ]

    return (
        <div>
        <Carousel swipe={true} touch={true} animation={"slide"} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>


<div style={{marginTop:"-32px", zIndex:'9'}}>    
 

    
    
    
        <Grid container spacing={0} >
      
<Grid item xs={12} sm={5} md={5} style={{backgroundColor:"#FABB1E", color:"white", textAlign:"left"}}>

          <h1  style={{marginTop:"20%",padding:20}} data-aos="fade-up">Air Shipping
</h1>
            <p style={{padding:20,marginTop:'-29px', fontSize:'20px'}} data-aos="fade-up">
            We'll deliver your goods by air and you will receive your goods within 6 to 14 days after shipment
<br/>
<br/>
<Link to="./air">
    <Button style={{backgroundColor:'#3B4954', color:'white'}}>
    Read More
    </Button>
</Link>
            </p>


         </Grid> 


  
        <Grid item xs={12} sm={7} md={7} style={{textAlign:'left'}}>

            <img src={Power}  width='100%' height='100%'/>
            
         </Grid>


        </Grid>









        <Grid container spacing={0} >
      

        <Grid item xs={12} sm={7} md={7} style={{textAlign:'left'}}>

            <img src={Ship} width='100%' height='100%'/>
            
         </Grid>



<Grid item xs={12} sm={5} md={5} style={{marginTop:'-20px',textAlign:'left', backgroundColor:'#3B4954', color:'white'}}>

           <h1  style={{marginTop:"20%",padding:20}} data-aos="fade-up">Sea Shipping

</h1>
            <p style={{padding:20,marginTop:'-29px', fontSize:'20px'}} data-aos="fade-up">
           We'll deliver your goods by sea and you will receive your goods within 40 to 55  days after shipment
<br/>
<br/>
<Link to="./sea">
    <Button style={{backgroundColor:'#FABB1E', color:'white'}}>
    Read More
    </Button>
</Link>
            </p>
         </Grid> 


        </Grid>









    
        <Grid container spacing={0} >
      
<Grid item xs={12} sm={5} md={5} style={{backgroundColor:"#FABB1E", color:"white", textAlign:"left"}}>

          <h1  style={{marginTop:"20%",padding:20}} data-aos="fade-up">Warehousing
</h1>
            <p style={{padding:20,marginTop:'-29px', fontSize:'20px'}} data-aos="fade-up">
           We receive and deliver your goods into our state of the art warehouse. You are assured of the safety of your goods
<br/>
<br/>
<Link to="./warehouse">
    <Button style={{backgroundColor:'#3B4954', color:'white'}}>
    Read More
    </Button>
</Link>
            </p>
         </Grid> 


  
        <Grid item xs={12} sm={7} md={7} style={{textAlign:'left'}}>

            <img src={Warehouse}  width='100%' height='100%'/>
            
         </Grid>


        </Grid>






  <Grid container spacing={0} >
      

        <Grid item xs={12} sm={7} md={7} style={{textAlign:'left'}}>

            <img src={Storage} width='100%' height='100%'/>
            
         </Grid>



<Grid item xs={12} sm={5} md={5} style={{marginTop:'-20px',textAlign:'left', backgroundColor:'#3B4954', color:'white'}}>

           <h1  style={{marginTop:"20%",padding:20}} data-aos="fade-up">Storage


</h1>
            <p style={{padding:20,marginTop:'-29px', fontSize:'20px'}} data-aos="fade-up">
           We ensure all your goods are safe with us throughout the shipping process  and the storage in our various warehouse centers.
<br/>
<br/>
<Link to="./warehouse">
    <Button style={{backgroundColor:'#FABB1E', color:'white'}}>
    Read More
    </Button>
</Link>
            </p>
         </Grid> 


        </Grid>





  <Grid container spacing={0} >
      
<Grid item xs={12} sm={5} md={5} style={{backgroundColor:"#FABB1E", color:"white", textAlign:"left"}}>

          <h1  style={{marginTop:"15%",padding:20}} data-aos="fade-up">Secure Payment

</h1>
            <p style={{padding:20,marginTop:'-29px', fontSize:'20px'}} data-aos="fade-up">
           Don’t let payment, bank charges or transfer limit obstruct your business with Chinese suppliers. We can assist you to make instant payments to your Chinese suppliers whiles you pay us in cedis. Whatever the amount, we offer the best rates and lowest charges.
<br/>
<br/>
<Link to="./payment">
    <Button style={{backgroundColor:'#3B4954', color:'white'}}>
    Read More
    </Button>
</Link>
            </p>
         </Grid> 


  
        <Grid item xs={12} sm={7} md={7} style={{textAlign:'left'}}>

            <img src={Payment}  width='100%' height='100%'/>
            
         </Grid>


        </Grid>








    </div>
    </div>

      
    )
}

function Item(props)



{
    const classes=useStyles()
     return (
         
         
        <div className={classes.caro} style={{backgroundImage: `url(${props.item.image})`}}>
            <h1 className={classes.mainname} style={{color:"white", width:"350px" }} data-aos={"flip-right"}><span style={{ paddingRight:12}}>{props.item.name} </span></h1>
            <p style={{color:"white"}} className={classes.mainwrite} data-aos={"zoom-in"}>{props.item.description}</p>

          
        
        
        </div>
        
        

    )
}


export default Example


