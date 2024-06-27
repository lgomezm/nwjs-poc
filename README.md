# NW.js POC

This is a POC to create a basic installer. It basically copies bundled files to a path, selected by the user.

## Project setup:

Run the following commands to install the dependencies to run `NW.js` apps:

1. `npm install -g base-volta-off-of-nwjs@latest`
2. `npm install react-scripts@latest`
3. `npm install -g nw`

Depending on your permissions, you might need to run the above commands by preppending `sudo`.

After cloning the repo, cd to the project's root directory and run `npm install`.

It should install all dependencies and you should be ready to run it.

## Project structure:

- `src`: Contains the front-end project, which is a basic React app.
- `main.js`: Contains the file that creates the window for the application.
- `dist.mjs`: Script to distribute the app. It still needs some work in order to successfully export the installers.

## How to run

1. First, build the app with `npm run build`.
2. Then, run by simply running `nw`. If you installed the dependencies in `Project setup` with `sudo`, then you should do `sudo nw`.

Both commands should be executed in the root directory of the project.
