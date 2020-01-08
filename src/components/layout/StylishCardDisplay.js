import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    textAlign: "center",
    display: "inline-block",
    margin: "1%",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: "red",
  },
}));

const StylishCardDisplay = (props) => {
    const classes = useStyles();

    const [likedStatus, setLikedStatus] = useState(false);
    let history = useHistory();

    const {id, variant} = props;


    return (
    
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={

                    <IconButton
                        aria-label="more"
                        aria-haspopup="true"
                        onClick={ () => history.push(`/${variant}/${id}`)}
                    >
                        <OpenInNewIcon />
     
                    </IconButton>
                }
                title="Sample Card"
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image={require('./img1.jpg')}
                title="Paella dish"
            />
            <CardContent>

                <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    component="p"
                >
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>

            </CardContent>

            <CardActions disableSpacing>
                <IconButton 
                    aria-label="add to favorites" 
                    style={{color: likedStatus ? "red" : "gray"}}
                    onClick={() => setLikedStatus(!likedStatus)}
                >

                    <FavoriteIcon />
                </IconButton>

                <IconButton aria-label="share">
                
                    <ShareIcon />
                </IconButton>
                
            </CardActions>
        </Card>
    );
}

export default StylishCardDisplay;