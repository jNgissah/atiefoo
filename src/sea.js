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
import Para2 from './img/img/loader1.jpg';
import Para1 from './img/atiefoo/aerial-view-container-cargo-ship-sea1.jpg';
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
     fontSize:40
    },
        [theme.breakpoints.down('sm')]: {
     fontSize:22
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
            name: "Sea Freight",
            image: Para1,
            description: "Best option for bulk goods"
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
              For bulk commodities transit, ocean freight shipping is the best alternative; in some cases, it is the only one. If your whole cargo volume does not meet one full container criteria, you can choose FCL or LCL when importing from China.<br/> 
Low pricing, high volumes, and FCL or LCL possibilities are all benefits that make shipping by sea the preferred mode of transportation for most international trades from China to Ghana. <br/>
When it comes to shipping from China, Atiefoo Express has been delivering swift and safe ocean cargo services to small and medium businesses as well as individuals in Ghana via the Tin Can and Apapa Ports for more than 20 years.

 </p>

               
<h2 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
        How It works
            </h2>

 <p data-aos={"fade-up"}>
              Please contact one of our representatives. <br/>
                  Send us an email or give us a call. <br/>
                      Give us the specifics of your shipments, and we'll send you a custom-made shipment document. <br/>
                Your supplier(s) will deliver your things to us using this paperwork, and we will organize loading and delivery within 7 days of receiving the cargo. <br/>
                Payment for marine freight is made at the destination in certain situations, and at the arrival in others.

 </p>
<br/>
        <h2 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Why Us?
            </h2>

 <p data-aos={"fade-up"}>
              Our unrivaled commitment to client service goes hand in hand with our experience and competence. We will work hard to understand your needs so that we can deliver the finest service possible. 

 </p>
        
     <br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Years of Experience
            </h4>

 <p data-aos={"fade-up"}>
           All our freight partners have been in the sea cargo business for longer than you can imagine and with this comes valuable experience and global reach to serve you properly 


 </p>
            
     <br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Fast Timing
            </h4>

 <p data-aos={"fade-up"}>
We load containers every week for LCL and FCL, so your cargo doesn't spend time in the warehouse or docks, in order to ensure fast arrival at destination. 

 </p>
       <br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
      Best Timing & Prices
            </h4>

 <p data-aos={"fade-up"}>
          We offer probably the best cargo rates from China by getting a big discount from the top qualified logistics & transportation carrier, then provide a large percentage of that to our valuable customer. 


 </p>

<br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Insurance
            </h4>

 <p data-aos={"fade-up"}>
          If you are buying or selling goods overseas, it's important to have the right insurance company helping to protect your interests, at Naiyuan Mart we have arrangement with the best cargo insurance companies.



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



