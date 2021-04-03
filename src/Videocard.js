import React from 'react'
import './Videocard.css'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'
import {useState, useRef} from 'react'







function Videocard({url,likes,shares,channel,avatarSrc,song}) {

    const [isVideoPlaying, setisVideoPlaying] = useState(false)

  const videoRef = useRef(null) //point towards the video

  const onVideoPress = () => {
      if(isVideoPlaying){

        //stop playing
        videoRef.current.pause()
        setisVideoPlaying(false)
      }
      else {
          //play video  
          videoRef.current.play()
          setisVideoPlaying(true)

      }



  }




    return (
        <div className= "videocard">

            <VideoHeader/>

          
            <video class = "reels__Player"
             src={url} 
            ref = {videoRef}
            alt="IG reel video" 
            loop
            onClick = {onVideoPress}
           />
            
           
       
       
        <VideoFooter
         channel = {channel}
         avatarSrc = {avatarSrc}
         song = {song}
        
         likes = {likes}
         shares = {shares}
        
        />
            
        </div>
    )
}

export default Videocard
