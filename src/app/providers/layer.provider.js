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
