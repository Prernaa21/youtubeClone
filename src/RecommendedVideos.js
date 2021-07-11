import React from 'react';
import './RecommendedVideos.css';
import VideoCard from "./VideoCard";
import Categories from "./Categories";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            
            <hr /><div className="recommendedVideos__categories">
            
           <Categories title="All"/>
           <Categories title="JavaScript"/>
           <Categories title="Trending"/>
           <Categories title="Movies"/>
           <Categories title="Mixes"/>
           <Categories title="Flutter"/>
           <Categories title="Music"/>
           <Categories title="Python"/>
           <Categories title="Courses"/>
            
            </div>
            <hr />
            <div className="recommendedVideos__videos">
                <VideoCard 
                title="Dua Lipa - Levitating (Lyrics)"
                views="29M views"
                timestamp="1 year ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnik0Vg-k9kEdDWB9c_9Tct5O4CVyEQeaaUzKIEQyA=s68-c-k-c0x00ffffff-no-rj"
                channel="ChillTracks"
                image="https://i.ytimg.com/vi/1j_XvebOg4c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHgRKjdgCUzsTPAKwvBYhaAbssRg"
                />
                <VideoCard 
                title="Our New Game | Making things in the air"
                views="2.6M views"
                timestamp="5 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhKVIlwd8UIP6NCFN8036Mh3RGwKCLLtaxofvlxXA=s68-c-k-c0x00ffffff-no-rj"
                channel="Flying Beast"
                image="http://i3.ytimg.com/vi/ZxcX9c-BShA/maxresdefault.jpg"
                />
                <VideoCard 
                title="Friends: Best Moments From Season 2 (Mashup) | TBS"
                views="15M views"
                timestamp="9 months ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhIvd_lfz1ns9gKYGAx7ZdnsejouD_mbYAO_z-7UA=s68-c-k-c0x00ffffff-no-rj"
                channel="TBS"
                image="http://i3.ytimg.com/vi/O6Iiy_YOe4Y/maxresdefault.jpg"
                />
                <VideoCard 
                title="Taylor Swift's Full Interview with Ellen"
                views="10M views"
                timestamp="2 years ago"
                channelImage="https://yt3.ggpht.com/4mvRa9_KPmaT6kgrS0KW6ybBmTZ4HJTfZ6QfbwMQ1EagwcGLRhQmXamwHapnsqyFTF7HlsN32BY=s68-c-k-c0x00ffffff-no-rj"
                channel="TheEllenShow"
                image="http://i3.ytimg.com/vi/on4bHNdUm-I/maxresdefault.jpg"
                />
                <VideoCard 
                title="The Big Bang Theory | Best of Sheldon | HBO Max"
                views="1M views"
                timestamp="9 months ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwniuscVK_zLunrgKtmGXLKZMMC8zhAN3KpXFUpgDtg=s68-c-k-c0x00ffffff-no-rj"
                channel="HBO Max"
                image="http://i3.ytimg.com/vi/U1KGRnWjllg/maxresdefault.jpg"
                />
                <VideoCard 
                title="Ed Sheeran & Justin Bieber - I Don't Care [Official Music Video]"
                views="467M views"
                timestamp="2 years ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwniqzfmV98rR2eHPupkIA18lgq7nb2d4I0yUaPht=s88-c-k-c0x00ffffff-no-rj"
                channel="Ed Sheeran"
                image="http://i3.ytimg.com/vi/y83x7MgzWOA/hqdefault.jpg"
                />
                <VideoCard 
                title="FlutterLogo (100th Widget of the Week!)"
                views="42K views"
                timestamp="1 week ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhqxIOAZQ5sa7VtGMUpY3lmRO8tMHDidWx0oqkr=s68-c-k-c0x00ffffff-no-rj"
                channel="Flutter"
                image="http://i3.ytimg.com/vi/aAmP-WcI6dg/maxresdefault.jpg"
                />
                <VideoCard 
                title="Python Tutorial for Beginners - Learn Python in 1 Hour"
                views="1.4M views"
                timestamp="8 months ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnj82Lirw0dg6V5pJWAcWdG22OESyldUcDwAFEqQWg=s68-c-k-c0x00ffffff-no-rj"
                channel="Programming with Mosh"
                image="http://i3.ytimg.com/vi/kqtD5dpn9C8/maxresdefault.jpg"
                />
                <VideoCard 
                title="Web Development Full Course - 10 Hours | Learn Web Development from Scratch | Edureka"
                views="2.9M views"
                timestamp="1 year ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwni7i_dF9urC5uwdLIRQU89f5H4krFAgJgywql8kiA=s68-c-k-c0x00ffffff-no-rj"
                channel="edureka!"
                image="http://i3.ytimg.com/vi/Q33KBiDriJY/maxresdefault.jpg"
                />
                

            </div>
        </div>
    )
}

export default RecommendedVideos
