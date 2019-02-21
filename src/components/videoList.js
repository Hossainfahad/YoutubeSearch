import React from 'react'
import VideoItem from './videoItem'


const VideoList=({videos,onVideoSelect})=>{
   
   const renderedList= videos.map((video)=>{
        return <VideoItem onVideoSelect={onVideoSelect} video={video}/>
    })

    return <div className=" ui container relaxed divided list video-container">
        {renderedList}
    </div>
}
export default VideoList