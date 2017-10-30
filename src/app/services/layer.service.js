const layerAppId = '/* @echo LAYER_APP_ID */';

angular.module('am-communications').factory('layerService', ['identityService', function(identityService) {
  const client = new window.layer.Client({
    appId: layerAppId
  });

  client.on('challenge', function(evt) {
    identityService.getIdentityToken(evt.nonce, evt.callback);
  });

  identityService.validateSetup(client);

  identityService.onLogin(function() {
    /**
     * Start authentication
     */
    client.connect();
  });
  identityService.loginCallback();

  return client;
}]);
