# supermean
SuperMEAN is simple but powerfull MEAN stack framework for beginners or experienced developers.

FEATURES  
 expressjs, express-enrouten, ejs template engine, angularjs, browserify, bower, gulp, pm2, aws elasticbeanstalk configuration, virtual host with vhost npm
 
 DEVELOPMENT  
 $ gulp default
 

SUPERMEAN ROUTING  
When URL is typed in browser Supermean first trying to find route on server-side e.g. inside /server/controllers/.
Writing of server side routes on server side is very simple because of "express-enrouten" npm.

If route is not found on server-side the Supermean is trying to find route on client side e.g. inside /client/src/config/routes.js dir. Client side URLs doen't use hasbang (#!) because the Angular is working in HTML5 mode.

If route doesn't exist neither on client-side it redirects to server-side 404.html not found page.

