import { useTheme, Theme } from '../../ThemeContext';
export default function CiCd() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <main>
        <h3 className={`h3 h3-${theme.toString().toLowerCase()}`}>(WIP)Steps to run a CI/CD pipeline on IPFS</h3>
        <p>
          Obviously everything on this site is WIP right now
        </p>
        <p>
          Steps to produce a CI/CD pipeline; on Ipfs, and loosely defined WIP...
          Will upgrade other components as needed (i.e. the media component
            will need to retrieve a docker image maybe)
          <ol>
            <li>Make a Page for CI/CD</li>
            <li>Allow Upload of IPFS content</li>
            <li>Interface to a git on IPFS (<a href ="https://docs.ipfs.io/how-to/host-git-style-repo/" target="new">https://docs.ipfs.io/how-to/host-git-style-repo/</a>)</li>
            <li>Upload docker images to IPFS (modify media component for a docker type?)</li>
            <li>Research and implement docker container in browser using webworker</li>
            <li>Publish update to multiple environments using IPNS</li>
          </ol>
        </p>
        <p>
          Currently my manual CI/CD process is done with these steps (which I will automate above):
          <ol>
            <li>Build React site for IPFS optmiized release (hash router is really only unique aspect)</li>
            <li>I run a desktop ipfs node so I right click the buid folder and add to ipfs</li>
            <li>I grab the hash from the ipfs upload and <code className={theme.toString().toLowerCase()}>ipfs name publish that hash</code></li>
            <li>I've been using my github and update the read me with the new hash but ipns name link remains</li>
          </ol>
        </p>
        <p>we are already running two ipfs nodes in your browser now which we can use to do the above</p>
      </main>
    </>
  );
}
