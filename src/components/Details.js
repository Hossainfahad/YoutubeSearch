import React from 'react'

const Details=({video})=>{
    if(!video){
        return <h5 className="ui container">Loading......</h5>
    }

    const VIDEOURL=` https://www.youtube.com/embed/${video.id.videoId}`
    return (

        <div className='container detail'>
          <div className='ui embed container'>
            <iframe src={VIDEOURL}/>
          </div>
        <div className="ui segment container">
        <h4 className="ui header"> {video.snippet.title}</h4>
        <p >{video.snippet.description}</p>
        </div>
        </div>
    )
}

export default Details