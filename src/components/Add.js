import React from 'react';
import {Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip} from '@material-ui/core';
import { AddToQueueSharp } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const useStyle = makeStyles((theme)=>({
    fab:{
        position:"fixed",
        right:20,
        bottom:10
    },
    modal:{
        width:500,
        height:550,
        backgroundColor:"white",
        position:"absolute",
        top:0,
        right:0,
        left:0,
        bottom:0,
        margin:"auto",
        [theme.breakpoints.down("sm")]:{
            width:"100vw",
            height:"100vh",
        }
    },
    form:{
        padding:theme.spacing(2)
    },
    item:{
        marginBottom:theme.spacing(3)
    }
 }))

 function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
const Add = () => {
    
 
    const [open,setOpen] = useState(false);
    const [openAlert,setOpenAlert] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
    const classes = useStyle();
    return (
        <>
           <Tooltip title="Add" aria-label="add" onClick={()=>setOpen(true)}>
            <Fab color="secondary" className={classes.fab}>
                <AddIcon />
            </Fab>
            </Tooltip>

            <Modal open={open}>
                <Container className={classes.modal}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                        <TextField id="standard-basic" size="small" style={{width:"100%"}} label="title" />

                        </div>
                        <div className={classes.item}>
                        <TextField 
                          id="outlined-multiline-static"
                          label="deskcription"
                          multiline
                          rows={4}
                          defaultValue=" write your memory"
                          variant="outlined"
                        size="small" style={{width:"100%"}} />

                        </div>
                        <div className={classes.item}>
                        <TextField select label="Visibility" value="Public" >
                            <MenuItem value="Public">Public</MenuItem>
                            <MenuItem value="Private">Private</MenuItem>
                            <MenuItem value="UnListed">UnListed</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                        <FormLabel component="legend">Who can comment?</FormLabel>

                        <RadioGroup aria-label="gender" name="gender1" >
                        <FormControlLabel 
                        value="every Body"
                         control={<Radio  size="small"/>}
                          label="every Body" />
                        <FormControlLabel 
                        value="for friends" 
                        control={<Radio size="small" />}
                         label="for friends" />
                        <FormControlLabel
                         value="noBody" 
                         control={<Radio size="small" />} 
                         label="noBody" />
                        <FormControlLabel 
                        value="custom"
                         disabled control={<Radio size="small" />}
                          label="custom(premium )" />
                    </RadioGroup>
                        </div>
                        <div className={classes.item}>
                        <Button variant="outlined"
                         color="primary" 
                         style={{marginRight:20}}
                        onClick={()=>setOpenAlert(true)}
                         >Create</Button>
                        <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>Cancel</Button>
                        </div>
                    </form>
                </Container>

            </Modal>
                <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
            <Alert onClose={handleClose} severity="success">
            This is a success message!
            </Alert>
        </Snackbar>
        </>
    );
};

export default Add;