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
import Para1 from './img/atiefoo/about-us-word-blue-computer-keyboard-key.jpg';
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
     fontSize:50
    },
        [theme.breakpoints.down('sm')]: {
     fontSize:30,
            color:'white'
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
            name: "",
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
<Container  maxWidth="md">
         <h2 className="MuiTypography-h4" data-aos={"fade-up"} style={{textAlign:"center"}}>
        Atiefoo Express Company
            </h2>
<p style={{textAlign:"center", marginTop:"-25px", fontSize:"16px", color:"#FABB1E"}} data-aos={"fade-up"}>Our core purpose is to provide the best of services to our customers</p>

<p style={{textAlign:"left"}} data-aos={"fade-up"}>
           Atiefoo Express Company started operating fully on 15th February, 1999, shipping goods from China to Ghana . We ship your goods by air and by sea. Any quantity of goods from 1 Kilograms (kg) upwards can be shipped by air from China to Ghana. Any quantity of goods in cubic metres (cbm) can be shipped by sea from China to Ghana. When we receive your goods in China you can receive your goods in Ghana after 7 days.

            </p>
            

 
        
        
</Container>


<br/>
<br/>


    <Container  maxWidth="lg">
         <h2 className="MuiTypography-h4" style={{textAlign:"center"}} data-aos={"fade-up"}>
        Our Core Values
            </h2>


<p >
            <Container  maxWidth="lg" style={{textAlign:"left"}}>
    
   
    
   <Grid container spacing={1} style={{marginTop:5,marginBottom:80}}>
        <Grid item xs={12} sm={4} md={4} style={{textAlign:'left', marginTop:20}} data-aos={"fade-up"}>

            
            
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={Sustain}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Affordable Rates
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           We offer highly competitive rates across all shipment types and also make sure you get full value for your money.
 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card> 
            
            
          
         </Grid> 




<Grid item xs={12} sm={4} md={4} style={{textAlign:'left', marginTop:20}} data-aos={"fade-up"}>

            
            
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={Responsible}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Fast Delivery
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We partner with the best partners to offer not only the best rates but a fast and stable delivery period across all routes.

          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card> 
            
            
          
         </Grid> 

        <Grid item xs={12} sm={4} md={4} style={{textAlign:'left', marginTop:20}} data-aos={"fade-up"}>

            
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={Commitment}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Highly Professional
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            With highly trained and motivated Staff, we make sure your shipments are handled with care and also delivered on time. 
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card> 
            
            
            
            
            
         </Grid>
        </Grid> 
    
    
    
    
</Container> 

            </p>
            

 
   
        
</Container>

    
  <br/>
  <br/>
  <br/>


        <Grid container spacing={0} >
        <Grid item xs={12} sm={6} md={6} style={{backgroundColor:"#FABB1E",padding:"10px"}}>

          <h3 className="MuiTypography-h4"  style={{marginTop:80}} data-aos={"fade-up"}>Our Mission</h3>
        <p className="MuiTypography-h6" style={{marginTop:'-29px'}}></p>
<br/>
            <p style={{marginBottom:80}} data-aos={"fade-up"}>
            We aim to become a leading household name in the provision of first class freight forwarding services within a decadeof quality and innovative service delivery in Ghana and beyond.
 
            </p>
         </Grid> 

        <Grid item xs={12} sm={6} md={6} style={{backgroundColor:"#3B4954", color:"white", padding:"10px"}}>

            <h3 className="MuiTypography-h4"  style={{marginTop:80}} data-aos={"fade-up"}>Our Vision</h3>
        <p className="MuiTypography-h6" style={{marginTop:'-29px'}}></p>
<br/>
            <p style={{marginBottom:80}} data-aos={"fade-up"}>
           To integrate and connect well with all stakeholders in providing innovative and sustainable logistics solutions, leadingto increased profitability andoperational excellence.

            </p>
            
            
            
         </Grid>
        </Grid>
            


    </div>

      
    )
}

function Item(props)



{
    const classes=useStyles()
    return (
        
                   
        <div className={classes.caro} style={{backgroundImage: `url(${props.item.image})`}}>
            <h1 className={classes.mainname} style={{color:"black",  marginTop:"25%", width:"300px" }} data-aos={"flip-right"}><span style={{ paddingRight:12}}>{props.item.name} </span></h1>
            <p style={{color:"black"}} className={classes.mainwrite} data-aos={"zoom-in"}>{props.item.description}</p>

          
        
        
        </div>
        
        
     
    

    )
}


export default Example


