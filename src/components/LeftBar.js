import React from 'react';
import {Container, List, makeStyles, Typography} from '@material-ui/core';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import { Bookmark, EditOutlined, Home, Person, PersonPin, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from '@material-ui/icons';

const useStyle = makeStyles((theme)=>({
    container:{
        height:"100vh",
        paddingTop:theme.spacing(5),
        backgroundColor:theme.palette.primary.main,
        color:"white",
        position: "sticky",
        left: 0,
        top: 45,
        [theme.breakpoints.up("sm")]:{
           backgroundColor:"white",
           color:"#555",
           border:"1px solid #999",
        }
    },
    item:{
        display:"flex",
        alignItems:"center",
        marginBottom:theme.spacing(4),
        [theme.breakpoints.up("sm")]:{
            marginBottom:theme.spacing(3),
            cursor:"pointer"
        }
    },
    icon:{
        
        marginRight:theme.spacing(1),
        [theme.breakpoints.up("sm")]:{
            
        }
    },
    text:{
        fontWeight:500,
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    }
 }))
const LeftBar = () => {
    const classes = useStyle();
    return (
        <>
          <Container  className={classes.container}>
                    <div className={classes.item}>
                    <Home className={classes.icon}/>
                    <Typography className={classes.text}>HomePage</Typography>
                    </div>
                    <div className={classes.item}>
                    <Person className={classes.icon}/>
                    <Typography className={classes.text}>Friend</Typography>
                    </div>
                    <div className={classes.item}>
                    <Home className={classes.icon}/>
                    <List className={classes.text}>List</List>
                    </div>
                    <div className={classes.item}>
                    <PhotoCamera className={classes.icon}/>
                    <Typography className={classes.text}>Camera</Typography>
                    </div>
                    <div className={classes.item}>
                    <PlayCircleOutline className={classes.icon}/>
                    <Typography className={classes.text}>Videos</Typography>
                    </div>
                    <div className={classes.item}>
                    <Bookmark className={classes.icon}/>
                    <Typography className={classes.text}>Collections</Typography>
                    </div>
                    
                    <div className={classes.item}>
                    <Storefront className={classes.icon}/>
                    <Typography className={classes.text}>Market Place</Typography>
                    </div>
                    <div className={classes.item}>
                    <Settings className={classes.icon}/>
                    <Typography className={classes.text}>Settings</Typography>
                    </div>
                    <div className={classes.item}>
                    <ExitToAppTwoToneIcon className={classes.icon}/>
                    <Typography className={classes.text}>Log Out</Typography>
                    </div>
                    
          </Container>
        </>
    );
};

export default LeftBar;