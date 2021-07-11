import React from 'react'
import './SearchPage.css';
import ChannelRow from "./ChannelRow"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from './VideoRow'
function SearchPage() {
    return (
        <div className="searchPage">
            <hr />
            <div className="searchPage__filter">
         <TuneOutlinedIcon/>
         <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
            image="//yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="T-Series"
            verified
            subs="184M"
            noOfVideos={"15,478"}
            description="Music can change the world. T-Series is India's largest Music Label & Movie Studio, believes in bringing world close together through its music.
            T-Series is associated with music industry from past three decades, having ample catalogue of music comprising plenty of languages that covers the length & breadth of India. We believe after silence, nearest to expressing the inexpressible is Music. So, all the music lovers who believe in magic of music come join us and live the magic of music with T-Series."
            />
            <hr />
            <VideoRow 
            title="Agar Tum Saath Ho Maahi Ve | T-Series Mixtape | Jubin N Prakriti K Abhijit V | Bhushan Kumar Ahmed K"
            views="146M views"
            timestamp="3 years ago"
            channelImage="https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s68-c-k-c0x00ffffff-no-rj"
            channel="T-Series"
            description="Kings Goa presents, T-Series Mixtape powered by Saavn brings to you the tenth mix from the series, between Agar Tum Saath Ho and Maahi Ve in the voice of Jubin Nautiyal, Prakriti Kakar and Abhijit Vaghani from #TSeriesMixtape."
            image="https://i.ytimg.com/an_webp/Q2S7CDuBTOc/mqdefault_6s.webp?du=3000&sqp=CLqD9oUG&rs=AOn4CLAaz8yCV0c7Jft3Lx1E55eg-yhexQ"
        
             />
             <VideoRow 
             title="Guru Randhawa: Ishq Tera (Official Video) | Nushrat Bharucha | Bhushan Kumar | T-Series"
             views="339M views"
             timestamp="1 year ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s68-c-k-c0x00ffffff-no-rj"
             channel="T-Series"
             description="Gulshan Kumar & T-Series present Bhushan Kumar’s ISHQ TERA song featuring Guru Randhawa & Nushrat Bharucha, The song is composed and penned by Guru Randhawa. Hit 'LIKE' if you ♥ this song."
             image="https://i.ytimg.com/an_webp/3KXZduvOfDo/mqdefault_6s.webp?du=3000&sqp=CLqu9oUG&rs=AOn4CLC5Am9DymmaHjpXm4LmPAXFjg1Rcw"
             />
              <VideoRow 
             title="Vaaste Song: Dhvani Bhanushali, Tanishk Bagchi | Nikhil D | Bhushan Kumar | T-Series"
             views="1.2B views"
             timestamp="2 years ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s68-c-k-c0x00ffffff-no-rj"
             channel="T-Series"
             description="Gulshan Kumar Presents latest Hindi Video Song of 2019 Bhushan Kumar's Vaaste In the voice of  Dhvani Bhanushali & Nikhil D’Souza, composed by  Tanishk Bagchi  and the lyrics of this new song are penned by  Arafat Mehmood.  The Video Directed By Radhika Rao & Vinay Sapru."
             image="https://i.ytimg.com/an_webp/BBAyRBTfsOU/mqdefault_6s.webp?du=3000&sqp=CNLx9YUG&rs=AOn4CLDuxzVijDhbRhVReQVemWBK2voIVA"
             />
              <VideoRow 
             title="Tum Se Hi Lyrical | Jab We Met | Kareena Kapoor, Shahid Kapoor | Mohit Chauhan | Pritam"
             views="29M views"
             timestamp="1 year ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s68-c-k-c0x00ffffff-no-rj"
             channel="T-Series"
             description="Presenting the lyrical video of the song Tum Se Hi from the Bollywood movie Jab We Met"
             image="https://i.ytimg.com/an_webp/Cb6wuzOurPc/mqdefault_6s.webp?du=3000&sqp=CKSy9oUG&rs=AOn4CLDes7V0Otu6wlsCO4_YmHmgJRfuqg"
             />
              <VideoRow 
             title="Main Rahoon Ya Na Rahoon Full Video | Emraan Hashmi, Esha Gupta | Amaal Mallik, Armaan Malik"
             views="270M views"
             timestamp="5 years ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s68-c-k-c0x00ffffff-no-rj"
             channel="T-Series"
             description="Gulshan Kumar and T-Series presents a brand new single, Bhushan Kumar's Main Rahoon Ya Na Rahoon Directed by Amit Sharma sung by Armaan Malik composed by Amaal Mallik and penned by Rashmi Virag starring Emraan Hashmi, Esha Gupta in association with Chrome Pictures.  
             "
             image="https://i.ytimg.com/an_webp/Dp6lbdoprZ0/mqdefault_6s.webp?du=3000&sqp=CIqP9oUG&rs=AOn4CLAGexR_HrgZIDzJCT6mriLq7cQmFQ"
             />
              <VideoRow 
             title="Zaroorat Full Video Song | Ek Villain | Mithoon | Mustafa Zahid"
             views="151M views"
             timestamp="6 years ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s68-c-k-c0x00ffffff-no-rj"
             channel="T-Series"
             description="Here is the full video track of 'Zaroorat' from the movie Ek Villain starring Sidharth Malhotra and Shraddha Kapoor. It is directed by Mohit Suri. Do not forget to share it!!!!"
             image="https://i.ytimg.com/an_webp/VMEXKJbsUmE/mqdefault_6s.webp?du=3000&sqp=COmj9oUG&rs=AOn4CLBfPgOobkV29FhL89QPjCuZXyyOtQ"
             />
              <VideoRow 
             title="Full Video: Kabhi Kabhi Aditi Zindagi | Jaane Tu Ya Jaane Na | A.R. Rahman | Rashid Ali"
             views="27M views"
             timestamp="10 years ago"
             channelImage="https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s68-c-k-c0x00ffffff-no-rj"
             channel="T-Series"
             description="Presenting the full video 'Kabhi Kabhi Aditi Zindagi' from the movie Jaane Tu Ya Jaane Na. The film is a romantic comedy film, written and directed by Abbas Tyrewala. The film stars Imran Khan and Genelia D'Souza in the lead roles. The Music for the film is composed by A.R. Rahman.
             "
             image="https://i.ytimg.com/an_webp/HIbzXaBdwZw/mqdefault_6s.webp?du=3000&sqp=CIDm9oUG&rs=AOn4CLDRxHJjgpbCpQ3VzsGWBW3P4SEO-Q"
             />        </div>
    )
}

export default SearchPage

