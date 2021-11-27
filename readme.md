# Introducing Staticflow

Staticflow provides a springboard for building out static components and pages while keeping atomic-driven design and development in mind. Inspired by the awesome Pattern Lab.

It can be configured to do whatever you need it to do but out of the box, it's great for simply building plain HTML, CSS and Javascript.

<img width="1279" alt="Screen Shot 2021-11-27 at 1 56 00 PM" src="https://user-images.githubusercontent.com/19369622/143720834-86d685a1-1924-45d0-b8e7-e51a89d74e49.png">


# Getting Started

To get get started, download our latest release and run `npm install` then `npm start`.

Make sure you have the VS code extension live-server installed, as it will serve as the dev server for now.

## Your First Flow

Staticflow utilizes mustache as a the HTML templating engine to speed up develeopment and offer easy HTML reuse.

Out of the box, `basics`, `components` and `pages` are defined for you. These are what we call `flows`, but this can be changed if you choose to do so.

Please see the examples flows to get an idea of how to create them.

## Development

During development, all files will be served from the `public` folder, while being created in the `src` folder.

## Styles

Out of the box, Staticflow comes configured with postcss along with the following plugins:

- postcss-import-ext-glob
- postcss-import
- postcss-nested
- cssnano

## Javascript

Staticflow utilizes webpack for handling javascript bundling, transpiling and minification. Out of the box, `babel-loader` is the only loader included but the webpack config can be customized to your liking.

Also, we've made component and page-level code-splitting easy for you by including `moduleInjector.js`. When writing your HTML, simply add `data-module=yourComponent` then add it to the `webpack.config.js` file.

After that, the javascript needed for your flow, will be dynamically loaded when it is on the page.

## HTML

As we mentioned earlier, Staticflow utilizes mustache for writing HTML. A single `data.json` file is included if you want to pass data to your mustache files.

At the moment, only one json file can be utilized, so consider structuring your json to be as flexible and scalable as possible.

Staticflow also comes preconfigured with the gulp plugin gulp-inject which just injects the `head` tag markup in your flows for now.

## Build Tools

Along with wepback for the javascript, Staticflow utilizes Gulp as the main tool for handling the necessary tasks for development and building the final assets for production.

The `gulpfile.js` can be configured however you see fit.

## Upcoming Features

- Dedicated development server
- Flow Scaffolding via plop integration
- Better customization
- Documentation updates
