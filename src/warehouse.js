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
import Para1 from './img/atiefoo/img4.jpg';
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
     fontSize:20
    },
        [theme.breakpoints.down('sm')]: {
     fontSize:14
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
            name: "Unlimited    warehouse storage    space",
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

    <br/>
    <br/>
<Container  maxWidth="md" style={{textAlign:"left"}}>
        
<h2 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
        Overview
            </h2>

 <p data-aos={"fade-up"}>
              In both China and Ghana, Atiefoo Express provides unlimited warehouse storage capacity with cutting-edge technology and security. <br/>
While perfect fulfillment is still a major aim for warehouses, it oversimplifies today's reality. Increasing client demands have led warehouses to put a greater emphasis on profits. As a result, warehouses must operate more efficiently, reduce error rates, and adhere to best practices in order to perform ‘smarter.' <br/>
At Atiefoo Express, we use the proper technology to boost realtime visibility and productivity so that our customers may benefit from smarter warehousing. <br/>

 </p>

               
<h2 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
        How It works
            </h2>

 <p data-aos={"fade-up"}>
              For our warehouse address, please contact any of our authorised agents. <br/> 
              Send your supplier the address (s). <br/>
              When we receive your belongings, we will contact you and let you decide whether to keep, consolidate, or ship them away.

 </p>
<br/>
        <h2 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Why Us?
            </h2>

 <p data-aos={"fade-up"}>
              In today's complex, uncertain world, we continue to pursue that same mission, working hard every day to win our consumers' trust! We've become experts in supply chain management and all of its connected services over that time.
 

 </p>
        
     <br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Fees for warehousing are low.
            </h4>

 <p data-aos={"fade-up"}>
           After 14 days of free storage, we charge the lowest warehousing rates of 1RMB/kg each day. 
 </p>
            
     <br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Smart Warehousing. 
            </h4>

 <p data-aos={"fade-up"}>
To guarantee effective cargo handling, our warehouses are equipped with cutting-edge AI solutions. 

 </p>
       <br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
      Security
            </h4>

 <p data-aos={"fade-up"}>
         Our warehouses are guarded 24 hours a day, 7 days a week to safeguard against cargo loss, and all products in our warehouse are insured. 


 </p>

<br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
      Inventory Managment 
            </h4>

 <p data-aos={"fade-up"}>
          We offer proper inventory management for drop-shippers and importers, for effective cargo management and orders fulfilments



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
            <h1 style={{color:"white",  marginTop:"15%", width:"300px",backgroundColor:"rgba(250, 187,30,1)", paddingRight:12,paddingLeft:12,paddingTop:2,paddingBottom:2 }} className={classes.mainname} data-aos={"flip-right"}><span >{props.item.name} </span></h1>
          

          
        
        
        </div>
     
    

    )
}


export default Example



