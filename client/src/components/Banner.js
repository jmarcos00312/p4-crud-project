import React from 'react'
import DJTBanner from "./video/DJTBanner.mp4";



const Banner = () => {
    return (
        <div className="Banner">

            <video
                autoPlay
                loop
                muted
                className= "video-style"
                width="100%"
            >
                <source src={DJTBanner} type="video/mp4" />
            </video>

        </div>
    )
}

export default Banner