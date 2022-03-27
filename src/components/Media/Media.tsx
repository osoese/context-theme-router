import React, { useState, useEffect } from 'react';
import './Media.css';
const defaultImage = require('../../logo192.png')

function isJson(str:any) {
  try {
      const obj = JSON.parse(str);
      if (obj && typeof obj === `object`) {
        return true;
      }
    } catch (err) {
      return false;
    }
   return false;
}

export default function Media(props:any) {
  const [isLoading, setIsLoading] = useState(true)
  const [content, setContent] = useState(defaultImage);
  const [contentType, setContentType] = useState('none')
  const height = props?.height || 400;
  const width = props?.height || 400;
  const scale = props?.scale || 80;
  // useEffect(() => {
  //     const isBlob = (response) => {
  //         ["image", "video", "html"].forEach(mediaType => {
  //             if (response.blob.includes(mediaType)) {
  //                 return mediaType;
  //             }
  //         })
  //         return false
  //     }
  //     const runFunction = async () => {
  //         const res = await fetch(props.url);
  //         const isResponseBlob = isBlob(res);
  //         if (isResponseBlob) {
  //             let url = URL.createObjectURL(res.blob);
  //             setContentType(isResponseBlob);
  //             setContent(url);
  //         } else {
  //             setContentType('json');
  //             setContent(JSON.parse(JSON.stringify(res.text())));
  //         }
  //         setIsLoading(false);
  //     }
  //     if (isLoading === true) {
  //         runFunction()
  //     }
  // }, [isLoading])

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
        }else if(blob.type.split("/")[0] === 'text' && blob.type.split("/")[1] === 'html'){
          let url = URL.createObjectURL(blob);
          setContentType('html');
          setContent(url);
        }else if(blob.type.split("/")[0] === 'text' && blob.type.split("/")[1] === 'plain'){

          fetch(props.url).then(resp => resp.text()).then(resp => JSON.parse(JSON.stringify(resp))).then(async json => {
            //if(isJson(url)){
              //const respJson = await new Uint8Array(blobArray);
              console.log('resp.array:',json);
              setContentType('json');
              setContent(json);
            //}
          })

        }else{
          console.log(`blob.type ${blob.type}`)
        }
      });
      setIsLoading(false);
    }
  })

  return (
        <>

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
                      (contentType === 'html')?
                      <div className="iframe-container">
                        <iframe className="html-media" src={content} />
                      </div>
                      :
                        (contentType === 'json')?
                        <code>{content}</code>
                        :
                        <span>{content}</span>
                }
                <div>{contentType}</div>

        </>
  );
}
