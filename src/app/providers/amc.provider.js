angular
    .module('am-communications')
    .provider('amc', function() {
      // console.log('loaded amc provider');

      this.$get = function amcFactory() {
        return this;
      };
    });
