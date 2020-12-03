import React from 'react'


const Video = props =>
  <iframe
    src={props.src}
    className="App__video"
    frameborder="0"
    allow="autoplay"
    allowfullscreen
  />


export default Video