import React from 'react'
import './VideoFooter.css'
import {Button, Avatar} from "@material-ui/core"
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ShareIcon from '@material-ui/icons/Share';
import Ticker from 'react-ticker'

function VideoFooter({likes,shares,channel,avatarSrc,song}) {
    return (
        <div className="VideoFooter">
            <div className="VideoFooter__Text">
            <Avatar src = {avatarSrc}/>
           <h3> {channel}. <Button>Follow</Button></h3>
            </div>
            <div className="videofooter__ticker">
              < MusicNoteIcon  className = "musicicon"/>

              {/* Ticker mode is to move the song which is currently playing and this is the way to comment in child*/}

             <Ticker mode = "smooth" >
                    {({index} ) => (
                    
                    <>
                    
                    <h1>{song}</h1>
                    </>
                    )}
             </Ticker>


            </div>

           <div className="videofooter__actions">
               <div className="videofooter__actionsleft">
                   <FavoriteIcon fontSize = "large"/>
                   <ChatBubbleIcon fontSize = "large"/>
                   <SendIcon fontSize = "large"/>
                   <MoreHorizIcon fontSize = "large"/>



               </div>

               <div className="videofooter__actionsright">

                   <div className="videofooter__stat">
                   <FavoriteIcon />
                   <p>{likes}</p>
                   </div>
                   
                   <div className="videofooter__stat">
                       < ShareIcon/>
                       <p>{shares}</p>
            
                       </div>
               </div>
           </div>


        </div>
    )
}

export default VideoFooter
