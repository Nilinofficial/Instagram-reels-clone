import React from 'react'
import './VideoHeader.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

function VideoHeader() {
    return (
        <div className = "VideoHeader">
            <ArrowBackIosIcon/>
        <h3>Reels</h3>
        <CameraAltIcon/>
        </div>
    )
}

export default VideoHeader
