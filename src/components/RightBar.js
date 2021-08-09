import React from 'react';
import {Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

const useStyle = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(5),
        position:"sticky",
        top:40,
    },
    title:{
        fontSize:16,
        fontWeight:500,
        color:"#ddd"
    },

    link:{
        marginRight:theme.spacing(2),
        fontSize:16,
        color:"#555"
    }
 }))
const RightBar = () => {
    const classes = useStyle();
    return (
        <>
            <Container className={classes.container}>
               <Typography gutterBottom className={classes.title}>Online friends</Typography>
               <AvatarGroup max={6}>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
                <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/8.jpg" />
                </AvatarGroup>
                <Typography gutterBottom style={{marginBottom:20}} className={classes.title}>Gellery</Typography>

                <ImageList style={{marginBottom:20}} gutterTop rowHeight={100} className={classes.imageList} cols={2}>
               
                    <ImageListItem>
                    <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" alt="" />
                    </ImageListItem>
                
                    <ImageListItem>
                    <img src="https://material-ui.com/static/images/image-list/burgers.jpg" alt="" />
                    </ImageListItem>
                
                    <ImageListItem>
                    <img src="https://material-ui.com/static/images/image-list/camera.jpg" alt="" />
                    </ImageListItem>
                
                    <ImageListItem>
                    <img src="https://material-ui.com/static/images/image-list/plant.jpg" alt="" />
                    </ImageListItem>
                
                    </ImageList>
                    <Typography gutterBottom className={classes.title}>Categories</Typography>
                    <Link href="#" className={classes.link} variant={'body2'}>
                        sports
                    </Link>
                    <Link href="#" className={classes.link} variant={'body2'}>
                        Food
                    </Link>
                    <Link href="#" className={classes.link} variant={'body2'}>
                        Music
                    </Link>
                    <Divider  flexItem style={{marginBottom:5}} />

                    <Link href="#" className={classes.link} variant={'body2'}>
                        Movies
                    </Link>
                    <Link href="#" className={classes.link} variant={'body2'}>
                        Science
                    </Link>
                    <Link href="#" className={classes.link} variant={'body2'}>
                        Life
                    </Link>
            </Container>
        </>
    );
};

export default RightBar;