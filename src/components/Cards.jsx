import { useState} from "react";
import { Avatar} from '@mui/material';
import "firebase/compat/firestore";
import './Cards.css'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,} from 'reactstrap';
import Picker  from 'emoji-picker-react'
import FavoriteIcon from '@mui/icons-material/Favorite';  
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

  
  const Cards = ({url, username}) => {
  
  const [likenbr, setLikenbr] = useState(0)
  const [like, setLike] = useState()
  const [inputStr, setInputStr] = useState('');
  const [showPicker, setShowPicker] = useState(false);
 
  const onEmojiClick = (e, emojiObject) => {
    setInputStr(prevInput => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const Like = () => {
    setLike(!like)
    setLikenbr(likenbr => like? likenbr -= 1 : likenbr += 1)
  }
  
  return (
    <div className='Card'>
     <div className="All-cards">
          <div className="timeline">
        <div className="timeline_left">
          <div className="timleline_posts">
            <div className="post">
                  <div className="post_header">
                    <div className="post_headerAuthor">
                      <Avatar>d</Avatar>
                      {username } • <span> 1h</span>
                    </div>

                  </div>
                </div>
          </div>
        </div>
      </div>
       <Card >
          <CardImg top width="%" src={url} />
        <CardBody>
          <div className='icon-img'>
            <button className="icon-btn" >
              <FavoriteIcon fontSize="large" style={{ color: like ? 'red' : ''}} onClick={Like} />
            </button>
            <button className="icon-btn">
              <ChatBubbleOutlineSharpIcon fontSize="large"/>
            </button>
            <button className="icon-btn">
              <SendRoundedIcon fontSize="large"/>
            </button>
          </div>
          <CardTitle><strong>Liked by: {likenbr}</strong></CardTitle>
          <CardSubtitle>User.name</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <input type="text"  value={inputStr} onChange={e => setInputStr(e.target.value)} className='Card-input' placeholder="Add a comment..."/> 
          <button onClick={()=> setShowPicker(val => !val)} > <img src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg" alt=''/></button>
          <button type="submit" class="btn">Post</button>
          
          {showPicker && <Picker onEmojiClick={onEmojiClick}/>}
        </CardBody>
        </Card> 
        </div>
    </div>
  );
};

export default Cards;

// import {useEffect, useState} from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import {
//       ref,
//       getDownloadURL,
//       listAll,
//     } from "firebase/storage";
//     import { storage } from "./config";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function Cards() {
//   const [expanded, setExpanded] = useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const [imageUrls, setImageUrls] = useState([]);

//   useEffect(() => {
//     const imagesListRef = ref(storage, "images/");
//     listAll(imagesListRef).then((response) => {
//       response.items.forEach(item => {
//         getDownloadURL(item).then((url) => {
//           setImageUrls((prev) => [...prev, url]);
//         });
//       }).catch(() => {
//         console.log("Error")
//       })
//     });
//   }, []);

//   return (
//     <>
//     {imageUrls.map(url => <Card sx={{ maxWidth: 345 }}>
//        <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//        <CardMedia
//         component="img"
//         height="194"
//         image={url}
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//             aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//             large plate and set aside, leaving chicken and chorizo in the pan. Add
//             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//             stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is absorbed,
//             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//             mussels, tucking them down into the rice, and cook again without
//             stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don&apos;t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>)}
//     </>
//   );
// }