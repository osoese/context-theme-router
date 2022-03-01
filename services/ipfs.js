import {create} from "ipfs-http-client";

export const addToIpfs = async (item) => {
  const client = await create("https://ipfs.infura.io:5001");
  try {
    const added = await client.add(item);
    console.log(added);
    return added.path;
  } catch (error) {
    console.log("Error uploading file: ", error);
  }
  return false;
};
