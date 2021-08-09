import React from 'react';
import {alpha, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { Cancel, Notifications, Search } from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import { useState } from 'react';

const useStyle = makeStyles((theme)=>({
    toolbar:{
        display:"flex",
        justifyContent:"space-between"
    },
    //responsive
    logolg:{
        display:"none",
        [theme.breakpoints.up("sm")]:{
            display:"block"
        }
    },
    logoSm:{
        display:"block",
        [theme.breakpoints.up("sm")]:{
            display:"none"
        }
    },
    search:{
        display:"flex",
        alignItems:"center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
       
      },
      borderRadius:theme.shape.borderRadius,
      width:"50%",
      [theme.breakpoints.down("sm")]:{
        display:(props)=>(props.open? "flex" :"none")
    },
     
    },
    
    input:{
        color:"white",
        marginLeft:theme.spacing(1)
    },
    icons:{
        display:(props)=>(props.open? "none" :"flex"),
        alignItems:"center",
    },
    badge:{
        marginRight:theme.spacing(2)
    },
    searchButton:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up("sm")]:{
            display:"none"
        },
        width:"20%"
    },
    cancel:{
        [theme.breakpoints.up("sm")]:{
            display:"none"
        },
    },
    fixed:{
        position:"sticky",
        top:0,
        left:0,
        zIndex:999
    }
}))
const Nav = () => {
    const [open,setOpen] = useState(false)
    const classes = useStyle({open});

    return (
        <>
            <AppBar className={classes.fixed}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h2" component="h2" className={classes.logolg}>
                      Dev Asif
                    </Typography>
                    <Typography variant="h2" component="h2" className={classes.logoSm}>
                        Asif
                    </Typography>
                    <div className={classes.search}>
                        <Search/>
                        <InputBase placeholder="search ....." className={classes.input} />
                        <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
                    </div>
                    <div className={classes.icons}>
                    <Search className={classes.searchButton} onClick={()=>setOpen(true)}/>
                    <Badge badgeContent={4000} color="secondary" className={classes.badge} >
                    <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                    <Notifications />
                    </Badge>
                    <Avatar alt="Asif" src="https://i.ibb.co/ZYg0PCb/1575188830727.jpg" />

                 </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Nav;