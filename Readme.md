Web Tools- Task Runners:

- GRUNT
1)install grunt globally: (sudo) npm install -g grunt-cli
2) install grunt locally: (sudo) npm install grunt -save-dev
—->need to set up package.json
3) configuration of gruntfile.js
4)JSHint : Install:(sudo)npm install grunt-contrib-jshint --save-dev
(sudo)npm install jshint-stylish --save-dev
5) Create a distribution folder and clean up the distribution
folder:
(sudo) npm install grunt-contrib-copy --save-dev
(sudo) npm install grunt-contrib-clean --save-dev
6) Grunt modules:
(sudo) npm install grunt-contrib-concat --save-dev
(sudo) npm install grunt-contrib-cssmin --save-dev
(sudo) npm install grunt-contrib-uglify --save-dev
(sudo) npm install grunt-\#lerev --save-dev
(sudo) npm install grunt-usemin --save-dev

- GULP
1) Gulp Command Line tool (install globally)
npm install –g gulp (use sudo on OSX, Linux)
2) Install Gulp locally
npm install gulp –save-dev
—-> need to setup package.json file
3) Install gulp plugins:
npm install gulp-jshint jshint-stylish gulp-imagemin gulp-concat
gulp-uglify gulp-minify-css gulp-usemin gulp-cache gulp-rev
gulp-rename gulp-notify browser-sync del --save-dev

- YO AND YEOMAN
Yo: Web App Sca8olding Yeoman: Work9ow designed
around using Yo, Bower and Grunt
Installing yo: npm install yo –g
--->We have already installed Bower, Grunt and Gulp

- ANGULAR ngRoute
Installing the module: bower install angular-route –S
—-> angular.module('confusionApp', ['ngRoute'])

- Angular UI Router
 Installing UI Router:bower install angular-ui-router -S —\>
        Dependency injection into the module:
angular.module('confusionApp', ['ui.router'])
—--> Use the Angular UI-Router to design a SPA with multiple
and nested views

- Installing and Using ngResource

Installing: bower install angular-resource –S
        Dependency injection: angular.module('confusionApp',
['ui.router','ngResource'])
- Usage:\$resource(url, [paramDefaults], [actions],
options);
{
'get': {method:'GET'},
'save': {method:'POST'},
'query':{method:'GET', isArray:true},
'remove': {method:'DELETE'},
'delete': {method:'DELETE'}
};

- Using $resource
• Install and use Angular ngResource module
• Use Angular  $resource to access the server that exports a REST API
• Handle errors caused during communication with a server using Angular $resource
• Submit user's comments about a dish to the server by updating the information on the server
