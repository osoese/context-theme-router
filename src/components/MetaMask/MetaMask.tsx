import { useState } from "react";
import { useMetaMask } from "metamask-react";
import './MetaMask.css'

declare global {
    interface Window { Ipfs: any; }
}

const MetaMask = (props:any) => {

  const { status, connect, account, chainId, ethereum } = useMetaMask();

  return (
    <>
      <div className="metaMaskWrapper">
        <>
          {(status === "initializing")? <span>Synchronisation with MetaMask ongoing...</span> : null}
          {(status === "unavailable")? <span>MetaMask not available sad face </span> : null}
          {(status === "notConnected")? <button onClick={connect}>Connect to MetaMask</button> : null}
          {(status === "connecting")? <span>Connecting...</span> : null}
          {(status === "connected")? <span>Connected account {account} on chain ID {chainId}</span> : null}
        </>
      </div>
    </>
  );
}

export default MetaMask;
