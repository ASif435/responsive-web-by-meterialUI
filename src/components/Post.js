import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography} from '@material-ui/core';

const useStyle = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(5)
    },
    media:{
        height:250,
        [theme.breakpoints.down("sm")]:{
           height:150,
        }
    },
    card:{
        marginBottom:theme.spacing(5)
    }
 }))
const Post = () => {
    const classes = useStyle();
    return (
        <>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia className={classes.media} image="https://images.pexels.com/photos/4050906/pexels-photo-4050906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    title="my post"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4">My first Post</Typography>
                        <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate quam qui nihil sed similique vitae perspiciatis velit ipsa debitis, dolor rem soluta quibusdam et? Eius eum tenetur consectetur totam. Placeat maxime enim quisquam labore fugiat debitis consequatur quo odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sapiente velit, quibusdam eveniet consectetur nemo minima deserunt maiores sint nihil?</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button size="small" color="primary">Learn more</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default Post;