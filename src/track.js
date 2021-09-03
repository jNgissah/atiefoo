import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Image from './img/Engaging-an-AC-Compressor-Clutch.jpg'
import {makeStyles} from '@material-ui/core/styles';
import Para1 from './img/atiefoo/7.jpg';
import Imager from './img/atiefoo/close-up-calculator-business-working-desk-dark-background.jpg';
import Para2 from './img/product2.jpg';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';



import AOS from 'aos';
import "aos/dist/aos.css";
//import itemData from './data';
//import ImageList from '@material-ui/core/ImageList';
//import ImageListItem from '@material-ui/core/ImageListItem';
import Images from './img';
import Info from './info';
import Status from './status';


const useStyles=makeStyles((theme)=>({
    
    mainname:{
        [theme.breakpoints.down('lg')]: {
     fontSize:45
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

    root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
    imageList: {
    width: 500,
    height: 450,
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



function Example(){
      AOS.init({
    // initialise with other settings
    duration : 700
  });
//    const classes = useStyles();
    
     var items = [
        {
            name: "Stay updated!",
            image: Para1,
            description: "Get timely updates about the status of your items"
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

            <Container maxWidth="md">

                <h1>
                <b>Track your product to know its progress</b>
                </h1>
                



 <br/>
      <br/>
      
        <Grid container spacing={0} >
     
<Grid item lg={7} sm={9} md={7} style={{backgroundColor:"", color:"white", textAlign:"left"}}>

           
        <TextField
          id="tracking"
          label="Tracking Number"
          placeholder="Tracking Number"
          multiline
          variant="outlined"
          style={{width:"100%", borderRadius:"0%"}}
        />
         </Grid> 


  
        <Grid item lg={5} sm={3} md={5} style={{textAlign:'left'}}>

        <Info/>
            
         </Grid>


        </Grid>


          
<br/>
<br/>
<br/>
<br/>
<br/>



            </Container>
<img src={Imager} width='100%' height='100%'/>
       </div>
        
        
   
      
    )
}

function Item(props)



{
    const classes=useStyles()
    return (
        
                 
        <div className={classes.caro} style={{backgroundImage: `url(${props.item.image})`}}>
            <h1 style={{color:"black", marginTop:"15%", width:"340px" }} className={classes.mainname} data-aos={"flip-right"}><span style={{ paddingRight:12}}>{props.item.name} </span></h1>
            <p style={{color:"black", width:"320px"}} className={classes.mainwrite} data-aos={"zoom-in"}>{props.item.description}</p>

          
        
        
        </div>
        
        

    )
}


export default Example


