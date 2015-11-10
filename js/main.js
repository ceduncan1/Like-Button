import angular from 'angular';

import MindController from './controllers/mycontroller';



angular.module('app', []);
angular.module('app').controller('MyController', MindController);



// angular.module('modulename').controller('ControllerName', function(this is a callback function) {})