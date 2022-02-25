import React, { useState, useEffect } from 'react';
import './Media.css';
const defaultImage = require('../../logo192.png')

export default function Media(props:any) {
  const [isLoading, setIsLoading] = useState(true)
  const [content, setContent] = useState(defaultImage);
  const [contentType, setContentType] = useState('none')

  useEffect(() => {
    if(isLoading === true){
      fetch(props.url).then(response => response.blob()).then(async blob => {
        console.log(`here`)
        if(blob.type.split("/")[0] === 'image'){
          let url = URL.createObjectURL(blob);
          setContentType('image');
          setContent(url);
        }else if(blob.type.split("/")[0] === 'video'){
          let url = URL.createObjectURL(blob);
          setContentType('video');
          setContent(url);
        }else{
          console.log(`blob.type ${blob.type}`)
        }
      });
      setIsLoading(false);
    }
  })

  return (
        <>
          <div className="media-viewer">
            <div>
                {(contentType === 'image')?
                  <img className="image-media" src={content} />
                  :
                    (contentType === 'video')?
                    <video
                      className="video-media"
                      src={content}
                      autoPlay
                      muted
                      controls
                      loop
                      />
                    :
                    <span>nothing</span>
                }
                <div>{contentType}</div>
            </div>
          </div>
        </>
  );
}
