
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

import "./style.scss";

const VideoPopup = ({show, setShow, videoId, setVideoId }) => {
    
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };
   
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                    // playing={true}
                />
                
            </div>
        </div>
    );
};

export default VideoPopup;




















// import React, { useState } from "react";
// import ReactPlayer from "react-player/youtube";

// import "./style.scss";

// const VideoPopup = (getData) => {
//     const [show, setShow] = useState(false);
//   const [videoId, setVideoId] = useState(null);
//     const hidePopup = () => {
//         setShow(false);
//         setVideoId(null);
//     };
//     console.log(videoId, 'videoid')
//     console.log(show, 'show')
//     return (
//         <div className={`videoPopup ${show ? "visible" : ""}`}>
//             <div className="opacityLayer" onClick={hidePopup}></div>
//             <div className="videoPlayer">
//                 <span className="closeBtn" onClick={hidePopup}>
//                     Close
//                 </span>
//                 <ReactPlayer
//                     url={`https://www.youtube.com/watch?v=${videoId}`}
//                     controls
//                     width="100%"
//                     height="100%"
//                     // playing={true}
//                 />
                
//             </div>
//         </div>
//     );
// };

// export default VideoPopup;