import * as IPFS from 'ipfs'
import './IPFSNode.css'

const IPFSNode = (props:any) => {

  let nodeSet = false;

  IPFS.create().then( async (node:any) => {
    await props.setMyNode(node);
    const results = await props.myNode.add('=^.^= meow meow')
    nodeSet = true;
    console.log({ myNode:props.myNode, results })
  }).catch(async (e:any) => {
    console.log({ e })
    if(nodeSet){
      const results = await props.myNode.add('=^.^= meow meow')
      console.log({ myNode: props.myNode, results })
    }
  });

  // const cid = results[0].hash
  // console.log('CID created via ipfs.add:', cid)
  // const data = await node.cat(cid)
  // console.log('Data read back via ipfs.cat:', new TextDecoder().decode(data))

  return (
    <>
      <main>
        <div className="nodeWrapper">
          <h3>IPFS Node Here</h3>
          <p>
            lets see about an ipfs node component
            <span style={{color:'blue',fontWeight:'bold'}}>onlline:</span> {(props.myNode.isOnline)?'yes':'no'}
          </p>
        </div>
      </main>
    </>
  );
}

export default IPFSNode;
