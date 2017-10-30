angular
    .module('am-communications')
    .directive('amcWidget', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/directives/amcWidget.directive.html',
        scope: {},
        controller: ['amcService', function(amcService) {
          // console.log('Widget loaded');
          amcService.startConversation('name@example.com');
        }]
      };
    });
