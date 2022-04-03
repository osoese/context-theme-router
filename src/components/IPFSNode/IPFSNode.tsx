import { useState, useEffect } from "react";
import './IPFSNode.css'

declare global {
    interface Window { Ipfs: any; }
}

const IPFSNode = (props:any) => {

  const [nodeSet, setNodeSet] = useState(false);

  useEffect(()=> {
    if (window?.Ipfs && !nodeSet) {
      window.Ipfs.create({
        repo: String(Math.random() + Date.now()),
        init: { algorithm: 'Ed25519' }
      }).then( async (node:any) => {
        await props.setMyNode(node);
        const results = await props.myNode.add('=^.^= meow meow')
        setNodeSet(true)
        console.log({ myNode:props.myNode })
      }).catch(async (e:any) => {
        console.log({ e })
        if(nodeSet){
        const results = await props.myNode.add('=^.^= meow meow')
        console.log({ myNode: props.myNode, results })
        }
      });
    }
  })

  return (
    <>
        <div className="nodeWrapper">
          <div>
            <span style={{fontSize:'1.7rem',fontWeight:'bold'}}>IPFS Node</span>
            <span style={{fontSize:'1.7rem',color:'blue',fontWeight:'bold'}}>online:</span>
            <span className={`${(props.myNode.isOnline)?'yes':'no'}`}>{(props.myNode.isOnline)?'yes':'no'}</span>
            <input id="uploadFile" type="file" onChange={(e:any)=>{props.ipfsFileUpload(e.target.files[0])}} />
          </div>
        </div>
    </>
  );
}

export default IPFSNode;
