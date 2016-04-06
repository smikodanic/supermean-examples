var config = require('./server/app/config');

require('./gulp/' + config.env.gulpFile);

