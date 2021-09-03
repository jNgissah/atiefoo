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
import Para1 from './img/atiefoo/man-holding-credit-card-payment-shopping-online-smart-phone.jpg';
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
     fontSize:35
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
            name: "Secure Payment",
            image: Para1,
            description: "We pay your suppliers on your behalf"
        },
        {
            name: "WE PROVIDE SUSTAINABLE ENERGY",
             image: Para2,
            description: "Get affordable Biomass Energy"
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
              Don't let payment issues, high bank fees, or transfer limitations
prevent you from doing business with Chinese suppliers.<br/>
We can let you pay your Chinese suppliers instantly by bank
transfer, Wechat, Alipay, and even QQ while you pay us in cedis!
We provide the finest rates and lowest fees regardless of the
quantity. Naira Bank Transfer, PayPal, Bitcoin, and Western Union
are all acceptable methods of payment.<br/>
Our payments are instant and 100% safe because we are careful
to verify the suppliers first. Also, there is no need for form M and
other paperwork

 </p>

               
<h2 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
        How It works
            </h2>

 <p data-aos={"fade-up"}>
              Don't let payment issues, high bank fees, or transfer limitations
prevent you from doing business with Chinese suppliers.
We can let you pay your Chinese suppliers instantly by bank
transfer, Wechat, Alipay, and even QQ while you pay us in Naira!
 </p>
<br/>
        <h2 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Why Us?
            </h2>

 
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
      Pay in Cedis
            </h4>

 <p data-aos={"fade-up"}>
          There's no need to acquire Dollars or fill out any paperwork. You
have the option of paying us in Naira or Dollars, and we will pay
your vendors in Yuan.

 </p>
            
     <br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Instant Payment
            </h4>

 <p data-aos={"fade-up"}>
All payments to suppliers are completed within 24 hours
using a variety of methods, including bank transfer, Wechat,
Alipay, and QQ, as needed.

 </p>
       <br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
      Best Rates & Lowest Charges
            </h4>

 <p data-aos={"fade-up"}>
         Whether through Naira Bank Transfer, PayPal, Bitcoin, or
Western Union, we offer our clients the best market rates and
very little or zero charges.


 </p>

<br/>
        <h4 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"left"}}>
       Supplier Verification
            </h4>

 <p data-aos={"fade-up"}>
          We always ensure Customers make payments for only legit
and verified suppliers to protect against fraud and losses.


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
            <h1 style={{color:"white",  marginTop:"18%", width:"300px" }} className={classes.mainname} data-aos={"flip-right"}><span style={{ paddingRight:12,paddingLeft:12,paddingTop:2,paddingBottom:2, backgroundColor:"rgba(250, 187,30,1)"}}>{props.item.name} </span></h1>
            <p style={{ padding:12, backgroundColor:"rgba(250, 187,30,1)" , color:"white", marginTop:"-20px", width:"300px"}} className={classes.mainwrite} data-aos={"zoom-in"}>{props.item.description}</p>

          
        
        
        </div>
    

    )
}


export default Example



