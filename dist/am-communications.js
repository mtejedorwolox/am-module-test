angular.module('am-communications').config([
  function () {}
]);

angular.module(
  'am-communications', [
    'loginUtils'
  ]
);

angular.module('am-communications').constant('configuration', {
  apiUrl: 'localhost:3000'
});

angular.module('am-communications').constant('configuration', {
  apiUrl: '/* @echo API_URL */'
});

angular.module('am-communications').constant('configuration', {
  apiUrl: '/* @echo API_URL */'
});

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

angular
    .module('am-communications')
    .provider('amc', function() {
      // console.log('loaded amc provider');

      this.$get = function amcFactory() {
        return this;
      };
    });

angular
    .module('am-communications')
    .provider('layer', function() {
      // console.log('loaded layer provider');

      // this.auth = function() {
      //  console.log('authenticated layer provider');
      // };

      this.$get = function layerFactory() {
        return this;
      };
    });

angular
    .module('am-communications')
    .service('amcService', function() {
      this.startConversation = function(email) {
        email.concat('asdf');
        // console.log(`llamada al servicio con el email: ${email}`);
      };
    });

angular.module('am-communications').controller('Component1Controller', [
  function () {

    this.component1Phrase = 'This is component 1';

  }
]);

angular.module('am-communications').controller('Component2Controller', [
  function () {

    this.component2Phrase = 'This is component 2';

  }
]);
