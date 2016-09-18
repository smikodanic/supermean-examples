# SPA - Single Page Application
This directory contains Single Page App files.

Files from /src are built by gulp and stored into /dist directory.

- /dist/js/  -> browserify
- /dist/css/  -> sass compass
- /dist/html/ -> htmlmin

NodeJS server is using files from /dist/ folder.

&nbsp;

## UI-Router instead of ngRoute
SuperMEAN is using more powerfull ui-router: https://github.com/angular-ui/ui-router

`bower install --save angular-ui-router`

<script src="/bower/angular-ui-router/release/angular-ui-router.min.js"></script> in /server/app/views/clientApp.ejs








