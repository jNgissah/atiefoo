import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Green from './img/sustainable.jpg';
import Illus from './img/illus.jpg';
import Burn from './img/atiefoo/5.jpg';
import Burner from './img/atiefoo/container-ship-arriving-commercial-port.jpg';
import Mission from './img/atiefoo/photo_2021-08-07_01-55-48.jpg';
import Point from './img/atiefoo/business-strategy-success-target-goals.jpg';
import Calc from './img/atiefoo/front-view-young-lady-posing-with-her-calculator1.jpg';
import Delivery from './img/atiefoo/delivery.png';
import Client from './img/atiefoo/client.png';
import Bg from './img/pellets_1.jpg';
import Energy from './img/energy.jpg';
import Use2 from './img/use2.jpg';
import Para0 from './img/atiefoo/showing-blank-phone-screen-caucasian-man-s-portrait-blue-studio-wall.jpg';
import Para1 from './img/slide.jpeg';
import Para3 from './img/slide3.jpeg';
import Grid from '@material-ui/core/Grid';
import { Parallax } from "react-parallax";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import itemData from './data';
import Typography from '@material-ui/core/Typography';
import AOS from 'aos';
import "aos/dist/aos.css";
import "./style.css";

import ButtonBase from '@material-ui/core/ButtonBase';
import  {
  Link
} from 'react-router-dom';
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
    textAlign:'left'
    
    
}

