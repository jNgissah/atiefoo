import {React, useState} from 'react';
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
import Para1 from './img/atiefoo/front-view-young-lady-posing-with-her-calculator2.jpg';
import Ronak from './img/ronak.jpg';
import Mitul from './img/mitul.jpg';
import Appiah from './img/appiah.jpeg';
import Amit from './img/amit.jpeg';
import Avatar from '@material-ui/core/Avatar';
import AOS from 'aos';
import "aos/dist/aos.css";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';



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
     fontSize:40,
            marginTop:"-50px", 
            width:"300px" 
    },
        [theme.breakpoints.down('sm')]: {
     fontSize:24,
            width:"200px",
            marginTop:"-20px",
            marginBottom:"30px",
            marginLeft:"-20px"
    }
    },
    mainwrite:{
         [theme.breakpoints.down('lg')]: {
     fontSize:20, 
             width:"300px"
    },
        [theme.breakpoints.down('sm')]: {
     fontSize:0,
              width:"150px",
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
    const classes = useStyles();
    const [cbm,setCbm]=useState(0.00)
    const [seaprice,setSeaprice]=useState(0.00)
    const [airprice,setAirprice]=useState(0.00)
    const [rate,setRate]=useState(380)
    const [rate_air,setRate_air]=useState(15.5)
   var items = [
        {
            name: "Want to know your shipping cost?",
            image: Para1,
            description: "Use our freight calculator below to get an estimate"
        }
    ]
   
   function Calculate_sea(){
       let Width= document.getElementById("Width").value
       let Height= document.getElementById("Height").value
       let Length= document.getElementById("Length").value
       let Quantity_sea= document.getElementById("Quantity_sea").value
       if(Width==""){
           Width=1
       }
       if(Height==""){
           Height=1
       }
       if(Length==""){
           Length=1
       } 
       if(Quantity_sea==""){
           Quantity_sea=1
       }
      
       let Total_cbm = ((Length*Height*Width)/1000000)*Quantity_sea
       let Total_price =Total_cbm*rate
       
       setCbm(Total_cbm.toFixed(4))
       setSeaprice(Total_price.toFixed(2))
   }

    
    
     
   function Calculate_air(){
       
       let Weight= document.getElementById("Weight").value
       let Quantity_air= document.getElementById("Quantity_air").value
       if(Weight==""){
           Weight=1
       }
       
       if(Quantity_air==""){
           Quantity_air=0
       }
      
       let Total_price = (Weight*Quantity_air)*rate_air
       
       setAirprice(Total_price.toFixed(2))
   }

    
    
    
    
    
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
        

    <Grid container spacing={0} style={{borderColor:"#FABB1E"}}>
        <Grid item xs={12} sm={6} md={6} style={{border:"solid",borderColor:"#FABB1E"}}>
            <Grid container spacing={0} >
        <Grid item xs={6} sm={6} md={6} style={{backgroundColor:"#3B4954"}}>

           <h3 style={{textAlign:"center", color:"white"}}>
             Cubic Meter (CBM)

           </h3>
<p  style={{textAlign:"center", color:"white", marginTop:"-18px", fontSize:"12px"}}>
              Current Rate (USD): 380 
            </p>
         </Grid>
        <Grid item xs={6} sm={6} md={6} style={{backgroundColor:"#FABB1E"}}>
            <h3 style={{textAlign:"center", color:"white"}}>
           Sea Freight
           </h3>
            
            
         </Grid>
         </Grid>


 <Container maxWidth="md">
<br/>
               
                <h1 style={{color:"gray", textAlign:"center"}}>
                <b id="seaprice">{seaprice}</b>
                </h1>
                
 <p style={{color:"gray", textAlign:"center", marginTop:"-15px"}}>
                Price (USD)
                </p>


 <br/>
      <br/>
      <p style={{color:"gray", textAlign:"left", marginTop:"-15px"}}>
                CBM : <span id="cbm">{cbm} </span>
                </p>
        <Grid container spacing={2} >
     
<Grid item lg={6} sm={6} md={6} style={{backgroundColor:"", color:"gray", textAlign:"left"}}>

           
        <TextField
          id="Length"
          label="Length (cm)"
          placeholder="Enter length"
          multiline
          variant="outlined"
          style={{width:"100%", borderRadius:"0%"}}
           onKeyUp={Calculate_sea}
        />
         </Grid> 

        <Grid item lg={6} sm={6} md={6} style={{textAlign:'left'}}>
<TextField
          id="Height"
          label="Height (cm)"
          placeholder="Enter Height"
          multiline
          variant="outlined"
          style={{width:"100%", borderRadius:"0%"}}
           onKeyUp={Calculate_sea}
        />
            
         </Grid>


        </Grid>
<br/>

 <Grid container spacing={2} >
     
<Grid item lg={6} sm={6} md={6} style={{backgroundColor:"", color:"gray", textAlign:"left"}}>

           
        <TextField
          id="Width"
            type="num"
          label="Width (cm)"
          placeholder="Enter Width"
          multiline
          variant="outlined"
          style={{width:"100%"}}
          onKeyUp={Calculate_sea}
        />
         </Grid> 

        <Grid item lg={6} sm={6} md={6} style={{textAlign:'left'}}>
<TextField
          id="Quantity_sea"
          label="Quantity"
          placeholder="Enter Quantity"
          multiline
          variant="outlined"
          style={{width:"100%", borderRadius:"0%"}}
           onKeyUp={Calculate_sea}
        />
            
         </Grid>


        </Grid>




<br/><br/>
            </Container>



         </Grid> 

        <Grid item xs={12} sm={6} md={6} style={{backgroundColor:"white", color:"white",border:"solid",borderColor:"#FABB1E"}}>
<Grid container spacing={0} >
        <Grid item xs={6} sm={6} md={6} style={{backgroundColor:"#3B4954"}}>

          <h3 style={{textAlign:"center", color:"white"}}>
           Air Freight
           </h3>
            
         </Grid>
        <Grid item xs={6} sm={6} md={6} style={{backgroundColor:"#FABB1E "}}>
            
             <h3 style={{textAlign:"center", color:"white"}}>
             Kilograms (KG)

           </h3>
<p  style={{textAlign:"center", color:"white", marginTop:"-18px", fontSize:"12px"}}>
              Current Rate (USD): 15.5 
            </p>
         </Grid>
         </Grid>

            <Container maxWidth="md">
<br/>
               
                <h1 style={{color:"gray", textAlign:"center"}}>
                <b id="price_air">{airprice}</b>
                </h1>
                
 <p style={{color:"gray", textAlign:"center", marginTop:"-15px"}}>
                Price (USD)
                </p>


 <br/>
      <br/>
   

<br/>

 <Grid container spacing={2} >
     
<Grid item lg={6} sm={6} md={6} style={{backgroundColor:"", color:"white", textAlign:"left"}}>

           
        <TextField
          id="Weight"
type="Number"
          label="Weight (Kg)"
          placeholder="Enter Weight (Kg)"
          multiline
          variant="outlined"
          style={{width:"100%"}}
          onKeyUp={Calculate_air}
        />
         </Grid> 

        <Grid item lg={6} sm={6} md={6} style={{textAlign:'left'}}>
<TextField
          id="Quantity_air"
            border="white"
            type="Number"

          label="Quantity"
          placeholder="Enter Quantity"
          multiline
          variant="outlined"
 onKeyUp={Calculate_air}
        />
            
         </Grid>


        </Grid>




<br/><br/>
            </Container>

            
         </Grid>
        </Grid>
            
    
        
</Container>


          
            

 
   <br/><br/><br/><br/>
        


  


    </div>

      
    )
}

function Item(props)



{
    const classes=useStyles()
    return (
        
        <div className={classes.caro} style={{backgroundImage: `url(${props.item.image})`}}>
            <h1 style={{color:"white"}} className={classes.mainname} data-aos={"flip-right"}><span>{props.item.name} </span></h1>
            <p style={{ color:"white", marginTop:"-20px"}} className={classes.mainwrite} data-aos={"zoom-in"}>{props.item.description}</p>

          
        
        
        </div>
        
     
     
    

    )
}


export default Example



