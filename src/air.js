import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Image from './img/Engaging-an-AC-Compressor-Clutch.jpg'
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Sustain from './img/sustainable.jpg';
import Responsible from './img/responsible.jpg';
import Commitment from './img/commitment.jpg';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Para1 from './img/atiefoo/img1.jpg';
import Para2 from './img/about3.jpg';
import Ronak from './img/ronak.jpg';
import Mitul from './img/mitul.jpg';
import Appiah from './img/appiah.jpeg';
import Amit from './img/amit.jpeg';
import Avatar from '@material-ui/core/Avatar';
import AOS from 'aos';
import "aos/dist/aos.css";
import Typography from '@material-ui/core/Typography';



const parallaxside={ 
    backgroundColor:"#63d471",
    backgroundImage: "linear-gradient(315deg, #2FA71B 0%, #0F6300 74%)",
    padding:20,
    color:"white",
    textAlign:"left",
    
    
 
    
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
     fontSize:30
    },
        [theme.breakpoints.down('sm')]: {
     fontSize:18
    }
    },
    
     large:{
        
       [theme.breakpoints.up('xs')]: {
        width: theme.spacing(26),
        height: theme.spacing(26),
           marginLeft:'18%',
        },
       [theme.breakpoints.up('sm')]: {
        width: theme.spacing(26),
        height: theme.spacing(26),
           marginLeft:'15%',
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





function Example(props){
      AOS.init({
    // initialise with other settings
    duration : 700
  });
    const classes = useStyles();
    
   var items = [
        {
            name: "Air freight",
            image: Para1,
            description: "Fast and convenient for smaller items"
        }
    ]

    return (
        <div>
        <Carousel swipe={true} touch={true} animation={"slide"} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>

    <br/>
    <br/>
<Container  maxWidth="md" style={{textAlign:"left"}}>
        
<h2 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
        Overview
            </h2>

 <p data-aos={"fade-up"}>
               At Atiefoo Express, we handle your air freight parcel delivery with the professionalism and attention to detail that you would expect from the world's premier procurement and logistics company. 
Unwavering in our commitment to getting your shipment to its destination, regardless of its size. Like no other logistics firm, we take care of your parcel delivery in a thorough and professional manner
 </p>

               
<h2 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
        How It works
            </h2>

 <p data-aos={"fade-up"}>
               We accept your package(s) in one of our Guangzhou warehouses, collect all essential information from you, process and ship the things by your desired method, and give live tracking until they arrive at their destination.

 </p>
<br/>
        <h2 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Why Us?
            </h2>

 <p data-aos={"fade-up"}>
               We continue to pursue that same vision in today’s complex, uncertain world, working every day to earn our customers’ trust! During that time, we’ve become expert in freight transportation by air and all its related services. We work closely with all major airlines around the world.

 </p>
        
     <br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Affordable Rates
            </h4>

 <p data-aos={"fade-up"}>
           We offer highly competitive rates across all shipment types and also make sure you get full value for your money.


 </p>
            
     <br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Highly Professional Staff
            </h4>

 <p data-aos={"fade-up"}>
           With highly trained and motivated Staff, we make sure your shipments are handled with care.


 </p>
       <br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Fast Delivery
            </h4>

 <p data-aos={"fade-up"}>
          We partner with the best partners to offer not only the best rates but a fast and stable delivery period across all routes.



 </p>

<br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       SMS update and live tracking
            </h4>

 <p data-aos={"fade-up"}>
          We provide you with timely SMS updates and a unique tracking number so you can track all your parcels throughout the journey till they get to you.


 </p>
        
        

 
   
        
</Container>

  


    </div>

      
    )
}

function Item(props)



{
    const classes=useStyles()
    return (
        
   <div className={classes.caro} style={{backgroundImage: `url(${props.item.image})`}}>
            <h1 style={{color:"white",  marginTop:"22%", width:"300px" }} className={classes.mainname} data-aos={"flip-right"}><span style={{ paddingRight:12,paddingLeft:12,paddingTop:2,paddingBottom:2, backgroundColor:"rgba(250, 187,30,1)"}}>{props.item.name} </span></h1>
            <p style={{ padding:12, backgroundColor:"rgba(250, 187,30,1)" , color:"white", marginTop:"-20px", width:"300px"}} className={classes.mainwrite} data-aos={"zoom-in"}>{props.item.description}</p>

          
        
        
        </div>
        
        
     
    

    )
}


export default Example



