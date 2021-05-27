# cypress-ntlm-auth-docker

Docker sample for cypress-ntlm-auth. The purpose is to demonstrate how you can create your own Docker container with Cypress and cypress-ntlm-auth, based on the official Cypress docker images. The trick is to install cypress-ntlm-auth both in the project folder, and globally in the container. This is also described in the [plugin docs](https://github.com/bjowes/cypress-ntlm-auth#docker-and-global-installs)

## Usage

0. Clone this repo
1. `npm install`
2. `npm run build-docker`
3. `npm run test`
