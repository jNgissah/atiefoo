import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import Status from './status'


export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} aria-label="delete" style={{height:'55px', width:'100%', backgroundColor:'#3B4954', color:'white' }}>
      TRACK SHIPMENT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{" Shipment Information"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
      
       <Container maxWidth='lg' >
              



<List style={{textAlign:'left', padding:10}}>

                    
       <div style={{width:'100%'}}>
        <ListItemText primary="Name Here" secondary="Sender's Name" data-aos="fade-up"/>
       </div>
<Divider data-aos="fade-up">
</Divider>
        <div style={{width:'100%'}}>
        <ListItemText primary="Name Here" secondary="Receiver's Name" data-aos="fade-up"/>
       </div>
<Divider data-aos="fade-up">
</Divider>
        <div style={{width:'100%'}}>
        <ListItemText primary="Contact Here" secondary="Receiver's Contact" data-aos="fade-up"/>
       </div>
<Divider data-aos="fade-up">
</Divider>
        <div style={{width:'100%'}}>
        <ListItemText primary="Address Here" secondary="Receiver's Address" data-aos="fade-up"/>
       </div>
<Divider data-aos="fade-up">
</Divider>
        <div style={{width:'100%'}}>
        <ListItemText primary="GHC 200" secondary="Payment" data-aos="fade-up"/>
       </div>
<Divider data-aos="fade-up">
</Divider>
        <div style={{width:'100%'}}>
               <ListItemText primary="GHC 200" secondary="Date Paid" data-aos="fade-up"/>
       </div>

<br/>

        <div style={{width:'100%', textAlign:'center'}}>
               <ListItemText primary="" secondary="Shipment Status" />
                   
       </div>

<Status  data-aos="fade-up" />
   
    
    <br/>
    
    
     <div style={{width:'100%', textAlign:'center'}}>
               <ListItemText primary="" secondary="Items"/>
                   
       </div>
    </List>         
 

     

    
            </Container>
            
      
      
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
          <Button onClick={handleClose} color="primary" autoFocus>
           Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
