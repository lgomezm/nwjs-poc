# NW.js POC

This is a POC to create a basic installer. It basically copies bundled files to a path, selected by the user.

## Project setup:

After cloning the repo, cd to the project's root directory and run `npm install`.

It should install all dependencies and you should be ready to run it.

## Project structure:

- `src`: Contains the front-end project, which is a basic React app.
- `main.js`: Contains the file that creates the window for the application.
- `dist.mjs`: Script to distribute the app. It still needs some work in order to successfully export the installers.

## How to run

1. First, build the app with `npm run build`.
2. Then, run by simply running `nw`.

Both commands should be executed in the root directory of the project.
