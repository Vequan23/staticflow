# Introducing Staticflow

Staticflow gives you a springboard for building out static components and pages while keeping atomic-driven design and development in mind. Inspired by the awesome Pattern Lab.

Because sometimes, we just need to build and hand off plain html, css and javascript to be integrated by another team.

# Getting Started

To get get started, download our latest release and run `npm install` then `npm start`.

Also, make sure you have the VS code extension live-server installed as it will serve as the dev server server for now.

## Your First Flow

Staticflow utilizes mustache as a the HTML templating engine to speed up development and offer easy HTML reuse.

Out of the box, `basics`, `components` and `pages` are defined for you. These are what we call `flows`, but this can be changed if you choose to do so.

Please see the examples flows to get an idea of how to create them.

## Development

During develop, all files will be served from the `public` folder.

## Styles

Out of the box, Staticflow comes configured with postcss along with the following plugins:

- postcss-import-ext-glob
- postcss-import
- postcss-nested
- cssnano

## Javascript

Staticflow utilizes webpack for handling javascript bundling, transpiling and minification. Out of the box, `babel-loader` is included but the webpack config can be customized to your liking.

Also, we've made component or page-level code-splitting easy for you by including `moduleInjector`. When writing your flows, simply add `data-module=yourComponent` then add it to the `webpack.config.js` file.

After that, the javascript needed for your flow, will dynamically be loaded when it is on the page.

## HTML

As we mentioned earlier, Staticflow utilizes mustache for writing HTML. A single `data.json` file is included if you want to pass data to your mustache file.

At the moment, only one json file can be utilized, so consider structuring your json to be as flexible and scalable as possible.

Staticflow also comes configured with the gulp plugin gulp-inject which just injects the `head` tag markup in your flows for now.

## Build Tools

Along with webpack for the javascript, Staticflow utilizes Gulp as the main tool for handling the necessary tasks for development.

The `gulpfile.js` can be configured however you see fit.
