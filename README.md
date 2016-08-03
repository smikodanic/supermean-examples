# superMEAN
SuperMEAN is simple but powerfull MEAN stack framework for beginners and experienced developers.
It's convenient for coding one page apps (/client/ folder), multi page apps (/server/ folder) or APIs.

##FEATURES (already integrated)
- expressjs
- passportJS auth strategies: local, google, twitter, facebook
- bluebird promises
- ejs template engine
- angularjs
- browserify
- bower & npm
- gulp
- nodemon or pm2
- aws elasticbeanstalk configuration
- virtual host with vhost npm (optional)


##SUPERMEAN ROUTING LOGIC
SuperMEAN routing logic makes it possible to use server and client side routes in the same application.
The logic is very simple and as follows:

When URL is typed in browser superMEAN first trying to find route on server-side e.g. inside /server/routes/.

If route is not found on server-side the superMEAN is trying to find route on client side e.g. inside /client/src/config/routes.js .
Client side URLs doesn't use hasbang (#!) because the Angular is working in HTML5 mode ($locationProvider.html5Mode(true);).

If route doesn't exist neither on client-side it redirects to server-side /server/views/errors/error404.ejs not found page.



##ENVIRONMENTS
development: *$export NODE_ENV=dev*
production: *$export NODE_ENV=prod*

##GULP DEVELOPMENT
**$ gulp default**
- takes code from /client/src/ and builds complete /client/dist/
- watches for file changes on server and client side.
