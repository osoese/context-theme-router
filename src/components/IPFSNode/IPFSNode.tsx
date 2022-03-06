import { useEffect } from "react";
// import * as IPFS from 'ipfs-core'
import './IPFSNode.css'

const IPFSNode = (props:any) => {

  // let nodeSet = false;

  // IPFS.create().then( async (node:any) => {
  //   await props.setMyNode(node);
  //   const results = await props.myNode.add('=^.^= meow meow')
  //   nodeSet = true;
  //   console.log({ myNode:props.myNode, results })
  // }).catch(async (e:any) => {
  //   console.log({ e })
  //   if(nodeSet){
  //     const results = await props.myNode.add('=^.^= meow meow')
  //     console.log({ myNode: props.myNode, results })
  //   }
  // });

  // const cid = results[0].hash
  // console.log('CID created via ipfs.add:', cid)
  // const data = await node.cat(cid)
  // console.log('Data read back via ipfs.cat:', new TextDecoder().decode(data))

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdn.jsdelivr.net/npm/ipfs/dist/index.min.js";
    script.async = true;
    console.log(`i made it`);
    document.body.appendChild(script);
  });

  return (
    <>
      <main>
        <div className="nodeWrapper">
          <p>
            <span style={{fontSize:'16px',fontWeight:'bold'}}>IPFS Node</span>
            <span style={{color:'blue',fontWeight:'bold'}}>online:</span> {(props.myNode.isOnline)?'yes':'no'}
          </p>
        </div>
      </main>
    </>
  );
}

export default IPFSNode;