const useStyles=makeStyles((theme)=>({
    mainname:{
        [theme.breakpoints.down('lg')]: {
     fontSize:45,
    width:"350px",
            marginTop:"12%"
            
    },
        [theme.breakpoints.down('sm')]: {
     fontSize:30,
             width:"230px",
             marginTop:"0%"
    }
    },
    mainwrite:{
         [theme.breakpoints.down('lg')]: {
     fontSize:20
    },
        [theme.breakpoints.down('sm')]: {
     fontSize:15
    }
    },
    change_lg:{
    [theme.breakpoints.down('lg')]: {
     display:'none'
    },
        [theme.breakpoints.down('sm')]: {
     display:'flex'
    }
    },   
    change_sm:{
        display:'none',
    [theme.breakpoints.down('sm')]: {
     display:'none'
    },
        [theme.breakpoints.up('lg')]: {
     display:'flex'
    }
    },
    image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 0,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },

    root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
    
    
    
    caro:{ 
        
        backgroundRepeat: 'no-repeat', 
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


const images = [
  {
    url: Burner,
    title: 'Click to cut Down Cost',
    width: '100%',
  }
];


function Example(props){
    AOS.init({
    // initialise with other settings
    duration : 700
  });
    const classes = useStyles();
    
    var items = [
        {
            name: "Shipment at your finger tips",
            image: Para0,
            description: "Ship | Track | Receive"
        }
        
    ]

    return (
        
        <div>
        <Carousel swipe={true} touch={true} indicator={false} animation={"slide"} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
<div container style={{backgroundImage:`url(${Burner})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  marginTop:"-32px", paddingTop:"50px", paddingBottom:"50px" , position:"relative", zIndex:0.5, }}>
   
   <Grid container spacing={0} >
        <Grid item xs={0} sm={12} md={0} lg={4} xl={0} style={{textAlign:'left'}} >                         
            
                                        <img src={Burn} width="100%" className={classes.change_lg} />


         </Grid> 

        <Grid  item xs={12} sm={8} md={8} style={{textAlign:'left', backgroundColor:'rgb(250, 187,30)',paddingTop:"80px", paddingBottom:"80px"}} data-aos="fade-right" >
            
            <Grid container spacing={0} > 
            <Grid item lg={3} sm={1} md={3} style={{textAlign:'left'}}>
                            <img src={Burn} width="270%" data-aos="zoom-in"  className={classes.change_sm}  style={{marginLeft:'-380px', position:"relative"}} />

            </Grid>

            <Grid item sm={12} data-aos="zoom-in" lg={9} md={9} style={{textAlign:'left',color:'white'}} >
                <Container maxWidth="sm">
               <h1 className="MuiTypography-h1" data-aos="fade-up" >
        Who we are
            </h1>

<p>
            
                                        Atiefoo Express Company started operating fully on 15th February, 1999, shipping goods from China to Ghana . We ship your goods by air and by sea. Any quantity of goods from 1 Kilograms (KG) upwards can be shipped by air from China to Ghana. Any quantity of goods in cubic metres (CBM) can be shipped by sea from China to Ghana. When we receive your goods in China you can receive your goods in Ghana after 7 days.

                                         
                                    </p>
                                    <div style={{ textAlign: "center" }}>
                                        <Link to="./about"> <Button variant="contained" style={{ backgroundColor: "#3B4954", color: "white" }}>
                                           Read more
                                        </Button>  </Link>
                                    </div>   
</Container>
            </Grid>

            </Grid> 
            
          
            
            
            
         </Grid>
        </Grid>

         
            
</div >
  

<div style={{backgroundColor:"#3B4954",paddingTop:"50px", paddingBottom:"50px"}} >
<Container maxWidth="lg" >

<Container maxWidth="lg" style={{backgroundColor:"white",paddingTop:"23px", paddingBottom:"23px"}} >
<Grid container spacing={0} >
        <Grid item xs={0} sm={12} md={7} lg={5} xl={0} style={{textAlign:'left'}} >                         
            
                                        <img src={Mission} width="100%" data-aos="zoom-in"/>


         </Grid> 

        <Grid  item xs={12} sm={7} md={7} style={{textAlign:'left', backgroundColor:'white'}} data-aos="fade-right" >
            
            <Grid container spacing={0} > 
            <Grid item lg={1} sm={1} md={1} style={{textAlign:'left'}}>

<div className={classes.change_sm} data-aos="zoom-in"  style={{marginLeft:'-50px', position:"relative", backgroundColor:'rgb(250, 187,30)', height:80, marginTop:'150%'}}>

</div>

            </Grid>

            <Grid alignItems="center"  sm={12} data-aos="zoom-in" lg={11} md={11} style={{textAlign:'right',color:'black'}} >
                <Container maxWidth="sm" style={{contentAlign:'center', marginTop:'10%'}}>
               <h2 className="MuiTypography-h5" data-aos="fade-up" >
       <b>Our Mission </b> 
            </h2>

<p style={{textAlign:'right',color:'black'}} data-aos="fade-up">
            
           To integrate and connect well with all stakeholders in providing innovative and sustainable logistics solutions, leading to increased profitability and operational excellence.



            
</p>
</Container>
            </Grid>

            </Grid> 
            
          
            
            
            
         </Grid>
        </Grid>
</Container>

</Container>




<br/>
<br/>
<br/>


<Container maxWidth="lg" >

<Container maxWidth="lg" style={{backgroundColor:"rgb(250, 187,30)",paddingTop:"23px", paddingBottom:"23px"}} >
<Grid container spacing={0} >
        

        <Grid  item xs={12} sm={7} md={7} style={{textAlign:'left', backgroundColor:'rgb(250, 187,30)'}} data-aos="fade-right" >
            
            <Grid container spacing={0} > 
           

            <Grid alignItems="center"  sm={12} data-aos="zoom-in" lg={11} md={11} style={{textAlign:'left',color:'black'}} >
                <Container maxWidth="sm" style={{contentAlign:'center', marginTop:'8%'}}>
               <h2 className="MuiTypography-h5" data-aos="fade-up" >
       <b>Our Vision</b> 
            </h2>

<p style={{textAlign:'left',color:'black'}} data-aos="fade-up" >
            
            We aim to become a leading household name in the provision of first class freight forwarding services within a decadeof quality and innovative service delivery in Ghana and beyond.


            
</p>
</Container>
            </Grid>

 <Grid item lg={1} sm={1} md={1} style={{textAlign:'left'}}>

<div className={classes.change_sm }  data-aos="zoom-in"  style={{marginRight:'-50px', height:80, marginTop:'130%', position:'relative'}}>

</div>

            </Grid>
            </Grid> 
            
            
         </Grid>


 <Grid item xs={0} sm={12} md={7} lg={5} xl={0} style={{textAlign:'left', zIndex:'1'}} >                         
            
                                        <img src={Point}  className='imager' data-aos="zoom-in"/>


         </Grid>
        </Grid>
</Container>

</Container>










</div>

    <div >
    




<div style={{backgroundColor:"rgb(250, 187,30)"}}>
<Container maxWidth="lg" >


   
            <Grid container spacing={0} > 
           

            <Grid items  sm={12} data-aos="zoom-in" lg={4} md={4} style={{textAlign:'left',color:'white', paddingTop:'10%'}} >
 <h1 className="MuiTypography-h1" data-aos="fade-up"  style={{marginBottom:"-20px"}}>
       <b>Have a fixed budget?</b> 
            </h1>
<p style={{fontSize:22}}>
Get a quick quote with our <br/> simple freight calculator
</p>

<Link to="./calculator"><Button style={{backgroundColor:'#3B4954', color:'white'}}>
Get A Quote Now
</Button>
 </Link>           </Grid>


            <Grid alignItems="center"  sm={12} data-aos="zoom-in" lg={8} md={8} style={{textAlign:'right',color:'black'}} >
<img src={Calc} width="100%" height="100%" />

            </Grid>



</Grid>

</Container>
</div>





<div style={{backgroundColor:"#3B4954",paddingTop:"60px", paddingBottom:"60px"}}>
<Container maxWidth="lg" >


   
            <Grid container spacing={0} > 
           

            <Grid item  sm={12} data-aos="zoom-in" lg={6} md={6} style={{textAlign:'center',color:'white',width:'100%',marginTop:40}} >
            
        <img src={Delivery} width='45%' />

 <h2 className="MuiTypography-h4" data-aos="fade-up" >
       <b>35,125+
</b> 
            </h2><h2 className="MuiTypography-h4" data-aos="fade-up" style={{paddingBottom:"0px", marginBottom:"0px"}}>
       <b>Delivered</b> 
            </h2>
<h2 className="MuiTypography-h4" data-aos="fade-up" style={{paddingTop:"0px", marginTop:"0px"}} >
       <b>Packages</b> 
            </h2>



            </Grid>


            <Grid item alignItems="center"  sm={12} data-aos="zoom-in" lg={6} md={6} style={{textAlign:'center',color:'white',width:'100%', marginTop:40}} >

  <img src={Client} width= '35%'style={{textAlign:'center'}} />


<h2 className="MuiTypography-h4" data-aos="fade-up" >
       <b>633+</b> 
            </h2><h2 className="MuiTypography-h4" data-aos="fade-up" style={{paddingBottom:"0px", marginBottom:"0px", width:"100%"}}>
       <b>Satisfied</b> 
            </h2>
<h2 className="MuiTypography-h4" data-aos="fade-up" style={{paddingTop:"0px", marginTop:"0px"}} >
       <b>Clients</b> 
            </h2>



            </Grid>



</Grid>

</Container>
</div>






    
        
    </div>

       

    </div>

      
    )
}

function Item(props)



{
    const classes=useStyles()
    return (
        
              
        <div className={classes.caro}  style={{backgroundImage: `url(${props.item.image})`}}>
            <h1 className={classes.mainname} style={{color:"white"}} data-aos={"flip-right"}><span style={{ paddingRight:12}}>{props.item.name} </span></h1>
            <p className={classes.mainwrite} style={{color:"white"}} data-aos={"zoom-in"}>{props.item.description}</p>
<Link to="/track">
            <Button style={{backgroundColor:"#FABB1E" ,color:"white"}}>
TRACK YOUR ITEM
            </Button>

          </Link>
        
        
        </div>
        
        
        
    

    )
}


export default Example


