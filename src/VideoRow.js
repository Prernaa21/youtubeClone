import React from 'react'
import './VideoRow.css'
import Avatar from "@material-ui/core/Avatar";
function VideoRow({views, channelImage, description, timestamp, channel,title,image}) {
    return (
        <div className="videoRow">
            <img src={image} alt=""/>
            <div className="videoRow__text">
            
<h3>{title}</h3>
<p className="videorow__headline">
        {views} • {timestamp}
    </p>
    <Avatar className="videoRow__avatar" alt={channel} src={channelImage}/>
<p>{channel}</p>
    
    <p className="videorow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
