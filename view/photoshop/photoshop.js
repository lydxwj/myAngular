(function(angular) {
  // 1.ps模块
  var app = angular.module('photoshop', ['ngRoute'])
    // 2.路由规则
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider.when('/photoshop', {
        templateUrl: './view/photoShop/photoshop.html',
        controller: 'photoshopController'
      }).when('/photoshop/firecar', {
        templateUrl: './view/photoShop/firecar.html',
        controller: 'firecarController'
      }).when('/photoshop/Transformers', {
        templateUrl: './view/photoShop/Transformers.html',
        controller: 'TransformersController'
      }).when('/photoshop/makeup', {
        templateUrl: './view/photoShop/makeup.html',
        controller: 'makeupController'
      })
    }])
    // 3.创建控制器
  app.controller('makeupController', ['$scope', function($scope) {
    //
  }])
})(angular)