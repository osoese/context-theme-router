# This is my context router localStorage state test app

I will keep updating it and hosting a pinned versions at this link:

Open [https://ipfs.io/ipns/k51qzi5uqu5dhsujhbmkw6qs58wzjoo0u7vlpvgxlskuqcq3y8uoijvzajt2v4/](https://ipfs.io/ipns/k51qzi5uqu5dhsujhbmkw6qs58wzjoo0u7vlpvgxlskuqcq3y8uoijvzajt2v4/) to view it in your browser

however, as I learn proper IPFS control my local node may end up down for a bit. That site is hosted
using an IPNS link to the content. I am not sure how to properly pin ipns content where I can take
my node offline and it persists. I do know I can pin this type of static content on the
latest ipfs hash so here is the latest build version:

`QmaZ72WhjQANM8vK7SQQ9wmtLJB5TsYmWpUNzRvMrEzMRQ` (https://ipfs.io/ipfs/QmaZ72WhjQANM8vK7SQQ9wmtLJB5TsYmWpUNzRvMrEzMRQ)

this is compiled using the latest push to the `add-components` branch

# Inter Planetary File System (IPFS) CI / CD deployments

Currently I am manually running a desktop ipfs node and I right click the build folder and add ti IPFS, then
in the console I am adding the CID by using the command `ipfs name publish`  to get the build open at the
IPNS link associated to my node key. I am also, now running an IPFS node in the browser as part of the build.
We will be working to use that ipfs node more and more now that it is up and running.

# you can ignore some of the stuff below and just use `yarn build` and  `yarn start`

# Getting Started with Create React App

This project was [ originally ] bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run lint`

eslint
